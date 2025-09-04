"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
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
import { Loader2, Calendar, MapPin, Tag, FileText } from "lucide-react";
import { FlatEvent } from "@/hooks/useEventsPage";
import * as z from "zod";

const editEventSchema = z.object({
  title: z.string().min(1, "Title is required").max(255, "Title too long"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  location: z.string().min(1, "Location is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
});

type EditEventFormData = z.infer<typeof editEventSchema>;

interface EditEventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: FlatEvent | null;
}

export function EditEventDialog({ open, onOpenChange, event }: EditEventDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<EditEventFormData>({
    resolver: zodResolver(editEventSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      location: "",
      startDate: "",
      endDate: "",
    },
  });

  // Reset form when event changes
  useEffect(() => {
    if (event && open) {
      const formatDateForInput = (dateString: string) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toISOString().slice(0, 16); // Format for datetime-local input
      };

      form.reset({
        title: event.title || "",
        description: event.description || "",
        category: event.category || "",
        location: event.location || "",
        startDate: formatDateForInput(event.startDate),
        endDate: formatDateForInput(event.endDate),
      });
    }
  }, [event, open, form]);

  const updateEventMutation = useMutation({
    mutationFn: async (data: EditEventFormData) => {
      if (!event) throw new Error("No event to update");
      
      const response = await api.put(API_ENDPOINTS.EVENTS.UPDATE(event.id), {
        ...data,
        startDate: new Date(data.startDate).toISOString(),
        endDate: new Date(data.endDate).toISOString(),
      });
      return response.data;
    },
    onSuccess: () => {
      // Invalidate all my-events queries (for any user)
      queryClient.invalidateQueries({ queryKey: ["my-events"] });
      onOpenChange(false);
    },
    onError: (error: any) => {
      console.error("Failed to update event:", error);
    },
  });

  const onSubmit = async (data: EditEventFormData) => {
    setIsSubmitting(true);
    try {
      await updateEventMutation.mutateAsync(data);
    } catch (error) {
      console.error("Error updating event:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!event) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
          <DialogDescription>
            Update the event details below.
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
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
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
                    Updating...
                  </>
                ) : (
                  "Update Event"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
