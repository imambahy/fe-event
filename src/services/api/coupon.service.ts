import { api, API_ENDPOINTS } from "@/lib/api";
import { ApiResponseDto, PaginatedResponseDto } from "@/types/api.type";
import { Coupon } from "@/types/event.type";
import { createCouponSchema } from "@/validations/coupon.validation";

export interface CreateCouponData {
  code: string;
  discountValue: number;
  eventId: number;
  usageLimit: number;
  startDate: string;
  endDate: string;
}

export interface UpdateCouponData {
  code?: string;
  discountValue?: number;
  usageLimit?: number;
  startDate?: string;
  endDate?: string;
}

export class CouponService {
  // Get all active coupons (public)
  static async getCoupons(params?: {
    page?: number;
    limit?: number;
    search?: string;
    eventId?: number;
  }): Promise<PaginatedResponseDto<Coupon>> {
    const response = await api.get(API_ENDPOINTS.COUPONS.GET_ALL, { params });
    return response.data;
  }

  // Get coupon by ID
  static async getCouponById(id: number): Promise<ApiResponseDto<Coupon>> {
    const response = await api.get(API_ENDPOINTS.COUPONS.GET_BY_ID(id));
    return response.data;
  }

  // Create new coupon (organizer only)
  static async createCoupon(data: CreateCouponData): Promise<ApiResponseDto<Coupon>> {
    // Validate coupon data (feedback Kelompok 2 - coupon uniqueness)
    const validatedData = createCouponSchema.parse(data);

    // Additional validation: check date ranges
    const now = new Date();
    const startDate = new Date(validatedData.startDate);
    const endDate = new Date(validatedData.endDate);

    if (startDate < now) {
      throw new Error("Start date cannot be in the past");
    }

    if (endDate <= startDate) {
      throw new Error("End date must be after start date");
    }

    const response = await api.post(API_ENDPOINTS.COUPONS.CREATE, validatedData);
    return response.data;
  }

  // Update coupon (organizer only)
  static async updateCoupon(id: number, data: Partial<UpdateCouponData>): Promise<ApiResponseDto<Coupon>> {
    const response = await api.put(API_ENDPOINTS.COUPONS.UPDATE(id), data);
    return response.data;
  }

  // Delete coupon (organizer only)
  static async deleteCoupon(id: number): Promise<ApiResponseDto<any>> {
    const response = await api.delete(API_ENDPOINTS.COUPONS.DELETE(id));
    return response.data;
  }

  // Get user's coupons
  static async getUserCoupons(): Promise<ApiResponseDto<any[]>> {
    const response = await api.get(API_ENDPOINTS.COUPONS.GET_USER_COUPONS);
    return response.data;
  }

  // Get coupon statistics (organizer only)
  static async getCouponStats(): Promise<ApiResponseDto<any>> {
    const response = await api.get(API_ENDPOINTS.COUPONS.STATS);
    return response.data;
  }
}
