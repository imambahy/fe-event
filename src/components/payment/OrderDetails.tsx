"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { TicketSelection } from "@/types/checkout.type";

interface OrderDetailsProps {
  eventTitle: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
  totalAmount: number;
  status: string;
  orderId: string;
  expiresAt: Date;
  ticketSelections: TicketSelection[];
}

export default function OrderDetails({
  eventTitle,
  eventLocation,
  eventDate,
  eventTime,
  totalAmount,
  status,
  orderId,
  expiresAt,
  ticketSelections
}: OrderDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Event Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{eventTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{eventLocation}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{new Date(eventDate).toLocaleDateString('en-US')}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{eventTime}</span>
          </div>
        </CardContent>
      </Card>

      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
          <Badge variant="outline" className="w-fit">
            {status.replace(/_/g, ' ')}
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Selected Tickets */}
          <div className="space-y-3">
            <h4 className="font-medium">Selected Tickets:</h4>
            {ticketSelections.map((ticket, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <span className="font-medium">{ticket.ticketType}</span>
                  <span className="text-sm text-gray-600 ml-2">x{ticket.quantity}</span>
                </div>
                                  <span className="font-medium">
                    Rp {(ticket.price * ticket.quantity).toLocaleString('en-US')}
                  </span>
              </div>
            ))}
          </div>

          <Separator />

          {/* Total */}
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>Rp {totalAmount.toLocaleString('en-US')}</span>
          </div>
        </CardContent>
      </Card>

      {/* Order Info */}
      <Card>
        <CardHeader>
          <CardTitle>Order Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Order ID:</span>
            <span className="font-mono">{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span>Order Date:</span>
            <span>{new Date().toLocaleDateString('en-US')}</span>
          </div>
          <div className="flex justify-between">
            <span>Expires:</span>
            <span>{formatDistanceToNow(expiresAt, { addSuffix: true })}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
