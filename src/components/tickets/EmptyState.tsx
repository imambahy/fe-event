"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, CheckCircle } from "lucide-react";

interface EmptyStateProps {
  type: "upcoming" | "completed";
}

export default function EmptyState({ type }: EmptyStateProps) {
  const isUpcoming = type === "upcoming";
  const Icon = isUpcoming ? Clock : CheckCircle;
  const title = isUpcoming ? "No Upcoming Events" : "No Completed Events";
  const description = isUpcoming 
    ? "You don't have any upcoming events." 
    : "You haven't attended any events yet.";

  return (
    <Card>
      <CardContent className="text-center py-12">
        <Icon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
