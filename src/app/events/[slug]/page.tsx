"use client";

import { useState } from "react";
import { use } from "react";
import { EventWithDetails, TicketSelection } from "@/types/event.type";
import { dummyEvents } from "@/data/events";
import { notFound } from "next/navigation";

// Components
import EventHeader from "@/components/events/EventHeader";
import EventBanner from "@/components/events/EventBanner";
import EventTabs from "@/components/events/EventTabs";
import EventDescription from "@/components/events/EventDescription";
import TicketSelector from "@/components/events/TicketSelector";
import EventCheckout from "@/components/events/EventCheckout";
import Footer from "@/components/landing/Footer";

export default function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [selectedTab, setSelectedTab] = useState<"description" | "tickets">("description");
  const [ticketSelections, setTicketSelections] = useState<TicketSelection[]>([]);

  // Unwrap params using React.use() for Next.js 15
  const { slug } = use(params);

  // Find event by slug
  const event = dummyEvents.find(e => e.slug === slug);
  
  if (!event) {
    notFound();
  }

  const handleTicketQuantityChange = (ticketTypeId: number, change: number) => {
    setTicketSelections(prev => {
      const existing = prev.find(t => t.ticketTypeId === ticketTypeId);
      const newQuantity = (existing?.quantity || 0) + change;
      
      if (newQuantity <= 0) {
        return prev.filter(t => t.ticketTypeId !== ticketTypeId);
      }
      
      if (existing) {
        return prev.map(t => 
          t.ticketTypeId === ticketTypeId 
            ? { ...t, quantity: newQuantity }
            : t
        );
      } else {
        return [...prev, { ticketTypeId, quantity: newQuantity }];
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <EventHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <EventBanner event={event} />
            
            <EventTabs 
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
            />

            {/* Tab Content */}
            {selectedTab === "description" && (
              <EventDescription event={event} />
            )}

            {selectedTab === "tickets" && (
              <TicketSelector
                event={event}
                ticketSelections={ticketSelections}
                onTicketQuantityChange={handleTicketQuantityChange}
              />
            )}
          </div>

          {/* Right Sidebar - Event Summary & Checkout */}
          <div className="lg:col-span-1">
            <EventCheckout 
              event={event}
              ticketSelections={ticketSelections}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
