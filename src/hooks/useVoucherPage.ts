"use client";

import { useMemo, useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@/hooks/useDebounce";
import { Voucher, VoucherWithUsage } from "@/types/backend.type";
import { api, API_ENDPOINTS } from "@/lib/api";

// Flattened voucher data for table display
export type FlatVoucher = {
  id: number;
  organizerId: number;
  code: string;
  discountValue: number;
  eventId: number;
  eventTitle?: string;
  usageLimit: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  usedCount: number;
  isActive: boolean;
  isExpired: boolean;
};

interface UseVoucherPageOptions {
  pageSize?: number;
}

export function useVoucherPage({ pageSize = 5 }: UseVoucherPageOptions = {}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);
  
  const debouncedSearch = useDebounce(search, 300);
  
  // Fetch vouchers from API
  const { data: vouchersResponse, isLoading, error } = useQuery({
    queryKey: ["vouchers"],
    queryFn: async () => {
      const response = await api.get(API_ENDPOINTS.VOUCHERS.GET_ALL);
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Transform backend data to flat structure
  const vouchers: FlatVoucher[] = useMemo(() => {
    if (!vouchersResponse?.data) return [];
    
    return vouchersResponse.data.map((item: any) => {
      const now = new Date();
      const startDate = new Date(item.startDate);
      const endDate = new Date(item.endDate);
      
      return {
        // Core Voucher fields (from Prisma schema)
        id: item.id,
        organizerId: item.organizerId,
        code: item.code,
        discountValue: item.discountValue,
        eventId: item.eventId,
        eventTitle: item.event?.title,
        usageLimit: item.usageLimit,
        startDate: item.startDate,
        endDate: item.endDate,
        createdAt: item.createdAt ?? new Date().toISOString(),
        // Computed fields
        usedCount: item.userVouchers?.length ?? 0,
        isActive: now >= startDate && now <= endDate,
        isExpired: now > endDate,
      };
    });
  }, [vouchersResponse]);

  // Filter vouchers
  const filteredVouchers = useMemo(() => {
    if (!debouncedSearch) return vouchers;
    const query = debouncedSearch.toLowerCase();
    return vouchers.filter(voucher => 
      voucher.code.toLowerCase().includes(query) ||
      voucher.eventTitle?.toLowerCase().includes(query) ||
      voucher.discountValue.toString().includes(query) ||
      voucher.eventId.toString().includes(query)
    );
  }, [vouchers, debouncedSearch]);

  // Paginate
  const totalPages = Math.ceil(filteredVouchers.length / pageSize);
  const currentPageData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredVouchers.slice(start, start + pageSize);
  }, [filteredVouchers, page, pageSize]);

  // Selection handlers
  const toggleSelect = useCallback((id: number, checked: boolean) => {
    setSelected(prev => 
      checked ? [...prev, id] : prev.filter(x => x !== id)
    );
  }, []);

  const selectAllOnPage = useCallback((checked: boolean) => {
    const pageIds = currentPageData.map(voucher => voucher.id);
    setSelected(prev => 
      checked 
        ? [...new Set([...prev, ...pageIds])]
        : prev.filter(id => !pageIds.includes(id))
    );
  }, [currentPageData]);

  // Voucher status helpers
  const getVoucherStatusBadge = useCallback((voucher: FlatVoucher) => {
    if (voucher.isExpired) return "bg-red-100 text-red-800";
    if (voucher.isActive) return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800"; // Not yet started
  }, []);

  const getVoucherStatusText = useCallback((voucher: FlatVoucher) => {
    if (voucher.isExpired) return "Expired";
    if (voucher.isActive) return "Active";
    return "Scheduled";
  }, []);

  return {
    // Data
    vouchers: currentPageData,
    totalVouchers: filteredVouchers.length,
    totalPages,
    
    // API states
    isLoading,
    error,
    
    // Search
    search,
    setSearch,
    
    // Pagination
    page,
    setPage,
    
    // Selection
    selected,
    toggleSelect,
    selectAllOnPage,
    
    // Utils
    getVoucherStatusBadge,
    getVoucherStatusText,
  };
}