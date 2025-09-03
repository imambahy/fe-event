"use client";

import { memo, useMemo, useEffect } from "react";
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
import Image from "next/image";
import Link from "next/link";
import { EventWithDetails } from "@/types/event.type";

interface EventCardProps {
  event: EventWithDetails;
}

// Memoized component for better performance
const EventCard = memo(function EventCard({ event }: EventCardProps) {
  // PERFORMANCE MONITORING: Track card render performance
  useEffect(() => {
    if (typeof window !== 'undefined') {
      performance.mark(`event-card-${event.id}-render-start`);
      
      return () => {
        performance.mark(`event-card-${event.id}-render-end`);
        performance.measure(`event-card-${event.id}-render`, `event-card-${event.id}-render-start`, `event-card-${event.id}-render-end`);
        
        // Log performance metrics for slow renders
        const measure = performance.getEntriesByName(`event-card-${event.id}-render`)[0];
        if (measure && measure.duration > 16) { // Log if render takes more than 16ms (60fps threshold)
          console.log(`🐌 Slow EventCard Render (${event.id}):`, {
            duration: `${measure.duration.toFixed(2)}ms`,
            eventTitle: event.title,
            timestamp: new Date().toISOString()
          });
        }
      };
    }
  }, [event.id, event.title]);

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
      {/* Event Image with optimized loading */}
      <div className="relative">
        <Image
          src={event.image || "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop&crop=center"}
          alt={event.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
          priority={false} // OPTIMIZED: Set to false for non-critical images
          loading="lazy" // OPTIMIZED: Always lazy load for better performance
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
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
