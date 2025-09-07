"use client";

import Link from "next/link";

// Components
import AuthLayout from "@/components/auth/AuthLayout";
import RoleSelector from "@/components/auth/RoleSelector";
import CustomerRegisterForm from "@/components/auth/CustomerRegisterForm";
import OrganizerRegisterForm from "@/components/auth/OrganizerRegisterForm";

// Hooks
import { useRegisterForm } from "@/hooks/useRegisterForm";

export default function RegisterPage() {
  const {
    selectedRole,
    error,
    handleRoleChange,
  } = useRegisterForm();

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Fill in your details to get started"
    >
          {/* Register Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Role Selection */}
        <RoleSelector 
          selectedRole={selectedRole} 
          onRoleChange={handleRoleChange} 
        />

        {/* Customer Register Form */}
        {selectedRole === "customer" && <CustomerRegisterForm />}

        {/* Organizer Register Form */}
        {selectedRole === "organizer" && <OrganizerRegisterForm />}

            {/* Login Link */}
            <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-medium text-purple-600 hover:text-purple-500 transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
    </AuthLayout>
  );
}