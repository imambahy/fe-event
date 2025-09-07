"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-1">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild
                  tooltip={item.title} 
                  className={`
                    relative group transition-all duration-200 ease-in-out
                    ${isActive 
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/25' 
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 hover:text-purple-700 hover:shadow-sm'
                    }
                    rounded-lg mx-1
                  `}
                >
                  <Link href={item.url} className="flex items-center gap-3 py-2.5 px-3">
                    {item.icon && (
                      <item.icon 
                        className={`
                          w-5 h-5 transition-transform duration-200 group-hover:scale-110
                          ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-purple-600'}
                        `} 
                      />
                    )}
                    <span className="font-medium">{item.title}</span>
                    {isActive && (
                      <div className="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse" />
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
