"use client";

import { useState, useEffect, useMemo } from "react";
import { useTransactions } from "@/hooks/api/useTransactions";
import { useAuth } from "@/contexts/AuthContext";
import { Transaction, TransactionStatus } from "@/types/event.type";

export interface FlatTransaction extends Transaction {
  // Flattened fields for easier display
  eventTitle: string;
  eventCategory: string;
  customerName?: string;
  customerEmail?: string;
  ticketTypeName: string;
}

interface UseTransactionPageProps {
  pageSize?: number;
}

export function useTransactionPage({ pageSize = 10 }: UseTransactionPageProps = {}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("");

  const { user } = useAuth();

  // API call with parameters
  const {
    data: apiResponse,
    isLoading,
    error,
  } = useTransactions({
    page,
    limit: pageSize,
    status: statusFilter || undefined,
  });

  // Transform API response to flat structure
  const transactions = useMemo(() => {
    if (!apiResponse?.data) return [];
    
    return apiResponse.data.map((transaction: Transaction): FlatTransaction => ({
      ...transaction,
      eventTitle: transaction.event?.title || "Unknown Event",
      eventCategory: transaction.event?.category || "Unknown",
      ticketTypeName: transaction.ticketType?.name || "General",
      // Note: Customer info might need to be fetched separately if not included in the response
      customerName: "N/A", // Would need user info from backend
      customerEmail: "N/A", // Would need user info from backend
    }));
  }, [apiResponse?.data]);

  // Filter transactions based on search
  const filteredTransactions = useMemo(() => {
    if (!search.trim()) return transactions;
    
    const searchLower = search.toLowerCase();
    return transactions.filter((transaction) =>
      transaction.eventTitle.toLowerCase().includes(searchLower) ||
      transaction.id.toString().includes(searchLower) ||
      transaction.status.toLowerCase().includes(searchLower) ||
      transaction.eventCategory.toLowerCase().includes(searchLower) ||
      transaction.ticketTypeName.toLowerCase().includes(searchLower)
    );
  }, [transactions, search]);

  // Pagination info
  const totalTransactions = apiResponse?.pagination?.total || 0;
  const totalPages = apiResponse?.pagination?.totalPages || 1;

  // Selection handlers
  const toggleSelect = (transactionId: number, checked: boolean) => {
    if (checked) {
      setSelected(prev => [...prev, transactionId]);
    } else {
      setSelected(prev => prev.filter(id => id !== transactionId));
    }
  };

  const selectAllOnPage = (checked: boolean) => {
    if (checked) {
      const pageTransactionIds = filteredTransactions.map(t => t.id);
      setSelected(prev => [...new Set([...prev, ...pageTransactionIds])]);
    } else {
      const pageTransactionIds = new Set(filteredTransactions.map(t => t.id));
      setSelected(prev => prev.filter(id => !pageTransactionIds.has(id)));
    }
  };

  const clearSelection = () => {
    setSelected([]);
  };

  // Status badge helper
  const getStatusBadgeClass = (status: TransactionStatus) => {
    switch (status) {
      case "DONE":
        return "bg-green-100 text-green-800";
      case "WAITING_FOR_PAYMENT":
        return "bg-yellow-100 text-yellow-800";
      case "WAITING_FOR_CONFIRMATION":
        return "bg-blue-100 text-blue-800";
      case "REJECTED":
        return "bg-red-100 text-red-800";
      case "EXPIRED":
        return "bg-gray-100 text-gray-800";
      case "CANCELLED":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: TransactionStatus) => {
    switch (status) {
      case "DONE":
        return "Completed";
      case "WAITING_FOR_PAYMENT":
        return "Awaiting Payment";
      case "WAITING_FOR_CONFIRMATION":
        return "Pending Confirmation";
      case "REJECTED":
        return "Rejected";
      case "EXPIRED":
        return "Expired";
      case "CANCELLED":
        return "Cancelled";
      default:
        return status;
    }
  };

  // Reset page when search changes
  useEffect(() => {
    setPage(1);
  }, [search, statusFilter]);

  // Clear selection when page changes
  useEffect(() => {
    setSelected([]);
  }, [page]);

  return {
    // Data
    transactions: filteredTransactions,
    totalTransactions,
    totalPages,
    
    // Loading and error states
    isLoading,
    error,
    
    // Search and pagination
    search,
    setSearch,
    page,
    setPage,
    statusFilter,
    setStatusFilter,
    
    // Selection
    selected,
    toggleSelect,
    selectAllOnPage,
    clearSelection,
    
    // Helpers
    getStatusBadgeClass,
    getStatusText,
    
    // Debug info
    debug: {
      user,
      apiResponse,
      totalTransactions,
    },
  };
}
