import { useQuery } from "@tanstack/react-query";
import { CouponService } from "@/services/api/coupon.service";
import type { CouponValidationRequest } from "@/types/coupon.type";

/**
 * Hook to fetch all active coupons (public)
 */
export function useActiveCoupons() {
  return useQuery({
    queryKey: ["coupons", "active"],
    queryFn: () => CouponService.getActiveCoupons(),
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
  });
}

/**
 * Hook to fetch user's available coupons (requires auth)
 */
export function useUserCoupons() {
  return useQuery({
    queryKey: ["coupons", "user"],
    queryFn: () => CouponService.getUserCoupons(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
}

/**
 * Hook to fetch a specific coupon by ID
 */
export function useCouponById(id: number) {
  return useQuery({
    queryKey: ["coupons", id],
    queryFn: () => CouponService.getCouponById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

/**
 * Hook to validate coupon (manual trigger)
 */
export function useValidateCoupon() {
  return {
    validateCoupon: async (request: CouponValidationRequest) => {
      return await CouponService.validateCoupon(request);
    },
  };
}
