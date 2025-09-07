"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, DollarSign, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Transaction } from "@/types/transaction.type";

interface RecentTransaction {
  id: number;
  eventTitle: string;
  ticketTypeName: string;
  finalAmount: number;
  status: string;
  createdAt: string;
  user: {
    name: string;
    email: string;
  };
}

interface RecentTransactionsProps {
  transactions: Transaction[];
  loading?: boolean;
}

export function RecentTransactions({ transactions, loading = false }: RecentTransactionsProps) {
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'WAITING_FOR_PAYMENT': { variant: 'secondary' as const, label: 'Awaiting Payment', className: '' },
      'WAITING_FOR_CONFIRMATION': { variant: 'default' as const, label: 'Pending Confirmation', className: '' },
      'DONE': { variant: 'default' as const, label: 'Completed', className: 'bg-green-100 text-green-800' },
      'REJECTED': { variant: 'destructive' as const, label: 'Rejected', className: '' },
      'EXPIRED': { variant: 'secondary' as const, label: 'Expired', className: '' },
      'CANCELLED': { variant: 'secondary' as const, label: 'Cancelled', className: '' },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.WAITING_FOR_PAYMENT;

    return (
      <Badge variant={config.variant} className={config.className}>
        {config.label}
      </Badge>
    );
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Recent Transactions
          </CardTitle>
          <CardDescription>Latest transaction activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Recent Transactions
        </CardTitle>
        <CardDescription>Latest transaction activity</CardDescription>
      </CardHeader>
      <CardContent>
        {transactions.length === 0 ? (
          <div className="text-center py-8">
            <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No recent transactions</p>
            <p className="text-sm text-gray-400 mt-1">
              Transactions will appear here once customers make purchases
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {transactions.slice(0, 5).map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{transaction.user?.name || 'Unknown User'}</div>
                    <div className="text-xs text-gray-500">{transaction.event?.title || 'Unknown Event'}</div>
                    <div className="text-xs text-gray-400">
                      {transaction.ticketType?.name || 'Unknown Ticket'} • {new Date(transaction.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-sm">
                    Rp {transaction.finalAmount.toLocaleString('id-ID')}
                  </div>
                  <div className="mt-1">
                    {getStatusBadge(transaction.status)}
                  </div>
                </div>
              </div>
            ))}

            {transactions.length > 5 && (
              <div className="pt-3 border-t">
                <Link href="/dashboard/transactions">
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View All Transactions
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
