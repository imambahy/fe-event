// Base ticket interface
export interface BaseTicket {
  id: string;
  ticketType: string;
  eventTitle: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
}

// Full ticket interface for my-tickets page
export interface Ticket extends BaseTicket {
  orderId: string;
  status: "confirmed" | "pending" | "upcoming" | "completed";
  hasAttended: boolean;
  canReview: boolean;
  hasReviewed: boolean;
  price: number;
  quantity?: number;
}

// Simple ticket interface for confirmation page
export interface SimpleTicket extends BaseTicket {
  // Only the base properties needed
}

// Ticket download/management related
export interface TicketDownload {
  ticketId: string;
  downloading: boolean;
  downloadUrl?: string;
}

export type TicketStatus = "confirmed" | "pending" | "upcoming" | "completed";
