"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Ticket, Loader2 } from "lucide-react";
import { EventWithDetails, TicketSelection } from "@/types/event.type";
import { useCreateTransaction } from "@/hooks/api/useTransactions";
import { usePromotionSummary, usePriceCalculation } from "@/hooks/api/usePromotions";
import { useValidateVoucher } from "@/hooks/api/useVouchers";
import { useValidateCoupon } from "@/hooks/api/useCoupons";
import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

// Promotion Components
import PromotionInput from "@/components/checkout/PromotionInput";
import PointsSelector from "@/components/checkout/PointsSelector";
import DiscountSummary from "@/components/checkout/DiscountSummary";

import type { PriceCalculation } from "@/types/promotion.type";

interface EventCheckoutProps {
  event: EventWithDetails;
  ticketSelections: TicketSelection[];
}

export default function EventCheckout({ event, ticketSelections }: EventCheckoutProps) {
  const router = useRouter();
  const { user } = useAuthContext();
  
  // Promotion state
  const [voucherCode, setVoucherCode] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [pointsToUse, setPointsToUse] = useState(0);
  const [priceCalculation, setPriceCalculation] = useState<PriceCalculation | null>(null);
  
  // Validation state
  const [voucherValidation, setVoucherValidation] = useState<{
    isValid: boolean;
    message: string;
    isLoading: boolean;
  }>({ isValid: false, message: "", isLoading: false });
  
  const [couponValidation, setCouponValidation] = useState<{
    isValid: boolean;
    message: string;
    isLoading: boolean;
  }>({ isValid: false, message: "", isLoading: false });

  // Hooks
  const createTransactionMutation = useCreateTransaction();
  const { data: promotionSummary } = usePromotionSummary(event.id, user?.points || 0);
  const { calculatePrice } = usePriceCalculation();
  const { validateVoucher } = useValidateVoucher();
  const { validateCoupon } = useValidateCoupon();

  const getTotalPrice = () => {
    return ticketSelections.reduce((total, selection) => {
      const ticketType = event.ticketTypes?.find(t => t.id === selection.ticketTypeId);
      return total + (ticketType?.price || 0) * selection.quantity;
    }, 0);
  };

  const getTotalQuantity = () => {
    return ticketSelections.reduce((total, selection) => total + selection.quantity, 0);
  };

  // Calculate price with promotions
  const recalculatePrice = async () => {
    if (getTotalQuantity() === 0) {
      setPriceCalculation(null);
      return;
    }

    const ticketData = ticketSelections.map(selection => {
      const ticketType = event.ticketTypes?.find(t => t.id === selection.ticketTypeId);
      return {
        ticketTypeId: selection.ticketTypeId,
        quantity: selection.quantity,
        price: ticketType?.price || 0,
      };
    });

    try {
      const calculation = await calculatePrice({
        eventId: event.id,
        ticketSelections: ticketData,
        voucherCode: voucherCode || undefined,
        couponCode: couponCode || undefined,
        pointsUsed: pointsToUse,
      });

      setPriceCalculation(calculation);
    } catch (error) {
      console.error("Error calculating price:", error);
    }
  };

  // Voucher validation
  const handleApplyVoucher = async () => {
    if (!voucherCode) return;
    
    setVoucherValidation(prev => ({ ...prev, isLoading: true }));
    
    try {
      const result = await validateVoucher({
        voucherCode,
        eventId: event.id,
      });
      
      setVoucherValidation({
        isValid: result.success,
        message: result.message,
        isLoading: false,
      });
      
      if (result.success) {
        recalculatePrice();
      }
    } catch (error) {
      setVoucherValidation({
        isValid: false,
        message: "Failed to validate voucher",
        isLoading: false,
      });
    }
  };

  // Coupon validation
  const handleApplyCoupon = async () => {
    if (!couponCode) return;
    
    setCouponValidation(prev => ({ ...prev, isLoading: true }));
    
    try {
      const result = await validateCoupon({
        couponCode,
      });
      
      setCouponValidation({
        isValid: result.success,
        message: result.message,
        isLoading: false,
      });
      
      if (result.success) {
        recalculatePrice();
      }
    } catch (error) {
      setCouponValidation({
        isValid: false,
        message: "Failed to validate coupon",
        isLoading: false,
      });
    }
  };

  // Remove promotion
  const handleRemovePromotion = (type: string, code?: string) => {
    if (type === "voucher") {
      setVoucherCode("");
      setVoucherValidation({ isValid: false, message: "", isLoading: false });
    } else if (type === "coupon") {
      setCouponCode("");
      setCouponValidation({ isValid: false, message: "", isLoading: false });
    } else if (type === "points") {
      setPointsToUse(0);
    }
    recalculatePrice();
  };

  // Handle checkout
  const handleCheckout = async () => {
    if (!user) {
      router.push("/auth/login");
      return;
    }

    if (getTotalQuantity() === 0) return;

    try {
      // Create transaction for each ticket selection
      for (const selection of ticketSelections) {
        const transactionData = {
          ticketTypeId: selection.ticketTypeId,
          quantity: selection.quantity,
          pointsUsed: pointsToUse,
          couponCode: couponCode || undefined,
          voucherCode: voucherCode || undefined,
        };

        const response = await createTransactionMutation.mutateAsync({
          eventId: event.id,
          transactionData,
        });

        // Redirect to payment page with transaction ID
        if (response.data) {
          router.push(`/payment?transactionId=${response.data.id}`);
          return;
        }
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  // Recalculate when promotions change
  useEffect(() => {
    if (getTotalQuantity() > 0) {
      recalculatePrice();
    }
  }, [pointsToUse, voucherCode, couponCode, ticketSelections]);

  const originalAmount = getTotalPrice();
  const finalAmount = priceCalculation?.finalAmount ?? originalAmount;
  const totalDiscount = priceCalculation?.totalDiscount ?? 0;
  const maxUsablePoints = Math.min(user?.points || 0, originalAmount);

  return (
    <div className="sticky top-8 space-y-4">
      {/* Event Info Card */}
      <Card className="p-6">
        <CardContent className="p-0">
          <h3 className="text-lg font-semibold mb-4">{event.title}</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">{event.location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">
                {new Date(event.startDate).toLocaleDateString("id-ID")} - {new Date(event.endDate).toLocaleDateString("id-ID")}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">{event.time}</span>
            </div>
          </div>

          {getTotalQuantity() === 0 ? (
            <div className="flex items-center space-x-2 mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <Ticket className="w-5 h-5 text-orange-500" />
              <span className="text-sm text-orange-700">
                You haven't selected any tickets. Please choose one first in the <strong>Tickets</strong> tab.
              </span>
            </div>
          ) : (
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Selected tickets:</p>
              {ticketSelections.map((selection) => {
                const ticketType = event.ticketTypes?.find(t => t.id === selection.ticketTypeId);
                return (
                  <div key={selection.ticketTypeId} className="flex justify-between text-sm mb-1">
                    <span>{ticketType?.name} x{selection.quantity}</span>
                    <span>Rp {((ticketType?.price || 0) * selection.quantity).toLocaleString()}</span>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Promotion Components - Only show when tickets are selected */}
      {getTotalQuantity() > 0 && (
        <>
          {/* Points Selector */}
          {user && (
            <PointsSelector
              availablePoints={user.points || 0}
              pointsToUse={pointsToUse}
              maxUsablePoints={maxUsablePoints}
              onPointsChange={setPointsToUse}
              pointsExpiry={user.pointsExpiry}
            />
          )}

          {/* Promotion Input */}
          <PromotionInput
            voucherCode={voucherCode}
            couponCode={couponCode}
            onVoucherChange={setVoucherCode}
            onCouponChange={setCouponCode}
            onApplyVoucher={handleApplyVoucher}
            onApplyCoupon={handleApplyCoupon}
            voucherValidation={voucherValidation}
            couponValidation={couponValidation}
            availableVouchers={promotionSummary?.availableVouchers || []}
            availableCoupons={promotionSummary?.availableCoupons || []}
          />

          {/* Discount Summary */}
          {priceCalculation && priceCalculation.appliedPromotions.length > 0 && (
            <DiscountSummary
              originalAmount={originalAmount}
              appliedPromotions={priceCalculation.appliedPromotions}
              totalDiscount={totalDiscount}
              finalAmount={finalAmount}
              onRemovePromotion={handleRemovePromotion}
            />
          )}
        </>
      )}

      {/* Checkout Card */}
      <Card className="p-6">
        <CardContent className="p-0">
          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-semibold">
                {totalDiscount > 0 ? "Final Amount" : "Total Price"}
              </span>
              <span className="font-semibold text-lg text-orange-600">
                Rp {finalAmount.toLocaleString()}
              </span>
            </div>
            {totalDiscount > 0 && (
              <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                <span>Original: Rp {originalAmount.toLocaleString()}</span>
                <span className="text-green-600">Save: Rp {totalDiscount.toLocaleString()}</span>
              </div>
            )}
          </div>

          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            disabled={getTotalQuantity() === 0 || createTransactionMutation.isPending}
            onClick={handleCheckout}
          >
            {createTransactionMutation.isPending ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </div>
            ) : (
              `Checkout - Rp ${finalAmount.toLocaleString()}`
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
