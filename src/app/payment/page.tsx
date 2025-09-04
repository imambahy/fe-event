"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CreditCard } from "lucide-react";
import Link from "next/link";

// hooks custom
import { useOrderData } from "@/hooks/useOrderData";
import { usePayment } from "@/hooks/usePayment";
import { useUploadPaymentProof } from "@/hooks/api/useTransactions";

// komponen-komponen UI
import PageHeader from "@/components/layout/PageHeader";
import PaymentExpirationAlert from "@/components/payment/PaymentExpirationAlert";
import PaymentInstructions from "@/components/payment/PaymentInstructions";
import OrderDetails from "@/components/payment/OrderDetails";
import { PaymentUpload } from "@/components/payment/PaymentUpload";

export default function PaymentPage() {
  const { orderSummary, isValid } = useOrderData();
  const { 
    timeLeft, 
    isExpired, 
    orderId, 
    formatTimeLeft 
  } = usePayment(orderSummary);

  // hook buat upload payment proof
  const uploadPaymentProofMutation = useUploadPaymentProof();

  // data transaction dummy buat tampilan (nanti diganti sama API)
  const transaction = {
    id: parseInt(orderId.replace('order-', '')),
    eventId: orderSummary?.eventId || 0,
    eventTitle: orderSummary?.eventTitle || '',
    eventLocation: orderSummary?.eventLocation || '',
    eventDate: orderSummary?.eventDate || '',
    eventTime: orderSummary?.eventTime || '',
    totalAmount: orderSummary?.totalAmount || 0,
    expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000),
    status: "WAITING_FOR_PAYMENT" as const,
    ticketSelections: orderSummary?.ticketSelections || []
  };

  if (!isValid || !orderSummary) {
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
      
      await uploadPaymentProofMutation.mutateAsync({
        transactionId: transaction.id,
        data: formData
      });
      
      // redirect ke confirmation page kalo berhasil
      window.location.href = `/payment/confirmation?orderId=${orderId}`;
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
            <PaymentInstructions totalAmount={transaction.totalAmount} />
          </div>

          {/* Kolom Kanan - Detail Order */}
          <div className="space-y-6">
            <OrderDetails 
              eventTitle={transaction.eventTitle}
              eventLocation={transaction.eventLocation}
              eventDate={transaction.eventDate}
              eventTime={transaction.eventTime}
              totalAmount={transaction.totalAmount}
              status={transaction.status}
              orderId={orderId}
              expiresAt={transaction.expiresAt}
              ticketSelections={transaction.ticketSelections}
            />
          </div>
        </div>
      </div>
    </div>
  );
}