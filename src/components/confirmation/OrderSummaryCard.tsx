"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OrderSummaryCardProps {
  orderId: string;
  totalAmount: number;
}

export default function OrderSummaryCard({ orderId, totalAmount }: OrderSummaryCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Order ID</span>
          <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
            {orderId}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Payment Status</span>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800"
          >
            Paid
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Purchase Date</span>
                            <span>{new Date().toLocaleDateString('en-US')}</span>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span>Total Amount</span>
          <span className="text-lg">Rp {totalAmount.toLocaleString('en-US')}</span>
        </div>
      </CardContent>
    </Card>
  );
}
