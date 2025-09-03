"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { User, Mail, Lock, Gift } from "lucide-react";

// Components
import AuthLayout from "@/components/auth/AuthLayout";
import CustomFormField from "@/components/auth/FormField";
import RoleSelector from "@/components/auth/RoleSelector";

// Define the form schemas with validation
const customerRegisterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  referralCode: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const organizerRegisterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type CustomerRegisterFormData = z.infer<typeof customerRegisterSchema>;
type OrganizerRegisterFormData = z.infer<typeof organizerRegisterSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"customer" | "organizer">("customer");
  const [error, setError] = useState("");
  
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
      setIsLoading(true);
      setError("");
      console.log("Customer Register data:", { ...data, role: "customer" });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to welcome page for customer
        router.push("/welcome");
    } catch (error) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onOrganizerSubmit = async (data: OrganizerRegisterFormData) => {
    try {
      setIsLoading(true);
      setError("");
      console.log("Organizer Register data:", { ...data, role: "organizer" });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to dashboard for organizer
      router.push("/dashboard");
    } catch (error) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleChange = (role: "customer" | "organizer") => {
    setSelectedRole(role);
    setError("");
    // Reset forms when changing role
    customerForm.reset();
    organizerForm.reset();
  };

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
        {selectedRole === "customer" && (
          <Form {...customerForm}>
            <form onSubmit={customerForm.handleSubmit(onCustomerSubmit)} className="space-y-6">
              <CustomFormField
                control={customerForm.control}
                  name="name"
                label="Full Name"
                placeholder="Enter your full name"
                            type="text"
                icon={User}
              />

              <CustomFormField
                control={customerForm.control}
                  name="email"
                label="Email Address"
                placeholder="Enter your email"
                            type="email"
                icon={Mail}
              />

              <CustomFormField
                control={customerForm.control}
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
                control={customerForm.control}
                  name="confirmPassword"
                label="Confirm Password"
                            placeholder="Confirm your password"
                type="password"
                icon={Lock}
                showPasswordToggle={true}
                showPassword={showConfirmPassword}
                onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
              />

              <CustomFormField
                control={customerForm.control}
                name="referralCode"
                label="Referral Code (Optional)"
                placeholder="Enter referral code if you have one"
                type="text"
                icon={Gift}
              />

              <div className="flex items-start">
                <input
                  id="terms-customer"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
                  required
                />
                <label htmlFor="terms-customer" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
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
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating account...</span>
                  </div>
                ) : (
                  "Create Customer Account"
                )}
              </Button>
            </form>
          </Form>
        )}

        {/* Organizer Register Form */}
        {selectedRole === "organizer" && (
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
                  disabled={isLoading}
                >
                  {isLoading ? (
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
        )}

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