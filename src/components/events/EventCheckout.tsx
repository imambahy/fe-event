"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock, User, Ticket } from "lucide-react";
import { EventWithDetails } from "@/types/event.type";
import { TicketSelection } from "@/types/checkout.type";

interface EventCheckoutProps {
  event: EventWithDetails;
  ticketSelections: TicketSelection[];
}

export default function EventCheckout({ event, ticketSelections }: EventCheckoutProps) {
  const getTotalPrice = () => {
    return ticketSelections.reduce((total, selection) => {
      const ticketType = event.ticketTypes?.find(t => t.id === selection.ticketTypeId);
      return total + (ticketType?.price || 0) * selection.quantity;
    }, 0);
  };

  const getTotalQuantity = () => {
    return ticketSelections.reduce((total, selection) => total + selection.quantity, 0);
  };

  const handleCheckout = () => {
    if (ticketSelections.length === 0) {
      return;
    }

    // Create order summary
    const orderSummary = {
      eventId: event.id,
      eventTitle: event.title,
      eventLocation: event.location,
      eventDate: event.startDate,
      eventTime: event.time || "18:00",
      ticketSelections: ticketSelections.map(selection => {
        const ticketType = event.ticketTypes?.find(t => t.id === selection.ticketTypeId);
        return {
          ticketTypeId: selection.ticketTypeId,
          ticketType: ticketType?.name || "Unknown",
          quantity: selection.quantity,
          price: ticketType?.price || 0,
        };
      }),
      totalAmount: getTotalPrice(),
      pointsUsed: 0, // Will be calculated in payment page
      voucherCode: undefined,
      couponCode: undefined,
    };

    // Encode order summary for URL
    const encodedOrder = encodeURIComponent(JSON.stringify(orderSummary));
    
    // Redirect ke payment page
    window.location.href = `/payment?order=${encodedOrder}`;
  };

  return (
    <div className="sticky top-8">
      <Card className="p-6">
        <CardContent className="p-0">
          <h3 className="text-lg font-semibold mb-4">{event.title}</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">{event.location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">
                {new Date(event.startDate).toLocaleDateString("id-ID")} - {new Date(event.endDate).toLocaleDateString("id-ID")}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">{event.time}</span>
            </div>
          </div>

          {getTotalQuantity() === 0 ? (
            <div className="flex items-center space-x-2 mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <Ticket className="w-5 h-5 text-orange-500" />
              <span className="text-sm text-orange-700">
                You haven't selected any tickets. Please choose one first in the <strong>Tickets</strong> tab.
              </span>
            </div>
          ) : (
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Selected tickets:</p>
              {ticketSelections.map((selection) => {
                const ticketType = event.ticketTypes?.find(t => t.id === selection.ticketTypeId);
                return (
                  <div key={selection.ticketTypeId} className="flex justify-between text-sm mb-1">
                    <span>{ticketType?.name} x{selection.quantity}</span>
                    <span>Rp {(ticketType?.price || 0) * selection.quantity}</span>
                  </div>
                );
              })}
            </div>
          )}

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total price</span>
                              <span className="font-semibold text-lg">Rp {getTotalPrice().toLocaleString('en-US')}</span>
            </div>
          </div>

          <Button 
            onClick={handleCheckout}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            disabled={getTotalQuantity() === 0}
          >
            Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}