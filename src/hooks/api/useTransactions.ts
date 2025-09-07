"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { TransactionService } from "@/services/api/transaction.service";
import { CreateTransactionDto } from "@/types/transaction.type";

export function useTransactions(params?: {
  page?: number;
  limit?: number;
  status?: string;
}) {
  return useQuery({
    queryKey: ["transactions", params],
    queryFn: () => TransactionService.getAllTransactions(params),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}

export function useTransactionById(id: number) {
  return useQuery({
    queryKey: ["transaction", id],
    queryFn: () => TransactionService.getTransactionById(id),
    enabled: !!id,
  });
}

export function useCreateTransaction() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ eventId, data }: { eventId: number; data: CreateTransactionDto }) => 
      TransactionService.createTransaction(eventId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}

export function useUploadPaymentProof() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ transactionId, data }: { transactionId: number; data: FormData }) => 
      TransactionService.uploadPaymentProof(transactionId, data),
    onSuccess: (_, { transactionId }) => {
      queryClient.invalidateQueries({ queryKey: ["transaction", transactionId] });
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}

export function useUpdateTransactionStatus() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) => 
      TransactionService.updateTransactionStatus(id, status),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["transaction", id] });
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}

export function useTransactionStats() {
  return useQuery({
    queryKey: ["transaction-stats"],
    queryFn: () => TransactionService.getTransactionStats(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useTransactionPage({ pageSize = 10 }: { pageSize?: number }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [statusFilter, setStatusFilter] = useState<string>("");

  // Fetch transactions with pagination
  const { data: transactionsResponse, isLoading, error, refetch } = useTransactions({
    page: currentPage,
    limit: pageSize,
    ...(statusFilter && { status: statusFilter }),
  });

  const transactions = transactionsResponse?.data || [];
  const pagination = transactionsResponse?.pagination;

  // Filter transactions based on search query
  const filteredTransactions = transactions.filter((transaction: any) =>
    searchQuery === "" ||
    transaction.event?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.user?.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    filteredTransactions.forEach((transaction: any) => {
      newSelected.add(transaction.id);
    });
    setSelectedItems(newSelected);
  };

  const clearSelection = () => {
    setSelectedItems(new Set());
  };

  // Status badge helpers
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "WAITING_FOR_PAYMENT":
        return "bg-yellow-100 text-yellow-800";
      case "WAITING_FOR_CONFIRMATION":
        return "bg-blue-100 text-blue-800";
      case "DONE":
        return "bg-green-100 text-green-800";
      case "REJECTED":
        return "bg-red-100 text-red-800";
      case "EXPIRED":
        return "bg-gray-100 text-gray-800";
      case "CANCELLED":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "WAITING_FOR_PAYMENT":
        return "Waiting for Payment";
      case "WAITING_FOR_CONFIRMATION":
        return "Waiting for Confirmation";
      case "DONE":
        return "Completed";
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

  // Debug helper
  const debug = () => {
    console.log("Transaction page debug:", {
      currentPage,
      totalPages,
      transactionsCount: transactions.length,
      filteredCount: filteredTransactions.length,
      selectedCount: selectedItems.size,
      searchQuery,
      statusFilter,
      isLoading,
      error: error?.message,
    });
  };

  return {
    // Data
    transactions: filteredTransactions,
    pagination,

    // State
    currentPage,
    setCurrentPage,
    searchQuery,
    setSearchQuery,
    selectedItems,
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
    getStatusBadgeClass,
    getStatusText,
    debug,
  };
}