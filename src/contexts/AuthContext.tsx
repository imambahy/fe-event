"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { User, AuthResponse, UserRole } from "@/types/auth.type";
import { AuthService } from "@/services/api/auth.service";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isOrganizer: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  updateUser: (userData: User) => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state on mount - Use cached data primarily
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = AuthService.getToken();
        const cachedUser = AuthService.getUser();
        
        if (token && cachedUser) {
          // If both token and cached user exist, use cached data
          console.log('🔄 Initializing auth with cached user data:', cachedUser);
          console.log('🔍 Cached user keys:', Object.keys(cachedUser));
          console.log('🔍 Cached user ID:', cachedUser.id, 'Type:', typeof cachedUser.id);
          setUser(cachedUser);
        } else if (token) {
          // Token exists but no cached user, try to get from backend
          try {
            console.log('🔄 Token exists, fetching user data...');
            const userData = await AuthService.getCurrentUser();
            console.log('📡 Fresh user data from backend:', userData);
            console.log('🔍 Fresh user keys:', Object.keys(userData || {}));
            console.log('🔍 Fresh user ID:', userData?.id, 'Type:', typeof userData?.id);
            setUser(userData);
          } catch (error: any) {
            // Only logout if it's a clear auth error (401, 403)
            if (error.response?.status === 401 || error.response?.status === 403) {
              console.error("Token is invalid or expired:", error);
              AuthService.logout();
              setUser(null);
            } else {
              // For other errors (network, 404, etc.), keep user logged in with cached data
              console.warn("Failed to refresh user data, but keeping user logged in:", error.message);
              const fallbackUser = AuthService.getUser();
              console.log('🔄 Using fallback user:', fallbackUser);
              if (fallbackUser) {
                setUser(fallbackUser);
              } else {
                // No fallback available
                console.log('❌ No fallback user available, logging out');
                AuthService.logout();
                setUser(null);
              }
            }
          }
        } else {
          // No token, user is not logged in
          setUser(null);
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        // Don't automatically logout on initialization errors
        const fallbackUser = AuthService.getUser();
        if (fallbackUser && AuthService.getToken()) {
          console.log("Using fallback user data despite initialization error");
          setUser(fallbackUser);
        } else {
          AuthService.logout();
          setUser(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  // OPTIMIZED: Login with email/password using useCallback
  const login = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await AuthService.login({ email, password });
      
      if (response.token) {
        AuthService.setToken(response.token);
      }
      console.log('🔐 Login response user:', response.user);
      console.log('🔍 Login user keys:', Object.keys(response.user || {}));
      console.log('🔍 Login user ID:', response.user?.id, 'Type:', typeof response.user?.id);
      AuthService.setUser(response.user);
      setUser(response.user);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // OPTIMIZED: Register with email/password using useCallback
  const register = useCallback(async (userData: any) => {
    try {
      setIsLoading(true);
      const response = await AuthService.register(userData);
      
      // Register doesn't return token, so don't save it
      AuthService.setUser(response.user);
      setUser(response.user);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // OPTIMIZED: Logout and clear all data using useCallback
  const logout = useCallback(() => {
    AuthService.logout();
    setUser(null);
  }, []);

  // OPTIMIZED: Update user data using useCallback
  const updateUser = useCallback((userData: User) => {
    setUser(userData);
    AuthService.setUser(userData);
  }, []);

  // OPTIMIZED: Refresh user data from backend using useCallback
  const refreshUser = useCallback(async () => {
    try {
      const token = AuthService.getToken();
      if (!token) {
        console.warn("No token available for user refresh");
        return;
      }

      console.log('🔄 Refreshing user data...');
      const userData = await AuthService.getCurrentUser();
      setUser(userData);
      console.log('✅ User data refreshed successfully');
    } catch (error: any) {
      console.error("Failed to refresh user data:", error.message);
      
      // Only logout on specific auth errors, not network/server errors
      if (error.response?.status === 401 || error.response?.status === 403) {
        console.warn("Authentication expired during refresh, logging out");
        logout();
      } else {
        // For other errors (network, 404, 500), keep current user logged in
        console.log("Keeping current user logged in despite refresh error");
      }
    }
  }, [logout]);

  // MEMOIZED: context value to prevent unnecessary re-renders
  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isOrganizer: user?.role === UserRole.ORGANIZER,
    isLoading,
    login,
    register,
    logout,
    updateUser,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}