import { api, API_ENDPOINTS } from '@/lib/api';
import { ApiResponseDto, PaginatedResponseDto } from '@/types/api.type';
import { EventWithDetails } from '@/types/event.type';

export class EventService {
  // Get all events (public)
  static async getAllEvents(params?: {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
  }): Promise<PaginatedResponseDto<EventWithDetails>> {
    const response = await api.get(API_ENDPOINTS.EVENTS.GET_ALL, { params });
    return response.data;
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

  // Organizer methods will be added when dashboard is implemented
  // static async createEvent(data: CreateEventDto): Promise<ApiResponseDto<Event>> {
  //   const response = await api.post(API_ENDPOINTS.EVENTS.CREATE, data);
  //   return response.data;
  // }

  // static async updateEvent(id: number, data: UpdateEventDto): Promise<ApiResponseDto<Event>> {
  //   const response = await api.put(API_ENDPOINTS.EVENTS.UPDATE(id), data);
  //   return response.data;
  // }

  // static async deleteEvent(id: number): Promise<ApiResponseDto<null>> {
  //   const response = await api.delete(API_ENDPOINTS.EVENTS.DELETE(id));
  //   return response.data;
  // }

  // static async publishEvent(id: number): Promise<ApiResponseDto<Event>> {
  //   const response = await api.post(API_ENDPOINTS.EVENTS.PUBLISH(id));
  //   return response.data;
  // }

  // static async getMyEvents(params?: {
  //   page?: number;
  //   limit?: number;
  // }): Promise<PaginatedResponseDto<Event>> {
  //   const response = await api.get(API_ENDPOINTS.EVENTS.MY_EVENTS, { params });
  //   return response.data;
  // }
}