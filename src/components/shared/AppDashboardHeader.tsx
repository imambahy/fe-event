"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { 
  User, 
  LogOut,
  ChevronDown 
} from "lucide-react"
import Link from "next/link"
import { PanelLeft } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

interface AppDashboardHeaderProps {
  showUserMenu?: boolean
  onSidebarToggle?: () => void
}

export default function AppDashboardHeader({ 
  showUserMenu = true,
  onSidebarToggle
}: AppDashboardHeaderProps) {
  const [showUserMenuState, setShowUserMenuState] = useState(false)
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  // Get real user data from AuthContext
  const { user, isAuthenticated, logout: authLogout } = useAuth()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowUserMenuState(false)
      }
    }

    if (showUserMenuState) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showUserMenuState])

  const handleLogout = () => {
    // Close dropdown first
    setShowUserMenuState(false)
    
    // Clear authentication data using context
    // ProtectedRoute will handle the redirect automatically
    authLogout()
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex justify-between items-center h-16 px-6 lg:px-8 xl:px-12">
        {/* Left side: Menu toggle + Brand */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onSidebarToggle}
            aria-label="Toggle sidebar"
            className="hover:bg-gray-100 rounded-md p-1"
          >
            <PanelLeft className="h-5 w-5 text-gray-600" />
          </Button>

          <div className="h-6 w-px bg-gray-300"></div>

          <Link href="/dashboard" className="flex items-center hover:opacity-80 transition-opacity">
            <h1 className="text-xl lg:text-2xl font-bold text-purple-600">Eventify</h1>
          </Link>
        </div>
        
        {/* Right side: User menu */}
        <div className="flex items-center">
          {isAuthenticated && user && showUserMenu ? (
            <div className="relative" ref={dropdownRef}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowUserMenuState(!showUserMenuState)}
                className="flex items-center gap-2 hover:bg-gray-100 rounded-md"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-purple-600" />
                </div>
                <div className="hidden md:block">
                  <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                  <span className="text-xs text-purple-600 block">{user?.role}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </Button>
              
              {showUserMenuState && (
                <div className="absolute right-0 mt-3 w-40 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                  <button 
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
