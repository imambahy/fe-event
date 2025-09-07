import * as z from "zod";

// Ticket type validation
export const ticketTypeSchema = z.object({
  name: z.string().min(1, "Ticket name is required").max(100, "Ticket name must be less than 100 characters"),
  price: z.number().min(0, "Price cannot be negative"),
  totalSeats: z.number().int().min(1, "Total seats must be at least 1"),
});

// Event creation validation
export const createEventSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(200, "Title must be less than 200 characters"),
  description: z.string().min(10, "Description must be at least 10 characters").max(2000, "Description must be less than 2000 characters"),
  category: z.string().min(1, "Category is required"),
  location: z.string().min(1, "Location is required"),
  startDate: z.string().refine((date) => {
    const startDate = new Date(date);
    const now = new Date();
    return startDate > now;
  }, "Start date must be in the future"),
  endDate: z.string(),
  ticketTypes: z.array(ticketTypeSchema).min(1, "At least one ticket type is required"),
}).refine((data) => {
  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);
  return endDate > startDate;
}, {
  message: "End date must be after start date",
  path: ["endDate"],
});

// Event update validation
export const updateEventSchema = createEventSchema.partial();

// Event publish validation
export const publishEventSchema = z.object({
  eventId: z.number().int().positive("Event ID must be a positive integer"),
}).refine(async (data) => {
  // This would need to be validated on the backend
  // Check if event endDate > now and totalSeats > 0
  return true;
});

// Event delete/unpublish validation
export const deleteEventSchema = z.object({
  eventId: z.number().int().positive("Event ID must be a positive integer"),
}).refine(async (data) => {
  // This would need to be validated on the backend
  // Check if there are no DONE transactions for this event
  return true;
});

// Slug validation
export const slugSchema = z.string()
  .min(3, "Slug must be at least 3 characters")
  .max(100, "Slug must be less than 100 characters")
  .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens")
  .refine(async (slug) => {
    // This would need backend validation for uniqueness
    return true;
  });

// Rating validation (clamp to 1-5)
export const ratingSchema = z.number()
  .min(1, "Rating must be at least 1")
  .max(5, "Rating cannot exceed 5")
  .refine((rating) => {
    // Clamp rating to 1-5
    return Math.max(1, Math.min(5, rating));
  });

// Event filter validation
export const eventFilterSchema = z.object({
  status: z.enum(["upcoming", "ongoing", "ended"]).optional(),
  category: z.string().optional(),
  search: z.string().optional(),
  page: z.number().int().min(1).optional().default(1),
  limit: z.number().int().min(1).max(100).optional().default(10),
});

export type CreateEventFormData = z.infer<typeof createEventSchema>;
export type UpdateEventFormData = z.infer<typeof updateEventSchema>;
export type PublishEventFormData = z.infer<typeof publishEventSchema>;
export type DeleteEventFormData = z.infer<typeof deleteEventSchema>;
export type EventFilterFormData = z.infer<typeof eventFilterSchema>;
