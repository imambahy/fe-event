"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProfile, useUpdateProfile } from "@/hooks/api/useAuth";
import { updateProfileSchema } from "@/validations/auth/profile.validation";
import { validateAvatarFile, fileToBase64 } from "@/lib/upload";
import { Camera, Loader2, Copy, Gift, Star } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";

type ProfileFormData = {
  name?: string;
  avatar?: File;
};

export default function ProfileForm() {
  const [avatarPreview, setAvatarPreview] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [copiedReferralCode, setCopiedReferralCode] = useState(false);

  const { data: profileData, isLoading: isLoadingProfile } = useProfile();
  const updateProfileMutation = useUpdateProfile();
  const { user, updateUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: profileData?.data?.name || "",
    },
  });

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validation = validateAvatarFile(file);
    if (!validation.isValid) {
      alert(validation.error);
      return;
    }

    setSelectedFile(file);
    const preview = await fileToBase64(file);
    setAvatarPreview(preview);
    setValue("avatar", file);
  };

  const onSubmit = (data: ProfileFormData) => {
    const formData: any = {};

    if (data.name && data.name !== profileData?.data?.name) {
      formData.name = data.name;
    }

    if (selectedFile) {
      formData.avatar = selectedFile;
    }

    if (Object.keys(formData).length > 0) {
      updateProfileMutation.mutate(formData, {
        onSuccess: (response) => {
          // Update user context with new data
          if (response.data) {
            updateUser(response.data);
          }
        }
      });
    }
  };

  const handleCopyReferralCode = async () => {
    if (user?.referralCode) {
      try {
        await navigator.clipboard.writeText(user.referralCode);
        setCopiedReferralCode(true);
        setTimeout(() => setCopiedReferralCode(false), 2000);
      } catch (error) {
        console.error('Failed to copy referral code:', error);
      }
    }
  };

  if (isLoadingProfile) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="ml-2">Loading profile...</span>
        </CardContent>
      </Card>
    );
  }

  const profile = profileData?.data;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
        <CardDescription>
          Update your profile information and avatar
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  src={avatarPreview || profile?.avatar}
                  alt={profile?.name}
                />
                <AvatarFallback>
                  {profile?.name?.charAt(0)?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full cursor-pointer hover:bg-blue-700 transition-colors"
              >
                <Camera className="w-4 h-4" />
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Click the camera icon to change your avatar
              </p>
              <p className="text-xs text-gray-500">
                JPEG, JPG, PNG up to 2MB
              </p>
            </div>
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email (Read-only) */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={profile?.email || ""}
              disabled
              className="bg-gray-50"
            />
            <p className="text-xs text-gray-500">
              Email cannot be changed
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={updateProfileMutation.isPending}
            className="w-full"
          >
            {updateProfileMutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Updating...
              </>
            ) : (
              "Update Profile"
            )}
          </Button>

          {updateProfileMutation.isError && (
            <p className="text-sm text-red-600 text-center">
              Failed to update profile. Please try again.
            </p>
          )}

          {updateProfileMutation.isSuccess && (
            <p className="text-sm text-green-600 text-center">
              Profile updated successfully!
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

// Component untuk menampilkan Referral Code & Points
export function ReferralPointsSection() {
  const { user } = useAuth();
  const [copiedReferralCode, setCopiedReferralCode] = useState(false);

  const handleCopyReferralCode = async () => {
    if (user?.referralCode) {
      try {
        await navigator.clipboard.writeText(user.referralCode);
        setCopiedReferralCode(true);
        setTimeout(() => setCopiedReferralCode(false), 2000);
      } catch (error) {
        console.error('Failed to copy referral code:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Referral Code Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-purple-600" />
            Referral Code
          </CardTitle>
          <CardDescription>
            Share your referral code with friends to earn points when they register
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <Input
                value={user?.referralCode || "No referral code"}
                readOnly
                className="bg-gray-50 font-mono text-lg"
              />
            </div>
            <Button
              onClick={handleCopyReferralCode}
              variant="outline"
              size="sm"
              disabled={!user?.referralCode}
            >
              <Copy className="w-4 h-4 mr-2" />
              {copiedReferralCode ? "Copied!" : "Copy"}
            </Button>
          </div>
          {user?.referralCode && (
            <p className="text-sm text-gray-600 mt-2">
              Share this code with friends to earn points when they register using your code
            </p>
          )}
        </CardContent>
      </Card>

      {/* Points Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Your Points
          </CardTitle>
          <CardDescription>
            Use your points to get discounts on event tickets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-purple-600">
                {user?.points || 0}
              </div>
              <p className="text-sm text-gray-600">Available Points</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              1 Point = Rp 1,000
            </Badge>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>How to earn points:</strong>
            </p>
            <ul className="text-sm text-blue-700 mt-1 space-y-1">
              <li>• Refer friends (100 points per successful referral)</li>
              <li>• Attend events (50 points per event)</li>
              <li>• Leave reviews (25 points per review)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
