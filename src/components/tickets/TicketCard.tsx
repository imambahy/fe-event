"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Download
} from "lucide-react";

interface Ticket {
  id: string;
  orderId: string;
  eventTitle: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
  ticketType: string;
  status: "confirmed" | "upcoming" | "completed";
  hasAttended: boolean;
  canReview: boolean;
  hasReviewed: boolean;
  price: number;

}

interface TicketCardProps {
  ticket: Ticket;
  statusBadge: { variant: string; className: string; text: string };
  formattedDate: string;
  downloading: string | null;
  onDownload: (ticket: Ticket) => void;
  children?: React.ReactNode; // For review section
}

export default function TicketCard({
  ticket,
  statusBadge,
  formattedDate,
  downloading,
  onDownload,
  children
}: TicketCardProps) {
  const isCompleted = ticket.status === 'completed';
  const headerGradient = isCompleted 
    ? "bg-gradient-to-r from-green-50 to-blue-50 border-b"
    : "bg-gradient-to-r from-blue-50 to-purple-50 border-b";

  return (
    <Card className="overflow-hidden">
      <CardHeader className={headerGradient}>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{ticket.eventTitle}</CardTitle>
            <p className="text-gray-600 mt-1">{ticket.ticketType}</p>
          </div>
          <Badge variant={statusBadge.variant as any} className={statusBadge.className}>
            {statusBadge.text}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event Details */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 mb-3">Event Details</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">{ticket.eventLocation}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Date</p>
                  <p className="text-gray-600">{formattedDate}</p>
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

          {/* Right Column - Review Section */}
          <div className="space-y-4">
            {children}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => onDownload(ticket)}
            disabled={downloading === ticket.id}
          >
            <Download className="w-4 h-4 mr-2" />
            {downloading === ticket.id ? 'Downloading...' : 'Download Ticket'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
