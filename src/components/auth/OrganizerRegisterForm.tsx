"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { User, Mail, Lock } from "lucide-react";

// Components
import CustomFormField from "@/components/auth/FormField";
import { useRegisterForm } from "@/hooks/auth/useRegisterForm";

export default function OrganizerRegisterForm() {
  const {
    organizerForm,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    onOrganizerSubmit,
    isRegisterLoading,
  } = useRegisterForm();

  return (
    <Form {...organizerForm}>
      <form onSubmit={organizerForm.handleSubmit(onOrganizerSubmit)} className="space-y-6">
        <CustomFormField
          control={organizerForm.control}
          name="name"
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
          icon={User}
        />

        <CustomFormField
          control={organizerForm.control}
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          type="email"
          icon={Mail}
        />

        <CustomFormField
          control={organizerForm.control}
          name="password"
          label="Password"
          placeholder="Create a password"
          type="password"
          icon={Lock}
          showPasswordToggle={true}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
        />

        <CustomFormField
          control={organizerForm.control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          icon={Lock}
          showPasswordToggle={true}
          showPassword={showConfirmPassword}
          onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
        />

        <div className="flex items-start">
          <input
            id="terms-organizer"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
            required
          />
          <label htmlFor="terms-organizer" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            I agree to the{" "}
            <a href="#" className="text-purple-600 hover:text-purple-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-purple-600 hover:text-purple-500">
              Privacy Policy
            </a>
          </label>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105" 
          disabled={isRegisterLoading}
        >
          {isRegisterLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Creating account...</span>
            </div>
          ) : (
            "Create Organizer Account"
          )}
        </Button>
      </form>
    </Form>
  );
}
