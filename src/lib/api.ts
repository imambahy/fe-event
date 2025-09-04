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
    if (error.code === 'ERR_NETWORK' || error.message.includes('CORS')) {
      console.error('CORS Error:', error);
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
    ME: "/auth/me",
  },

  // Events
  EVENTS: {
    GET_ALL: "/event/events",
    GET_BY_ID: (id: number) => `/event/events/${id}`,
    GET_BY_SLUG: (slug: string) => `/event/events/slug/${slug}`,
    CREATE: "/event/events",
    UPDATE: (id: number) => `/event/events/${id}`,
    DELETE: (id: number) => `/event/events/${id}`,
    PUBLISH: (id: number) => `/event/events/${id}/publish`,
    MY_EVENTS: "/event/my-events",
    // Alternative endpoints for debugging
    MY_EVENTS_ALT: "/events/my-events", // Alternative path without /event prefix
  },

  // Transactions
  TRANSACTIONS: {
    CREATE: (eventId: number) => `/transaction/events/${eventId}/transactions`,
    GET_ALL: "/transaction/transactions",
    GET_BY_ID: (id: number) => `/transaction/transactions/${id}`,
    UPLOAD_PAYMENT: (id: number) => `/transaction/transactions/${id}/payment-proof`,
    UPDATE_STATUS: (id: number) => `/transaction/transactions/${id}/status`,
    STATS: "/transaction/transaction-stats",
  },

  // Reviews
  REVIEWS: {
    CREATE: (eventId: number) => `/review/events/${eventId}/reviews`,
    GET_BY_EVENT: (eventId: number) => `/review/events/${eventId}/reviews`,
  },

  // Vouchers
  VOUCHERS: {
    GET_ALL: "/voucher/vouchers",
    GET_BY_ID: (id: number) => `/voucher/vouchers/${id}`,
  },

  // Coupons
  COUPONS: {
    GET_ALL: "/coupon/coupons",
    GET_BY_ID: (id: number) => `/coupon/coupons/${id}`,
  },
};