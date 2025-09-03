"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CreditCard } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

// hooks custom
import { useOrderData } from "@/hooks/useOrderData";
import { usePayment } from "@/hooks/usePayment";
import { useUploadPaymentProof } from "@/hooks/api/useTransactions";
import { useAuth } from "@/contexts/AuthContext";
import { useTransactionById } from "@/hooks/api/useTransactions";

// komponen-komponen UI
import PageHeader from "@/components/layout/PageHeader";
import PaymentExpirationAlert from "@/components/payment/PaymentExpirationAlert";
import PaymentInstructions from "@/components/payment/PaymentInstructions";
import OrderDetails from "@/components/payment/OrderDetails";
import { PaymentUpload } from "@/components/payment/PaymentUpload";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get('transactionId');
  const orderParam = searchParams.get('order');
  
  // Debug logs
  console.log('Payment page params:', { transactionId, orderParam });
  
  // Fetch transaction from backend if transactionId is provided
  const { data: transactionData, isLoading: transactionLoading, error: transactionError } = useTransactionById(
    transactionId ? parseInt(transactionId) : 0
  );
  
  // Handle both flows: new transactionId flow and legacy order flow
  const { orderSummary, isValid } = useOrderData();
  
  // If we have transactionId but no order data, create order summary from transaction
  const effectiveOrderSummary = orderSummary || (transactionData?.data ? {
    eventId: transactionData.data.eventId,
    eventTitle: transactionData.data.event?.title || 'Event',
    eventLocation: transactionData.data.event?.location || 'Location',
    eventDate: transactionData.data.event?.startDate || '',
    eventTime: transactionData.data.event?.time || '18:00',
    ticketSelections: [{
      ticketTypeId: transactionData.data.ticketTypeId,
      ticketType: transactionData.data.ticketType?.name || 'Ticket',
      quantity: transactionData.data.quantity,
      price: transactionData.data.unitPrice,
    }],
    totalAmount: transactionData.data.totalAmount,
    pointsUsed: transactionData.data.pointsUsed || 0,
    voucherCode: undefined,
    couponCode: undefined,
  } : null);
  
  const effectiveIsValid = isValid || (transactionId && transactionData?.data);
  
  // Debug logs after data is available
  console.log('Transaction data:', transactionData?.data);
  console.log('Effective order summary:', effectiveOrderSummary);
  console.log('Effective is valid:', effectiveIsValid);
  
  const { 
    timeLeft, 
    isExpired, 
    orderId, 
    formatTimeLeft 
  } = usePayment(effectiveOrderSummary, transactionData?.data);
  const { isAuthenticated, setRedirectUrl } = useAuth();

  // Store current URL for redirect after login
  useEffect(() => {
    if (!isAuthenticated) {
      setRedirectUrl(window.location.href);
    }
  }, [isAuthenticated, setRedirectUrl]);

  // hook buat upload payment proof
  const uploadPaymentProofMutation = useUploadPaymentProof();

  // data transaction dummy buat tampilan (nanti diganti sama API)
  const transaction = {
    id: parseInt(orderId.replace('order-', '')),
    eventId: effectiveOrderSummary?.eventId || 0,
    eventTitle: effectiveOrderSummary?.eventTitle || '',
    eventLocation: effectiveOrderSummary?.eventLocation || '',
    eventDate: effectiveOrderSummary?.eventDate || '',
    eventTime: effectiveOrderSummary?.eventTime || '',
    totalAmount: effectiveOrderSummary?.totalAmount || 0,
    expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000), // This will be overridden by usePayment hook
    status: "WAITING_FOR_PAYMENT" as const,
    ticketSelections: effectiveOrderSummary?.ticketSelections || []
  };

  // Show loading state while fetching transaction data
  if (transactionId && transactionLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment details...</p>
        </div>
      </div>
    );
  }

  // Show error state if transaction fetch failed
  if (transactionId && transactionError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Transaction Not Found</h2>
            <p className="text-gray-600 mb-6">
              The transaction could not be found or has expired.
            </p>
            <Link href="/">
              <Button>Back to Events</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!effectiveIsValid || !effectiveOrderSummary) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Invalid Payment</h2>
            <p className="text-gray-600 mb-6">
              Order not found or invalid.
            </p>
            <Link href="/">
              <Button>Back to Events</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleUploadSuccess = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('paymentProof', file);
      
      // Use actual transaction ID from backend, not the dummy one
      const actualTransactionId = transactionData?.data?.id || parseInt(transactionId || '0');
      
      // Debug log to see what transaction ID we're using
      console.log('Uploading payment proof for transaction ID:', actualTransactionId);
      
      if (actualTransactionId === 0) {
        throw new Error('No valid transaction ID found. Please create a transaction first.');
      }
      
      await uploadPaymentProofMutation.mutateAsync({
        transactionId: actualTransactionId,
        data: formData
      });
      
      // redirect ke confirmation page kalo berhasil
      window.location.href = `/payment/confirmation?transactionId=${actualTransactionId}`;
    } catch (error) {
      console.error('Upload gagal:', error);
      // handle error (tampilin toast, dll)
    }
  };

  if (isExpired) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-12">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Order Expired</h2>
            <p className="text-gray-600 mb-6">
              Your order has expired. Please create a new order to continue.
            </p>
            <Link href="/">
              <Button>Back to Events</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Payment" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Kolom Kiri - Upload Payment */}
          <div className="space-y-6">
            {/* Warning Order Expired */}
            <PaymentExpirationAlert 
              timeLeft={timeLeft} 
              formatTimeLeft={formatTimeLeft} 
            />

            {/* Upload Payment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Upload Bukti Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PaymentUpload 
                  onUploadSuccess={handleUploadSuccess}
                  isLoading={uploadPaymentProofMutation.isPending}
                />
              </CardContent>
            </Card>

            {/* Instruksi Pembayaran */}
            <PaymentInstructions 
              totalAmount={effectiveOrderSummary.totalAmount}
              bankInfo={{
                bank: "BCA",
                accountNumber: "1234567890",
                accountName: transactionData?.data?.organizer?.name || transactionData?.data?.event?.organizer?.name || "EventHub Indonesia"
              }}
            />
          </div>

          {/* Kolom Kanan - Detail Order */}
          <div className="space-y-6">
            <OrderDetails 
              eventTitle={effectiveOrderSummary.eventTitle}
              eventLocation={effectiveOrderSummary.eventLocation}
              eventDate={effectiveOrderSummary.eventDate}
              eventTime={effectiveOrderSummary.eventTime}
              totalAmount={effectiveOrderSummary.totalAmount}
              status={transactionData?.data?.status || 'WAITING_FOR_PAYMENT'}
              orderId={transactionId?.toString() || orderId}
              expiresAt={transactionData?.data?.expiresAt ? new Date(transactionData.data.expiresAt) : new Date(Date.now() + 2 * 60 * 60 * 1000)}
              ticketSelections={effectiveOrderSummary.ticketSelections}
            />
          </div>
        </div>
      </div>
    </div>
  );
}