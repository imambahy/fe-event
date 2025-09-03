import { api, API_ENDPOINTS } from "@/lib/api";
import { LoginDto, RegisterDto, AuthResponse } from "@/types/auth.type";

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
}
