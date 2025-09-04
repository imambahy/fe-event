import { api, API_ENDPOINTS } from '@/lib/api';
import { 
  CreateEventDto, 
  UpdateEventDto, 
  ApiResponseDto, 
  PaginatedResponseDto,
  Event,
  EventWithDetails 
} from '@/types/event.type';

export class EventService {
  // Get all events (public)
  static async getAllEvents(params?: {
    page?: number;
    limit?: number;
    category?: string;
    location?: string;
    search?: string;
  }): Promise<PaginatedResponseDto<EventWithDetails>> {
    const response = await api.get(API_ENDPOINTS.EVENTS.GET_ALL, { params });
    return response.data;
  }

  // Get event by ID (public)
  static async getEventById(id: number): Promise<ApiResponseDto<EventWithDetails>> {
    const response = await api.get(`${API_ENDPOINTS.EVENTS.GET_BY_ID}/${id}`);
    return response.data;
  }

  // Get event by slug (public)
  static async getEventBySlug(slug: string): Promise<ApiResponseDto<EventWithDetails>> {
    const response = await api.get(`${API_ENDPOINTS.EVENTS.GET_BY_SLUG}/${slug}`);
    return response.data;
  }

  // Create event (organizer only)
  static async createEvent(data: CreateEventDto): Promise<ApiResponseDto<Event>> {
    const response = await api.post(API_ENDPOINTS.EVENTS.CREATE, data);
    return response.data;
  }

  // Update event (organizer only)
  static async updateEvent(id: number, data: UpdateEventDto): Promise<ApiResponseDto<Event>> {
    const response = await api.put(`${API_ENDPOINTS.EVENTS.UPDATE}/${id}`, data);
    return response.data;
  }

  // Delete event (organizer only)
  static async deleteEvent(id: number): Promise<ApiResponseDto<null>> {
    const response = await api.delete(`${API_ENDPOINTS.EVENTS.DELETE}/${id}`);
    return response.data;
  }

  // Publish event (organizer only)
  static async publishEvent(id: number): Promise<ApiResponseDto<Event>> {
    const response = await api.post(`${API_ENDPOINTS.EVENTS.PUBLISH}/${id}`);
    return response.data;
  }

  // Get my events (organizer only)
  static async getMyEvents(params?: {
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponseDto<Event>> {
    const response = await api.get(API_ENDPOINTS.EVENTS.MY_EVENTS, { params });
    return response.data;
  }
}