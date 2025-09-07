"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { VoucherService } from "@/services/api/voucher.service";

export interface Voucher {
  id: number;
  code: string;
  discountValue: number;
  eventId: number;
  usageLimit: number;
  usedCount: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  event?: {
    id: number;
    title: string;
  };
}

export interface CreateVoucherData {
  code: string;
  discountValue: number;
  eventId: number;
  usageLimit: number;
  startDate: string;
  endDate: string;
}

export interface UpdateVoucherData {
  id: number;
  code?: string;
  discountValue?: number;
  usageLimit?: number;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
}

// Hook untuk mengambil daftar voucher organizer
export function useVouchers(params?: {
  page?: number;
  limit?: number;
  search?: string;
  eventId?: number;
  isActive?: boolean;
}) {
  return useQuery({
    queryKey: ["vouchers", params],
    queryFn: () => VoucherService.getVouchers(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Hook untuk mengambil voucher berdasarkan ID
export function useVoucher(id: number) {
  return useQuery({
    queryKey: ["voucher", id],
    queryFn: () => VoucherService.getVoucherById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}

// Hook untuk membuat voucher baru
export function useCreateVoucher() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateVoucherData) => VoucherService.createVoucher(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vouchers"] });
    },
  });
}

// Hook untuk update voucher
export function useUpdateVoucher() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateVoucherData) => VoucherService.updateVoucher(data.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vouchers"] });
    },
  });
}

// Hook untuk delete voucher
export function useDeleteVoucher() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => VoucherService.deleteVoucher(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vouchers"] });
    },
  });
}

// Note: Voucher validation is handled in transaction creation
// No separate validation endpoint in backend

export function useVoucherPage({ pageSize = 5 }: { pageSize?: number }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [eventFilter, setEventFilter] = useState<number | "">("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  // Fetch vouchers with pagination
  const { data: vouchersResponse, isLoading, error, refetch } = useVouchers({
    page: currentPage,
    limit: pageSize,
    search: searchQuery || undefined,
    eventId: eventFilter || undefined,
    isActive: statusFilter === "active" ? true : statusFilter === "inactive" ? false : undefined,
  });

  const vouchers = vouchersResponse?.data || [];
  const pagination = vouchersResponse?.pagination;

  // Pagination helpers
  const totalPages = pagination?.totalPages || 1;
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  // Selection helpers
  const toggleSelect = (id: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const selectAllOnPage = () => {
    const newSelected = new Set(selectedItems);
    vouchers.forEach((voucher: Voucher) => {
      newSelected.add(voucher.id);
    });
    setSelectedItems(newSelected);
  };

  const clearSelection = () => {
    setSelectedItems(new Set());
  };

  // Status badge helpers
  const getVoucherStatusBadge = (isActive: boolean) => {
    return isActive
      ? "bg-green-100 text-green-800"
      : "bg-gray-100 text-gray-800";
  };

  const getVoucherStatusText = (isActive: boolean) => {
    return isActive ? "Active" : "Inactive";
  };

  // Debug helper
  const debug = () => {
    console.log("Voucher page debug:", {
      currentPage,
      totalPages,
      vouchersCount: vouchers.length,
      selectedCount: selectedItems.size,
      searchQuery,
      eventFilter,
      statusFilter,
      isLoading,
      error: error?.message,
    });
  };

  return {
    // Data
    vouchers,
    pagination,

    // State
    currentPage,
    setCurrentPage,
    searchQuery,
    setSearchQuery,
    selectedItems,
    eventFilter,
    setEventFilter,
    statusFilter,
    setStatusFilter,

    // Loading & Error
    isLoading,
    error,
    refetch,

    // Pagination
    totalPages,
    hasNextPage,
    hasPrevPage,

    // Actions
    toggleSelect,
    selectAllOnPage,
    clearSelection,
    getVoucherStatusBadge,
    getVoucherStatusText,
    debug,
  };
}
