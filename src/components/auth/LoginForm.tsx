"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

// Components
import CustomFormField from "@/components/auth/FormField";
import { useLoginForm } from "@/hooks/useLoginForm";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect');
  const { setRedirectUrl } = useAuth();

  const {
    form,
    showPassword,
    setShowPassword,
    error,
    onSubmit,
    isLoginLoading,
  } = useLoginForm();

  // 🔒 REDIRECT LOGIC: Set redirect URL dari query parameter
  useEffect(() => {
    if (redirectUrl) {
      setRedirectUrl(redirectUrl);
    }
  }, [redirectUrl, setRedirectUrl]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      {/* 🔒 REDIRECT INFO: Show redirect message if redirectUrl exists */}
      {redirectUrl && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2 text-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">
              After login, you'll be redirected back to continue your purchase.
            </span>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-6"
          method="post"
        >
          <CustomFormField
            control={form.control}
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            icon={Mail}
          />

          <CustomFormField
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            icon={Lock}
            showPasswordToggle={true}
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-purple-600 hover:text-purple-500"
            >
              Forgot password?
            </Link>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105" 
            disabled={isLoginLoading}
          >
            {isLoginLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </Form>

      {/* Register Link */}
      <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?{" "}
        <Link
          href="/auth/register"
          className="font-medium text-purple-600 hover:text-purple-500 transition-colors"
        >
          Sign up for free
        </Link>
      </p>
    </div>
  );
}
