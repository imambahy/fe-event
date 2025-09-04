"use client";

import { useSearchParams } from "next/navigation";

// Custom hooks
import { useTicketDownloadConfirmation } from "@/hooks/useTicketDownloadConfirmation";
import { useTransactionById } from "@/hooks/api/useTransactions";

// Components
import PageHeader from "@/components/layout/PageHeader";
import SuccessHeader from "@/components/confirmation/SuccessHeader";
import TicketCard from "@/components/confirmation/TicketCard";
import OrderSummaryCard from "@/components/confirmation/OrderSummaryCard";
import QuickActionsCard from "@/components/confirmation/QuickActionsCard";
import HelpSupportCard from "@/components/confirmation/HelpSupportCard";

export default function PaymentConfirmationPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { downloading, downloadTicket } = useTicketDownloadConfirmation();

  // Get transaction data from API
  const transactionId = orderId ? parseInt(orderId.replace('order-', '')) : 0;
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

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Payment Confirmation" showBackButton={false} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SuccessHeader />
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Ticket Details */}
          <div className="space-y-6">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                downloading={downloading}
                onDownload={downloadTicket}
              />
            ))}
          </div>

          {/* Right Column - Order Summary & Actions */}
          <div className="space-y-6">
            <OrderSummaryCard 
              orderId={orderId || ""} 
              totalAmount={transaction.totalAmount} 
            />
            <QuickActionsCard />
            <HelpSupportCard />
          </div>
        </div>
      </div>
    </div>
  );
}