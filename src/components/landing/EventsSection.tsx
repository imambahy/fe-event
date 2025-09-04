"use client";

import { memo, useMemo } from "react";
import { Search } from "lucide-react";
import EventCardOptimized from "./EventCardOptimized";
import { EventWithDetails } from "@/types/event.type";

interface EventsSectionProps {
  events: EventWithDetails[];
}

// MEMOIZED: EventsSection component for better performance
const EventsSection = memo<EventsSectionProps>(({ events }) => {
  // MEMOIZED: events count for display
  const eventsCount = useMemo(() => events.length, [events]);

  // MEMOIZED: no results component
  const NoResults = useMemo(() => (
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
  ), []);

  return (
    <section className="py-12" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              All Events
            </h2>
            <p className="text-gray-600">
              {eventsCount} events found
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCardOptimized key={event.id} event={event} />
          ))}
        </div>

        {/* No Results */}
        {eventsCount === 0 && NoResults}
      </div>
    </section>
  );
});

EventsSection.displayName = "EventsSection";

export default EventsSection;
