import * as z from "zod";

export const resetPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const resetPasswordWithTokenSchema = z.object({
  token: z.string().min(1, "Reset token is required"),
  newPassword: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
});
