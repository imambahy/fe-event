import { useQuery } from "@tanstack/react-query";
import { VoucherService } from "@/services/api/voucher.service";
import type { Voucher, VoucherValidationRequest } from "@/types/voucher.type";

/**
 * Hook to fetch vouchers for a specific event
 */
export function useVouchersByEvent(eventId: number) {
  return useQuery({
    queryKey: ["vouchers", "event", eventId],
    queryFn: () => VoucherService.getVouchersByEvent(eventId),
    enabled: !!eventId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
}

/**
 * Hook to fetch a specific voucher by ID
 */
export function useVoucherById(id: number) {
  return useQuery({
    queryKey: ["vouchers", id],
    queryFn: () => VoucherService.getVoucherById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

/**
 * Hook to validate voucher (manual trigger)
 */
export function useValidateVoucher() {
  return {
    validateVoucher: async (request: VoucherValidationRequest) => {
      return await VoucherService.validateVoucher(request);
    },
  };
}
