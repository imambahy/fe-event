import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { TransactionStatus, OrderSummary } from "@/types/checkout.type";

interface UsePaymentReturn {
  timeLeft: number;
  isExpired: boolean;
  isUploading: boolean;
  orderId: string;
  uploadPaymentProof: (file: File) => Promise<void>;
  formatTimeLeft: (ms: number) => string;
}

export function usePayment(orderSummary: OrderSummary | null): UsePaymentReturn {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isExpired, setIsExpired] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [orderId] = useState(() => `order-${Date.now()}`);
  const router = useRouter();

  // Mock transaction data
  const transaction = {
    id: parseInt(orderId.replace('order-', '')),
    eventId: orderSummary?.eventId || 0,
    eventTitle: orderSummary?.eventTitle || '',
    eventLocation: orderSummary?.eventLocation || '',
    eventDate: orderSummary?.eventDate || '',
    eventTime: orderSummary?.eventTime || '',
    totalAmount: orderSummary?.totalAmount || 0,
    expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
    status: "WAITING_FOR_PAYMENT" as TransactionStatus,
    ticketSelections: orderSummary?.ticketSelections || []
  };

  // Countdown timer
  useEffect(() => {
    if (!orderSummary) return;

    // Initialize timeLeft immediately
    const now = new Date().getTime();
    const initialDistance = transaction.expiresAt.getTime() - now;
    setTimeLeft(Math.max(0, initialDistance));
    
    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = transaction.expiresAt.getTime() - currentTime;
      
      if (distance <= 0) {
        setIsExpired(true);
        setTimeLeft(0);
        clearInterval(timer);
      } else {
        setTimeLeft(distance);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [orderSummary, transaction.expiresAt]);

  const formatTimeLeft = useCallback((ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  const uploadPaymentProof = useCallback(async (file: File) => {
    if (!orderSummary) return;

    setIsUploading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // TODO: Upload to backend API
      console.log('Uploading file:', file.name);
      
      // Redirect to confirmation page
      router.push(`/payment/confirmation?orderId=${orderId}`);
      
    } catch (error) {
      console.error('Upload failed:', error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  }, [orderSummary, orderId, router]);

  return {
    timeLeft,
    isExpired,
    isUploading,
    orderId,
    uploadPaymentProof,
    formatTimeLeft,
  };
}
