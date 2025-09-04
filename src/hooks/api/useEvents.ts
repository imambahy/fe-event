"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { EventService } from "@/services/api/event.service";


export function useEvents(params?: {
  page?: number;
  limit?: number;
  category?: string;
  location?: string;
  search?: string;
}) {
  return useQuery({
    queryKey: ["events", params],
    queryFn: () => EventService.getAllEvents(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useEventBySlug(slug: string) {
  return useQuery({
    queryKey: ['event', 'slug', slug],
    queryFn: () => EventService.getEventBySlug(slug),
    enabled: !!slug,
  });
}
