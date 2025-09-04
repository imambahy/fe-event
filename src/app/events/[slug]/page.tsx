"use client";

import { useState } from "react";
import { use } from "react";
import { EventWithDetails, TicketType } from "@/types/event.type";
import { TicketSelection } from "@/types/checkout.type";
import { notFound } from "next/navigation";

// hooks buat API calls
import { useEventBySlug } from "@/hooks/api/useEvents";
import { useCreateTransaction } from "@/hooks/api/useTransactions";

// komponen-komponen UI
import EventHeader from "@/components/events/EventHeader";
import EventBanner from "@/components/events/EventBanner";
import EventTabs from "@/components/events/EventTabs";
import EventDescription from "@/components/events/EventDescription";
import TicketSelector from "@/components/events/TicketSelector";
import EventCheckout from "@/components/events/EventCheckout";
import Footer from "@/components/landing/Footer";

// komponen loading buat tampilan sementara
function EventLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <EventHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="bg-gray-200 h-64 rounded-lg mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-gray-200 h-96 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [selectedTab, setSelectedTab] = useState<"description" | "tickets">("description");
  const [ticketSelections, setTicketSelections] = useState<TicketSelection[]>([]);

  // ambil slug dari params pake React.use() buat Next.js 15
  const { slug } = use(params);

  // panggil API buat dapetin event berdasarkan slug
  const { data: eventResponse, isLoading, error } = useEventBySlug(slug);
  
  // hook buat bikin transaction
  const createTransactionMutation = useCreateTransaction();
  
  // ambil data event dari response
  const event = eventResponse?.data;

  // handle kalo lagi loading
  if (isLoading) {
    return <EventLoading />;
  }

  // handle kalo ada error
  if (error || !event) {
    notFound();
  }

  const handleTicketQuantityChange = (ticketTypeId: number, change: number) => {
    setTicketSelections(prev => {
      const existing = prev.find(t => t.ticketTypeId === ticketTypeId);
      const newQuantity = (existing?.quantity || 0) + change;
      
      // cari ticket type buat cek apakah gratis
      const ticketType = event.ticketTypes?.find((t: TicketType) => t.id === ticketTypeId);
      const isFreeTicket = ticketType?.price === 0;
      
      // hitung total tiket gratis yang udah dipilih
      const currentFreeTickets = prev.reduce((total, selection) => {
        const type = event.ticketTypes?.find((t: TicketType) => t.id === selection.ticketTypeId);
        return total + (type?.price === 0 ? selection.quantity : 0);
      }, 0);
      
      // cek limit tiket gratis (max 5 tiket gratis per user)
      const FREE_TICKET_LIMIT = 5;
      if (isFreeTicket && change > 0) {
        const newFreeTickets = currentFreeTickets + change;
        if (newFreeTickets > FREE_TICKET_LIMIT) {
          // jangan kasih lewat limit
          return prev;
        }
      }
      
      if (newQuantity <= 0) {
        return prev.filter(t => t.ticketTypeId !== ticketTypeId);
      }
      
      // cek seat yang tersedia
      if (ticketType && newQuantity > ticketType.availableSeats) {
        return prev; // jangan kasih lewat seat yang tersedia
      }
      
      if (existing) {
        return prev.map(t => 
          t.ticketTypeId === ticketTypeId 
            ? { ...t, quantity: newQuantity }
            : t
        );
      } else {
        return [...prev, { 
          ticketTypeId, 
          ticketType: ticketType?.name || '', 
          price: ticketType?.price || 0, 
          quantity: newQuantity 
        }];
      }
    });
  };

  const handleCheckout = async (checkoutData: {
    pointsToUse: number;
    voucherCode?: string;
    couponCode?: string;
  }) => {
    try {
      // bikin transaction buat tiap ticket selection
      const transactionPromises = ticketSelections.map(selection => 
        createTransactionMutation.mutateAsync({
          eventId: event.id,
          data: {
            ticketTypeId: selection.ticketTypeId,
            quantity: selection.quantity,
            pointsUsed: checkoutData.pointsToUse,
            couponCode: checkoutData.couponCode,
            voucherCode: checkoutData.voucherCode,
          }
        })
      );

      const transactions = await Promise.all(transactionPromises);
      
      // redirect ke payment page dengan data order
      const orderData = {
        eventId: event.id,
        eventTitle: event.title,
        eventLocation: event.location,
        eventDate: event.startDate,
        eventTime: event.time || '18:00',
        ticketSelections,
        totalAmount: ticketSelections.reduce((total, selection) => 
          total + (selection.price * selection.quantity), 0
        ),
        pointsUsed: checkoutData.pointsToUse,
        voucherCode: checkoutData.voucherCode,
        couponCode: checkoutData.couponCode,
      };

      // encode order data buat URL
      const encodedOrderData = encodeURIComponent(JSON.stringify(orderData));
      window.location.href = `/payment?orderData=${encodedOrderData}`;
      
    } catch (error) {
      console.error('Checkout gagal:', error);
      // handle error (tampilin toast, dll)
    }
  };

  const totalAmount = ticketSelections.reduce((total, selection) => 
    total + (selection.price * selection.quantity), 0
  );

  const totalTickets = ticketSelections.reduce((total, selection) => 
    total + selection.quantity, 0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <EventHeader />
      
      <EventBanner event={event} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom Kiri - Detail Event */}
          <div className="lg:col-span-2 space-y-6">
            <EventTabs 
              selectedTab={selectedTab} 
              onTabChange={setSelectedTab} 
            />
            
            {selectedTab === "description" ? (
              <EventDescription event={event} />
            ) : (
              <TicketSelector
                event={event}
                ticketSelections={ticketSelections}
                onTicketQuantityChange={handleTicketQuantityChange}
              />
            )}
          </div>

          {/* Kolom Kanan - Checkout */}
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