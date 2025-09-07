"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign } from "lucide-react";

interface RevenueData {
  month: string;
  revenue: number;
  transactions: number;
}

interface RevenueChartProps {
  data: RevenueData[];
  loading?: boolean;
}

export function RevenueChart({ data, loading = false }: RevenueChartProps) {
  const maxRevenue = Math.max(...data.map(d => d.revenue));
  const maxTransactions = Math.max(...data.map(d => d.transactions));

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Revenue Overview
          </CardTitle>
          <CardDescription>Monthly revenue and transaction trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
            <div className="grid grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Revenue Overview
        </CardTitle>
        <CardDescription>Monthly revenue and transaction trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Simple Bar Chart */}
          <div className="h-64 flex items-end justify-between gap-2">
            {data.map((item, index) => {
              const revenueHeight = maxRevenue > 0 ? (item.revenue / maxRevenue) * 100 : 0;
              const transactionHeight = maxTransactions > 0 ? (item.transactions / maxTransactions) * 100 : 0;

              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  {/* Revenue Bar */}
                  <div className="w-full max-w-8 relative">
                    <div
                      className="w-full bg-blue-500 rounded-t transition-all duration-500 ease-out"
                      style={{ height: `${Math.max(revenueHeight, 4)}%` }}
                    >
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-600 whitespace-nowrap">
                        Rp {(item.revenue / 1000000).toFixed(1)}M
                      </div>
                    </div>
                  </div>

                  {/* Transactions Bar (smaller, overlay) */}
                  <div className="w-full max-w-6 relative -mt-1">
                    <div
                      className="w-full bg-blue-300 rounded-t transition-all duration-500 ease-out"
                      style={{ height: `${Math.max(transactionHeight, 3)}%` }}
                    >
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs text-blue-500 whitespace-nowrap">
                        {item.transactions}
                      </div>
                    </div>
                  </div>

                  {/* Month Label */}
                  <div className="text-xs font-medium text-gray-600 mt-2">
                    {item.month}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-300 rounded"></div>
              <span>Transactions</span>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                Rp {(data.reduce((sum, item) => sum + item.revenue, 0) / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-500">Total Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {data.reduce((sum, item) => sum + item.transactions, 0)}
              </div>
              <div className="text-sm text-gray-500">Total Transactions</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
