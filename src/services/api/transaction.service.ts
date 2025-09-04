import { api, API_ENDPOINTS } from '@/lib/api';
import { 
  ApiResponseDto, 
  PaginatedResponseDto,
  Transaction
} from '@/types/event.type';
import { CreateTransactionDto } from '@/types/checkout.type';

export class TransactionService {
  // Create transaction (customer only)
  static async createTransaction(eventId: number, data: CreateTransactionDto): Promise<ApiResponseDto<Transaction>> {
    const response = await api.post(API_ENDPOINTS.TRANSACTIONS.CREATE(eventId), data);
    return response.data;
  }

  // Get all transactions (customer only)
  static async getAllTransactions(params?: {
    page?: number;
    limit?: number;
    status?: string;
  }): Promise<PaginatedResponseDto<Transaction>> {
    const response = await api.get(API_ENDPOINTS.TRANSACTIONS.GET_ALL, { params });
    return response.data;
  }

  // Get transaction by ID (customer only)
  static async getTransactionById(id: number): Promise<ApiResponseDto<Transaction>> {
    const response = await api.get(API_ENDPOINTS.TRANSACTIONS.GET_BY_ID(id));
    return response.data;
  }

  // Upload payment proof (customer only)
  static async uploadPaymentProof(
    transactionId: number, 
    data: FormData
  ): Promise<ApiResponseDto<Transaction>> {
    const response = await api.post(
      API_ENDPOINTS.TRANSACTIONS.UPLOAD_PAYMENT(transactionId), 
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  }

  // Update transaction status (organizer only)
  static async updateTransactionStatus(
    id: number, 
    status: string
  ): Promise<ApiResponseDto<Transaction>> {
    const response = await api.put(API_ENDPOINTS.TRANSACTIONS.UPDATE_STATUS(id), {
      status
    });
    return response.data;
  }

  // Get transaction stats (organizer only)
  static async getTransactionStats(): Promise<ApiResponseDto<any>> {
    const response = await api.get(API_ENDPOINTS.TRANSACTIONS.STATS);
    return response.data;
  }
}