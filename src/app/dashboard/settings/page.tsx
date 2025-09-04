"use client"

import { useRef, useState } from "react"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import AppDashboardHeader from "@/components/shared/AppDashboardHeader"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight, Camera } from "lucide-react"

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john@example.com")
  const [avatarUrl, setAvatarUrl] = useState<string>("/avatars/shadcn.jpg")
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const onPickAvatar = () => fileRef.current?.click()

  const onAvatarChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setAvatarFile(file)
    const url = URL.createObjectURL(file)
    setAvatarUrl(url)
  }

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    // TODO: Integrasikan dengan API update profil + upload avatar
    // - avatarFile: file gambar yang dipilih user
    // - name, email: data profil
    // Sementara hanya demo UI
    console.log({ name, email, avatarFile })
  }

  return (
    <SidebarProvider
      defaultOpen={sidebarOpen}
      open={sidebarOpen}
      onOpenChange={setSidebarOpen}
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <AppDashboardHeader
          showUserMenu={true}
          onSidebarToggle={handleSidebarToggle}
        />

        <div className="flex flex-1 flex-col bg-gray-50">
          <div className="@container/main flex flex-1 flex-col gap-6 py-6">
            {/* Breadcrumb + Title */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span>Dashboard</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-900 font-medium">Account Settings</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Account Settings
              </h1>

              {/* Form Card */}
              <form
                onSubmit={onSubmit}
                className="rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
                  {/* Avatar section */}
                  <div className="md:col-span-1">
                    <div className="flex flex-col items-start gap-4">
                      <div className="relative">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src={avatarUrl} alt="Avatar" />
                          <AvatarFallback className="text-gray-600">JD</AvatarFallback>
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="mt-1"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="mt-1"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <Label htmlFor="password">New Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Leave blank to keep current"
                        className="mt-1"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <Label htmlFor="confirm">Confirm Password</Label>
                      <Input
                        id="confirm"
                        type="password"
                        placeholder="Confirm new password"
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
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}