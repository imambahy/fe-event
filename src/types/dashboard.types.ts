// Dashboard related types
export interface DashboardStats {
  totalEvents: number;
  totalTransactions: number;
  totalRevenue: number;
  totalTicketsSold: number;
  completedTransactions: number;
  pendingTransactions: number;
  averageRating: number;
  monthlyRevenue: MonthlyRevenue[];
  recentTransactions: any[]; // Will be replaced with proper Transaction type
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
  transactions: number;
}

// Common pagination interface
export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Common search/filter interface
export interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onRefresh?: () => void;
  placeholder?: string;
  showRefresh?: boolean;
}

// Common table row interface
export interface TableRow {
  id: number;
  [key: string]: any;
}

// Common status badge configuration
export interface StatusBadgeConfig {
  variant: 'default' | 'secondary' | 'destructive';
  label: string;
  className?: string;
}
