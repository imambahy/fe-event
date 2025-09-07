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

// Import API response types from dedicated file
import type { ApiResponseDto, PaginatedResponseDto } from './api.type';
export type { ApiResponseDto, PaginatedResponseDto } from './api.type';

// Frontend response types (alias untuk DTO)
export type ApiResponse<T> = ApiResponseDto<T>;
export type PaginatedResponse<T> = PaginatedResponseDto<T>;

// Import TransactionStatus from dedicated file
export type { TransactionStatus } from './transaction.type';

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

// Import Transaction from dedicated file
export type { Transaction } from './transaction.type';

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