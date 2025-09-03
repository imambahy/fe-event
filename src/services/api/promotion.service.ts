import { VoucherService } from "./voucher.service";
import { CouponService } from "./coupon.service";
import type { 
  PromotionApplication, 
  PriceCalculation, 
  PromotionSummary,
  ApplyPromotionRequest 
} from "@/types/promotion.type";
import type { Voucher } from "@/types/voucher.type";
import type { Coupon } from "@/types/coupon.type";

export class PromotionService {
  /**
   * Get all available promotions for an event
   */
  static async getPromotionSummary(eventId: number, userPoints: number = 0): Promise<PromotionSummary> {
    try {
      // Fetch vouchers and coupons in parallel
      const [eventVouchers, activeCoupons] = await Promise.all([
        VoucherService.getVouchersByEvent(eventId).catch(() => []),
        CouponService.getActiveCoupons().catch(() => [])
      ]);

      // Filter valid vouchers and coupons
      const availableVouchers = eventVouchers.filter(voucher => 
        VoucherService.isVoucherDateValid(voucher) && !voucher.deletedAt
      );

      const availableCoupons = CouponService.filterValidCoupons(activeCoupons);

      return {
        availableVouchers,
        availableCoupons,
        userPoints,
        pointsExpiry: undefined, // Will be populated from user data
      };
    } catch (error) {
      console.error("Error fetching promotion summary:", error);
      return {
        availableVouchers: [],
        availableCoupons: [],
        userPoints: 0,
      };
    }
  }

  /**
   * Calculate final price with all promotions applied
   */
  static async calculatePrice(request: ApplyPromotionRequest): Promise<PriceCalculation> {
    const { ticketSelections, voucherCode, couponCode, pointsUsed = 0 } = request;
    
    // Calculate original amount
    const originalAmount = ticketSelections.reduce(
      (total, selection) => total + (selection.price * selection.quantity),
      0
    );

    const appliedPromotions: PromotionApplication[] = [];
    let voucherDiscount = 0;
    let couponDiscount = 0;
    let pointsDiscount = 0;

    // Apply points discount (1 point = 1 IDR)
    if (pointsUsed > 0) {
      pointsDiscount = Math.min(pointsUsed, originalAmount);
      appliedPromotions.push({
        type: "points",
        pointsAmount: pointsUsed,
        discountAmount: pointsDiscount,
        isValid: true,
      });
    }

    let remainingAmount = originalAmount - pointsDiscount;

    // Apply voucher discount
    if (voucherCode && remainingAmount > 0) {
      try {
        const voucherValidation = await VoucherService.validateVoucher({
          voucherCode,
          eventId: request.eventId,
        });

        if (voucherValidation.success && voucherValidation.data) {
          voucherDiscount = Math.min(
            voucherValidation.data.discountAmount,
            remainingAmount
          );
          appliedPromotions.push({
            type: "voucher",
            code: voucherCode,
            discountAmount: voucherDiscount,
            isValid: true,
          });
          remainingAmount -= voucherDiscount;
        } else {
          appliedPromotions.push({
            type: "voucher",
            code: voucherCode,
            discountAmount: 0,
            isValid: false,
            errorMessage: voucherValidation.message,
          });
        }
      } catch (error) {
        appliedPromotions.push({
          type: "voucher",
          code: voucherCode,
          discountAmount: 0,
          isValid: false,
          errorMessage: "Failed to validate voucher",
        });
      }
    }

    // Apply coupon discount
    if (couponCode && remainingAmount > 0) {
      try {
        const couponValidation = await CouponService.validateCoupon({
          couponCode,
        });

        if (couponValidation.success && couponValidation.data) {
          couponDiscount = Math.min(
            couponValidation.data.discountAmount,
            remainingAmount
          );
          appliedPromotions.push({
            type: "coupon",
            code: couponCode,
            discountAmount: couponDiscount,
            isValid: true,
          });
          remainingAmount -= couponDiscount;
        } else {
          appliedPromotions.push({
            type: "coupon",
            code: couponCode,
            discountAmount: 0,
            isValid: false,
            errorMessage: couponValidation.message,
          });
        }
      } catch (error) {
        appliedPromotions.push({
          type: "coupon",
          code: couponCode,
          discountAmount: 0,
          isValid: false,
          errorMessage: "Failed to validate coupon",
        });
      }
    }

    const totalDiscount = pointsDiscount + voucherDiscount + couponDiscount;
    const finalAmount = Math.max(0, originalAmount - totalDiscount);

    return {
      originalAmount,
      pointsUsed,
      pointsDiscount,
      voucherDiscount,
      couponDiscount,
      totalDiscount,
      finalAmount,
      appliedPromotions,
    };
  }

  /**
   * Format discount amount for display
   */
  static formatDiscount(amount: number): string {
    return `Rp ${amount.toLocaleString("id-ID")}`;
  }

  /**
   * Get promotion type display name
   */
  static getPromotionTypeName(type: string): string {
    switch (type) {
      case "voucher":
        return "Event Voucher";
      case "coupon":
        return "System Coupon";
      case "points":
        return "Loyalty Points";
      default:
        return "Discount";
    }
  }
}
