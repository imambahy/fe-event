"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import AppHeader from "@/components/shared/AppHeader";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  CreditCard, 
  Gift, 
  Shield, 
  Save,
  Edit,
  Eye,
  EyeOff,
  MapPin,
  Phone,
  Calendar,
  Award,
  Key,
  Lock,
  Camera,
  Upload,
  Image as ImageIcon
} from "lucide-react";
import { useToastContext } from "@/contexts/ToastContext";

interface ProfileFormData {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  bio?: string;
}

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToastContext();
  const router = useRouter();
  
  const [isEditing, setIsEditing] = useState(false);
  const [showReferralCode, setShowReferralCode] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [changePasswordForm, setChangePasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<ProfileFormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
  });

  // Initialize form data when user loads
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: "",
        location: "",
        bio: "",
      });
    }
  }, [user]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isLoading, isAuthenticated, router]);

  const handleInputChange = (field: keyof ProfileFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    try {
      // TODO: Implement API call to update profile
      // await updateProfile(formData);
      
      toast("Your profile has been successfully updated.", "success", "Profile Updated");
      
      setIsEditing(false);
    } catch (error) {
      toast("Failed to update profile. Please try again.", "error", "Error");
    }
  };

  const copyReferralCode = () => {
    if (user?.referralCode) {
      navigator.clipboard.writeText(user.referralCode);
      toast("Referral code copied to clipboard.", "success", "Copied!");
    }
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast("Please select a valid image file.", "error", "Invalid File");
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast("File size must be less than 5MB.", "error", "File Too Large");
        return;
      }
      
      setAvatarFile(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      
      toast("Avatar updated! Don't forget to save your changes.", "success", "Avatar Changed");
    }
  };

  const handleAvatarUpload = async () => {
    if (!avatarFile) return;
    
    try {
      // TODO: Implement API call to upload avatar
      // const formData = new FormData();
      // formData.append('avatar', avatarFile);
      // await uploadAvatar(formData);
      
      toast("Profile picture has been successfully updated.", "success", "Avatar Updated");
      setAvatarFile(null);
    } catch (error) {
      toast("Failed to upload profile picture. Please try again.", "error", "Upload Failed");
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Selamat pagi";
    if (hour < 17) return "Selamat siang";
    if (hour < 19) return "Selamat sore";
    return "Selamat malam";
  };

  const handleChangePassword = async () => {
    // Validation
    if (changePasswordForm.newPassword !== changePasswordForm.confirmPassword) {
      toast("New passwords do not match.", "error", "Error");
      return;
    }

    if (changePasswordForm.newPassword.length < 6) {
      toast("Password must be at least 6 characters long.", "error", "Error");
      return;
    }

    if (!changePasswordForm.currentPassword) {
      toast("Please enter your current password.", "error", "Error");
      return;
    }

    try {
      // TODO: Implement API call to change password
      // await changePassword({
      //   currentPassword: changePasswordForm.currentPassword,
      //   newPassword: changePasswordForm.newPassword
      // });
      
      toast("Password has been successfully updated.", "success", "Password Updated");
      
      // Reset form
      setChangePasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setShowChangePassword(false);
    } catch (error) {
      toast("Failed to update password. Please check your current password.", "error", "Error");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader showAuthButtons={false} showUserMenu={true} />
      
      {/* Hero Section - matching landing page style */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My Profile
              </h1>
              <p className="text-xl text-purple-100">
                Manage your account settings and preferences
              </p>
            </div>
            
            {/* Mobile Avatar Section */}
            <div className="flex md:hidden items-center space-x-4">
              <div className="text-center">
                <p className="text-sm text-purple-200">{getGreeting()},</p>
                <p className="text-lg font-semibold">{user.name}</p>
              </div>
              <div className="relative group">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white border-opacity-30">
                  {avatarPreview ? (
                    <img 
                      src={avatarPreview} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-white bg-opacity-20 flex items-center justify-center">
                      <User className="w-10 h-10" />
                    </div>
                  )}
                </div>
                <label 
                  htmlFor="mobile-avatar-upload"
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
                >
                  <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </label>
                <input
                  id="mobile-avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-purple-200">{getGreeting()},</p>
                <p className="text-lg font-semibold">{user.name}</p>
              </div>
              <div className="relative group">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white border-opacity-30">
                  {avatarPreview ? (
                    <img 
                      src={avatarPreview} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-white bg-opacity-20 flex items-center justify-center">
                      <User className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <label 
                  htmlFor="hero-avatar-upload"
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
                >
                  <Camera className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </label>
                <input
                  id="hero-avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Profile Stats & Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* User Role & Status Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  Account Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Role</span>
                  <Badge className={user.role === "ORGANIZER" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"}>
                    {user.role === "ORGANIZER" ? "Event Organizer" : "Customer"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Status</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Member Since</span>
                  <span className="text-sm">Jan 2024</span>
                </div>
              </CardContent>
            </Card>

            {/* Points Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  Reward Points
                </CardTitle>
                <CardDescription>
                  Earn points with every purchase
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {user.points?.toLocaleString() || "0"}
                  </div>
                  <p className="text-sm text-gray-600">Available Points</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-4 w-full"
                    onClick={() => router.push("/rewards")}
                  >
                    <Gift className="w-4 h-4 mr-2" />
                    Redeem Points
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Referral Card */}
            {user.referralCode && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="w-5 h-5 text-green-600" />
                    Referral Program
                  </CardTitle>
                  <CardDescription>
                    Invite friends and earn rewards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Your Referral Code</label>
                      <div className="flex mt-1">
                        <Input
                          value={showReferralCode ? user.referralCode : "••••••••"}
                          readOnly
                          className="font-mono"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-2"
                          onClick={() => setShowReferralCode(!showReferralCode)}
                        >
                          {showReferralCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                    <Button 
                      onClick={copyReferralCode}
                      className="w-full"
                      size="sm"
                    >
                      Copy Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5 text-purple-600" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>
                      Update your account details and personal information
                    </CardDescription>
                  </div>
                  <Button
                    variant={isEditing ? "outline" : "default"}
                    onClick={() => {
                      if (isEditing) {
                        // Reset form data
                        setFormData({
                          name: user.name || "",
                          email: user.email || "",
                          phone: "",
                          location: "",
                          bio: "",
                        });
                      }
                      setIsEditing(!isEditing);
                    }}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Profile Picture Section */}
                <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-200">
                      {avatarPreview ? (
                        <img 
                          src={avatarPreview} 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-purple-100 flex items-center justify-center">
                          <User className="w-12 h-12 text-purple-400" />
                        </div>
                      )}
                    </div>
                    <label 
                      htmlFor="profile-avatar-upload"
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
                    >
                      <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </label>
                    <input
                      id="profile-avatar-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="font-medium text-gray-900">Profile Picture</h3>
                    <p className="text-sm text-gray-500">
                      Click on the image to upload a new photo
                    </p>
                    <div className="flex space-x-2">
                      <label htmlFor="profile-avatar-upload">
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer"
                          asChild
                        >
                          <span>
                            <Upload className="w-4 h-4 mr-2" />
                            Choose Photo
                          </span>
                        </Button>
                      </label>
                      {avatarFile && (
                        <Button
                          onClick={handleAvatarUpload}
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          <ImageIcon className="w-4 h-4 mr-2" />
                          Upload
                        </Button>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">
                      Supported formats: JPG, PNG, GIF (Max 5MB)
                    </p>
                  </div>
                </div>
                
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      disabled={!isEditing}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <Input
                      value={formData.email}
                      disabled={true}
                      type="email"
                      placeholder="Email cannot be changed"
                      className="bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      disabled={!isEditing}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Location
                    </label>
                    <Input
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      disabled={!isEditing}
                      placeholder="Enter your location"
                    />
                  </div>
                </div>

                {/* Bio Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    About Me
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    disabled={!isEditing}
                    placeholder="Tell us a bit about yourself..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                {/* Save Button */}
                {isEditing && (
                  <div className="flex justify-end space-x-4">
                    <Button
                      onClick={handleSave}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="outline"
                onClick={() => setShowChangePassword(true)}
                className="h-16 text-left flex items-center justify-start space-x-4"
              >
                <Key className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-medium">Change Password</div>
                  <div className="text-sm text-gray-500">Update your account password</div>
                </div>
              </Button>
              
              <Button
                variant="outline"
                onClick={() => router.push("/")}
                className="h-16 text-left flex items-center justify-start space-x-4"
              >
                <Calendar className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-medium">Browse Events</div>
                  <div className="text-sm text-gray-500">Discover amazing events</div>
                </div>
              </Button>
            </div>

            {/* Change Password Modal */}
            {showChangePassword && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg w-full max-w-md p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-purple-600" />
                      Change Password
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setShowChangePassword(false);
                        setChangePasswordForm({
                          currentPassword: "",
                          newPassword: "",
                          confirmPassword: "",
                        });
                      }}
                    >
                      ×
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <Input
                        type="password"
                        value={changePasswordForm.currentPassword}
                        onChange={(e) => setChangePasswordForm(prev => ({
                          ...prev,
                          currentPassword: e.target.value
                        }))}
                        placeholder="Enter your current password"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <Input
                        type="password"
                        value={changePasswordForm.newPassword}
                        onChange={(e) => setChangePasswordForm(prev => ({
                          ...prev,
                          newPassword: e.target.value
                        }))}
                        placeholder="Enter your new password"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <Input
                        type="password"
                        value={changePasswordForm.confirmPassword}
                        onChange={(e) => setChangePasswordForm(prev => ({
                          ...prev,
                          confirmPassword: e.target.value
                        }))}
                        placeholder="Confirm your new password"
                      />
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setShowChangePassword(false);
                          setChangePasswordForm({
                            currentPassword: "",
                            newPassword: "",
                            confirmPassword: "",
                          });
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleChangePassword}
                        className="bg-purple-600 hover:bg-purple-700"
                        disabled={!changePasswordForm.currentPassword || !changePasswordForm.newPassword || !changePasswordForm.confirmPassword}
                      >
                        Update Password
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
