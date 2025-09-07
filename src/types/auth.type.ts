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
  id: number; // Required for login response - feedback Kelompok 2
  name: string;
  email: string;
  role: UserRole;
  referralCode?: string;
  points: number;
  avatar?: string; // Optional avatar field
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

// Reset Password DTOs
export interface ResetPasswordDto {
  email: string;
}

export interface ResetPasswordWithTokenDto {
  token: string;
  newPassword: string;
}

// Profile Management DTOs
export interface UpdateProfileDto {
  name?: string;
  avatar?: File;
}

export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

// Profile Response
export interface ProfileResponse {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  referralCode?: string;
  points: number;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}