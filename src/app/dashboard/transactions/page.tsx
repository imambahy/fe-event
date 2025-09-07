"use client";

import { useState } from "react";
import { useTransactionPage } from "@/hooks/api/useTransactions";
import { useAuth } from "@/contexts/AuthContext";
import AppDashboardHeader from "@/components/shared/AppDashboardHeader";
import { SearchFilter } from "@/components/dashboard/SearchFilter";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { 
  ChevronRight, 
  CreditCard, 
  User, 
  Calendar, 
  DollarSign, 
  Loader2,
} from "lucide-react";
import { debugUserInfo } from "@/lib/debug";

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();
  debugUserInfo('Dashboard Transactions', user, authLoading, isAuthenticated);

  const {
    transactions,
    pagination,
    isLoading,
    error,
    currentPage,
    setCurrentPage,
  } = useTransactionPage({
    pageSize: 10,
  });

  const handleRefresh = () => {
    // Refresh will be handled by the hook automatically
    window.location.reload();
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      WAITING_FOR_PAYMENT: { variant: "secondary" as const, label: "Pending Payment" },
      WAITING_FOR_CONFIRMATION: { variant: "default" as const, label: "Pending Confirmation" },
      DONE: { variant: "default" as const, label: "Completed" },
      REJECTED: { variant: "destructive" as const, label: "Rejected" },
      EXPIRED: { variant: "secondary" as const, label: "Expired" },
      CANCELLED: { variant: "destructive" as const, label: "Cancelled" },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || { 
      variant: "secondary" as const, 
      label: status 
  };

  return (
      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
        config.variant === 'destructive' ? 'bg-red-100 text-red-800' :
        config.variant === 'default' ? 'bg-green-100 text-green-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {config.label}
      </span>
    );
  };

  if (error) {
    return (
      <>
        <AppDashboardHeader showUserMenu={true} />
        <div className="flex flex-1 flex-col bg-gray-50 p-6">
            <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <p className="text-red-600">Error loading transactions: {error.message}</p>
              <Button onClick={handleRefresh} className="mt-4">
                Try Again
                  </Button>
                </div>
              </div>
            </div>
      </>
    );
  }

  return (
    <>
      <AppDashboardHeader showUserMenu={true} />
      <div className="flex flex-1 flex-col bg-gray-50 p-6">
      {/* Header Section */}
            <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Transaction History</h2>
            <p className="text-sm text-gray-500">
              View and manage all transaction records
            </p>
          </div>
          
          <SearchFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onRefresh={handleRefresh}
            placeholder="Search transactions..."
          />
                  </div>
                </div>
                
      {/* Transactions Table */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
              <span className="ml-2 text-gray-600">Loading transactions...</span>
                    </div>
          ) : transactions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No transactions found</p>
                    </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map((transaction: any) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                              <CreditCard className="h-5 w-5 text-purple-600" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              #{transaction.id}
                            </div>
                            <div className="text-sm text-gray-500">
                              {new Date(transaction.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8">
                            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                              <User className="h-4 w-4 text-gray-600" />
                            </div>
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">
                              {transaction.user?.name || 'Unknown User'}
                            </div>
                            <div className="text-sm text-gray-500">
                              {transaction.user?.email || ''}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {transaction.event?.title || 'Unknown Event'}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {transaction.ticketType?.name || 'Unknown Ticket'}
                      </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm font-medium text-gray-900">
                            Rp {transaction.finalAmount?.toLocaleString() || '0'}
                          </span>
                      </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(transaction.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
                    </div>
                  )}
        </div>
                </div>
                
      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="px-4 sm:px-6 lg:px-8">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                          />
                        </PaginationItem>

              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((p) => (
                <PaginationItem key={p}>
                            <PaginationLink
                    onClick={() => setCurrentPage(p)}
                    isActive={p === currentPage}
                    className="cursor-pointer"
                  >
                    {p}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        <PaginationItem>
                          <PaginationNext
                  onClick={() => setCurrentPage(Math.min(pagination.totalPages, currentPage + 1))}
                  className={currentPage === pagination.totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
      )}
                </div>
    </>
  );
}