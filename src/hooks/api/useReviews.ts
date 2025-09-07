"use client";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ReviewService } from '@/services/api/review.service';

export function useReviewsByEvent(eventId: number, params?: {
  page?: number;
  limit?: number;
}) {
  return useQuery({
    queryKey: ['reviews', 'event', eventId, params],
    queryFn: () => ReviewService.getReviewsByEvent(eventId, params),
    enabled: !!eventId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useCreateReview() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ eventId, data }: { 
      eventId: number; 
      data: { rating: number; comment: string; }
    }) => ReviewService.createReview(eventId, data),
    onSuccess: (_, { eventId }) => {
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: ['reviews', 'event', eventId] });
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    },
  });
}

export function useUpdateReview() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { 
      id: number; 
      data: { rating?: number; comment?: string; }
    }) => ReviewService.updateReview(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    },
  });
}

export function useDeleteReview() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => ReviewService.deleteReview(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    },
  });
}

export function useUserReviews(params?: {
  page?: number;
  limit?: number;
}) {
  return useQuery({
    queryKey: ['reviews', 'user', params],
    queryFn: () => ReviewService.getUserReviews(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useReviewStats(eventId?: number, organizerId?: number) {
  return useQuery({
    queryKey: ['reviews', 'stats', eventId, organizerId],
    queryFn: () => ReviewService.getReviewStats(eventId, organizerId),
    enabled: !!(eventId || organizerId),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}