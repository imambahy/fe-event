import { useQuery } from "@tanstack/react-query";
import { PromotionService } from "@/services/api/promotion.service";
import type { ApplyPromotionRequest } from "@/types/promotion.type";

/**
 * Hook to fetch promotion summary for an event
 */
export function usePromotionSummary(eventId: number, userPoints: number = 0) {
  return useQuery({
    queryKey: ["promotions", "summary", eventId, userPoints],
    queryFn: () => PromotionService.getPromotionSummary(eventId, userPoints),
    enabled: !!eventId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
}

/**
 * Hook to calculate price with promotions (manual trigger)
 */
export function usePriceCalculation() {
  return {
    calculatePrice: async (request: ApplyPromotionRequest) => {
      return await PromotionService.calculatePrice(request);
    },
  };
}
