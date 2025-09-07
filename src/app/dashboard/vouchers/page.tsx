"use client";

import { useState } from "react";
import { useVoucherPage } from "@/hooks/api/useVouchers";
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
  Plus,
  Pencil,
  Trash,
  ChevronRight,
  Ticket,
  Loader2,
} from "lucide-react";
import { CreateVoucherDialog } from "@/components/vouchers/CreateVoucherDialog";
import { debugUserInfo } from "@/lib/debug";

export default function VouchersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();
  debugUserInfo('Dashboard Vouchers', user, authLoading, isAuthenticated);

  const {
    vouchers,
    pagination,
    isLoading,
    error,
    currentPage,
    setCurrentPage,
  } = useVoucherPage({
    pageSize: 10,
  });

  const handleRefresh = () => {
    // Refresh will be handled by the hook automatically
    window.location.reload();
  };

  const getStatusBadge = (isActive: boolean) => {
    return (
      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
        isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {isActive ? 'Active' : 'Inactive'}
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
              <p className="text-red-600">Error loading vouchers: {error.message}</p>
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
            <h2 className="text-lg font-medium text-gray-900">Manage Vouchers</h2>
            <p className="text-sm text-gray-500">
              Create and manage discount vouchers for your events
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onRefresh={handleRefresh}
              placeholder="Search vouchers..."
            />
            
            <CreateVoucherDialog 
              open={createDialogOpen}
              onOpenChange={setCreateDialogOpen}
              onSuccess={() => {
                setCreateDialogOpen(false);
                // Refresh data
                window.location.reload();
              }}
            />
          </div>
        </div>
      </div>

      {/* Vouchers Table */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
              <span className="ml-2 text-gray-600">Loading vouchers...</span>
            </div>
          ) : vouchers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No vouchers found</p>
              <CreateVoucherDialog 
                open={createDialogOpen}
                onOpenChange={setCreateDialogOpen}
                onSuccess={() => {
                  setCreateDialogOpen(false);
                  // Refresh data
                  window.location.reload();
                }}
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Voucher
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Discount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Expires
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
                  {vouchers.map((voucher: any) => (
                    <tr key={voucher.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                              <Ticket className="h-5 w-5 text-purple-600" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {voucher.code}
                            </div>
                            <div className="text-sm text-gray-500">
                              {voucher.description || 'No description'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {voucher.discountType === 'PERCENTAGE' 
                            ? `${voucher.discountValue}%` 
                            : `Rp ${voucher.discountValue?.toLocaleString()}`
                          }
                        </div>
                        <div className="text-sm text-gray-500">
                          {voucher.discountType === 'PERCENTAGE' ? 'Percentage' : 'Fixed Amount'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {voucher.usedCount || 0} / {voucher.maxUsage || '∞'}
                        </div>
                        <div className="text-sm text-gray-500">
                          times used
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {voucher.expiresAt 
                            ? new Date(voucher.expiresAt).toLocaleDateString()
                            : 'Never'
                          }
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(voucher.isActive)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
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