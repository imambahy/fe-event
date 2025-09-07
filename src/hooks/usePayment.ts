import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { OrderSummary } from "@/types/checkout.type";

interface UsePaymentReturn {
  timeLeft: number;
  isExpired: boolean;
  isUploading: boolean;
  orderId: string;
  uploadPaymentProof: (file: File) => Promise<void>;
  formatTimeLeft: (ms: number) => string;
}

export function usePayment(orderSummary: OrderSummary | null, transactionData?: any): UsePaymentReturn {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isExpired, setIsExpired] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [orderId] = useState(() => `order-${Date.now()}`);
  const router = useRouter();

  // Get expiration time from backend transaction data
  const [expiresAt, setExpiresAt] = useState(() => {
    // Initial fallback to 2 hours
    return Date.now() + 2 * 60 * 60 * 1000;
  });

  // Update expiresAt when transactionData becomes available
  useEffect(() => {
    if (transactionData?.expiresAt) {
      console.log('Updating expiresAt from backend:', transactionData.expiresAt);
      setExpiresAt(new Date(transactionData.expiresAt).getTime());
    }
  }, [transactionData?.expiresAt]);

  // Transaction data is now handled by the calling component via transactionData prop

  // Countdown timer
  useEffect(() => {
    console.log('usePayment timer effect - hasOrderSummary:', !!orderSummary, 'expiresAt:', expiresAt, 'now:', Date.now());
    
    if (!orderSummary) {
      console.log('No orderSummary, timer not starting');
      return;
    }

    // Initialize timeLeft immediately
    const now = Date.now();
    const initialDistance = expiresAt - now;
    console.log('Timer initialized - distance:', initialDistance, 'ms (', Math.floor(initialDistance / 1000), 'seconds)');
    setTimeLeft(Math.max(0, initialDistance));
    
    // Reset expired state if we have time left
    if (initialDistance > 0) {
      setIsExpired(false);
    }
    
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const distance = expiresAt - currentTime;
      
      if (distance <= 0) {
        setIsExpired(true);
        setTimeLeft(0);
        clearInterval(timer);
      } else {
        setTimeLeft(distance);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [!!orderSummary, expiresAt]); // Use boolean to avoid object reference issues

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
