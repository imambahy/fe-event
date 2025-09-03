export interface Coupon {
  id: number;
  code: string;
  discountValue: number;
  usageLimit: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  deletedAt?: string;
}

export interface UserCoupon {
  id: number;
  userId: number;
  couponId: number;
  status: CouponStatus;
  usedAt?: string;
  expiresAt: string;
  createdAt: string;
  
  // Relations
  coupon: Coupon;
}

export type CouponStatus = "ACTIVE" | "USED" | "EXPIRED";

export interface CouponValidationRequest {
  couponCode: string;
}

export interface CouponValidationResponse {
  success: boolean;
  message: string;
  data?: {
    coupon: Coupon;
    discountAmount: number;
    isValid: boolean;
  };
}

export interface CreateCouponDto {
  code: string;
  discountValue: number;
  usageLimit: number;
  startDate: Date;
  endDate: Date;
}

export interface UpdateCouponDto {
  code?: string;
  discountValue?: number;
  usageLimit?: number;
  startDate?: Date;
  endDate?: Date;
}
