"use client";

import { MapPin, Calendar, Clock, User } from "lucide-react";
import { EventWithDetails } from "@/types/event.type";

interface EventDescriptionProps {
  event: EventWithDetails;
}

export default function EventDescription({ event }: EventDescriptionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">About This Event</h2>
        <p className="text-gray-700 leading-relaxed">{event.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700">{event.location}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700">
            {new Date(event.startDate).toLocaleDateString("id-ID")} - {new Date(event.endDate).toLocaleDateString("id-ID")}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700">{event.time}</span>
        </div>
      </div>
    </div>
  );
}
