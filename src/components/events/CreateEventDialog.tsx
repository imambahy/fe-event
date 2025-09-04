"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useToastContext } from "@/contexts/ToastContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { api, API_ENDPOINTS } from "@/lib/api";
import { Loader2, Calendar, MapPin, Tag, FileText, Ticket, Plus, Trash2 } from "lucide-react";
import * as z from "zod";

const createEventSchema = z.object({
  title: z.string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be at most 100 characters")
    .refine(val => val.trim().length >= 3, "Title cannot be only spaces"),
  description: z.string()
    .min(10, "Description must be at least 10 characters")
    .refine(val => val.trim().length >= 10, "Description cannot be only spaces"),
  category: z.string()
    .min(1, "Category is required")
    .refine(val => val.trim().length >= 1, "Category cannot be only spaces"),
  location: z.string()
    .min(1, "Location is required")
    .refine(val => val.trim().length >= 1, "Location cannot be only spaces"),
  startDate: z.string()
    .min(1, "Start date is required")
    .refine(val => {
      const date = new Date(val);
      return date > new Date();
    }, "Start date must be in the future"),
  endDate: z.string()
    .min(1, "End date is required"),
  ticketTypes: z.array(z.object({
    name: z.string()
      .min(1, "Ticket name is required")
      .refine(val => val.trim().length >= 1, "Ticket name cannot be only spaces"),
    price: z.number()
      .min(0, "Price must be at least 0")
      .int("Price must be a whole number"),
    totalSeats: z.number()
      .min(1, "Total seats must be at least 1")
      .int("Total seats must be a whole number"),
  })).min(1, "At least one ticket type is required"),
}).refine(data => {
  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);
  return endDate > startDate;
}, {
  message: "End date must be after start date",
  path: ["endDate"],
});

type CreateEventFormData = z.infer<typeof createEventSchema>;

interface CreateEventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateEventDialog({ open, onOpenChange }: CreateEventDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToastContext();

  const form = useForm<CreateEventFormData>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      location: "",
      startDate: "",
      endDate: "",
      ticketTypes: [
        {
          name: "Regular Ticket",
          price: 50000,
          totalSeats: 100,
        },
      ],
    },
    mode: "onChange", // Validate on change for better UX
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "ticketTypes",
  });

  const createEventMutation = useMutation({
    mutationFn: async (data: CreateEventFormData) => {
      // Validate dates before sending
      const startDate = new Date(data.startDate);
      const endDate = new Date(data.endDate);
      
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        throw new Error("Invalid date format");
      }
      
      if (startDate >= endDate) {
        throw new Error("End date must be after start date");
      }
      
      if (startDate < new Date()) {
        throw new Error("Start date cannot be in the past");
      }

      // Validate ticket types
      if (!data.ticketTypes || data.ticketTypes.length === 0) {
        throw new Error("At least one ticket type is required");
      }

      for (const ticket of data.ticketTypes) {
        if (!ticket.name || ticket.name.trim().length === 0) {
          throw new Error("Ticket name cannot be empty");
        }
        if (ticket.price < 0) {
          throw new Error("Ticket price cannot be negative");
        }
        if (ticket.totalSeats < 1) {
          throw new Error("Total seats must be at least 1");
        }
      }

      const payload = {
        title: data.title.trim(),
        description: data.description.trim(),
        category: data.category.trim(),
        location: data.location.trim(),
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        ticketTypes: data.ticketTypes.map(ticket => ({
          name: ticket.name.trim(),
          price: parseInt(ticket.price.toString(), 10),
          totalSeats: parseInt(ticket.totalSeats.toString(), 10),
        })).filter(ticket => 
          ticket.name.length > 0 && 
          ticket.price >= 0 && 
          ticket.totalSeats >= 1
        ),
      };
      
      // Final payload validation
      if (payload.ticketTypes.length === 0) {
        throw new Error("No valid ticket types after filtering");
      }

      console.log('📝 Creating event:', payload.title, 'Backend will generate unique slug');
      
      try {
        const response = await api.post(API_ENDPOINTS.EVENTS.CREATE, payload);
        console.log('✅ Event created successfully');
        return response.data;
      } catch (error: any) {
        console.error('❌ Event creation failed:', error.response?.status, error.message);
        throw error;
      }
    },
    onSuccess: () => {
      console.log("✅ Event created and cache refreshed");
      
      // Show success toast
      toast("Event created successfully!", "success", "Success");
      
      // Enhanced cache invalidation
      queryClient.invalidateQueries({ queryKey: ["my-events"] });
      queryClient.refetchQueries({ queryKey: ["my-events"] });
      
      // Also invalidate any general events cache
      queryClient.invalidateQueries({ queryKey: ["events"] });
      
      console.log("🔄 Cache invalidation completed");
      
      // Reset form and close dialog
      form.reset();
      setIsSubmitting(false);
      onOpenChange(false);
    },
    onError: (error: any) => {
      console.error("Failed to create event:", error);
      setIsSubmitting(false);
      
      // Show user-friendly error message
      const errorMessage = error.response?.data?.message || 
                          error.message || 
                          "Failed to create event. Please try again.";
      
      console.error("User will see error:", errorMessage);
      
      // Show error toast instead of alert
      toast(errorMessage, "error", "Error Creating Event");
    },
  });

  const onSubmit = async (data: CreateEventFormData) => {
    // Validate form before submission
    const isValid = await form.trigger();
    if (!isValid) {
      console.error("Form validation failed");
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("📋 Form data before submission:", data);
      await createEventMutation.mutateAsync(data);
    } catch (error: any) {
      console.error("Error creating event:", error);
      
      // Reset submitting state on error
      setIsSubmitting(false);
      
      // Don't close dialog on error, let user try again
      return;
    }
    // Note: setIsSubmitting(false) is handled in onSuccess/onError of mutation
  };

  // Reset form when dialog is closed
  const handleDialogChange = (open: boolean) => {
    if (!open && !isSubmitting) {
      form.reset();
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new event.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Event Title
                </Label>
                <Input
                  id="title"
                  placeholder="Enter event title"
                  {...form.register("title")}
                  className="w-full"
                />
                {form.formState.errors.title && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.title.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your event"
                  rows={3}
                  {...form.register("description")}
                  className="w-full"
                />
                {form.formState.errors.description && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.description.message}
                  </p>
                )}
              </div>

              {/* Category & Location */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category" className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    Category
                  </Label>
                  <Input
                    id="category"
                    placeholder="e.g., Music, Tech, Business"
                    {...form.register("category")}
                    className="w-full"
                  />
                  {form.formState.errors.category && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.category.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="Event location"
                    {...form.register("location")}
                    className="w-full"
                  />
                  {form.formState.errors.location && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.location.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Start Date & End Date */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Start Date
                  </Label>
                  <Input
                    id="startDate"
                    type="datetime-local"
                    {...form.register("startDate")}
                    className="w-full"
                  />
                  {form.formState.errors.startDate && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.startDate.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    End Date
                  </Label>
                  <Input
                    id="endDate"
                    type="datetime-local"
                    {...form.register("endDate")}
                    className="w-full"
                  />
                  {form.formState.errors.endDate && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.endDate.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Ticket Types Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2 text-base font-medium">
                    <Ticket className="h-5 w-5" />
                    Ticket Types
                  </Label>
                  <Button
                    type="button"
                    onClick={() => append({ name: "", price: 0, totalSeats: 1 })}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Plus className="h-4 w-4" />
                    Add Ticket Type
                  </Button>
                </div>

                <div className="space-y-3">
                  {fields.map((field, index) => (
                    <div key={field.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">
                          Ticket Type {index + 1}
                        </span>
                        {fields.length > 1 && (
                          <Button
                            type="button"
                            onClick={() => remove(index)}
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {/* Ticket Name */}
                        <div className="space-y-1">
                          <Label htmlFor={`ticketTypes.${index}.name`} className="text-sm">
                            Ticket Name
                          </Label>
                          <Input
                            id={`ticketTypes.${index}.name`}
                            placeholder="e.g., Early Bird, VIP, Regular"
                            {...form.register(`ticketTypes.${index}.name`)}
                            className="w-full"
                          />
                          {form.formState.errors.ticketTypes?.[index]?.name && (
                            <p className="text-xs text-red-500">
                              {form.formState.errors.ticketTypes[index]?.name?.message}
                            </p>
                          )}
                        </div>

                        {/* Price & Total Seats */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <Label htmlFor={`ticketTypes.${index}.price`} className="text-sm">
                              Price (IDR)
                            </Label>
                            <Input
                              id={`ticketTypes.${index}.price`}
                              type="number"
                              min="0"
                              placeholder="0"
                              {...form.register(`ticketTypes.${index}.price`, {
                                valueAsNumber: true,
                              })}
                              className="w-full"
                            />
                            {form.formState.errors.ticketTypes?.[index]?.price && (
                              <p className="text-xs text-red-500">
                                {form.formState.errors.ticketTypes[index]?.price?.message}
                              </p>
                            )}
                          </div>

                          <div className="space-y-1">
                            <Label htmlFor={`ticketTypes.${index}.totalSeats`} className="text-sm">
                              Total Seats
                            </Label>
                            <Input
                              id={`ticketTypes.${index}.totalSeats`}
                              type="number"
                              min="1"
                              placeholder="100"
                              {...form.register(`ticketTypes.${index}.totalSeats`, {
                                valueAsNumber: true,
                              })}
                              className="w-full"
                            />
                            {form.formState.errors.ticketTypes?.[index]?.totalSeats && (
                              <p className="text-xs text-red-500">
                                {form.formState.errors.ticketTypes[index]?.totalSeats?.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {form.formState.errors.ticketTypes && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.ticketTypes.message}
                  </p>
                )}
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleDialogChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-purple-600 text-white hover:bg-purple-700"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Event"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
