"use client"

import { NavMain } from "@/components/dashboard/NavMain"
import { NavSecondary } from "@/components/dashboard/NavSecondary"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  Home,
  Calendar,
  Ticket,
  DollarSign,
  Settings,
  Sparkles,
  User,
  LogOut
} from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import * as React from "react"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "My Events",
      url: "/dashboard/events",
      icon: Calendar,
    },
    {
      title: "Vouchers",
      url: "/dashboard/vouchers",
      icon: Ticket,
    },
    {
      title: "Transactions",
      url: "/dashboard/transactions",
      icon: DollarSign,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.push('/')
  }

  return (
    <Sidebar 
      collapsible="icon" 
      className="bg-gradient-to-b from-purple-50 via-white to-purple-50 border-r border-purple-100 shadow-lg" 
      {...props}
    >
      <SidebarHeader className="border-b border-purple-100/50 pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="hover:bg-purple-100/50 transition-colors duration-200"
            >
              <a href="/dashboard" className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Eventify
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-3 py-6">
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter className="border-t border-purple-100/50 pt-4">
        {/* User Profile Section */}
        <div className="px-3 mb-4">
          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-lg border border-purple-200/50">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {user?.name || 'Organizer'}
              </p>
              <p className="text-xs text-purple-600 font-medium">
                {user?.role || 'ORGANIZER'}
              </p>
            </div>
          </div>
        </div>

        <NavSecondary items={data.navSecondary} />
        
        {/* Logout Button */}
        <div className="px-3 mt-4">
          <SidebarMenuButton 
            onClick={handleLogout}
            className="w-full text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}