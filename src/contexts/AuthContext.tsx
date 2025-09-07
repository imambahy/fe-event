"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useMemo, useCallback } from "react";
import { User, AuthResponse } from "@/types/auth.type";
import { AuthService } from "@/services/api/auth.service";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  redirectUrl: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  updateUser: (userData: User) => void;
  setRedirectUrl: (url: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  // Initialize auth state on mount
  useEffect(() => {
    const initAuth = () => {
      try {
        const token = AuthService.getToken();
        const userData = AuthService.getUser();
        
        if (token && userData) {
          setUser(userData);
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        AuthService.logout();
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  // OPTIMIZED: Memoize login function
  const login = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await AuthService.login({ email, password });
      
      if (response.token) {
        AuthService.setToken(response.token);
      }
      AuthService.setUser(response.user);
      setUser(response.user);

      // 🔒 REDIRECT LOGIC: Handle redirect after successful login
      if (redirectUrl) {
        const targetUrl = redirectUrl;
        setRedirectUrl(null); // Clear redirect URL
        window.location.href = targetUrl;
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [redirectUrl]);

  // OPTIMIZED: Memoize register function
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

  // OPTIMIZED: Memoize logout function
  const logout = useCallback(() => {
    AuthService.logout();
    setUser(null);
  }, []);

  // OPTIMIZED: Memoize updateUser function
  const updateUser = useCallback((userData: User) => {
    setUser(userData);
    AuthService.setUser(userData);
  }, []);

  // OPTIMIZED: Memoize context value untuk mencegah re-render yang tidak perlu
  const value: AuthContextType = useMemo(() => ({
    user,
    isAuthenticated: !!user,
    isLoading,
    redirectUrl,
    login,
    register,
    logout,
    updateUser,
    setRedirectUrl,
  }), [user, isLoading, redirectUrl, login, register, logout, updateUser, setRedirectUrl]);

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