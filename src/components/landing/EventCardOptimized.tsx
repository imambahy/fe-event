"use client";

import { memo, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Star,
  Heart,
  Share2,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { EventWithDetails } from "@/types/event.type";

interface EventCardProps {
  event: EventWithDetails;
}

// Memoized component for better performance
const EventCard = memo(function EventCard({ event }: EventCardProps) {
  // Performance monitoring removed to reduce console logs

  // OPTIMIZED: Memoize price calculation untuk mencegah re-computation
  const { lowestPrice, priceDisplay } = useMemo(() => {
    const lowest = event.ticketTypes && event.ticketTypes.length > 0 
      ? Math.min(...event.ticketTypes.map(ticket => ticket.price))
      : 0;
    
    const display = lowest === 0 ? "Free" : `Rp ${lowest.toLocaleString('en-US')}`;
    
    return { lowestPrice: lowest, priceDisplay: display };
  }, [event.ticketTypes]);

  // OPTIMIZED: Memoize date formatting untuk mencegah re-computation
  const { formattedDate, formattedTime } = useMemo(() => {
    const date = new Date(event.startDate).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const time = event.time || new Date(event.startDate).toLocaleTimeString("en-US", { 
      hour: "2-digit", 
      minute: "2-digit" 
    });

    return { formattedDate: date, formattedTime: time };
  }, [event.startDate, event.time]);

  // OPTIMIZED: Memoize attendees count formatting
  const attendeesDisplay = useMemo(() => {
    return (event.totalAttendees || 0).toLocaleString('en-US');
  }, [event.totalAttendees]);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Event Placeholder with category badge */}
      <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-4xl font-bold mb-2">
            {event.title.charAt(0).toUpperCase()}
          </div>
          <div className="text-sm opacity-90">
            {event.category}
          </div>
        </div>
        {event.isFeatured && (
          <Badge className="absolute top-3 left-3 bg-yellow-500 text-white">
            Featured
          </Badge>
        )}
        {lowestPrice === 0 && (
          <Badge className="absolute top-3 right-3 bg-green-500 text-white">
            Free
          </Badge>
        )}

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
            <Heart className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Event Content */}
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-xs">
            {event.category}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{event.averageRating || 0}</span>
          </div>
        </div>
        <CardTitle className="text-lg leading-tight">
          {event.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {event.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{formattedTime}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>{attendeesDisplay} attendees</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-purple-600">
            {priceDisplay}
          </div>
          <div className="flex gap-2">
            <Link href={`/events/${event.slug}`}>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-1" />
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

export default EventCard;
