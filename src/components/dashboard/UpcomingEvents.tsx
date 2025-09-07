"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import Link from "next/link";

interface UpcomingEvent {
  id: number;
  title: string;
  startDate: string;
  location: string;
  totalCapacity: number;
  totalTicketsSold: number;
}

interface UpcomingEventsProps {
  events: UpcomingEvent[];
  loading?: boolean;
}

export function UpcomingEvents({ events, loading = false }: UpcomingEventsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }),
      time: date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };
  };

  const getAvailabilityStatus = (sold: number, capacity: number) => {
    const percentage = (sold / capacity) * 100;
    if (percentage >= 90) return { label: 'Almost Full', color: 'bg-red-100 text-red-800' };
    if (percentage >= 70) return { label: 'Getting Full', color: 'bg-yellow-100 text-yellow-800' };
    return { label: 'Available', color: 'bg-green-100 text-green-800' };
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Upcoming Events
          </CardTitle>
          <CardDescription>Your next events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Upcoming Events
        </CardTitle>
        <CardDescription>Your next events</CardDescription>
      </CardHeader>
      <CardContent>
        {events.length === 0 ? (
          <div className="text-center py-8">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No upcoming events</p>
            <p className="text-sm text-gray-400 mt-1">
              Create your first event to get started
            </p>
            <div className="mt-4">
              <Link href="/dashboard/events">
                <Button>
                  Create Event
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {events.map((event) => {
              const dateInfo = formatDate(event.startDate);
              const availability = getAvailabilityStatus(event.totalTicketsSold, event.totalCapacity);

              return (
                <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex flex-col items-center justify-center text-xs font-medium">
                      <div className="text-blue-600">{dateInfo.day}</div>
                      <div className="text-blue-500">{dateInfo.month}</div>
                    </div>
                    <div>
                      <div className="font-medium text-sm">{event.title}</div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </span>
                        <span>{dateInfo.time}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {event.totalTicketsSold}/{event.totalCapacity} tickets
                        </Badge>
                        <Badge className={`text-xs ${availability.color}`}>
                          {availability.label}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={`/dashboard/events/${event.id}`}>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}

            {events.length >= 5 && (
              <div className="pt-3 border-t">
                <Link href="/dashboard/events">
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View All Events
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
