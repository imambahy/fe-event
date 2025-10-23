"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { EventService } from "@/services/api/event.service";
import { useQueryClient } from "@tanstack/react-query";
import { useToastContext } from "@/contexts/ToastContext";

interface CreateEventDialogProps {
  onEventCreated?: () => void;
}

export default function CreateEventDialog({
  onEventCreated,
}: CreateEventDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    startDate: "",
    endDate: "",
    capacity: "",
    category: "Entertainment", // Default category
  });

  const queryClient = useQueryClient();
  const { toast } = useToastContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Creating event:", formData);

      // Prepare event data according to backend schema
      const eventData = {
        title: formData.title,
        description: formData.description,
        location: formData.location,
        category: formData.category,
        startDate: new Date(formData.startDate).toISOString(),
        endDate: new Date(formData.endDate).toISOString(),
        ticketTypes: [
          {
            name: "General Admission",
            price: 0, // Free event by default
            totalSeats: parseInt(formData.capacity) || 100,
          },
        ],
      };

      // Call the actual API
      const response = await EventService.createEvent(eventData);

      console.log("Event created successfully:", response);

      // Show success message
      toast("Event created successfully!", "success");

      // Close dialog and reset form
      setOpen(false);
      setFormData({
        title: "",
        description: "",
        location: "",
        startDate: "",
        endDate: "",
        capacity: "",
        category: "Entertainment",
      });

      // Invalidate and refetch events
      queryClient.invalidateQueries({ queryKey: ["my-events"] });

      // Call the callback if provided
      onEventCreated?.();
    } catch (error: any) {
      console.error("Failed to create event:", error);
      toast(
        error.response?.data?.message ||
          "Failed to create event. Please try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new event. You can edit these
            details later.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                placeholder="Enter event title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => handleInputChange("category", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="Entertainment">Entertainment</option>
              <option value="Sports">Sports</option>
              <option value="Education">Education</option>
              <option value="Business">Business</option>
              <option value="Technology">Technology</option>
              <option value="Music">Music</option>
              <option value="Art">Art</option>
              <option value="Food">Food & Drink</option>
              <option value="Health">Health & Wellness</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your event"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date & Time</Label>
              <Input
                id="startDate"
                type="datetime-local"
                value={formData.startDate}
                onChange={(e) => handleInputChange("startDate", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date & Time</Label>
              <Input
                id="endDate"
                type="datetime-local"
                value={formData.endDate}
                onChange={(e) => handleInputChange("endDate", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="capacity">Capacity (Optional)</Label>
            <Input
              id="capacity"
              type="number"
              placeholder="Maximum number of attendees"
              value={formData.capacity}
              onChange={(e) => handleInputChange("capacity", e.target.value)}
              min="1"
            />
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
              type="submit"
              disabled={loading || !formData.title || !formData.location}
            >
              {loading ? "Creating..." : "Create Event"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
