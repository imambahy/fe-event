"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  title?: string;
  message?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function LoadingState({
  title = "Loading...",
  message = "Please wait while we fetch your data",
  className = "",
  size = "md"
}: LoadingStateProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <Card className={className}>
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <div className={`text-blue-600 mb-4`}>
          <Loader2 className={`${sizeClasses[size]} animate-spin mx-auto`} />
        </div>
        <div className="text-lg font-medium text-gray-900 mb-2">
          {title}
        </div>
        <div className="text-sm text-gray-600">
          {message}
        </div>
      </CardContent>
    </Card>
  );
}

// Inline loading component for smaller spaces
export function InlineLoading({
  size = "sm",
  className = ""
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  return (
    <Loader2 className={`${sizeClasses[size]} animate-spin ${className}`} />
  );
}

// Table loading skeleton
export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {[...Array(rows)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-32"></div>
              <div className="h-3 bg-gray-200 rounded w-48"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded w-20"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
