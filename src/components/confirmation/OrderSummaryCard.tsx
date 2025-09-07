"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OrderSummaryCardProps {
  orderId: string;
  totalAmount: number;
  status?: string;
}

export default function OrderSummaryCard({ orderId, totalAmount, status }: OrderSummaryCardProps) {
  // Function to get status badge props
  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'WAITING_FOR_CONFIRMATION':
        return {
          className: "bg-yellow-100 text-yellow-800",
          text: "Under Review"
        };
      case 'DONE':
        return {
          className: "bg-green-100 text-green-800", 
          text: "Paid"
        };
      case 'REJECTED':
        return {
          className: "bg-red-100 text-red-800",
          text: "Rejected"
        };
      default:
        return {
          className: "bg-gray-100 text-gray-800",
          text: "Unknown"
        };
    }
  };

  const statusBadge = getStatusBadge(status);
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
            className={statusBadge.className}
          >
            {statusBadge.text}
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
