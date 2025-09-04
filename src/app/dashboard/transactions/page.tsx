"use client";

import { useState } from "react";
import { useTransactionPage, type FlatTransaction } from "@/hooks/useTransactionPage";
import { useAuth } from "@/contexts/AuthContext";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import AppDashboardHeader from "@/components/shared/AppDashboardHeader";
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { 
  Search, 
  Columns, 
  ChevronRight, 
  CreditCard, 
  User, 
  Calendar, 
  DollarSign, 
  Loader2,
  Filter
} from "lucide-react";

export default function TransactionsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Get auth context for authentication checks
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();

  // Debug user info
  console.log('👤 Dashboard Transactions - User info:', {
    user: user ? { 
      id: user.id, 
      role: user.role, 
      email: user.email,
      name: user.name,
    } : null,
    isLoading: authLoading,
    isAuthenticated,
  });

  // Use API-connected hook
  const {
    transactions,
    totalTransactions,
    totalPages,
    isLoading,
    error,
    search,
    setSearch,
    page,
    setPage,
    statusFilter,
    setStatusFilter,
    selected,
    toggleSelect,
    selectAllOnPage,
    clearSelection,
    getStatusBadgeClass,
    getStatusText,
  } = useTransactionPage({
    pageSize: 10,
  });

  // Simple debug log
  console.log('📱 Transactions page loaded:', transactions.length, 'transactions');

  // Local handlers for actions
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <SidebarProvider
      defaultOpen={sidebarOpen}
      open={sidebarOpen}
      onOpenChange={setSidebarOpen}
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <AppDashboardHeader 
          showUserMenu={true} 
          onSidebarToggle={handleSidebarToggle}
        />
        
        {/* Main Content */}
        <div className="flex flex-1 flex-col bg-gray-50">
          <div className="@container/main flex flex-1 flex-col gap-6 py-6">
            
            {/* Header Section */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span>Dashboard</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-900 font-medium">Transactions</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Transactions</h1>
              
              {/* Search and Controls */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <form
                  onSubmit={handleSearch}
                  className="relative flex-1 max-w-md"
                >
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search transactions (ID, event, status)..."
                    className="pl-10 bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search transactions"
                  />
                  <button type="submit" className="hidden" aria-hidden />
                </form>

                <div className="flex gap-2">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:border-purple-500 focus:ring-purple-500"
                  >
                    <option value="">All Status</option>
                    <option value="WAITING_FOR_PAYMENT">Awaiting Payment</option>
                    <option value="WAITING_FOR_CONFIRMATION">Pending Confirmation</option>
                    <option value="DONE">Completed</option>
                    <option value="REJECTED">Rejected</option>
                    <option value="EXPIRED">Expired</option>
                    <option value="CANCELLED">Cancelled</option>
                  </select>
                  
                  <Button variant="outline" className="bg-white border-gray-200 hover:bg-gray-50">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </div>

            {/* Transactions Table */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* Table Header */}
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <div className="grid grid-cols-8 gap-4 text-sm font-medium text-gray-700">
                    <div className="col-span-1">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        onChange={(e) =>
                          selectAllOnPage(e.currentTarget.checked)
                        }
                      />
                    </div>
                    <div className="col-span-1">Transaction ID</div>
                    <div className="col-span-2">Event</div>
                    <div className="col-span-1">Ticket Type</div>
                    <div className="col-span-1">Amount</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-1">Date</div>
                  </div>
                </div>
                
                {/* Table Body */}
                <div className="divide-y divide-gray-200">
                  {authLoading ? (
                    <div className="px-6 py-12 text-center">
                      <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
                      <div className="text-gray-500 text-lg font-medium mb-2">Authenticating...</div>
                      <p className="text-gray-400 text-sm">Please wait while we verify your credentials</p>
                    </div>
                  ) : !user?.id ? (
                    <div className="px-6 py-12 text-center">
                      <div className="text-orange-500 text-lg font-medium mb-2">Authentication Required</div>
                      <p className="text-gray-400 text-sm mb-4">Please log in to view transactions</p>
                    </div>
                  ) : user.role !== "ORGANIZER" ? (
                    <div className="px-6 py-12 text-center">
                      <div className="text-red-500 text-lg font-medium mb-2">Access Denied</div>
                      <p className="text-gray-400 text-sm">Only organizers can view this page</p>
                    </div>
                  ) : isLoading ? (
                    <div className="px-6 py-12 text-center">
                      <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-purple-600" />
                      <div className="text-gray-500 text-lg font-medium mb-2">Loading transactions...</div>
                      <p className="text-gray-400 text-sm">Please wait while we fetch your transactions</p>
                    </div>
                  ) : error ? (
                    <div className="px-6 py-12 text-center">
                      <div className="text-red-500 text-lg font-medium mb-2">Error loading transactions</div>
                      <p className="text-gray-400 text-sm mb-4">
                        {error instanceof Error ? error.message : "Please try again or contact support"}
                      </p>
                    </div>
                  ) : (!isLoading && transactions.length > 0) ? (
                    transactions.map((transaction: FlatTransaction, index: number) => (
                      <div
                        key={transaction.id || index}
                        className="px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="grid grid-cols-8 gap-4 items-center text-sm text-gray-900">
                          <div className="col-span-1">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                              checked={selected.includes(transaction.id)}
                              onChange={(e) =>
                                toggleSelect(transaction.id, e.currentTarget.checked)
                              }
                            />
                          </div>
                          <div className="col-span-1">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                <CreditCard className="h-4 w-4 text-purple-600" />
                              </div>
                              <span className="font-mono text-xs text-gray-600">
                                #{transaction.id}
                              </span>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <div className="font-medium text-gray-900">
                              {transaction.eventTitle}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              Category: {transaction.eventCategory}
                            </div>
                          </div>
                          <div className="col-span-1">
                            <span className="text-sm text-gray-700">
                              {transaction.ticketTypeName}
                            </span>
                            <div className="text-xs text-gray-500">
                              Qty: {transaction.quantity}
                            </div>
                          </div>
                          <div className="col-span-1">
                            <div className="font-semibold text-gray-900">
                              Rp {transaction.finalAmount.toLocaleString('id-ID')}
                            </div>
                            {transaction.pointsUsed > 0 && (
                              <div className="text-xs text-green-600">
                                -{transaction.pointsUsed} points
                              </div>
                            )}
                          </div>
                          <div className="col-span-1">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(transaction.status)}`}
                            >
                              {getStatusText(transaction.status)}
                            </span>
                          </div>
                          <div className="col-span-1">
                            <div className="text-sm text-gray-900">
                              {new Date(transaction.createdAt).toLocaleDateString('id-ID', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric'
                              })}
                            </div>
                            <div className="text-xs text-gray-500">
                              {new Date(transaction.createdAt).toLocaleTimeString('id-ID', {
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-6 py-12 text-center">
                      <div className="text-gray-500 text-lg font-medium mb-2">
                        No transactions found
                      </div>
                      <p className="text-gray-400 text-sm">
                        No transactions have been made for your events yet
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Table Footer */}
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>
                      {selected.length} of {totalTransactions} row(s) selected
                    </span>

                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setPage((p) => Math.max(1, p - 1));
                            }}
                          />
                        </PaginationItem>

                        {Array.from({ length: totalPages }).map((_, i) => (
                          <PaginationItem key={i}>
                            <PaginationLink
                              href="#"
                              isActive={page === i + 1}
                              onClick={(e) => {
                                e.preventDefault();
                                setPage(i + 1);
                              }}
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setPage((p) => Math.min(totalPages, p + 1));
                            }}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

