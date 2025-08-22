"use client";

import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LucideIcon, Eye, EyeOff } from "lucide-react";

interface CustomFormFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  icon: LucideIcon;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

export default function CustomFormField({
  control,
  name,
  label,
  placeholder,
  type = "text",
  icon: Icon,
  showPasswordToggle = false,
  showPassword = false,
  onTogglePassword,
}: CustomFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-gray-700 dark:text-gray-300">
            {label}
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type={showPasswordToggle ? (showPassword ? "text" : "password") : type}
                placeholder={placeholder}
                className={`pl-10 ${showPasswordToggle ? "pr-10" : ""}`}
                {...field}
              />
              {showPasswordToggle && onTogglePassword && (
                <button
                  type="button"
                  onClick={onTogglePassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
