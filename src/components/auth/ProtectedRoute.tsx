"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { UserRole } from "@/types/auth.type";
import { AuthLoading } from "@/components/shared/AuthLoading";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
  redirectTo?: string;
}

export function ProtectedRoute({ 
  children, 
  requiredRole = UserRole.ORGANIZER,
  redirectTo = "/auth/login"
}: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If still loading, don't do anything
    if (isLoading) return;

    // If not authenticated, redirect to login or landing page
    if (!isAuthenticated || !user) {
      // Small delay to ensure smooth state cleanup
      const timer = setTimeout(() => {
        // For logout from dashboard, redirect to landing page
        if (window.location.pathname.includes('/dashboard')) {
          router.push("/");
        } else {
          router.push(redirectTo);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }

    // If user doesn't have required role, redirect to unauthorized page
    if (requiredRole && user.role !== requiredRole) {
      const timer = setTimeout(() => {
        // For non-organizers, redirect to landing page
        if (user.role === UserRole.CUSTOMER) {
          router.push("/");
        } else {
          router.push("/unauthorized");
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, user, isLoading, router, requiredRole, redirectTo]);

  // Show loading while checking authentication
  if (isLoading) {
    return <AuthLoading />;
  }

  // If not authenticated or wrong role, show loading while redirecting
  if (!isAuthenticated || !user || (requiredRole && user.role !== requiredRole)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm">Redirecting...</p>
        </div>
      </div>
    );
  }

  // User is authenticated and has correct role
  return <>{children}</>;
}
