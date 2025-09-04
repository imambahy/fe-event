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
      queryClient.invalidateQueries({ queryKey: ['reviews', 'event', eventId] });
      queryClient.invalidateQueries({ queryKey: ['event', eventId] });
    },
  });
}