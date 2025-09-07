"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthService } from "@/services/api/auth.service";
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
import { useRouter } from "next/navigation";
import { useAuth as useAuthContext } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";

export function useAuthMutation() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { login: contextLogin, register: contextRegister, logout: contextLogout } = useAuthContext();

  // login mutation
  const loginMutation = useMutation({
    mutationFn: async (data: LoginDto) => {
      try {
        await contextLogin(data.email, data.password);
        return AuthService.getUser();
      } catch (error) {
        // Re-throw error so it can be caught by the form
        throw error;
      }
    },
    onSuccess: (user) => {
      // invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: ["user"] });

      // 🔒 REDIRECT LOGIC: Check if redirect is handled by AuthContext
      // AuthContext will handle redirect if redirectUrl exists
      // Only do default redirect if no redirectUrl was set
      setTimeout(() => {
        const currentUrl = window.location.pathname;
        if (currentUrl.includes('/auth/login')) {
          // Default redirect based on user role if still on login page
          if (user.role === "ORGANIZER") {
            router.push("/dashboard");
          } else {
            router.push("/");
          }
        }
      }, 100); // Small delay to allow AuthContext redirect to take precedence
    },
    onError: (error) => {
      console.error("Login failed", error);
      // Don't redirect on error - let the form handle it
    },
  });

  // register mutation
  const registerMutation = useMutation({
    mutationFn: async (data: RegisterDto) => {
      await contextRegister(data);
      return AuthService.getUser();
    },
    onSuccess: (user) => {
      // invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: ["user"] });

      // redirect based on user role
      if (user.role === "ORGANIZER") {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    },
    onError: (error) => {
      console.error("Register failed:", error);
    },
  });

  // Logout function
  const logout = () => {
    contextLogout();
    queryClient.clear(); // Clear all queries
    router.push("/auth/login");
  };

  return {
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout,
    isLoginLoading: loginMutation.isPending,
    isRegisterLoading: registerMutation.isPending,
    loginError: loginMutation.error,
    registerError: registerMutation.error,
  };
}

// Hook untuk reset password
export function useResetPassword() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ResetPasswordDto) => AuthService.resetPassword(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}

// Hook untuk reset password dengan token
export function useResetPasswordWithToken() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ResetPasswordWithTokenDto) => AuthService.resetPasswordWithToken(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}

// Hook untuk mengambil profile user
export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => AuthService.getProfile(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Hook untuk update profile
export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateProfileDto) => AuthService.updateProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}

// Hook untuk change password
export function useChangePassword() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ChangePasswordDto) => AuthService.changePassword(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}