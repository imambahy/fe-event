"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  User, 
  LogOut, 
  Settings, 
  Calendar,
  ChevronDown 
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

interface AppHeaderProps {
  showAuthButtons?: boolean; // For landing page
  showUserMenu?: boolean;    // For authenticated pages
}

export default function AppHeader({ 
  showAuthButtons = true, 
  showUserMenu = true 
}: AppHeaderProps) {
  const [showUserMenuState, setShowUserMenuState] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setShowUserMenuState(false);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-purple-600">Eventify</h1>
          </Link>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated && showUserMenu ? (
              // User is logged in - show user menu
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowUserMenuState(!showUserMenuState)}
                  className="flex items-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:block">{user?.name || 'User'}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                
                {showUserMenuState && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                    {user?.role === "ORGANIZER" ? (
                      <Link href="/dashboard">
                        <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <Calendar className="w-4 h-4 mr-3" />
                          Dashboard
                        </div>
                      </Link>
                    ) : (
                      <Link href="/my-tickets">
                        <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <Calendar className="w-4 h-4 mr-3" />
                          My Tickets
                        </div>
                      </Link>
                    )}
                    <Link href="/profile">
                      <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <User className="w-4 h-4 mr-3" />
                        Profile
                      </div>
                    </Link>
                    <Link href="/settings">
                      <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Settings className="w-4 h-4 mr-3" />
                        Settings
                      </div>
                    </Link>
                    <hr className="my-1" />
                    <button 
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : !isAuthenticated && showAuthButtons ? (
              // User is not logged in - show auth buttons
              <div className="flex items-center space-x-4">
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}