"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Calendar, Clock, User, Ticket, Star, Gift, AlertCircle } from "lucide-react";
import { EventWithDetails } from "@/types/event.type";
import { TicketSelection } from "@/types/checkout.type";
import { useCreateTransaction } from "@/hooks/api/useTransactions";
import { useAuth } from "@/contexts/AuthContext";
import { isEventExpired, getEventStatus, formatEventDate } from "@/utils/event.utils";

interface EventCheckoutProps {
  event: EventWithDetails;
  ticketSelections: TicketSelection[];
  isAuthenticated: boolean;
  onLoginRequired: () => void;
}

export default function EventCheckout({ event, ticketSelections, isAuthenticated, onLoginRequired }: EventCheckoutProps) {
  const createTransactionMutation = useCreateTransaction();
  const { user } = useAuth();
  
  // State untuk points dan voucher
  const [pointsToUse, setPointsToUse] = useState(0);
  const [voucherCode, setVoucherCode] = useState("");
  const [couponCode, setCouponCode] = useState("");

  const getTotalPrice = () => {
    return ticketSelections.reduce((total, selection) => {
      const ticketType = event.ticketTypes?.find(t => t.id === selection.ticketTypeId);
      return total + (ticketType?.price || 0) * selection.quantity;
    }, 0);
  };

  const getTotalQuantity = () => {
    return ticketSelections.reduce((total, selection) => total + selection.quantity, 0);
  };

  const getDiscountAmount = () => {
    const pointsDiscount = pointsToUse * 1000; // 1 point = Rp 1,000
    // TODO: Calculate voucher/coupon discount based on backend response
    return pointsDiscount;
  };

  const getFinalPrice = () => {
    const totalPrice = getTotalPrice();
    const discount = getDiscountAmount();
    return Math.max(0, totalPrice - discount);
  };

  const handleCheckout = async () => {
    // 🔒 AUTH CHECK: Cek apakah user sudah login
    if (!isAuthenticated) {
      onLoginRequired();
      return;
    }

    if (ticketSelections.length === 0) {
      return;
    }

    // 🚫 EXPIRED EVENT CHECK: Cek apakah event sudah expired
    if (isEventExpired(event)) {
      alert('Maaf, event ini sudah berakhir dan tidak dapat dibeli lagi.');
      return;
    }

    try {
      // Create transaction for each ticket selection (same as EventDetailPage)
      const transactionPromises = ticketSelections.map(selection => {
        const transactionData: any = {
          ticketTypeId: selection.ticketTypeId,
          quantity: selection.quantity,
          pointsUsed: pointsToUse || 0,
        };

        // Only add couponCode if it's not empty
        if (couponCode && couponCode.trim() !== '') {
          transactionData.couponCode = couponCode.trim();
        }

        // Only add voucherCode if it's not empty
        if (voucherCode && voucherCode.trim() !== '') {
          transactionData.voucherCode = voucherCode.trim();
        }

        console.log('Sending transaction data:', transactionData);

        return createTransactionMutation.mutateAsync({
          eventId: event.id,
          data: transactionData
        });
      });

      const transactions = await Promise.all(transactionPromises);
      
      // Debug: Log transaction response structure
      console.log('Transaction response:', transactions[0]);
      console.log('Transaction data:', transactions[0]?.data);
      
      // Get first transaction for redirect to payment
      const firstTransaction = transactions[0];
      
      // Check if transaction data exists
      if (!firstTransaction?.data?.id) {
        throw new Error('Failed to create transaction - no ID returned');
      }
      
      // Redirect to payment page with transaction ID
      window.location.href = `/payment?transactionId=${firstTransaction.data.id}`;
      
    } catch (error) {
      console.error('Checkout failed:', error);
      // TODO: Show error toast/message to user
    }
  };

  const eventStatus = getEventStatus(event);
  const isExpired = isEventExpired(event);

  return (
    <div className="sticky top-8">
      <Card className="p-6">
        <CardContent className="p-0">
          {/* Event Status Alert */}
          {isExpired && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-2 text-red-700">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Event Sudah Berakhir</span>
              </div>
              <p className="text-xs text-red-600 mt-1">
                Event ini sudah berakhir pada {formatEventDate(event.endDate)}
              </p>
            </div>
          )}

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
            <div className="flex items-center space-x-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                eventStatus === 'upcoming' ? 'bg-green-100 text-green-700' :
                eventStatus === 'ongoing' ? 'bg-blue-100 text-blue-700' :
                'bg-red-100 text-red-700'
              }`}>
                {eventStatus === 'upcoming' ? 'Akan Datang' :
                 eventStatus === 'ongoing' ? 'Sedang Berlangsung' :
                 'Sudah Berakhir'}
              </span>
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
                    <span>Rp {(ticketType?.price || 0) * selection.quantity}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Points & Voucher Section */}
          {isAuthenticated && user && (
            <div className="border-t pt-4 mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Apply Discounts</h4>
              
              {/* Points Section */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <Label htmlFor="points" className="text-sm font-medium">
                    Use Points ({user.points || 0} available)
                  </Label>
                </div>
                <div className="flex gap-2">
                  <Input
                    id="points"
                    type="number"
                    min="0"
                    max={user.points || 0}
                    value={pointsToUse}
                    onChange={(e) => setPointsToUse(parseInt(e.target.value) || 0)}
                    placeholder="Enter points to use"
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setPointsToUse(user.points || 0)}
                    disabled={!user.points}
                  >
                    Use All
                  </Button>
                </div>
                {pointsToUse > 0 && (
                  <p className="text-xs text-green-600">
                    -Rp {(pointsToUse * 1000).toLocaleString('en-US')} discount
                  </p>
                )}
              </div>

              {/* Voucher Section */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-purple-500" />
                  <Label htmlFor="voucher" className="text-sm font-medium">
                    Voucher Code
                  </Label>
                </div>
                <Input
                  id="voucher"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                  placeholder="Enter voucher code"
                  className="w-full"
                />
              </div>

              {/* Coupon Section */}
              <div className="space-y-3 mb-4">
                <Label htmlFor="coupon" className="text-sm font-medium">
                  Coupon Code
                </Label>
                <Input
                  id="coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="w-full"
                />
              </div>
            </div>
          )}

          <div className="border-t pt-4 mb-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="text-sm">Rp {getTotalPrice().toLocaleString('en-US')}</span>
              </div>
              {getDiscountAmount() > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-600">Discount</span>
                  <span className="text-sm text-green-600">-Rp {getDiscountAmount().toLocaleString('en-US')}</span>
                </div>
              )}
              <div className="flex justify-between items-center border-t pt-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold text-lg">Rp {getFinalPrice().toLocaleString('en-US')}</span>
              </div>
            </div>
          </div>

          {/* 🔒 AUTH CHECK: Show different states based on authentication */}
          {!isAuthenticated ? (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <User className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-blue-700">
                  Please <button 
                    onClick={onLoginRequired}
                    className="underline font-medium hover:text-blue-800"
                  >
                    login
                  </button> to purchase tickets
                </span>
              </div>
              <Button 
                onClick={onLoginRequired}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Login to Checkout
              </Button>
            </div>
          ) : (
            <Button 
              onClick={handleCheckout}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              disabled={getTotalQuantity() === 0 || createTransactionMutation.isPending || isExpired}
            >
              {createTransactionMutation.isPending 
                ? "Creating Order..." 
                : isExpired
                  ? "Event Sudah Berakhir"
                  : getTotalQuantity() === 0 
                    ? "Select Tickets First" 
                    : "Checkout"
              }
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}