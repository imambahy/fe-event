"use client";

import { useSearchParams } from "next/navigation";
import { OrderSummary } from "@/types/checkout.type";

interface UseOrderDataReturn {
  orderSummary: OrderSummary | null;
  isValid: boolean;
  orderId: string;
}

export function useOrderData(): UseOrderDataReturn {
  const searchParams = useSearchParams();
  const orderParam = searchParams.get("order");

  let orderSummary: OrderSummary | null = null;
  let isValid = false;

  try {
    if (orderParam) {
      orderSummary = JSON.parse(decodeURIComponent(orderParam));
      isValid = !!orderSummary && 
                !!orderSummary.eventId && 
                !!orderSummary.eventTitle && 
                !!orderSummary.totalAmount;
    }
  } catch (error) {
    console.error("Error parsing order data:", error);
    isValid = false;
  }

  const orderId = orderSummary ? `order-${Date.now()}` : "";

  return {
    orderSummary,
    isValid,
    orderId
  };
}
