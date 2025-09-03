"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ticket, Tag, CheckCircle, XCircle, Loader2 } from "lucide-react";

interface PromotionInputProps {
  voucherCode: string;
  couponCode: string;
  onVoucherChange: (code: string) => void;
  onCouponChange: (code: string) => void;
  onApplyVoucher: () => void;
  onApplyCoupon: () => void;
  voucherValidation?: {
    isValid: boolean;
    message: string;
    isLoading: boolean;
  };
  couponValidation?: {
    isValid: boolean;
    message: string;
    isLoading: boolean;
  };
  availableVouchers?: Array<{
    code: string;
    discountValue: number;
  }>;
  availableCoupons?: Array<{
    code: string;
    discountValue: number;
  }>;
}

export default function PromotionInput({
  voucherCode,
  couponCode,
  onVoucherChange,
  onCouponChange,
  onApplyVoucher,
  onApplyCoupon,
  voucherValidation,
  couponValidation,
  availableVouchers = [],
  availableCoupons = [],
}: PromotionInputProps) {
  const [showVouchers, setShowVouchers] = useState(false);
  const [showCoupons, setShowCoupons] = useState(false);

  const getValidationIcon = (validation?: { isValid: boolean; isLoading: boolean }) => {
    if (!validation) return null;
    if (validation.isLoading) return <Loader2 className="w-4 h-4 animate-spin text-gray-400" />;
    return validation.isValid ? 
      <CheckCircle className="w-4 h-4 text-green-500" /> : 
      <XCircle className="w-4 h-4 text-red-500" />;
  };

  const getValidationMessage = (validation?: { isValid: boolean; message: string }) => {
    if (!validation || !validation.message) return null;
    return (
      <p className={`text-xs mt-1 ${validation.isValid ? 'text-green-600' : 'text-red-600'}`}>
        {validation.message}
      </p>
    );
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <h3 className="text-sm font-medium mb-3 flex items-center">
          <Tag className="w-4 h-4 mr-2" />
          Promotions & Discounts
        </h3>

        {/* Voucher Input */}
        <div className="space-y-2 mb-4">
          <label className="text-xs font-medium text-gray-600">Event Voucher Code</label>
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Enter voucher code"
                value={voucherCode}
                onChange={(e) => onVoucherChange(e.target.value.toUpperCase())}
                className="pr-8"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                {getValidationIcon(voucherValidation)}
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onApplyVoucher}
              disabled={!voucherCode || voucherValidation?.isLoading}
            >
              {voucherValidation?.isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Apply"
              )}
            </Button>
          </div>
          {getValidationMessage(voucherValidation)}

          {/* Available Vouchers */}
          {availableVouchers.length > 0 && (
            <div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-xs text-blue-600"
                onClick={() => setShowVouchers(!showVouchers)}
              >
                {showVouchers ? 'Hide' : 'Show'} available vouchers ({availableVouchers.length})
              </Button>
              {showVouchers && (
                <div className="mt-2 space-y-1">
                  {availableVouchers.map((voucher) => (
                    <Badge
                      key={voucher.code}
                      variant="outline"
                      className="mr-2 cursor-pointer hover:bg-blue-50"
                      onClick={() => onVoucherChange(voucher.code)}
                    >
                      <Ticket className="w-3 h-3 mr-1" />
                      {voucher.code} (-Rp {voucher.discountValue.toLocaleString()})
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Coupon Input */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-600">System Coupon Code</label>
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => onCouponChange(e.target.value.toUpperCase())}
                className="pr-8"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                {getValidationIcon(couponValidation)}
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onApplyCoupon}
              disabled={!couponCode || couponValidation?.isLoading}
            >
              {couponValidation?.isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Apply"
              )}
            </Button>
          </div>
          {getValidationMessage(couponValidation)}

          {/* Available Coupons */}
          {availableCoupons.length > 0 && (
            <div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-xs text-blue-600"
                onClick={() => setShowCoupons(!showCoupons)}
              >
                {showCoupons ? 'Hide' : 'Show'} available coupons ({availableCoupons.length})
              </Button>
              {showCoupons && (
                <div className="mt-2 space-y-1">
                  {availableCoupons.map((coupon) => (
                    <Badge
                      key={coupon.code}
                      variant="outline"
                      className="mr-2 cursor-pointer hover:bg-green-50"
                      onClick={() => onCouponChange(coupon.code)}
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {coupon.code} (-Rp {coupon.discountValue.toLocaleString()})
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
