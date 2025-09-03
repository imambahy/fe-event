export interface Voucher {
  id: number;
  organizerId: number;
  code: string;
  discountValue: number;
  eventId: number;
  usageLimit: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  deletedAt?: string;
  
  // Relations
  event?: {
    id: number;
    title: string;
    slug: string;
  };
  organizer?: {
    id: number;
    name: string;
  };
}

export interface UserVoucher {
  id: number;
  userId: number;
  voucherId: number;
  status: VoucherStatus;
  usedAt?: string;
  expiresAt: string;
  createdAt: string;
  
  // Relations
  voucher: Voucher;
}

export type VoucherStatus = "ACTIVE" | "USED" | "EXPIRED";

export interface VoucherValidationRequest {
  voucherCode: string;
  eventId: number;
}

export interface VoucherValidationResponse {
  success: boolean;
  message: string;
  data?: {
    voucher: Voucher;
    discountAmount: number;
    isValid: boolean;
  };
}

export interface CreateVoucherDto {
  code: string;
  discountValue: number;
  eventId: number;
  usageLimit: number;
  startDate: Date;
  endDate: Date;
}

export interface UpdateVoucherDto {
  code?: string;
  discountValue?: number;
  usageLimit?: number;
  startDate?: Date;
  endDate?: Date;
}
