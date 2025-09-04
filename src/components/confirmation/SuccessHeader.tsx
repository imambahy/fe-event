"use client";

import { CheckCircle } from "lucide-react";

export default function SuccessHeader() {
  return (
    <div className="text-center mb-8">
      <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Payment Successful!
      </h1>
      <p className="text-lg text-gray-600">
        Your payment has been confirmed. Here are your tickets:
      </p>
    </div>
  );
}
