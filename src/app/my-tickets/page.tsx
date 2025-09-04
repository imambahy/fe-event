"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock as ClockIcon, CheckCircle } from "lucide-react";

// hooks custom
import { useTicketManagement } from "@/hooks/useTicketManagement";
import { useTransactions } from "@/hooks/api/useTransactions";

// komponen-komponen UI
import PageHeader from "@/components/layout/PageHeader";
import TicketCard from "@/components/tickets/TicketCard";

import ReviewSection from "@/components/tickets/ReviewSection";
import EmptyState from "@/components/tickets/EmptyState";

export default function MyTicketsPage() {
  // ambil transactions dari API
  const { data: transactionsData, isLoading, error } = useTransactions();

  const {
    downloading,
    downloadTicket,
    showReviewForm,
    reviewData,
    setShowReviewForm,
    setReviewData,
    submitReview,
    resetReviewForm,
    getStatusBadge,
    formatEventDate,
  } = useTicketManagement();

  // tampilin loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading tiket kamu...</p>
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
            Gagal load tiket kamu. Coba lagi nanti.
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
  
  const upcomingTickets = transactions
    .filter(t => t.status === 'DONE' && new Date(t.event.startDate) > new Date())
    .map(t => ({
      id: `ticket-${t.id}`,
      eventTitle: t.event.title,
      eventLocation: t.event.location,
      eventDate: t.event.startDate,
      eventTime: t.event.time || '18:00',
      ticketType: t.ticketType.name,
      status: 'upcoming' as const,
      price: t.unitPrice,
      quantity: t.quantity,
      orderId: `order-${t.id}`,
      hasAttended: false,
      canReview: false,
      hasReviewed: false,
    }));

  const completedTickets = transactions
    .filter(t => t.status === 'DONE' && new Date(t.event.startDate) <= new Date())
    .map(t => ({
      id: `ticket-${t.id}`,
      eventTitle: t.event.title,
      eventLocation: t.event.location,
      eventDate: t.event.startDate,
      eventTime: t.event.time || '18:00',
      ticketType: t.ticketType.name,
      status: 'completed' as const,
      price: t.unitPrice,
      quantity: t.quantity,
      orderId: `order-${t.id}`,
      hasAttended: true, 
      canReview: true,  
      hasReviewed: false,
    }));

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