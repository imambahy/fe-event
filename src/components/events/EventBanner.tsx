"use client";

import { EventWithDetails } from "@/types/event.type";

interface EventBannerProps {
  event: EventWithDetails;
}

export default function EventBanner({ event }: EventBannerProps) {
  return (
    <div className="relative mb-8">
      <div className="w-full h-64 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
            <p className="text-xl">{event.location}</p>
            <p className="text-lg">
              {new Date(event.startDate).toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
              })} | {event.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
