"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock as ClockIcon, CheckCircle } from "lucide-react";

// hooks custom
import { useTransactions } from "@/hooks/api/useTransactions";
import { useCreateReview, useUserReviews } from "@/hooks/api/useReviews";
import { useState } from "react";

// komponen-komponen UI
import PageHeader from "@/components/shared/PageHeader";
import TicketCard from "@/components/tickets/TicketCard";
import ReviewSection from "@/components/tickets/ReviewSection";
import EmptyState from "@/components/tickets/EmptyState";

export default function MyTicketsPage() {
  // ambil transactions dari API
  const { data: transactionsData, isLoading, error } = useTransactions();
  
  // ambil reviews user untuk cek apakah sudah review
  const { data: userReviewsData } = useUserReviews();

  // state management untuk review dan download
  const [showReviewForm, setShowReviewForm] = useState<string | null>(null);
  const [reviewData, setReviewData] = useState({ rating: 0, comment: "" });
  const [downloading, setDownloading] = useState<string | null>(null);

  // review mutations
  const createReviewMutation = useCreateReview();

  // helper function untuk cek apakah sudah review event
  const hasReviewedEvent = (eventId: number) => {
    const userReviews = userReviewsData?.data || [];
    return userReviews.some(review => review.eventId === eventId);
  };

  // utility functions
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return { variant: "default", className: "bg-green-100 text-green-800", text: "Confirmed" };
      case "pending":
        return { variant: "default", className: "bg-yellow-100 text-yellow-800", text: "Under Review" };
      case "upcoming":
        return { variant: "default", className: "bg-blue-100 text-blue-800", text: "Awaiting Payment" };
      case "completed":
        return { variant: "default", className: "bg-gray-100 text-gray-800", text: "Completed" };
      default:
        return { variant: "outline", className: "", text: status };
    }
  };

  const formatEventDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const downloadTicket = async (ticket: any) => {
    setDownloading(ticket.id);
    try {
      // Create a simple ticket PDF-like content
      const ticketContent = `
EVENT TICKET
============

Event: ${ticket.eventTitle}
Type: ${ticket.ticketType}
Date: ${new Date(ticket.eventDate).toLocaleDateString()}
Time: ${ticket.eventTime}
Location: ${ticket.eventLocation}
Order ID: ${ticket.orderId}
Status: ${ticket.status.toUpperCase()}

Quantity: ${ticket.quantity}
Price: Rp ${ticket.price.toLocaleString()}

Thank you for attending!
========================
      `.trim();

      // Create and download the file
      const blob = new Blob([ticketContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `ticket-${ticket.orderId}-${ticket.eventTitle.replace(/[^a-zA-Z0-9]/g, '-')}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      console.log('Successfully downloaded ticket:', ticket.orderId);
      
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download ticket. Please try again.');
    } finally {
      setDownloading(null);
    }
  };

  const submitReview = async (ticketId: string) => {
    try {
      // Extract transaction ID from ticketId (format: "ticket-{transactionId}")
      const transactionId = parseInt(ticketId.replace('ticket-', ''));
      
      // Find the transaction to get the eventId
      const transaction = transactions?.find(t => t.id === transactionId);
      if (!transaction) {
        alert('Transaction not found');
        return;
      }

      // Submit review
      await createReviewMutation.mutateAsync({
        eventId: transaction.eventId,
        data: {
          rating: reviewData.rating,
          comment: reviewData.comment
        }
      });

      console.log("Review submitted successfully for event:", transaction.eventId);
      
      // Reset form
      setShowReviewForm(null);
      setReviewData({ rating: 0, comment: "" });
      
      // Show success message
      alert('Review submitted successfully!');
      
    } catch (error) {
      console.error('Failed to submit review:', error);
      alert('Failed to submit review. Please try again.');
    }
  };

  const resetReviewForm = () => {
    setShowReviewForm(null);
    setReviewData({ rating: 0, comment: "" });
  };

  // tampilin loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your ticket ...</p>
        </div>
      </div>
    );
  }

  // tampilin error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error Loading Tickets</h2>
          <p className="text-gray-600 mb-6">
            Failed to load your ticket. try again
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-blue-600 hover:underline"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // proses transactions jadi tickets
  const transactions = transactionsData?.data || [];
  
  console.log('Raw transactions data:', transactions);
  console.log('Transactions count:', transactions.length);
  
  // Filter all valid transactions first
  const validTransactions = transactions.filter(t => {
    const validStatuses = ['DONE', 'WAITING_FOR_CONFIRMATION', 'WAITING_FOR_PAYMENT'];
    const isValidStatus = validStatuses.includes(t.status);
    
    console.log(`Transaction ${t.id}: status=${t.status}, isValidStatus=${isValidStatus}`);
    
    // Get event data from t.event (direct relation) or fallback
    const eventData = t.event;
    if (!eventData?.startDate) {
      console.warn('Transaction missing event data:', t.id);
      return false;
    }
    
    return isValidStatus;
  });

  console.log('Valid transactions:', validTransactions.length);

  const upcomingTickets = validTransactions
    .filter(t => {
      const eventData = t.event;
      const isEventPast = new Date(eventData.startDate) < new Date();
      
      // Show in upcoming if:
      // 1. Event is in the future, OR
      // 2. Event is past but transaction is not DONE (still processing)
      const shouldShowInUpcoming = !isEventPast || t.status !== 'DONE';
      
      console.log(`Transaction ${t.id}: eventPast=${isEventPast}, status=${t.status}, showInUpcoming=${shouldShowInUpcoming}`);
      
      return shouldShowInUpcoming;
    })
    .map(t => {
      // Get event data from t.event (direct relation) or fallback
      const eventData = t.event;
      
      return {
        id: `ticket-${t.id}`,
        eventTitle: eventData?.title || 'Event',
        eventLocation: eventData?.location || 'Location',
        eventDate: eventData?.startDate || new Date().toISOString(),
        eventTime: eventData?.time || '18:00',
        ticketType: t.ticketType?.name || 'Ticket',
        status: (() => {
          const eventData = t.event;
          const isEventPast = eventData ? new Date(eventData.startDate) < new Date() : false;
          
          if (t.status === 'DONE') {
            return isEventPast ? 'completed' as const : 'confirmed' as const;
          } else if (t.status === 'WAITING_FOR_CONFIRMATION') {
            return 'pending' as const;
          } else if (t.status === 'WAITING_FOR_PAYMENT') {
            return 'upcoming' as const;
          } else {
            return 'pending' as const;
          }
        })(),
        price: t.unitPrice,
        quantity: t.quantity,
        orderId: `order-${t.id}`,
        hasAttended: false,
        canReview: false,
        hasReviewed: false,
      };
    });

  console.log('Upcoming tickets after processing:', upcomingTickets);
  console.log('Upcoming tickets count:', upcomingTickets.length);

  const completedTickets = validTransactions
    .filter(t => {
      if (t.status !== 'DONE') return false;
      
      // Get event data from t.event (direct relation) or fallback
      const eventData = t.event;
      const isEventPast = new Date(eventData.startDate) < new Date();
      
      // Show in completed if transaction is DONE and event is past
      return isEventPast;
    })
    .map(t => {
      // Get event data from t.event (direct relation) or fallback
      const eventData = t.event;
      
      return {
        id: `ticket-${t.id}`,
        eventTitle: eventData?.title || 'Event',
        eventLocation: eventData?.location || 'Location',
        eventDate: eventData?.startDate || new Date().toISOString(),
        eventTime: eventData?.time || '18:00',
        ticketType: t.ticketType?.name || 'Ticket',
        status: 'completed' as const,
        price: t.unitPrice,
        quantity: t.quantity,
        orderId: `order-${t.id}`,
        hasAttended: true,
        canReview: !hasReviewedEvent(t.eventId),
        hasReviewed: hasReviewedEvent(t.eventId),
      };
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="My Tickets" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming" className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              Upcoming ({upcomingTickets.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Completed ({completedTickets.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {upcomingTickets.length === 0 ? (
              <EmptyState type="upcoming" />
            ) : (
              upcomingTickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  statusBadge={getStatusBadge(ticket.status)}
                  formattedDate={formatEventDate(ticket.eventDate)}
                  downloading={downloading}
                  onDownload={downloadTicket}
                >

                </TicketCard>
              ))
            )}
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            {completedTickets.length === 0 ? (
              <EmptyState type="completed" />
            ) : (
              completedTickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  statusBadge={getStatusBadge(ticket.status)}
                  formattedDate={formatEventDate(ticket.eventDate)}
                  downloading={downloading}
                  onDownload={downloadTicket}
                >
                  <ReviewSection
                    ticket={ticket}
                    showReviewForm={showReviewForm}
                    reviewData={reviewData}
                    onShowReviewForm={setShowReviewForm}
                    onSetReviewData={setReviewData}
                    onSubmitReview={submitReview}
                    onResetReviewForm={resetReviewForm}
                  />
                </TicketCard>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}