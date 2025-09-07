import * as z from "zod";

// Coupon creation validation
export const createCouponSchema = z.object({
  code: z.string()
    .min(3, "Coupon code must be at least 3 characters")
    .max(20, "Coupon code must be less than 20 characters")
    .regex(/^[A-Z0-9]+$/, "Coupon code can only contain uppercase letters and numbers")
    .refine(async (code) => {
      // This would need backend validation for uniqueness
      return true;
    }),
  discountValue: z.number().min(0, "Discount value cannot be negative").max(100, "Discount cannot exceed 100%"),
  usageLimit: z.number().int().min(1, "Usage limit must be at least 1"),
  startDate: z.string().refine((date) => {
    const startDate = new Date(date);
    const now = new Date();
    return startDate >= now;
  }, "Start date cannot be in the past"),
  endDate: z.string(),
  eventId: z.number().int().positive("Event ID must be a positive integer"),
}).refine((data) => {
  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);
  return endDate > startDate;
}, {
  message: "End date must be after start date",
  path: ["endDate"],
});

// Voucher creation validation
export const createVoucherSchema = z.object({
  code: z.string()
    .min(3, "Voucher code must be at least 3 characters")
    .max(20, "Voucher code must be less than 20 characters")
    .regex(/^[A-Z0-9]+$/, "Voucher code can only contain uppercase letters and numbers")
    .refine(async (code) => {
      // This would need backend validation for uniqueness
      return true;
    }),
  discountValue: z.number().min(0, "Discount value cannot be negative").max(100, "Discount cannot exceed 100%"),
  usageLimit: z.number().int().min(1, "Usage limit must be at least 1"),
  startDate: z.string().refine((date) => {
    const startDate = new Date(date);
    const now = new Date();
    return startDate >= now;
  }, "Start date cannot be in the past"),
  endDate: z.string(),
  eventId: z.number().int().positive("Event ID must be a positive integer"),
}).refine((data) => {
  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);
  return endDate > startDate;
}, {
  message: "End date must be after start date",
  path: ["endDate"],
});

// Coupon/Voucher validation for transaction
export const validateCouponSchema = z.object({
  code: z.string().min(1, "Coupon code is required"),
  eventId: z.number().int().positive("Event ID is required"),
  userId: z.number().int().positive("User ID is required"),
});

// Usage limit validation (global vs per-user)
export const usageLimitSchema = z.object({
  couponId: z.number().int().positive("Coupon ID is required"),
  userId: z.number().int().positive("User ID is required"),
  usageType: z.enum(["global", "per_user"]).default("global"),
});

export type CreateCouponFormData = z.infer<typeof createCouponSchema>;
export type CreateVoucherFormData = z.infer<typeof createVoucherSchema>;
export type ValidateCouponFormData = z.infer<typeof validateCouponSchema>;
export type UsageLimitFormData = z.infer<typeof usageLimitSchema>;
