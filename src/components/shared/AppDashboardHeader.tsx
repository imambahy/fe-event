"use client"

import { User, Menu } from "lucide-react"
import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useAuth } from "@/contexts/AuthContext"

interface AppDashboardHeaderProps {
  showUserMenu?: boolean
}

export default function AppDashboardHeader({
  showUserMenu = true
}: AppDashboardHeaderProps) {
  // Get real user data from AuthContext
  const { user, isAuthenticated } = useAuth()


  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex justify-between items-center h-16 px-6 lg:px-8 xl:px-12">
        {/* Left side: Menu toggle + Brand */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="hover:bg-gray-100 rounded-md p-2 border border-gray-200 flex items-center justify-center">
            <Menu className="w-5 h-5 text-gray-600" />
          </SidebarTrigger>

          <div className="h-6 w-px bg-gray-300"></div>

          <Link href="/dashboard" className="flex items-center hover:opacity-80 transition-opacity">
            <h1 className="text-xl lg:text-2xl font-bold text-purple-600">Eventify</h1>
          </Link>
        </div>

        {/* Right side: User info only */}
        <div className="flex items-center">
          {isAuthenticated && user && showUserMenu ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-purple-600" />
              </div>
              <div className="hidden md:block">
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                <span className="text-xs text-purple-600 block">{user?.role}</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}