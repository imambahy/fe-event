import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Create axios instance for backend API calls
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // CORS configuration
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle CORS errors
    if (error.code === "ERR_NETWORK" || error.message.includes("CORS")) {
      console.error("CORS Error:", error);
    }

    // Handle 401 Unauthorized - clear auth data and redirect to login
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/auth/login";
    }

    return Promise.reject(error);
  }
);

// Request interceptor to add JWT token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API endpoints
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    RESET_PASSWORD: "/auth/reset-password",
    RESET_PASSWORD_CONFIRM: "/auth/reset-password/confirm",
    PROFILE: "/auth/profile",
    CHANGE_PASSWORD: "/auth/change-password",
  },

  // Events
  EVENTS: {
    GET_ALL: "/event/events",
    GET_BY_ID: (id: number) => `/event/events/${id}`,
    GET_BY_SLUG: (slug: string) => `/event/events/slug/${slug}`,
    // Organizer endpoints
    CREATE: "/event/events",
    UPDATE: (id: number) => `/event/events/${id}`,
    DELETE: (id: number) => `/event/events/${id}`,
    PUBLISH: (id: number) => `/event/events/${id}/publish`,
    MY_EVENTS: "/event/my-events",
  },

  // Transactions
  TRANSACTIONS: {
    CREATE: (eventId: number) => `/transaction/events/${eventId}/transactions`,
    GET_ALL: "/transaction/transactions",
    GET_BY_ID: (id: number) => `/transaction/transactions/${id}`,
    GET_MY_TRANSACTIONS: "/transaction/transactions",
    UPLOAD_PAYMENT: (id: number) =>
      `/transaction/transactions/${id}/payment-proof`,
    UPDATE_STATUS: (id: number) => `/transaction/transactions/${id}/status`,
    STATS: "/transaction/transaction-stats",
  },

  // Reviews
  REVIEWS: {
    CREATE: (eventId: number) => `/review/events/${eventId}/reviews`,
    GET_BY_EVENT: (eventId: number) => `/review/events/${eventId}/reviews`,
    GET_BY_ID: (id: number) => `/review/reviews/${id}`,
    UPDATE: (id: number) => `/review/reviews/${id}`,
    DELETE: (id: number) => `/review/reviews/${id}`,
    GET_USER_REVIEWS: "/review/user/reviews",
    GET_ORGANIZER_REVIEWS: "/review/organizer/reviews",
    GET_STATS: "/review/review-stats",
  },

  // Vouchers & Coupons
  VOUCHERS: {
    GET_ALL: "/voucher/vouchers",
    GET_BY_ID: (id: number) => `/voucher/vouchers/${id}`,
    CREATE: "/voucher/vouchers",
    UPDATE: (id: number) => `/voucher/vouchers/${id}`,
    DELETE: (id: number) => `/voucher/vouchers/${id}`,
    STATS: "/voucher/vouchers/stats",
  },
  COUPONS: {
    GET_ALL: "/coupon/coupons",
    GET_BY_ID: (id: number) => `/coupon/coupons/${id}`,
    CREATE: "/coupon/coupons",
    UPDATE: (id: number) => `/coupon/coupons/${id}`,
    DELETE: (id: number) => `/coupon/coupons/${id}`,
    GET_USER_COUPONS: "/coupon/user-coupons",
    STATS: "/coupon/coupons/stats",
  },
};
