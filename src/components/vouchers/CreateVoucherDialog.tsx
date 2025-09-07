"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateVoucher } from "@/hooks/api/useVouchers";
import { useEvents } from "@/hooks/api/useEvents";
import { Loader2, Percent } from "lucide-react";

const createVoucherSchema = z.object({
  code: z.string().min(3, "Code must be at least 3 characters").max(20, "Code must be less than 20 characters"),
  discountValue: z.number().min(1, "Discount must be at least 1%").max(100, "Discount cannot exceed 100%"),
  eventId: z.number().min(1, "Please select an event"),
  usageLimit: z.number().min(1, "Usage limit must be at least 1"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
});

type CreateVoucherFormData = z.infer<typeof createVoucherSchema>;

interface CreateVoucherDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function CreateVoucherDialog({
  open,
  onOpenChange,
  onSuccess
}: CreateVoucherDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const createVoucherMutation = useCreateVoucher();

  // Get events for dropdown
  const { data: eventsResponse } = useEvents({ limit: 100 });
  const events = eventsResponse?.data || [];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<CreateVoucherFormData>({
    resolver: zodResolver(createVoucherSchema),
    defaultValues: {
      code: "",
      discountValue: 10,
      eventId: 0,
      usageLimit: 50,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
    },
  });

  const watchStartDate = watch("startDate");

  const onSubmit = async (data: CreateVoucherFormData) => {
    try {
      setIsSubmitting(true);
      await createVoucherMutation.mutateAsync({
        ...data,
        startDate: new Date(data.startDate).toISOString(),
        endDate: new Date(data.endDate).toISOString(),
      });

      reset();
      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      console.error("Failed to create voucher:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      reset();
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Percent className="w-5 h-5" />
            Create New Voucher
          </DialogTitle>
          <DialogDescription>
            Create a discount voucher for your event. Customers can use this code during checkout.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Voucher Code */}
            <div className="space-y-2">
              <Label htmlFor="code">Voucher Code</Label>
              <Input
                id="code"
                {...register("code")}
                placeholder="SUMMER2024"
                className="uppercase"
              />
              {errors.code && (
                <p className="text-sm text-red-600">{errors.code.message}</p>
              )}
            </div>

            {/* Discount Value */}
            <div className="space-y-2">
              <Label htmlFor="discountValue">Discount (%)</Label>
              <Input
                id="discountValue"
                type="number"
                min="1"
                max="100"
                {...register("discountValue", { valueAsNumber: true })}
              />
              {errors.discountValue && (
                <p className="text-sm text-red-600">{errors.discountValue.message}</p>
              )}
            </div>
          </div>

          {/* Event Selection */}
          <div className="space-y-2">
            <Label htmlFor="eventId">Event</Label>
            <Select onValueChange={(value) => setValue("eventId", parseInt(value))}>
              <SelectTrigger>
                <SelectValue placeholder="Select an event" />
              </SelectTrigger>
              <SelectContent>
                {events.map((event) => (
                  <SelectItem key={event.id} value={event.id.toString()}>
                    {event.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.eventId && (
              <p className="text-sm text-red-600">{errors.eventId.message}</p>
            )}
          </div>

          {/* Usage Limit */}
          <div className="space-y-2">
            <Label htmlFor="usageLimit">Usage Limit</Label>
            <Input
              id="usageLimit"
              type="number"
              min="1"
              {...register("usageLimit", { valueAsNumber: true })}
            />
            {errors.usageLimit && (
              <p className="text-sm text-red-600">{errors.usageLimit.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Start Date */}
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                {...register("startDate")}
              />
              {errors.startDate && (
                <p className="text-sm text-red-600">{errors.startDate.message}</p>
              )}
            </div>

            {/* End Date */}
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                min={watchStartDate}
                {...register("endDate")}
              />
              {errors.endDate && (
                <p className="text-sm text-red-600">{errors.endDate.message}</p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Creating...
                </>
              ) : (
                "Create Voucher"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
