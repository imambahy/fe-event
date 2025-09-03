"use client";

import { useSearchParams } from "next/navigation";

// Custom hooks
import { useTransactionById } from "@/hooks/api/useTransactions";
import { useState, Suspense } from "react";

// Components
import PageHeader from "@/components/layout/PageHeader";
import SuccessHeader from "@/components/confirmation/SuccessHeader";
import TicketCard from "@/components/confirmation/TicketCard";
import OrderSummaryCard from "@/components/confirmation/OrderSummaryCard";
import QuickActionsCard from "@/components/confirmation/QuickActionsCard";
import HelpSupportCard from "@/components/confirmation/HelpSupportCard";

export default function PaymentConfirmationPage() {
  const searchParams = useSearchParams();
  const transactionIdParam = searchParams.get("transactionId");
  const orderId = searchParams.get("orderId"); // Legacy support
  
  // Simple download state management
  const [downloading, setDownloading] = useState<string | null>(null);
  
  const downloadTicket = async (ticketId: string) => {
    setDownloading(ticketId);
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Downloading ticket:', ticketId);
      // TODO: Implement actual download logic
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setDownloading(null);
    }
  };

  // Get transaction data from API - support both new and legacy params
  const transactionId = transactionIdParam ? parseInt(transactionIdParam) : 
                       orderId ? parseInt(orderId.replace('order-', '')) : 0;
  const { data: transactionData, isLoading, error } = useTransactionById(transactionId);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading confirmation details...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error || !transactionData?.data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error Loading Confirmation</h2>
          <p className="text-gray-600 mb-6">
            Unable to load payment confirmation details.
          </p>
          <a href="/" className="text-blue-600 hover:underline">
            Back to Events
          </a>
        </div>
      </div>
    );
  }

  const transaction = transactionData.data;

  // Generate tickets from transaction data
  const tickets: Array<{
    id: string;
    ticketType: string;
    eventTitle: string;
    eventLocation: string;
    eventDate: string;
    eventTime: string;
  }> = [{
    id: `ticket-${transaction.id}`,
    ticketType: transaction.ticketType?.name || 'Ticket',
    eventTitle: transaction.event?.title || 'Event',
    eventLocation: transaction.event?.location || 'Location',
    eventDate: transaction.event?.startDate || '2025-01-01',
    eventTime: transaction.event?.time || '18:00',
  }];

  // Check transaction status to show appropriate message
  const isWaitingForConfirmation = transactionData?.data?.status === 'WAITING_FOR_CONFIRMATION';
  const isDone = transactionData?.data?.status === 'DONE';
  const isRejected = transactionData?.data?.status === 'REJECTED';

  return (
    <Suspense>
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Payment Confirmation" showBackButton={false} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dynamic header based on status */}
        {isWaitingForConfirmation && (
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Under Review</h1>
            <p className="text-gray-600">Your payment proof has been submitted and is awaiting organizer validation.</p>
          </div>
        )}
        {isDone && <SuccessHeader />}
        {isRejected && (
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Rejected</h1>
            <p className="text-gray-600">Your payment proof was rejected. Please contact support for assistance.</p>
          </div>
        )}
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Ticket Details */}
          <div className="space-y-6">
            {tickets.map((ticket) => (
                            <TicketCard 
                key={ticket.id}
                ticket={ticket}
              />
            ))}
          </div>

          {/* Right Column - Order Summary & Actions */}  
          <div className="space-y-6">
            <OrderSummaryCard 
              orderId={transactionIdParam || orderId || ""} 
              totalAmount={transaction.totalAmount}
              status={transaction.status}
            />
            <QuickActionsCard />
            <HelpSupportCard />
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  );
}