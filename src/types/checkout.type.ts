import { TransactionStatus } from "./event.type";

// Backend DTOs
export interface CreateTransactionDto {
  ticketTypeId: number;
  quantity: number;
  pointsUsed: number;
  couponCode?: string;
  voucherCode?: string;
}

// Frontend request types
export type CreateTransactionRequest = CreateTransactionDto;

export interface CheckoutFormData {
  pointsToUse: number;
  voucherCode?: string;
  couponCode?: string;
}

export interface CheckoutSummary {
  eventId: number;
  eventTitle: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
  ticketSelections: TicketSelection[];
  totalAmount: number;
  pointsUsed: number;
  voucherCode?: string;
  couponCode?: string;
}

export interface TicketSelection {
  ticketTypeId: number;
  ticketType: string;
  price: number;
  quantity: number;
}

export interface UploadPaymentProofRequest {
  paymentProof: File;
}

export interface TransactionResponse {
  success: boolean;
  message: string;
  data: {
    transaction: {
      id: number;
      status: TransactionStatus;
      expiresAt: string;
      paymentProof?: string;
    };
  };
}

export interface OrderSummary {
  eventId: number;
  eventTitle: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
  ticketSelections: TicketSelection[];
  totalAmount: number;
  pointsUsed: number;
  voucherCode?: string;
  couponCode?: string;
}

export { TransactionStatus };