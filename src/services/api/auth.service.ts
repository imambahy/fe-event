import { api, API_ENDPOINTS } from "@/lib/api";
import {
  LoginDto,
  RegisterDto,
  AuthResponse,
  ResetPasswordDto,
  ResetPasswordWithTokenDto,
  UpdateProfileDto,
  ChangePasswordDto,
  ProfileResponse
} from "@/types/auth.type";
import { ApiResponseDto } from "@/types/api.type";

export class AuthService {
  // Login with email/password
  static async login(data: LoginDto): Promise<AuthResponse> {
    const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, data);
    return response.data;
  }

  // Register with email/password
  static async register(data: RegisterDto): Promise<AuthResponse> {
    const response = await api.post(API_ENDPOINTS.AUTH.REGISTER, data);
    return response.data;
  }

  // Clear all auth data
  static logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  // Get JWT token from localStorage
  static getToken(): string | null {
    return localStorage.getItem("token");
  }

  // Save JWT token to localStorage
  static setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  // Get user data from localStorage
  static getUser(): any {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  // Save user data to localStorage
  static setUser(user: any): void {
    localStorage.setItem("user", JSON.stringify(user));
  }

  // Reset Password
  static async resetPassword(data: ResetPasswordDto): Promise<ApiResponseDto<any>> {
    const response = await api.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, data);
    return response.data;
  }

  // Reset Password with Token
  static async resetPasswordWithToken(data: ResetPasswordWithTokenDto): Promise<ApiResponseDto<any>> {
    const response = await api.post(API_ENDPOINTS.AUTH.RESET_PASSWORD_CONFIRM, data);
    return response.data;
  }

  // Get Profile
  static async getProfile(): Promise<ApiResponseDto<ProfileResponse>> {
    const response = await api.get(API_ENDPOINTS.AUTH.PROFILE);
    return response.data;
  }

  // Update Profile (supports form-data for avatar upload)
  static async updateProfile(data: UpdateProfileDto): Promise<ApiResponseDto<ProfileResponse>> {
    const formData = new FormData();

    if (data.name) {
      formData.append('name', data.name);
    }

    if (data.avatar) {
      formData.append('avatar', data.avatar);
    }

    const response = await api.put(API_ENDPOINTS.AUTH.PROFILE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }

  // Change Password
  static async changePassword(data: ChangePasswordDto): Promise<ApiResponseDto<any>> {
    const response = await api.put(API_ENDPOINTS.AUTH.CHANGE_PASSWORD, data);
    return response.data;
  }
}
