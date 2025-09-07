"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Shield, Gift, ArrowLeft } from "lucide-react";
import ProfileForm, { ReferralPointsSection } from "@/components/auth/ProfileForm";
import ChangePasswordForm from "@/components/auth/ChangePasswordForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          <p className="mt-2 text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile Information
            </TabsTrigger>
            <TabsTrigger value="referral" className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              Referral & Points
            </TabsTrigger>
            <TabsTrigger value="password" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Change Password
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <ProfileForm />
          </TabsContent>

          <TabsContent value="referral" className="space-y-6">
            <ReferralPointsSection />
          </TabsContent>

          <TabsContent value="password" className="space-y-6">
            <ChangePasswordForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
