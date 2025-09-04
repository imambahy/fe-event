import { useMemo } from "react";
import { useTickets } from "./useTickets";
import { useReviewsByEvent } from "@/hooks/api/useReviews";

interface Ticket {
  id: string;
  orderId: string;
  eventTitle: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
  ticketType: string;
  status: "confirmed" | "upcoming" | "completed";
  hasAttended: boolean;
  canReview: boolean;
  hasReviewed: boolean;
  price: number;

}

interface UseTicketManagementReturn {
  // Ticket data
  tickets: Ticket[];
  upcomingTickets: Ticket[];
  completedTickets: Ticket[];
  
  // Download functionality
  downloading: string | null;
  downloadTicket: (ticket: Ticket) => Promise<void>;
  
  // Review functionality
  showReviewForm: string | null;
  reviewData: { rating: number; comment: string };
  setShowReviewForm: (ticketId: string | null) => void;
  setReviewData: (data: { rating: number; comment: string }) => void;
  submitReview: (ticketId: string) => Promise<void>;
  resetReviewForm: () => void;
  
  // Utility functions
  getStatusBadge: (status: string) => { variant: string; className: string; text: string };
  formatEventDate: (date: string) => string;
}

export function useTicketManagement(): UseTicketManagementReturn {
  const { tickets, downloading, downloadTicket } = useTickets();
  const {
    showReviewForm,
    reviewData,
    setShowReviewForm,
    setReviewData,
    submitReview,
    resetReviewForm,
  } = useReview();

  // Memoized ticket filtering
  const upcomingTickets = useMemo(() => 
    tickets.filter(ticket => ticket.status === 'upcoming' || ticket.status === 'confirmed'), 
    [tickets]
  );
  
  const completedTickets = useMemo(() => 
    tickets.filter(ticket => ticket.status === 'completed'), 
    [tickets]
  );

  // Status badge utility
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return { variant: "default", className: "bg-green-100 text-green-800", text: "Confirmed" };
      case "upcoming":
        return { variant: "default", className: "bg-blue-100 text-blue-800", text: "Upcoming" };
      case "completed":
        return { variant: "default", className: "bg-gray-100 text-gray-800", text: "Completed" };
      default:
        return { variant: "outline", className: "", text: status };
    }
  };

  // Date formatting utility
  const formatEventDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return {
    tickets,
    upcomingTickets,
    completedTickets,
    downloading,
    downloadTicket,
    showReviewForm,
    reviewData,
    setShowReviewForm,
    setReviewData,
    submitReview,
    resetReviewForm,
    getStatusBadge,
    formatEventDate,
  };
}