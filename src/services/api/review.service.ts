import { api, API_ENDPOINTS } from '@/lib/api';
import { 
  ApiResponseDto, 
  PaginatedResponseDto,
  Review 
} from '@/types/event.type';

export class ReviewService {
  // Create review (customer only)
  static async createReview(eventId: number, data: {
    rating: number;
    comment: string;
  }): Promise<ApiResponseDto<Review>> {
    const response = await api.post(`${API_ENDPOINTS.REVIEWS.CREATE}/${eventId}`, data);
    return response.data;
  }

  // Get reviews by event (public)
  static async getReviewsByEvent(eventId: number, params?: {
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponseDto<Review>> {
    const response = await api.get(`${API_ENDPOINTS.REVIEWS.GET_BY_EVENT}/${eventId}`, { params });
    return response.data;
  }
}