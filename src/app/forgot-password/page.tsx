"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Components
import AuthLayout from "@/components/auth/AuthLayout";
import CustomFormField from "@/components/auth/FormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToastContext } from "@/contexts/ToastContext";

// Icons
import { Mail, ArrowLeft, CheckCircle, Clock } from "lucide-react";

// Validation Schema
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToastContext();
  const router = useRouter();

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsLoading(true);
    setEmail(data.email);
    
    try {
      // TODO: Implement API call to send reset password email
      // await sendPasswordResetEmail(data.email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsEmailSent(true);
      toast("Reset password email has been sent to your email address.", "success", "Email Sent");
      
    } catch (error) {
      toast("Failed to send reset email. Please try again.", "error", "Error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    router.push("/auth/login");
  };

  const handleResendEmail = async () => {
    setIsLoading(true);
    
    try {
      // TODO: Implement API call to resend reset password email
      // await sendPasswordResetEmail(email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast("Reset password email has been resent.", "success", "Email Resent");
      
    } catch (error) {
      toast("Failed to resend email. Please try again.", "error", "Error");
    } finally {
      setIsLoading(false);
    }
  };

  if (isEmailSent) {
    return (
      <AuthLayout
        title="Check Your Email"
        subtitle="We've sent password reset instructions to your email"
        showBackButton={false}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          {/* Success Icon */}
          <div className="text-center mb-6">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Email Sent Successfully!
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We've sent password reset instructions to
            </p>
            <p className="text-sm font-medium text-purple-600 mt-1">
              {email}
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-900 mb-1">What's next?</p>
                <ul className="text-blue-800 space-y-1">
                  <li>• Check your email inbox (and spam folder)</li>
                  <li>• Click the reset link in the email</li>
                  <li>• Follow the instructions to set a new password</li>
                  <li>• The link will expire in 24 hours</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleResendEmail}
              disabled={isLoading}
              variant="outline"
              className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                  <span>Resending...</span>
                </div>
              ) : (
                "Resend Email"
              )}
            </Button>
            
            <Button
              onClick={handleBackToLogin}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Button>
          </div>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Didn't receive the email? Check your spam folder or{" "}
              <button
                onClick={handleResendEmail}
                className="text-purple-600 hover:text-purple-500 font-medium"
                disabled={isLoading}
              >
                try again
              </button>
            </p>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email address and we'll send you a link to reset your password"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
        {/* Info Alert */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-blue-900 mb-1">Password Reset Process</p>
              <p className="text-blue-800">
                Enter your email address below and we'll send you a secure link to reset your password. 
                The link will be valid for 24 hours.
              </p>
            </div>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CustomFormField
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="Enter your registered email"
              type="email"
              icon={Mail}
            />

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending Reset Link...</span>
                </div>
              ) : (
                "Send Reset Link"
              )}
            </Button>
          </form>
        </Form>

        {/* Back to Login Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Remember your password?{" "}
            <Link
              href="/auth/login"
              className="font-medium text-purple-600 hover:text-purple-500 transition-colors"
            >
              Back to Login
            </Link>
          </p>
        </div>

        {/* Additional Help */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Need help? Contact our support team
            </p>
            <Link
              href="mailto:support@eventify.com"
              className="text-xs text-purple-600 hover:text-purple-500 font-medium"
            >
              support@eventify.com
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
