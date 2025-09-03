import { api, API_ENDPOINTS } from "@/lib/api";
import type { 
  Voucher, 
  VoucherValidationRequest, 
  VoucherValidationResponse 
} from "@/types/voucher.type";
import type { ApiResponseDto } from "@/types/api.type";

export class VoucherService {
  /**
   * Get available vouchers for a specific event (customer-facing)
   */
  static async getVouchersByEvent(eventId: number): Promise<Voucher[]> {
    try {
      const response = await api.get<ApiResponseDto<Voucher[]>>(
        API_ENDPOINTS.VOUCHERS.GET_BY_EVENT(eventId)
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching event vouchers:", error);
      throw error;
    }
  }

  /**
   * Get voucher by ID
   */
  static async getVoucherById(id: number): Promise<Voucher> {
    try {
      const response = await api.get<ApiResponseDto<Voucher>>(
        API_ENDPOINTS.VOUCHERS.GET_BY_ID(id)
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching voucher:", error);
      throw error;
    }
  }

  /**
   * Validate voucher code for an event
   */
  static async validateVoucher(
    request: VoucherValidationRequest
  ): Promise<VoucherValidationResponse> {
    try {
      const response = await api.post<VoucherValidationResponse>(
        API_ENDPOINTS.VOUCHERS.VALIDATE,
        request
      );
      return response.data;
    } catch (error) {
      console.error("Error validating voucher:", error);
      // Return error response instead of throwing
      return {
        success: false,
        message: error instanceof Error ? error.message : "Voucher validation failed",
      };
    }
  }

  /**
   * Calculate voucher discount for given amount
   */
  static calculateVoucherDiscount(voucher: Voucher, totalAmount: number): number {
    if (!voucher) return 0;
    
    // Voucher discount is a fixed amount
    return Math.min(voucher.discountValue, totalAmount);
  }

  /**
   * Check if voucher is currently valid (date-wise)
   */
  static isVoucherDateValid(voucher: Voucher): boolean {
    const now = new Date();
    const startDate = new Date(voucher.startDate);
    const endDate = new Date(voucher.endDate);
    
    return now >= startDate && now <= endDate;
  }
}
