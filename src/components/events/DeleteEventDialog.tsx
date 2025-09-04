"use client";

import { useState } from "react";
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
import { api, API_ENDPOINTS } from "@/lib/api";
import { Loader2, AlertTriangle } from "lucide-react";
import { FlatEvent } from "@/hooks/useEventsPage";

interface DeleteEventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  events: FlatEvent[];
  onSuccess?: () => void;
}

export function DeleteEventDialog({ 
  open, 
  onOpenChange, 
  events, 
  onSuccess 
}: DeleteEventDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();

  const deleteEventMutation = useMutation({
    mutationFn: async (eventIds: number[]) => {
      // Delete events one by one
      const deletePromises = eventIds.map(id => 
        api.delete(API_ENDPOINTS.EVENTS.DELETE(id))
      );
      return Promise.all(deletePromises);
    },
    onSuccess: () => {
      // Invalidate all my-events queries (for any user)
      queryClient.invalidateQueries({ queryKey: ["my-events"] });
      onOpenChange(false);
      onSuccess?.();
    },
    onError: (error: any) => {
      console.error("Failed to delete events:", error);
    },
  });

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const eventIds = events.map(event => event.id);
      await deleteEventMutation.mutateAsync(eventIds);
    } catch (error) {
      console.error("Error deleting events:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const eventCount = events.length;
  const isMultiple = eventCount > 1;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            Delete Event{isMultiple ? "s" : ""}
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete {isMultiple ? "these events" : "this event"}? 
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {eventCount > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">
                {isMultiple ? `${eventCount} events` : "Event"} to be deleted:
              </p>
              <div className="max-h-40 overflow-y-auto space-y-2">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="font-medium text-red-900">{event.title}</p>
                    <p className="text-sm text-red-700">
                      {event.category} • {event.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            {isDeleting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              `Delete ${isMultiple ? "Events" : "Event"}`
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
