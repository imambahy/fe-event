"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Coins, Ticket, Tag, X } from "lucide-react";
import type { PromotionApplication } from "@/types/promotion.type";

interface DiscountSummaryProps {
  originalAmount: number;
  appliedPromotions: PromotionApplication[];
  totalDiscount: number;
  finalAmount: number;
  onRemovePromotion?: (type: string, code?: string) => void;
}

export default function DiscountSummary({
  originalAmount,
  appliedPromotions,
  totalDiscount,
  finalAmount,
  onRemovePromotion,
}: DiscountSummaryProps) {
  const getPromotionIcon = (type: string) => {
    switch (type) {
      case "voucher":
        return <Ticket className="w-3 h-3" />;
      case "coupon":
        return <Tag className="w-3 h-3" />;
      case "points":
        return <Coins className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const getPromotionColor = (type: string) => {
    switch (type) {
      case "voucher":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "coupon":
        return "bg-green-50 text-green-700 border-green-200";
      case "points":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const validPromotions = appliedPromotions.filter(p => p.isValid && p.discountAmount > 0);

  if (validPromotions.length === 0) {
    return null;
  }

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <h3 className="text-sm font-medium mb-3">Applied Discounts</h3>
        
        <div className="space-y-2 mb-3">
          {validPromotions.map((promotion, index) => (
            <div
              key={`${promotion.type}-${promotion.code || promotion.pointsAmount || index}`}
              className={`flex items-center justify-between p-2 rounded-lg border ${getPromotionColor(promotion.type)}`}
            >
              <div className="flex items-center space-x-2">
                {getPromotionIcon(promotion.type)}
                <div>
                  <p className="text-xs font-medium">
                    {promotion.type === "points" 
                      ? `${promotion.pointsAmount?.toLocaleString()} Loyalty Points`
                      : `${promotion.code}`
                    }
                  </p>
                  <p className="text-xs opacity-75">
                    {promotion.type === "voucher" && "Event Voucher"}
                    {promotion.type === "coupon" && "System Coupon"}
                    {promotion.type === "points" && "Points Discount"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">
                  -Rp {promotion.discountAmount.toLocaleString()}
                </span>
                {onRemovePromotion && (
                  <button
                    type="button"
                    onClick={() => onRemovePromotion(promotion.type, promotion.code)}
                    className="p-1 hover:bg-white/50 rounded-full transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-3" />
        
        {/* Price Breakdown */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>Rp {originalAmount.toLocaleString()}</span>
          </div>
          
          {totalDiscount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Total Discount</span>
              <span>-Rp {totalDiscount.toLocaleString()}</span>
            </div>
          )}
          
          <Separator />
          
          <div className="flex justify-between font-semibold text-base">
            <span>Final Amount</span>
            <span className="text-orange-600">
              Rp {finalAmount.toLocaleString()}
            </span>
          </div>
          
          {totalDiscount > 0 && (
            <div className="text-center">
              <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                You saved Rp {totalDiscount.toLocaleString()}!
              </Badge>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
