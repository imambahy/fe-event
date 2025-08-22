"use client";

import { Search } from "lucide-react";
import EventCard from "./EventCard";
import { EventWithDetails } from "@/types/event.type";

interface EventsSectionProps {
  events: EventWithDetails[];
  selectedCategory: string;
}

export default function EventsSection({ events, selectedCategory }: EventsSectionProps) {
  return (
    <section className="py-12" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedCategory === "All"
                ? "All Events"
                : `${selectedCategory} Events`}
            </h2>
            <p className="text-gray-600">
              {events.length} events found
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* No Results */}
        {events.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No events found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
