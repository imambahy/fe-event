"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";  
import { TransactionService } from "@/services/api/transaction.service";
import { CreateTransactionDto } from "@/types/checkout.type";

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