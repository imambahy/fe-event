"use client";

import { useState, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import AppDashboardHeader from "@/components/shared/AppDashboardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, ChevronRight } from "lucide-react";
import { debugUserInfo } from "@/lib/debug";

export default function SettingsPage() {
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();
  debugUserInfo('Dashboard Settings', user, authLoading, isAuthenticated);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
  });
  
  const [avatarUrl, setAvatarUrl] = useState<string>(user?.avatar || "");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const onPickAvatar = () => fileRef.current?.click();

  const onAvatarChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    const url = URL.createObjectURL(file);
    setAvatarUrl(url);
  };

  const handleSave = () => {
    // TODO: Implement save functionality with avatar upload
    console.log('Saving settings:', { ...formData, avatarFile });
  };

  return (
    <>
      <AppDashboardHeader showUserMenu={true} />
      <div className="flex flex-1 flex-col bg-gray-50 p-6">
      <div className="px-4 sm:px-6 lg:px-8">

        {/* Form Card */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="rounded-lg border border-gray-200 bg-white shadow-sm"
        >
          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
            {/* Avatar section */}
            <div className="md:col-span-1">
              <div className="flex flex-col items-start gap-4">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={avatarUrl} alt="Avatar" />
                    <AvatarFallback className="text-gray-600">
                      {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <button
                    type="button"
                    onClick={onPickAvatar}
                    className="absolute -bottom-2 -right-2 inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 shadow ring-1 ring-gray-200 hover:bg-white"
                    aria-label="Change avatar"
                  >
                    <Camera className="h-3.5 w-3.5" />
                    Change
                  </button>
                </div>

                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={onAvatarChange}
                />

                <p className="text-xs text-gray-500">
                  JPG, PNG atau SVG. Maks 2MB.
                </p>
              </div>
            </div>

            {/* Profile fields */}
            <div className="md:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  className="mt-1"
                />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1"
                />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-gray-200 px-6 py-4">
            <Button type="button" variant="outline" className="bg-white border-gray-200">
              Cancel
            </Button>
            <Button type="submit">Save changes</Button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}