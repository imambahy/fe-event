import { api, API_ENDPOINTS } from "@/lib/api";
import { LoginDto, RegisterDto, AuthResponse, User } from "@/types/auth.type";

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

  // Get current user data - Use localStorage as primary source
  static async getCurrentUser(): Promise<User> {
    try {
      const response = await api.get(API_ENDPOINTS.AUTH.ME);
      console.log('🏥 Backend /auth/me response:', response.data);
      
      // Handle different response structures
      if (response.data.data) {
        return response.data.data; // { data: User }
      } else if (response.data.user) {
        return response.data.user; // { user: User }
      } else {
        return response.data; // Direct User object
      }
    } catch (error: any) {
      console.error('❌ getCurrentUser failed:', error.response?.status, error.response?.data);
      throw error;
    }
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
    try {
      const user = localStorage.getItem("user");
      const parsed = user ? JSON.parse(user) : null;
      console.log('💾 Getting user from localStorage:', parsed);
      console.log('💾 LocalStorage user keys:', parsed ? Object.keys(parsed) : 'null');
      console.log('💾 LocalStorage user ID:', parsed?.id, 'Type:', typeof parsed?.id);
      return parsed;
    } catch (error) {
      console.error('❌ Error parsing user from localStorage:', error);
      return null;
    }
  }

  // Save user data to localStorage
  static setUser(user: any): void {
    console.log('💾 Saving user to localStorage:', user);
    console.log('💾 User keys being saved:', user ? Object.keys(user) : 'null');
    console.log('💾 User ID being saved:', user?.id, 'Type:', typeof user?.id);
    
    // Ensure user has required fields before saving
    if (user && !user.id) {
      console.error('⚠️ User object missing ID field!', user);
    }
    
    localStorage.setItem("user", JSON.stringify(user));
  }
}
