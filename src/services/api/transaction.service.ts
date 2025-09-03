import { api, API_ENDPOINTS } from "@/lib/api";
import { ApiResponseDto } from "@/types/api.type";
import { CreateTransactionDto, Transaction } from "@/types/transaction.type";

export class TransactionService {
  // Create new transaction
  static async createTransaction(eventId: number, data: CreateTransactionDto): Promise<ApiResponseDto<Transaction>> {
    // ✅ FIXED: eventId goes in URL params, not request body
    const response = await api.post(API_ENDPOINTS.TRANSACTIONS.CREATE(eventId), data);
    
    // Backend already returns { message, data }, so we use response.data directly
    return {
      success: true,
      message: response.data.message || 'Transaction created successfully',
      data: response.data.data // Backend response.data contains { message, data }
    };
  }

  // Get transaction by ID
  static async getTransactionById(transactionId: number): Promise<ApiResponseDto<Transaction>> {
    const response = await api.get(API_ENDPOINTS.TRANSACTIONS.GET_BY_ID(transactionId));
    
    return {
      success: true,
      message: response.data.message || 'Transaction retrieved successfully',
      data: response.data.data // Backend response.data contains { message, data }
    };
  }

  // Get user's transactions
  static async getUserTransactions(): Promise<ApiResponseDto<Transaction[]>> {
    const response = await api.get(API_ENDPOINTS.TRANSACTIONS.GET_MY_TRANSACTIONS);
    
    return {
      success: true,
      message: response.data.message || 'User transactions retrieved successfully',
      data: response.data.data // Backend response.data contains { message, data }
    };
  }

  // Get all transactions (with filters) - for useTransactions hook
  static async getAllTransactions(params?: {
    page?: number;
    limit?: number;
    status?: string;
  }): Promise<ApiResponseDto<Transaction[]>> {
    const response = await api.get(API_ENDPOINTS.TRANSACTIONS.GET_MY_TRANSACTIONS, { params });
    
    return {
      success: true,
      message: response.data.message || 'Transactions retrieved successfully',
      data: response.data.data // Backend response.data contains { message, data }
    };
  }

  // Upload payment proof
  static async uploadPaymentProof(transactionId: number, data: FormData): Promise<ApiResponseDto<Transaction>> {
    const response = await api.post(API_ENDPOINTS.TRANSACTIONS.UPLOAD_PAYMENT(transactionId), data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return {
      success: true,
      message: 'Payment proof uploaded successfully',
      data: response.data
    };
  }

  // Update transaction status (for organizers)
  static async updateTransactionStatus(id: number, status: string): Promise<ApiResponseDto<Transaction>> {
    const response = await api.put(API_ENDPOINTS.TRANSACTIONS.UPDATE_STATUS(id), { status });
    
    return {
      success: true,
      message: 'Transaction status updated successfully',
      data: response.data
    };
  }

  // Get transaction statistics (for organizer dashboard)
  static async getTransactionStats(): Promise<ApiResponseDto<any>> {
    const response = await api.get(API_ENDPOINTS.TRANSACTIONS.STATS);
    
    return {
      success: true,
      message: 'Transaction stats retrieved successfully',
      data: response.data
    };
  }
}