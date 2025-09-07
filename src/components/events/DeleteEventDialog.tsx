"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlertTriangle, Trash2 } from "lucide-react";

interface DeleteEventDialogProps {
  event?: {
    id: number;
    title: string;
  };
  onEventDeleted?: () => void;
  trigger?: React.ReactNode;
}

export default function DeleteEventDialog({ event, onEventDeleted, trigger }: DeleteEventDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      // TODO: Implement API call to delete event
      console.log("Deleting event:", event?.id);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setOpen(false);
      onEventDeleted?.();
    } catch (error) {
      console.error("Failed to delete event:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!event) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="destructive" size="sm">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="w-5 h-5" />
            Delete Event
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete "{event.title}"? This action cannot be undone and will cancel all associated tickets.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-yellow-900 mb-1">Warning</p>
              <p className="text-yellow-800">
                This will permanently delete the event and all associated data including:
              </p>
              <ul className="mt-2 text-yellow-800 list-disc list-inside space-y-1">
                <li>All ticket purchases will be cancelled</li>
                <li>Refunds will need to be processed manually</li>
                <li>Event analytics will be lost</li>
              </ul>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete Event"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
