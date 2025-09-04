"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PaymentInstructionsProps {
  totalAmount: number;
}

export default function PaymentInstructions({ totalAmount }: PaymentInstructionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Instructions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-medium">Bank Transfer Details:</h4>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Bank:</span>
              <span>BCA</span>
            </div>
            <div className="flex justify-between">
              <span>Account Number:</span>
              <span>1234567890</span>
            </div>
            <div className="flex justify-between">
              <span>Account Name:</span>
              <span>EventHub Indonesia</span>
            </div>
            <div className="flex justify-between">
              <span>Amount:</span>
              <span className="font-bold">Rp {totalAmount.toLocaleString('en-US')}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium">Steps:</h4>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
            <li>Transfer the exact amount to the account above</li>
            <li>Take a screenshot of your payment confirmation</li>
            <li>Upload the screenshot using the form above</li>
            <li>Get your tickets immediately after upload</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
}
