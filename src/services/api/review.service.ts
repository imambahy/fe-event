import { api, API_ENDPOINTS } from '@/lib/api';
import { ApiResponseDto, PaginatedResponseDto } from '@/types/api.type';
import { Review } from '@/types/event.type';

export class ReviewService {
  // Create review (customer only)
  static async createReview(eventId: number, data: {
    rating: number;
    comment: string;
  }): Promise<ApiResponseDto<Review>> {
    const response = await api.post(API_ENDPOINTS.REVIEWS.CREATE(eventId), data);
    return {
      success: true,
      message: response.data.message || 'Review created successfully',
      data: response.data
    };
  }

  // Get reviews by event (public)
  static async getReviewsByEvent(eventId: number, params?: {
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponseDto<Review>> {
    const response = await api.get(API_ENDPOINTS.REVIEWS.GET_BY_EVENT(eventId), { params });
    return response.data;
  }

  // Get review by ID
  static async getReviewById(id: number): Promise<ApiResponseDto<Review>> {
    const response = await api.get(API_ENDPOINTS.REVIEWS.GET_BY_ID(id));
    return response.data;
  }

  // Update review
  static async updateReview(id: number, data: {
    rating?: number;
    comment?: string;
  }): Promise<ApiResponseDto<Review>> {
    const response = await api.put(API_ENDPOINTS.REVIEWS.UPDATE(id), data);
    return {
      success: true,
      message: response.data.message || 'Review updated successfully',
      data: response.data
    };
  }

  // Delete review
  static async deleteReview(id: number): Promise<ApiResponseDto<{ message: string }>> {
    const response = await api.delete(API_ENDPOINTS.REVIEWS.DELETE(id));
    return {
      success: true,
      message: response.data.message || 'Review deleted successfully',
      data: response.data
    };
  }

  // Get user reviews
  static async getUserReviews(params?: {
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponseDto<Review>> {
    const response = await api.get(API_ENDPOINTS.REVIEWS.GET_USER_REVIEWS, { params });
    return response.data;
  }

  // Get review stats
  static async getReviewStats(eventId?: number, organizerId?: number): Promise<ApiResponseDto<{
    totalReviews: number;
    averageRating: number;
    ratingDistribution: Record<number, number>;
  }>> {
    const params = { eventId, organizerId };
    const response = await api.get(API_ENDPOINTS.REVIEWS.GET_STATS, { params });
    return response.data;
  }
}