export interface ApiResponseDto<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface PaginatedResponseDto<T> {
  success: boolean;
  message: string;
  data: T[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  error?: string;
  statusCode?: number;
}
