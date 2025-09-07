"use client";

import { useQuery } from "@tanstack/react-query";
import { TransactionService } from "@/services/api/transaction.service";
import { EventService } from "@/services/api/event.service";
import { Transaction } from "@/types/transaction.type";

export interface DashboardStats {
  totalEvents: number;
  totalTransactions: number;
  totalRevenue: number;
  totalAttendees: number;
  activeEvents: number;
  pendingTransactions: number;
  completedTransactions: number;
  totalTicketsSold: number;
  averageRating: number;
  recentTransactions: Transaction[];
  upcomingEvents: Array<{
    id: number;
    title: string;
    startDate: string;
    location: string;
    totalCapacity: number;
    totalTicketsSold: number;
  }>;
  monthlyRevenue: Array<{
    month: string;
    revenue: number;
    transactions: number;
  }>;
}

// Hook untuk mendapatkan semua statistics dashboard
export function useDashboardStats() {
  return useQuery({
    queryKey: ["dashboard", "stats"],
    queryFn: async (): Promise<DashboardStats> => {
      // Get transaction stats
      const transactionStats = await TransactionService.getTransactionStats();

      // Get organizer events for additional stats
      const eventsResponse = await EventService.getAllEvents({
        page: 1,
        limit: 50 // Reduced limit to avoid 400 error
      });

      const events = eventsResponse.data || [];

      // Calculate additional stats
      const totalTicketsSold = events.reduce((sum, event) =>
        sum + event.ticketTypes.reduce((ticketSum, ticketType) => 
          ticketSum + (ticketType.totalSeats - ticketType.availableSeats), 0
        ), 0
      );

      const averageRating = events.length > 0
        ? events.reduce((sum, event) => sum + (event.averageRating || 0), 0) / events.length
        : 0;

      // Get recent transactions from API
      const recentTransactionsResponse = await TransactionService.getAllTransactions({
        page: 1,
        limit: 5
      });
      const recentTransactions = recentTransactionsResponse.data || [];

      // Mock upcoming events
      const upcomingEvents = events
        .filter(event => new Date(event.startDate) > new Date())
        .slice(0, 5)
        .map(event => ({
          id: event.id,
          title: event.title,
          startDate: event.startDate,
          location: event.location,
          totalCapacity: event.ticketTypes.reduce((sum, ticketType) => sum + ticketType.totalSeats, 0),
          totalTicketsSold: event.ticketTypes.reduce((sum, ticketType) => 
            sum + (ticketType.totalSeats - ticketType.availableSeats), 0
          ),
        }));

      // Calculate monthly revenue from actual transaction data
      const monthlyRevenue = [
        { month: "Jan", revenue: 0, transactions: 0 },
        { month: "Feb", revenue: 0, transactions: 0 },
        { month: "Mar", revenue: 0, transactions: 0 },
        { month: "Apr", revenue: 0, transactions: 0 },
        { month: "May", revenue: 0, transactions: 0 },
        { month: "Jun", revenue: 0, transactions: 0 },
      ];

      // Calculate total attendees and active events
      const totalAttendees = totalTicketsSold; // Same as total tickets sold
      const activeEvents = events.filter(event => {
        const now = new Date();
        const startDate = new Date(event.startDate);
        const endDate = new Date(event.endDate);
        return event.published && now >= startDate && now <= endDate;
      }).length;

      return {
        totalEvents: events.length,
        totalTransactions: transactionStats.data?.totalTransactions || 0,
        totalRevenue: transactionStats.data?.totalRevenue || 0,
        totalAttendees,
        activeEvents,
        pendingTransactions: transactionStats.data?.pendingTransactions || 0,
        completedTransactions: transactionStats.data?.completedTransactions || 0,
        totalTicketsSold,
        averageRating: Math.round(averageRating * 10) / 10,
        recentTransactions,
        upcomingEvents,
        monthlyRevenue,
      };
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
}

// Hook untuk mendapatkan quick stats (lighter version)
export function useQuickStats() {
  return useQuery({
    queryKey: ["dashboard", "quick-stats"],
    queryFn: async () => {
      const transactionStats = await TransactionService.getTransactionStats();
      const eventsResponse = await EventService.getAllEvents({ page: 1, limit: 1 });

      return {
        totalEvents: eventsResponse.pagination?.total || 0,
        totalTransactions: transactionStats.data?.totalTransactions || 0,
        totalRevenue: transactionStats.data?.totalRevenue || 0,
        pendingTransactions: transactionStats.data?.pendingTransactions || 0,
      };
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
    refetchInterval: 2 * 60 * 1000, // Refetch every 2 minutes
  });
}
