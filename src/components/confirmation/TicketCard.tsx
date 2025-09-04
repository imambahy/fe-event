"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Download } from "lucide-react";

interface Ticket {
  id: string;
  ticketType: string;
  eventTitle: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
}

interface TicketCardProps {
  ticket: Ticket;
  downloading: string | null;
  onDownload: (ticketId: string) => void;
}

export default function TicketCard({ ticket, downloading, onDownload }: TicketCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 border-b">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">
              {ticket.ticketType}
            </CardTitle>
            <p className="text-gray-600 mt-1">{ticket.eventTitle}</p>
          </div>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800"
          >
            Confirmed
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Event Details
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">Location</p>
                <p className="text-gray-600">
                  {ticket.eventLocation}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">Date</p>
                <p className="text-gray-600">
                  {new Date(ticket.eventDate).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">Time</p>
                <p className="text-gray-600">{ticket.eventTime}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onDownload(ticket.id)}
            disabled={downloading === ticket.id}
          >
            <Download className="w-4 h-4 mr-2" />
            {downloading === ticket.id
              ? "Downloading..."
              : "Download Ticket"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
