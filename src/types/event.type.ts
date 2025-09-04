export interface CreateEventDto {
  title: string;
  description: string;
  category: string;
  location: string;
  startDate: Date;
  endDate: Date;
  ticketTypes: CreateTicketTypeDto[];
}

export interface CreateTicketTypeDto {
  name: string;
  price: number;
  totalSeats: number;
}

export interface UpdateEventDto {
  title?: string;
  description?: string;
  category?: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
  published?: boolean;
}

// Frontend request types (alias untuk DTO)
export type CreateEventRequest = CreateEventDto;
export type CreateTicketTypeRequest = CreateTicketTypeDto;
export type UpdateEventRequest = UpdateEventDto;

// API Response types (sesuai dengan backend)
export interface ApiResponseDto<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface PaginatedResponseDto<T> {
  data: T[];
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}

// Frontend response types (alias untuk DTO)
export type ApiResponse<T> = ApiResponseDto<T>;
export type PaginatedResponse<T> = PaginatedResponseDto<T>;

// Enums
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

// Database models
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
  time?: string;
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
}

export interface Review {
  id: number;
  userId: number;
  eventId: number;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    name: string;
  };
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
  event: Event;
  ticketType: TicketType;
}

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
  voucher: Voucher;
}

export interface UserCoupon {
  id: number;
  userId: number;
  couponId: number;
  status: VoucherStatus;
  usedAt?: string;
  expiresAt: string;
  createdAt: string;
  coupon: Coupon;
}

export interface EventWithDetails extends Event {
  ticketTypes: TicketType[];
  reviews: Review[];
  organizer: {
    id: number;
    name: string;
    email: string;
  };
  image?: string;
  time?: string;
  averageRating?: number;
  totalReviews?: number;
  totalAttendees?: number;
  isFree?: boolean;
  isFeatured?: boolean;
}