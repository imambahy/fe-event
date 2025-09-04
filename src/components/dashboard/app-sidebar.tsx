"use client"

import { NavMain } from "@/components/dashboard/nav-main"
import { NavSecondary } from "@/components/dashboard/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  IconMoneybag,
  IconSettings,
  IconHome2,
  IconConfetti,
  IconPercentage
} from "@tabler/icons-react"
import * as React from "react"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconHome2,
    },
    {
      title: "My Events",
      url: "/dashboard/events",
      icon: IconConfetti,
    },
    {
      title: "Voucher",
      url: "/dashboard/vouchers",
      icon: IconPercentage,
    },
    {
      title: "Transaction",
      url: "/dashboard/transactions",
      icon: IconMoneybag,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" className="bg-white text-gray-900 border-r border-gray-200" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="hover:bg-gray-100"
            >
              <a href="/dashboard">
                <span className="text-base font-semibold text-purple-600">Eventify</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="text-gray-700">
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  )
}