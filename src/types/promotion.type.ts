import type { Voucher, VoucherValidationResponse } from "./voucher.type";
import type { Coupon, CouponValidationResponse } from "./coupon.type";

export interface PromotionApplication {
  type: "voucher" | "coupon" | "points";
  code?: string;
  pointsAmount?: number;
  discountAmount: number;
  isValid: boolean;
  errorMessage?: string;
}

export interface PriceCalculation {
  originalAmount: number;
  pointsUsed: number;
  pointsDiscount: number;
  voucherDiscount: number;
  couponDiscount: number;
  totalDiscount: number;
  finalAmount: number;
  appliedPromotions: PromotionApplication[];
}

export interface PromotionSummary {
  availableVouchers: Voucher[];
  availableCoupons: Coupon[];
  userPoints: number;
  pointsExpiry?: string;
}

export interface ApplyPromotionRequest {
  eventId: number;
  ticketSelections: {
    ticketTypeId: number;
    quantity: number;
    price: number;
  }[];
  voucherCode?: string;
  couponCode?: string;
  pointsUsed?: number;
}

export interface ApplyPromotionResponse {
  success: boolean;
  message: string;
  data?: PriceCalculation;
}

// Re-export types for convenience
export type { Voucher, VoucherValidationResponse } from "./voucher.type";
export type { Coupon, CouponValidationResponse } from "./coupon.type";
