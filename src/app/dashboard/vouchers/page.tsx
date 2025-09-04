"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import AppDashboardHeader from "@/components/shared/AppDashboardHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, ChevronRight, Loader2 } from "lucide-react";
import { useVoucherPage, type FlatVoucher } from "@/hooks/useVoucherPage";

export default function VouchersPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Use API-connected hook
  const {
    vouchers,
    totalVouchers,
    totalPages,
    isLoading,
    error,
    search,
    setSearch,
    page,
    setPage,
    selected,
    toggleSelect,
    selectAllOnPage,
    getVoucherStatusBadge,
    getVoucherStatusText,
  } = useVoucherPage({ pageSize: 5 });

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
  }

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
                <span className="text-gray-900 font-medium">Vouchers</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Vouchers
              </h1>

              {/* Search and Controls */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <form
                  onSubmit={handleSearch}
                  className="relative flex-1 max-w-md"
                >
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search vouchers (code, event, discount)..."
                    className="pl-10 bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search vouchers"
                  />
                  <button type="submit" className="hidden" aria-hidden />
                </form>
              </div>
            </div>

            {/* Vouchers Table */}
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
                    <div className="col-span-1">Code</div>
                    <div className="col-span-1">Discount</div>
                    <div className="col-span-1">Event ID</div>
                    <div className="col-span-1">Usage</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-1">Start Date</div>
                    <div className="col-span-1">End Date</div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200">
                  {isLoading ? (
                    <div className="px-6 py-12 text-center">
                      <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-purple-600" />
                      <div className="text-gray-500 text-lg font-medium mb-2">Loading vouchers...</div>
                      <p className="text-gray-400 text-sm">Please wait while we fetch your vouchers</p>
                    </div>
                  ) : error ? (
                    <div className="px-6 py-12 text-center">
                      <div className="text-red-500 text-lg font-medium mb-2">Error loading vouchers</div>
                      <p className="text-gray-400 text-sm">Please try again or contact support</p>
                    </div>
                  ) : vouchers.length > 0 ? (
                    vouchers.map((voucher: FlatVoucher, idx) => (
                      <div
                        key={idx}
                        className="px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="grid grid-cols-8 gap-4 items-center text-sm text-gray-900">
                          <div className="col-span-1">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                              checked={selected.includes(voucher.id)}
                              onChange={(e) =>
                                toggleSelect(voucher.id, e.currentTarget.checked)
                              }
                            />
                          </div>
                          <div className="col-span-1 font-mono text-sm">
                            {voucher.code}
                          </div>
                          <div className="col-span-1 font-semibold text-green-600">
                            {voucher.discountValue}%
                          </div>
                          <div className="col-span-1 text-gray-600">
                            #{voucher.eventId}
                          </div>
                          <div className="col-span-1">
                            <span className="text-sm">
                              {voucher.usedCount}/{voucher.usageLimit}
                            </span>
                          </div>
                          <div className="col-span-1">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getVoucherStatusBadge(voucher)}`}
                            >
                              {getVoucherStatusText(voucher)}
                            </span>
                          </div>
                          <div className="col-span-1 text-gray-600">
                            {new Date(voucher.startDate).toLocaleDateString()}
                          </div>
                          <div className="col-span-1 text-gray-600">
                            {new Date(voucher.endDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-6 py-12 text-center">
                      <div className="text-gray-500 text-lg font-medium mb-2">
                        No vouchers found
                      </div>
                      <p className="text-gray-400 text-sm">
                        Create your first voucher to get started
                      </p>
                    </div>
                  )}
                </div>

                {/* Table Footer */}
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{totalVouchers} total voucher(s)</span>

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
  );
}