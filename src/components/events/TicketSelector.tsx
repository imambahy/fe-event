"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import { EventWithDetails, TicketSelection } from "@/types/event.type";

interface TicketSelectorProps {
  event: EventWithDetails;
  ticketSelections: TicketSelection[];
  onTicketQuantityChange: (ticketTypeId: number, change: number) => void;
}

export default function TicketSelector({ 
  event, 
  ticketSelections, 
  onTicketQuantityChange 
}: TicketSelectorProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Select Tickets</h2>
      
      {event.ticketTypes?.map((ticketType) => {
        const selection = ticketSelections.find(t => t.ticketTypeId === ticketType.id);
        const quantity = selection?.quantity || 0;
        
        return (
          <Card key={ticketType.id} className="p-6">
            <CardContent className="p-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{ticketType.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {ticketType.price === 0 
                      ? "Free entry" 
                      : `Rp ${ticketType.price.toLocaleString()}`
                    }
                  </p>
                  <p className="text-sm text-gray-500">
                    {ticketType.availableSeats} seats available
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
                    disabled={quantity >= ticketType.availableSeats}
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
