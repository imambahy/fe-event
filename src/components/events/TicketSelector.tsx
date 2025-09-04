"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, AlertTriangle } from "lucide-react";
import { EventWithDetails } from "@/types/event.type";
import { TicketSelection } from "@/types/checkout.type";

interface TicketSelectorProps {
  event: EventWithDetails;
  ticketSelections: TicketSelection[];
  onTicketQuantityChange: (ticketTypeId: number, change: number) => void;
}

// Constants for free ticket limits
const FREE_TICKET_LIMIT = 5; // Maximum 5 free tickets per user per event

export default function TicketSelector({ 
  event, 
  ticketSelections, 
  onTicketQuantityChange 
}: TicketSelectorProps) {
  // Calculate total free tickets selected
  const totalFreeTickets = ticketSelections.reduce((total, selection) => {
    const ticketType = event.ticketTypes?.find(t => t.id === selection.ticketTypeId);
    return total + (ticketType?.price === 0 ? selection.quantity : 0);
  }, 0);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Select Tickets</h2>
      
      {/* Free Ticket Limit Warning */}
      {totalFreeTickets > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-yellow-800 mb-1">
                Free Ticket Limit: {totalFreeTickets}/{FREE_TICKET_LIMIT}
              </p>
              <p className="text-yellow-700">
                You can select up to {FREE_TICKET_LIMIT} free tickets per event to ensure fair distribution.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {event.ticketTypes?.map((ticketType) => {
        const selection = ticketSelections.find(t => t.ticketTypeId === ticketType.id);
        const quantity = selection?.quantity || 0;
        const isFreeTicket = ticketType.price === 0;
        
        // Check if adding more free tickets would exceed limit
        const canAddMore = isFreeTicket 
          ? totalFreeTickets < FREE_TICKET_LIMIT 
          : quantity < ticketType.availableSeats;
        
        return (
          <Card key={ticketType.id} className="p-6">
            <CardContent className="p-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{ticketType.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {isFreeTicket ? "Free entry" : `Rp ${ticketType.price.toLocaleString('en-US')}`}
                  </p>
                  <p className="text-sm text-gray-500">
                    {ticketType.availableSeats} seats available
                    {isFreeTicket && (
                      <span className="text-orange-600 font-medium ml-2">
                        • Max {FREE_TICKET_LIMIT} per user
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onTicketQuantityChange(ticketType.id, -1)}
                    disabled={quantity === 0}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onTicketQuantityChange(ticketType.id, 1)}
                    disabled={!canAddMore}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
