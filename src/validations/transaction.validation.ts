import * as z from "zod";

// Transaction creation validation
export const createTransactionSchema = z.object({
  ticketTypeId: z.number().int().positive("Ticket type ID must be a positive integer"),
  quantity: z.number()
    .int("Quantity must be an integer")
    .min(1, "Quantity must be at least 1")
    .max(100, "Quantity cannot exceed 100"),
  pointsUsed: z.number().int().min(0, "Points used cannot be negative").optional().default(0),
  couponCode: z.string().min(1, "Coupon code cannot be empty").optional(),
  voucherCode: z.string().min(1, "Voucher code cannot be empty").optional(),
});

// Payment proof upload validation
export const uploadPaymentProofSchema = z.object({
  paymentProof: z.string()
    .url("Payment proof must be a valid URL")
    .regex(/\.(jpg|jpeg|png|pdf)$/i, "Payment proof must be a valid image (jpg, jpeg, png) or PDF file"),
});

// Transaction status update validation
export const updateTransactionStatusSchema = z.object({
  status: z.enum([
    "WAITING_FOR_PAYMENT",
    "WAITING_FOR_CONFIRMATION",
    "DONE",
    "REJECTED",
    "EXPIRED",
    "CANCELLED"
  ]),
  organizerId: z.number().int().positive("Organizer ID must be a positive integer").optional(),
});

// Valid status transitions
export const VALID_STATUS_TRANSITIONS = {
  WAITING_FOR_PAYMENT: ["WAITING_FOR_CONFIRMATION", "EXPIRED", "CANCELLED"],
  WAITING_FOR_CONFIRMATION: ["DONE", "REJECTED", "CANCELLED"],
  DONE: [], // Final state
  REJECTED: ["WAITING_FOR_PAYMENT"], // Can retry payment
  EXPIRED: ["WAITING_FOR_PAYMENT"], // Can retry payment
  CANCELLED: [], // Final state
} as const;

export type CreateTransactionFormData = z.infer<typeof createTransactionSchema>;
export type UploadPaymentProofFormData = z.infer<typeof uploadPaymentProofSchema>;
export type UpdateTransactionStatusFormData = z.infer<typeof updateTransactionStatusSchema>;
