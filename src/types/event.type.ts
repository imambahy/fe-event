
// ENUM DEFINITIONS
export enum TransactionStatus {
  WAITING_FOR_PAYMENT = "waiting_for_payment",
  WAITING_FOR_CONFIRMATION = "waiting_for_confirmation",
  DONE = "done",
  REJECTED = "rejected",
  EXPIRED = "expired",
  CANCELED = "canceled",
}

export enum VoucherStatus {
  ACTIVE = "active",
  USED = "used",
  EXPIRED = "expired",
}

// EVENT MANAGEMENT
export interface Event {
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
}

export interface TicketType {
  id: number;
  eventId: number;
  name: string;
  price: number;
  totalSeats: number;
  availableSeats: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface Review {
  id: number;
  userId: number;
  eventId: number;
  rating: number;
  comment: string;
  createdAt: string;
  deletedAt?: string;
}

// TRANSACTIONS
export interface Transaction {
  id: number;
  userId: number;
  organizerId: number;
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
}

// PROMO SYSTEM
export interface Voucher {
  id: number;
  organizerId: number;
  code: string;
  discountValue: number;
  eventId: number;
  usageLimit: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  deletedAt?: string;
}

export interface Coupon {
  id: number;
  code: string;
  discountValue: number;
  usageLimit: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  deletedAt?: string;
}

export interface UserVoucher {
  id: number;
  userId: number;
  voucherId: number;
  status: VoucherStatus;
  usedAt?: string;
  expiresAt: string;
  createdAt: string;
}

export interface UserCoupon {
  id: number;
  userId: number;
  couponId: number;
  status: VoucherStatus;
  usedAt?: string;
  expiresAt: string;
  createdAt: string;
}

// For frontend display (includes computed fields)
export interface EventWithDetails extends Event {
  organizer?: {
    id: number;
    name: string;
    email: string;
  };
  ticketTypes?: TicketType[];
  reviews?: Review[];
  averageRating?: number;
  totalReviews?: number;
  totalAttendees?: number;
  isFree?: boolean;
  isFeatured?: boolean;
  image?: string;
  time?: string;
}

// Frontend filter interface
export interface EventFilters {
  searchQuery: string;
  selectedCategory: string;
  dateRange: string;
  priceRange: string;
  location: string;
  sortBy: string;
}

// Ticket selection for event detail page
export interface TicketSelection {
  ticketTypeId: number;
  quantity: number;
}
