"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthMutation } from "@/hooks/api/useAuth";
import { LoginDto } from "@/types/auth.type";
import { loginSchema } from "@/validations/auth/login.validation";

export function useLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  
  // Auth hook
  const { login, isLoginLoading, loginError } = useAuthMutation();
  
  const form = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginDto) => {
    try {
      setError("");
      console.log("Login data:", data);
      
      // Call login API
      login(data);
    } catch (error) {
      setError("Login failed. Please try again.");
    }
  };

  // Handle login error
  useEffect(() => {
    if (loginError) {
      const errorMessage = (loginError as any)?.response?.data?.message || "Login failed. Please try again.";
      setError(errorMessage);
    }
  }, [loginError]);

  return {
    form,
    showPassword,
    setShowPassword,
    error,
    setError,
    onSubmit,
    isLoginLoading,
  };
}
