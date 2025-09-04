"use client";

import { useMemo, useState, useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDebounce } from "@/hooks/useDebounce";
import { Event, EventWithStats } from "@/types/backend.type";
import { api, API_ENDPOINTS } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";

// Event data matching Prisma Event model + calculated fields
export type FlatEvent = {
  // Core Event fields from Prisma schema
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
  deletedAt?: string | null;
  
  // Derived status (calculated from dates and published state)
  status: "draft" | "upcoming" | "ongoing" | "ended";
  
  // Calculated fields from backend
  averageRating?: number;
  totalReviews?: number;
  totalAttendees?: number;
  isFree?: boolean;
  isFeatured?: boolean;
  time?: string;
  
  // Aggregated data
  ticketTypes?: TicketType[];
  totalCapacity?: number;
  totalTicketsSold?: number;
  totalTransactions?: number;
  
  // Relations (if needed for display)
  reviews?: any[];
  _count?: {
    transactions: number;
  };
};

// TicketType interface matching Prisma schema
export type TicketType = {
  id: number;
  eventId: number;
  name: string;
  price: number;
  totalSeats: number;
  availableSeats: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
};

interface UseEventsPageOptions {
  pageSize?: number;
}

export function useEventsPage({ pageSize = 5 }: UseEventsPageOptions = {}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);
  
  const debouncedSearch = useDebounce(search, 300);
  const queryClient = useQueryClient();
  const { user } = useAuth(); // Get current user for organizerId filtering
  
  // Fetch organizer's events from API with simple fallback
  const { data: eventsResponse, isLoading, error, refetch } = useQuery({
    queryKey: ["my-events", user?.id], 
    queryFn: async () => {
              console.log('🔍 Fetching events for user:', user, 'role:', user?.role);
      console.log('🔍 Full user object:', user);
      console.log('🔍 User keys:', user ? Object.keys(user) : 'null');

      if (!user?.id) {
        console.error('❌ No user ID available', { user, userType: typeof user });
        throw new Error("User not authenticated - ID missing");
      }

      if (user.role !== "ORGANIZER") {
        console.error('❌ User is not an organizer:', user.role);
        throw new Error("Only organizers can view their events");
      }

      try {
        // Primary: Try MY_EVENTS endpoint
        console.log('📡 Calling MY_EVENTS endpoint:', API_ENDPOINTS.EVENTS.MY_EVENTS);
        const response = await api.get(API_ENDPOINTS.EVENTS.MY_EVENTS);
        console.log('✅ MY_EVENTS Success:', response.data?.length || 0, 'events');
        console.log('📊 Sample event data:', response.data?.[0] ? {
          id: response.data[0].id,
          organizerId: response.data[0].organizerId,
          title: response.data[0].title,
          published: response.data[0].published,
          ticketTypes: response.data[0].ticketTypes?.length || 0,
          _count: response.data[0]._count
        } : 'No events');
        
        // Verify organizerId matches current user
        if (response.data?.length > 0) {
          const mismatchedEvents = response.data.filter((event: any) => event.organizerId !== user?.id);
          if (mismatchedEvents.length > 0) {
            console.warn('⚠️ Found events with organizerId not matching current user:', mismatchedEvents.length);
          } else {
            console.log('✅ All events belong to current organizer (ID:', user?.id, ')');
          }
        }
        
        return response.data;
      } catch (primaryError: any) {
        console.error('❌ MY_EVENTS Failed:', primaryError.response?.status, primaryError.response?.data);

        // Fallback: Try GET_ALL and filter by organizerId
        try {
          console.log('🔄 Trying fallback with GET_ALL');
          const fallbackResponse = await api.get(API_ENDPOINTS.EVENTS.GET_ALL);
          console.log('🔄 Using GET_ALL fallback:', fallbackResponse.data?.length || 0, 'total events');
          
          // Filter by organizerId in fallback
          const filteredData = fallbackResponse.data?.filter((event: any) => event.organizerId === user?.id) || [];
          console.log('✅ Filtered fallback events for organizer ID', user?.id, ':', filteredData.length, 'events');
          
          return {
            fallback: true,
            data: filteredData
          };
        } catch (fallbackError: any) {
          console.error('❌ Both endpoints failed:', fallbackError.response?.status, fallbackError.response?.data);
          throw fallbackError;
        }
      }
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
    enabled: !!user && user?.role === "ORGANIZER",
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  // Transform backend data to flat structure
  const events: FlatEvent[] = useMemo(() => {
    if (!eventsResponse) {
      return [];
    }

    // Extract data array from response
    let src = eventsResponse;
    
    // Handle fallback response structure
    if (eventsResponse.fallback) {
      console.log('🔄 Using fallback data');
      src = eventsResponse.data || [];
    }
    
    // Handle paginated response
    if (src && typeof src === 'object' && 'data' in src) {
      src = src.data;
    }
    
    // Ensure we have an array
    if (!Array.isArray(src)) {
      src = [];
    }

    console.log('📊 Processing', src.length, 'events');

    // Additional safety check: Ensure all events belong to current organizer
    if (user?.id && src.length > 0) {
      const beforeCount = src.length;
      src = src.filter((item: any) => item.organizerId === user.id);
      const afterCount = src.length;
      
      if (beforeCount !== afterCount) {
        console.warn('⚠️ Filtered out', beforeCount - afterCount, 'events not belonging to organizer', user.id);
      }
      console.log('✅ Verified all', afterCount, 'events belong to organizer ID:', user.id);
    }
    
    return src.map((item: any) => {
      const now = new Date();
      const startDate = new Date(item.startDate);
      const endDate = new Date(item.endDate);
      
      // Determine status based on dates and published state
      let status = "draft";
      if (item.published) {
        if (now < startDate) status = "upcoming";
        else if (now >= startDate && now <= endDate) status = "ongoing";
        else if (now > endDate) status = "ended";
      }

      // Calculate aggregated data from ticketTypes
      const ticketTypes = item.ticketTypes || [];
      const totalCapacity = ticketTypes.reduce((total: number, ticket: any) => total + (ticket.totalSeats || 0), 0);
      const totalTicketsSold = ticketTypes.reduce((total: number, ticket: any) => total + ((ticket.totalSeats || 0) - (ticket.availableSeats || 0)), 0);
      
      return {
        // Core Event fields from Prisma schema
        id: item.id,
        organizerId: item.organizerId,
        title: item.title || "",
        slug: item.slug || "",
        description: item.description || "",
        category: item.category || "",
        location: item.location || "",
        startDate: item.startDate || "",
        endDate: item.endDate || "",
        published: item.published ?? false,
        createdAt: item.createdAt || "",
        updatedAt: item.updatedAt || "",
        deletedAt: item.deletedAt,
        
        // Derived status
        status: status as "draft" | "upcoming" | "ongoing" | "ended",
        
        // Calculated fields from backend (if available)
        averageRating: item.averageRating,
        totalReviews: item.totalReviews,
        totalAttendees: item.totalAttendees,
        isFree: item.isFree,
        isFeatured: item.isFeatured,
        time: item.time,
        
        // Aggregated data
        ticketTypes: ticketTypes,
        totalCapacity,
        totalTicketsSold,
        totalTransactions: item._count?.transactions || 0,
        
        // Relations
        reviews: item.reviews,
        _count: item._count,
      };
    });
  }, [eventsResponse, user?.id]); // Re-compute when user changes

  // Filter and paginate
  const filteredEvents = useMemo(() => {
    if (!debouncedSearch) return events;
    const query = debouncedSearch.toLowerCase();
    return events.filter(event => 
      Object.values(event).some(value => 
        String(value).toLowerCase().includes(query)
      )
    );
  }, [events, debouncedSearch]);

  const totalPages = Math.ceil(filteredEvents.length / pageSize);
  const currentPageData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredEvents.slice(start, start + pageSize);
  }, [filteredEvents, page, pageSize]);

  // Selection handlers
  const toggleSelect = useCallback((id: number, checked: boolean) => {
    setSelected(prev => 
      checked ? [...prev, id] : prev.filter(x => x !== id)
    );
  }, []);

  const selectAllOnPage = useCallback((checked: boolean) => {
    const pageIds = currentPageData.map(event => event.id);
    setSelected(prev => 
      checked 
        ? [...new Set([...prev, ...pageIds])]
        : prev.filter(id => !pageIds.includes(id))
    );
  }, [currentPageData]);

  // Status badge utility (based on backend status logic)
  const getStatusBadgeClass = useCallback((status: string) => {
    const s = status?.toLowerCase();
    if (s === "ended") return "bg-red-100 text-red-800";
    if (s === "upcoming") return "bg-orange-100 text-orange-800";
    if (s === "draft") return "bg-gray-100 text-gray-800";
    if (s === "ongoing") return "bg-green-100 text-green-800";
    return "bg-blue-100 text-blue-800";
  }, []);

  // Event status helpers (based on Prisma logic)
  const getEventStatus = useCallback((event: FlatEvent): string => {
    const now = new Date();
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    
    if (!event.published) return "draft";
    if (now < startDate) return "upcoming";
    if (now >= startDate && now <= endDate) return "ongoing";
    if (now > endDate) return "ended";
    return "draft";
  }, []);

  // Additional utility functions


  const clearSelection = useCallback(() => {
    setSelected([]);
  }, []);

  console.log('📈 Returning', currentPageData.length, 'events to dashboard');

  return {
    // Data
    events: currentPageData,
    totalEvents: filteredEvents.length,
    totalPages,
    
    // API states
    isLoading,
    error,
    
    // Search
    search,
    setSearch,
    
    // Pagination
    page,
    setPage,
    
    // Selection
    selected,
    toggleSelect,
    selectAllOnPage,
    clearSelection,
    
    // Utils
    getStatusBadgeClass,
    getEventStatus,

    
    // Debug info (simplified)
    debug: {
      hasUser: !!user?.id,
      userRole: user?.role,
      isQueryEnabled: !!user?.id,
      rawResponseType: typeof eventsResponse,
      rawEventsCount: events.length
    }
  };
}
