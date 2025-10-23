"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthMutation } from "@/hooks/api/useAuth";
import { RegisterDto, UserRole } from "@/types/auth.type";
import {
  customerRegisterSchema,
  organizerRegisterSchema,
  CustomerRegisterFormData,
  OrganizerRegisterFormData,
} from "@/validations/auth/register.validation";

export function useRegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"customer" | "organizer">(
    "customer"
  );
  const [error, setError] = useState("");

  // Auth hook
  const { register, isRegisterLoading, registerError } = useAuthMutation();

  const customerForm = useForm<CustomerRegisterFormData>({
    resolver: zodResolver(customerRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      referralCode: "",
    },
  });

  const organizerForm = useForm<OrganizerRegisterFormData>({
    resolver: zodResolver(organizerRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onCustomerSubmit = async (data: CustomerRegisterFormData) => {
    try {
      setError("");
      console.log("Customer Register data:", {
        ...data,
        role: UserRole.CUSTOMER,
      });

      // Prepare register data
      const registerData: RegisterDto = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: UserRole.CUSTOMER,
        referralCode: data.referralCode || undefined,
      };

      // Call register API
      register(registerData);
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  const onOrganizerSubmit = async (data: OrganizerRegisterFormData) => {
    try {
      setError("");
      console.log("Organizer Register data:", {
        ...data,
        role: UserRole.ORGANIZER,
      });

      // Prepare register data
      const registerData: RegisterDto = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: UserRole.ORGANIZER,
      };

      // Call register API
      register(registerData);
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  const handleRoleChange = (role: "customer" | "organizer") => {
    setSelectedRole(role);
    setError("");
    // Reset forms when changing role
    customerForm.reset();
    organizerForm.reset();
  };

  // Handle register error
  useEffect(() => {
    if (registerError) {
      const errorMessage =
        (registerError as any)?.response?.data?.message ||
        "Registration failed. Please try again.";
      setError(errorMessage);
    }
  }, [registerError]);

  return {
    customerForm,
    organizerForm,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    selectedRole,
    error,
    setError,
    onCustomerSubmit,
    onOrganizerSubmit,
    handleRoleChange,
    isRegisterLoading,
  };
}
