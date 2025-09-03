"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

interface PaymentExpirationAlertProps {
  timeLeft: number;
  formatTimeLeft: (timeLeft: number) => string;
}

export default function PaymentExpirationAlert({ 
  timeLeft, 
  formatTimeLeft 
}: PaymentExpirationAlertProps) {
  return (
    <Alert className="border-yellow-200 bg-yellow-50">
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800">
        Your order will expire in <span className="font-bold">{formatTimeLeft(timeLeft)}</span>
      </AlertDescription>
    </Alert>
  );
}
