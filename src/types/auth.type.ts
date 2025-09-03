// User Role Enum
export enum UserRole {
  CUSTOMER = "CUSTOMER",
  ORGANIZER = "ORGANIZER",
}

// Login DTO
export interface LoginDto {
  email: string;
  password: string;
}

// Register DTO  
export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  referralCode?: string;
}

// User data (tanpa password - untuk frontend untuk safety data)
export interface User {
  id?: number; // Optional karena login response tidak ada id
  name: string;
  email: string;
  role: UserRole;
  referralCode?: string;
  points: number;
  // Backend tidak mengirim fields ini
  // pointsExpiry?: string;
  // createdAt: string;
  // updatedAt: string;
}

// Auth Response (buat API response)
export interface AuthResponse {
  user: User;
  token?: string; // Optional karena register tidak return token
  message?: string;
}