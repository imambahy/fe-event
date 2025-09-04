"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthService } from "@/services/api/auth.service";
import { LoginDto, RegisterDto, AuthResponse, UserRole } from "@/types/auth.type";
import { useRouter } from "next/navigation";
import { useAuth as useAuthContext } from "@/contexts/AuthContext";

export function useAuthMutation() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { login: contextLogin, register: contextRegister, logout: contextLogout } = useAuthContext();

  // login mutation
  const loginMutation = useMutation({
    mutationFn: async (data: LoginDto) => {
      await contextLogin(data.email, data.password);
      return AuthService.getUser();
    },
    onSuccess: (user) => {
      // invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: ["user"] });

      // redirect based on user role
      if (user.role === UserRole.ORGANIZER) {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    },
    onError: (error) => {
      console.error("Login failed", error);
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
      if (user.role === UserRole.ORGANIZER) {
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