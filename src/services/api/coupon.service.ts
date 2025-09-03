import { api, API_ENDPOINTS } from "@/lib/api";
import type { 
  Coupon, 
  UserCoupon,
  CouponValidationRequest, 
  CouponValidationResponse 
} from "@/types/coupon.type";
import type { ApiResponseDto } from "@/types/api.type";

export class CouponService {
  /**
   * Get all active coupons (public endpoint)
   */
  static async getActiveCoupons(): Promise<Coupon[]> {
    try {
      const response = await api.get<ApiResponseDto<Coupon[]>>(
        API_ENDPOINTS.COUPONS.GET_ACTIVE
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching active coupons:", error);
      throw error;
    }
  }

  /**
   * Get user's available coupons (requires auth)
   */
  static async getUserCoupons(): Promise<UserCoupon[]> {
    try {
      const response = await api.get<ApiResponseDto<UserCoupon[]>>(
        API_ENDPOINTS.COUPONS.GET_USER_COUPONS
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching user coupons:", error);
      throw error;
    }
  }

  /**
   * Get coupon by ID
   */
  static async getCouponById(id: number): Promise<Coupon> {
    try {
      const response = await api.get<ApiResponseDto<Coupon>>(
        API_ENDPOINTS.COUPONS.GET_BY_ID(id)
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching coupon:", error);
      throw error;
    }
  }

  /**
   * Validate coupon code
   */
  static async validateCoupon(
    request: CouponValidationRequest
  ): Promise<CouponValidationResponse> {
    try {
      const response = await api.post<CouponValidationResponse>(
        API_ENDPOINTS.COUPONS.VALIDATE,
        request
      );
      return response.data;
    } catch (error) {
      console.error("Error validating coupon:", error);
      // Return error response instead of throwing
      return {
        success: false,
        message: error instanceof Error ? error.message : "Coupon validation failed",
      };
    }
  }

  /**
   * Calculate coupon discount for given amount
   */
  static calculateCouponDiscount(coupon: Coupon, totalAmount: number): number {
    if (!coupon) return 0;
    
    // Coupon discount is a fixed amount
    return Math.min(coupon.discountValue, totalAmount);
  }

  /**
   * Check if coupon is currently valid (date-wise)
   */
  static isCouponDateValid(coupon: Coupon): boolean {
    const now = new Date();
    const startDate = new Date(coupon.startDate);
    const endDate = new Date(coupon.endDate);
    
    return now >= startDate && now <= endDate;
  }

  /**
   * Filter active and valid coupons
   */
  static filterValidCoupons(coupons: Coupon[]): Coupon[] {
    return coupons.filter(coupon => 
      this.isCouponDateValid(coupon) && 
      !coupon.deletedAt
    );
  }
}
