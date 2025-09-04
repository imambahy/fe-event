// Generated types based on backend-files/schema.prisma

export enum Role {
  CUSTOMER = "CUSTOMER",
  ORGANIZER = "ORGANIZER",
}

export enum TransactionStatus {
  WAITING_FOR_PAYMENT = "WAITING_FOR_PAYMENT",
  WAITING_FOR_CONFIRMATION = "WAITING_FOR_CONFIRMATION",
  DONE = "DONE",
  REJECTED = "REJECTED",
  EXPIRED = "EXPIRED",
  CANCELLED = "CANCELLED",
}

export enum VoucherStatus {
  ACTIVE = "ACTIVE",
  USED = "USED",
  EXPIRED = "EXPIRED",
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  referralCode?: string;
  referredById?: number;
  points: number;
  pointsExpiry?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Event {
  id: number;
  organizerId: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  location: string;
  startDate: Date;
  endDate: Date;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface TicketType {
  id: number;
  eventId: number;
  name: string;
  price: number;
  totalSeats: number;
  availableSeats: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Review {
  id: number;
  userId: number;
  eventId: number;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
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
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Voucher {
  id: number;
  organizerId: number;
  code: string;
  discountValue: number;
  eventId: number;
  usageLimit: number;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  deletedAt?: Date;
}

export interface Coupon {
  id: number;
  code: string;
  discountValue: number;
  usageLimit: number;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  deletedAt?: Date;
}

export interface UserVoucher {
  id: number;
  userId: number;
  voucherId: number;
  status: VoucherStatus;
  usedAt?: Date;
  expiresAt: Date;
  createdAt: Date;
}

export interface UserCoupon {
  id: number;
  userId: number;
  couponId: number;
  status: VoucherStatus;
  usedAt?: Date;
  expiresAt: Date;
  createdAt: Date;
}

// Extended types with relations for dashboard
export interface EventWithStats extends Event {
  organizer: User;
  reviews: Review[];
  ticketTypes: TicketType[];
  transactions: Transaction[];
  vouchers: Voucher[];
  // Computed fields
  stats?: {
    capacity: number;
    ticketsSold: number;
    checkIns: number;
    revenueIDR: number;
    views: number;
    wishlists: number;
  };
  derived?: {
    status: "draft" | "upcoming" | "ongoing" | "ended";
    isDraft: boolean;
    isUpcoming: boolean;
    isOngoing: boolean;
    isEnded: boolean;
  };
}

export interface VoucherWithUsage extends Voucher {
  event: Event;
  organizer: User;
  userVouchers: UserVoucher[];
  transactions: Transaction[];
  // Computed fields
  usedCount: number;
  isActive: boolean;
  isExpired: boolean;
}
