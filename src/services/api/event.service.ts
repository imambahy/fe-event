import { api, API_ENDPOINTS } from '@/lib/api';
import { ApiResponseDto, PaginatedResponseDto } from '@/types/api.type';
import { EventWithDetails } from '@/types/event.type';
import { createEventSchema, updateEventSchema, ticketTypeSchema } from '@/validations/event.validation';

export class EventService {
  // Get all events (public)
  static async getAllEvents(params?: {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
    status?: "upcoming" | "ongoing" | "ended"; // Added status filter (feedback Kelompok 2)
  }): Promise<PaginatedResponseDto<EventWithDetails>> {
    try {
      const response = await api.get(API_ENDPOINTS.EVENTS.GET_ALL, { params });
      return response.data;
    } catch (error: any) {
      console.error('Error fetching events:', error);
      
      // Return empty response if API fails
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to fetch events',
        data: [],
        pagination: {
          page: 1,
          limit: 10,
          total: 0,
          totalPages: 0
        }
      };
    }
  }

  // Get event by ID (public)
  static async getEventById(id: number): Promise<ApiResponseDto<EventWithDetails>> {
    const response = await api.get(API_ENDPOINTS.EVENTS.GET_BY_ID(id));
    return response.data;
  }

  // Get event by slug (public)
  static async getEventBySlug(slug: string): Promise<ApiResponseDto<EventWithDetails>> {
    const endpoint = API_ENDPOINTS.EVENTS.GET_BY_SLUG(slug);
    
    const response = await api.get(endpoint);
    return { 
      success: true, 
      message: 'Event retrieved successfully', 
      data: response.data 
    };
  }

  // Organizer methods
  static async createEvent(data: any): Promise<ApiResponseDto<EventWithDetails>> {
    // Validate event data (feedback Kelompok 2)
    const validatedData = createEventSchema.parse(data);

    // Additional validation: date validation
    const now = new Date();
    const startDate = new Date(validatedData.startDate);
    const endDate = new Date(validatedData.endDate);

    if (startDate <= now) {
      throw new Error("Start date must be in the future");
    }

    if (endDate <= startDate) {
      throw new Error("End date must be after start date");
    }

    // Validate ticket types
    validatedData.ticketTypes.forEach((ticketType, index) => {
      if (ticketType.price < 0) {
        throw new Error(`Ticket type ${index + 1}: Price cannot be negative`);
      }
      if (ticketType.totalSeats < 1) {
        throw new Error(`Ticket type ${index + 1}: Total seats must be at least 1`);
      }
    });

    const response = await api.post(API_ENDPOINTS.EVENTS.CREATE, validatedData);
    return response.data;
  }

  static async updateEvent(id: number, data: any): Promise<ApiResponseDto<EventWithDetails>> {
    // Validate update data (feedback Kelompok 2)
    const validatedData = updateEventSchema.parse(data);

    // Additional validation for dates if provided
    if (validatedData.startDate && validatedData.endDate) {
      const startDate = new Date(validatedData.startDate);
      const endDate = new Date(validatedData.endDate);

      if (endDate <= startDate) {
        throw new Error("End date must be after start date");
      }
    }

    // Validate ticket types if provided
    if (validatedData.ticketTypes) {
      validatedData.ticketTypes.forEach((ticketType, index) => {
        if (ticketType.price < 0) {
          throw new Error(`Ticket type ${index + 1}: Price cannot be negative`);
        }
        if (ticketType.totalSeats < 1) {
          throw new Error(`Ticket type ${index + 1}: Total seats must be at least 1`);
        }
      });
    }

    const response = await api.put(API_ENDPOINTS.EVENTS.UPDATE(id), validatedData);
    return response.data;
  }

  static async deleteEvent(id: number): Promise<ApiResponseDto<null>> {
    const response = await api.delete(API_ENDPOINTS.EVENTS.DELETE(id));
    return response.data;
  }

  static async publishEvent(id: number): Promise<ApiResponseDto<EventWithDetails>> {
    // Validation: Check if endDate > now and totalSeats > 0 (feedback Kelompok 2)
    // Note: This validation should ideally be done on backend, but we can add frontend check

    const response = await api.patch(API_ENDPOINTS.EVENTS.PUBLISH(id));
    return response.data;
  }

  static async getMyEvents(params?: {
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponseDto<EventWithDetails>> {
    const response = await api.get(API_ENDPOINTS.EVENTS.MY_EVENTS, { params });
    return response.data;
  }
}