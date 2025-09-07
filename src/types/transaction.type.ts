export interface CreateTransactionDto {
  ticketTypeId: number;
  quantity: number;
  pointsUsed?: number;
  couponCode?: string;
  voucherCode?: string;
}

export interface Transaction {
  id: number;
  userId: number;
  organizerId: number;
  eventId: number;
  status: TransactionStatus;
  ticketTypeId: number;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  pointsUsed: number;
  couponId?: number;
  voucherId?: number;
  finalAmount: number;
  paymentProof?: string;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  
  // Relations - import types from event.type to avoid circular dependency
  event: {
    id: number;
    organizerId: number;
    title: string;
    slug: string;
    description: string;
    category: string;
    location: string;
    startDate: string;
    endDate: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    time?: string;
    organizer?: {
      id: number;
      name: string;
      email: string;
    };
  };
  ticketType: {
    id: number;
    eventId: number;
    name: string;
    price: number;
    totalSeats: number;
    availableSeats: number;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    id: number;
    name: string;
    email: string;
  };
  organizer?: {
    id: number;
    name: string;
    email: string;
  };
}

export type TransactionStatus = 
  | "WAITING_FOR_PAYMENT"
  | "WAITING_FOR_CONFIRMATION"
  | "DONE"
  | "REJECTED"
  | "EXPIRED"
  | "CANCELLED";

export interface TransactionStats {
  totalTransactions: number;
  totalRevenue: number;
  pendingTransactions: number;
  completedTransactions: number;
  rejectedTransactions: number;
  monthlyStats?: {
    month: string;
    transactions: number;
    revenue: number;
  }[];
}
