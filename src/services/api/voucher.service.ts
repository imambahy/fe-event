import { api, API_ENDPOINTS } from "@/lib/api";
import { ApiResponseDto, PaginatedResponseDto } from "@/types/api.type";
import { Voucher, CreateVoucherData, UpdateVoucherData } from "@/hooks/api/useVouchers";
import { createVoucherSchema } from "@/validations/coupon.validation";

export class VoucherService {
  // Get all vouchers for organizer
  static async getVouchers(params?: {
    page?: number;
    limit?: number;
    search?: string;
    eventId?: number;
    isActive?: boolean;
  }): Promise<PaginatedResponseDto<Voucher>> {
    const response = await api.get(API_ENDPOINTS.VOUCHERS.GET_ALL, { params });
    return response.data;
  }

  // Get voucher by ID
  static async getVoucherById(id: number): Promise<ApiResponseDto<Voucher>> {
    const response = await api.get(API_ENDPOINTS.VOUCHERS.GET_BY_ID(id));
    return response.data;
  }

  // Create new voucher
  static async createVoucher(data: CreateVoucherData): Promise<ApiResponseDto<Voucher>> {
    // Validate voucher data (feedback Kelompok 2 - voucher uniqueness)
    const validatedData = createVoucherSchema.parse(data);

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

    const response = await api.post(API_ENDPOINTS.VOUCHERS.CREATE, validatedData);
    return response.data;
  }

  // Update voucher
  static async updateVoucher(id: number, data: Partial<UpdateVoucherData>): Promise<ApiResponseDto<Voucher>> {
    const response = await api.put(API_ENDPOINTS.VOUCHERS.UPDATE(id), data);
    return response.data;
  }

  // Delete voucher
  static async deleteVoucher(id: number): Promise<ApiResponseDto<any>> {
    const response = await api.delete(API_ENDPOINTS.VOUCHERS.DELETE(id));
    return response.data;
  }

  // Note: Voucher validation is handled in transaction creation
  // No separate validation endpoint in backend

  // Get voucher statistics
  static async getVoucherStats(): Promise<ApiResponseDto<any>> {
    const response = await api.get(API_ENDPOINTS.VOUCHERS.STATS);
    return response.data;
  }
}
