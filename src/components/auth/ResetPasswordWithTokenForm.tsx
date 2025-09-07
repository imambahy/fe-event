"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useResetPasswordWithToken } from "@/hooks/api/useAuth";
import { resetPasswordWithTokenSchema } from "@/validations/auth/reset-password.validation";
import { Lock, Loader2, CheckCircle, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type ResetPasswordWithTokenFormData = {
  token: string;
  newPassword: string;
};

interface ResetPasswordWithTokenFormProps {
  token?: string;
}

export default function ResetPasswordWithTokenForm({ token }: ResetPasswordWithTokenFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const resetPasswordWithTokenMutation = useResetPasswordWithToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ResetPasswordWithTokenFormData>({
    resolver: zodResolver(resetPasswordWithTokenSchema),
    defaultValues: {
      token: token || "",
    },
  });

  const onSubmit = (data: ResetPasswordWithTokenFormData) => {
    resetPasswordWithTokenMutation.mutate(data);
  };

  if (resetPasswordWithTokenMutation.isSuccess) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-8 text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Password Reset Successful
          </h3>
          <p className="text-gray-600 mb-4">
            Your password has been successfully reset.
          </p>
          <p className="text-sm text-gray-500">
            You can now sign in with your new password.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="w-5 h-5" />
          Reset Your Password
        </CardTitle>
        <CardDescription>
          Enter your new password below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Hidden token field */}
          <input
            type="hidden"
            {...register("token")}
            value={token}
          />

          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <div className="relative">
              <Input
                id="newPassword"
                type={showPassword ? "text" : "password"}
                {...register("newPassword")}
                placeholder="Enter your new password"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-sm text-red-600">{errors.newPassword.message}</p>
            )}
            <div className="text-xs text-gray-500 space-y-1">
              <p>Password must contain:</p>
              <ul className="list-disc list-inside ml-2">
                <li>At least 8 characters</li>
                <li>One uppercase letter</li>
                <li>One lowercase letter</li>
                <li>One number</li>
              </ul>
            </div>
          </div>

          <Button
            type="submit"
            disabled={resetPasswordWithTokenMutation.isPending}
            className="w-full"
          >
            {resetPasswordWithTokenMutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Resetting...
              </>
            ) : (
              "Reset Password"
            )}
          </Button>

          {resetPasswordWithTokenMutation.isError && (
            <p className="text-sm text-red-600 text-center">
              Failed to reset password. The token may be invalid or expired.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
