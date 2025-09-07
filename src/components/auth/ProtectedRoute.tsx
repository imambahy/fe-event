"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { UserRole } from "@/types/auth.type";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
  fallbackPath?: string;
}

export function ProtectedRoute({
  children,
  requiredRole,
  fallbackPath = "/auth/login"
}: ProtectedRouteProps) {
  const { isAuthenticated, user, isLoading } = useAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // If still loading auth state, wait
    if (isLoading) {
      return;
    }

    // If not authenticated, redirect to login
    if (!isAuthenticated || !user) {
      console.log("🔒 ProtectedRoute: User not authenticated, redirecting to login");
      router.push(fallbackPath);
      return;
    }

    // If specific role is required, check user role
    if (requiredRole && user.role !== requiredRole) {
      console.log(`🔒 ProtectedRoute: User role ${user.role} does not match required role ${requiredRole}`);
      // Redirect based on user role
      if (user.role === UserRole.ORGANIZER) {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
      return;
    }

    // User is authenticated and has correct role
    setIsChecking(false);
  }, [isAuthenticated, user, isLoading, requiredRole, router, fallbackPath]);

  // Show loading state while checking authentication
  if (isLoading || isChecking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  // If authenticated and has correct role, render children
  if (isAuthenticated && user) {
    if (!requiredRole || user.role === requiredRole) {
      return <>{children}</>;
    }
  }

  // This should not be reached due to the useEffect redirect, but just in case
  return null;
}

// Higher-order component version for class components or more complex scenarios
export function withProtectedRoute<P extends object>(
  Component: React.ComponentType<P>,
  options: Omit<ProtectedRouteProps, 'children'> = {}
) {
  return function ProtectedComponent(props: P) {
    return (
      <ProtectedRoute {...options}>
        <Component {...props} />
      </ProtectedRoute>
    );
  };
}
