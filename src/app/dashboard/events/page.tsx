"use client";

import { useState } from "react";
import { useEventsPage, type FlatEvent } from "@/hooks/useEventsPage";
import { useAuth } from "@/contexts/AuthContext";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import AppDashboardHeader from "@/components/shared/AppDashboardHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import {
  Search,
  Plus,
  Pencil,
  Trash,
  ChevronRight,
  MapPin,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { CreateEventDialog } from "@/components/events/CreateEventDialog";
import { EditEventDialog } from "@/components/events/EditEventDialog";
import { DeleteEventDialog } from "@/components/events/DeleteEventDialog";


export default function EventsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedEventForEdit, setSelectedEventForEdit] = useState<FlatEvent | null>(null);
  
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Get auth context for debugging
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();

  // Debug user info - Enhanced debugging
  console.log('👤 Dashboard Events - User info:', {
    user: user ? { 
      id: user.id, 
      role: user.role, 
      email: user.email,
      name: user.name,
      fullObject: user 
    } : null,
    isLoading: authLoading,
    isAuthenticated,
    userExists: !!user,
    userType: typeof user,
    userKeys: user ? Object.keys(user) : []
  });

  // Use API-connected hook
  const {
    events,
    totalEvents,
    totalPages,
    isLoading,
    error,
    search,
    setSearch,
    page,
    setPage,
    selected,
    toggleSelect,
    selectAllOnPage,
    clearSelection,
    getStatusBadgeClass,
    debug,
  } = useEventsPage({
    pageSize: 5,
  });

  // Simple debug log
  console.log('📱 Events page loaded:', events.length, 'events');

  // Local handlers for actions
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleCreate = () => {
    setCreateDialogOpen(true);
  };

  const handleEdit = () => {
    if (selected.length !== 1) return;
    
    const eventToEdit = events.find(event => event.id === selected[0]);
    if (eventToEdit) {
      setSelectedEventForEdit(eventToEdit);
      setEditDialogOpen(true);
    }
  };

  const handleDelete = () => {
    if (selected.length === 0) return;
    setDeleteDialogOpen(true);
  };

  // Get selected events for delete dialog
  const selectedEvents = events.filter(event => selected.includes(event.id));

  // Handle successful operations
  const handleOperationSuccess = () => {
    // Clear selections after successful operation
    clearSelection();
  };

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

        {/* Main Content */}
        <div className="flex flex-1 flex-col bg-gray-50">
          <div className="@container/main flex flex-1 flex-col gap-6 py-6">
            {/* Header Section */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span>Dashboard</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-900 font-medium">My Events</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                My Events
              </h1>

              {/* Search and Controls */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <form
                  onSubmit={handleSearch}
                  className="relative flex-1 max-w-md"
                >
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search events (title, category, location, status)..."
                    className="pl-10 bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search events"
                  />
                  <button type="submit" className="hidden" aria-hidden />
                </form>

                <Button
                  type="button"
                  onClick={handleCreate}
                  className="bg-purple-600 text-white hover:bg-purple-700"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Create Event
                </Button>
                <Button
                  type="button"
                  onClick={handleEdit}
                  disabled={selected.length !== 1}
                  className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit Selected
                </Button>
                <Button
                  type="button"
                  onClick={handleDelete}
                  disabled={selected.length === 0}
                  className="bg-white border-red-200 text-red-600 hover:bg-red-50 disabled:opacity-50"
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Delete Selected
                </Button>

              </div>
            </div>

            {/* Events Table */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* Table Header */}
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <div className="grid grid-cols-8 gap-4 text-sm font-medium text-gray-700">
                    <div className="col-span-1">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        onChange={(e) =>
                          selectAllOnPage(e.currentTarget.checked)
                        }
                      />
                    </div>
                    <div className="col-span-2">Title</div>
                    <div className="col-span-1">Category</div>
                    <div className="col-span-1">Published</div>
                    <div className="col-span-1">Capacity</div>
                    <div className="col-span-1">Sold</div>
                    <div className="col-span-1">Created</div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200">
                  {authLoading ? (
                    <div className="px-6 py-12 text-center">
                      <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
                      <div className="text-gray-500 text-lg font-medium mb-2">Authenticating...</div>
                      <p className="text-gray-400 text-sm">Please wait while we verify your credentials</p>
                    </div>
                  ) : !user?.id ? (
                    <div className="px-6 py-12 text-center">
                      <div className="text-orange-500 text-lg font-medium mb-2">Authentication Required</div>
                      <p className="text-gray-400 text-sm mb-4">Please log in to view your events</p>
                      <div className="text-xs text-gray-300 bg-gray-50 p-3 rounded border max-w-md mx-auto">
                        <strong>Auth Debug:</strong><br/>
                        User: {user ? 'exists' : 'null'}<br/>
                        User ID: {user?.id || 'Not available'}<br/>
                        Auth Loading: {authLoading ? 'Yes' : 'No'}<br/>
                        Is Authenticated: {isAuthenticated ? 'Yes' : 'No'}
                      </div>
                    </div>
                  ) : user.role !== "ORGANIZER" ? (
                    <div className="px-6 py-12 text-center">
                      <div className="text-red-500 text-lg font-medium mb-2">Access Denied</div>
                      <p className="text-gray-400 text-sm">Only organizers can view this page</p>
                      <div className="text-xs text-gray-300 bg-gray-50 p-3 rounded border max-w-md mx-auto">
                        <strong>Role Debug:</strong><br/>
                        Current Role: {user?.role || 'Not available'}<br/>
                        Required Role: ORGANIZER
                      </div>
                    </div>
                  ) : isLoading ? (
                    <div className="px-6 py-12 text-center">
                      <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-purple-600" />
                      <div className="text-gray-500 text-lg font-medium mb-2">Loading events...</div>
                      <p className="text-gray-400 text-sm">Please wait while we fetch your events</p>
                    </div>
                  ) : error ? (
                    <div className="px-6 py-12 text-center">
                      <div className="text-red-500 text-lg font-medium mb-2">Error loading events</div>
                      <p className="text-gray-400 text-sm mb-4">
                        {error instanceof Error ? error.message : "Please try again or contact support"}
                      </p>
                      <div className="text-xs text-gray-300 bg-gray-50 p-3 rounded border">
                        <strong>Debug Info:</strong><br/>
                        User ID: {user?.id || 'Not available'}<br/>
                        User Role: {user?.role || 'Not available'}<br/>
                        Is Authenticated: {isAuthenticated ? 'Yes' : 'No'}<br/>
                        Expected organizerId: {user?.id || 'Not available'}<br/>
                        Auth Loading: {authLoading ? 'Yes' : 'No'}<br/>
                        User Object: {user ? JSON.stringify(user) : 'null'}<br/>
                        LocalStorage Token: {typeof window !== 'undefined' ? (localStorage.getItem('token') ? 'exists' : 'missing') : 'server'}<br/>
                        LocalStorage User: {typeof window !== 'undefined' ? (localStorage.getItem('user') ? 'exists' : 'missing') : 'server'}<br/>
                        Raw LocalStorage User: {typeof window !== 'undefined' ? localStorage.getItem('user') : 'server'}<br/>
                        Error: {error instanceof Error ? error.message : 'Unknown error'}
                      </div>
                    </div>
                  ) : (!isLoading && events.length > 0) ? (
                    events.map((event: FlatEvent, index: number) => (
                      <div
                        key={event.id || index}
                        className="px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="grid grid-cols-8 gap-4 items-center text-sm text-gray-900">
                          <div className="col-span-1">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                              checked={selected.includes(event.id)}
                              onChange={(e) =>
                                toggleSelect(event.id, e.currentTarget.checked)
                              }
                            />
                          </div>
                          <div className="col-span-2">
                            <div className="font-medium">
                              {event.title || "Untitled Event"}
                            </div>
                            <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {event.location || "Location TBD"}
                            </div>
                            {/* Debug: Show organizer ID */}
                            <div className="text-xs text-gray-400 mt-1">
                              Organizer ID: {event.organizerId} {event.organizerId === user?.id ? '✅' : '❌'}
                            </div>
                          </div>
                          <div className="col-span-1">
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                              {event.category || "Uncategorized"}
                            </span>
                          </div>
                          <div className="col-span-1">
                            <div className="flex flex-col gap-1">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  event.published 
                                    ? "bg-green-100 text-green-800" 
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {event.published ? "Published" : "Draft"}
                              </span>
                              {event.published && (
                                <span
                                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusBadgeClass(
                                    event.status
                                  )}`}
                                >
                                  {event.status}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-span-1 text-center">
                            <div className="font-medium">
                              {event.totalCapacity || 0}
                            </div>
                            <div className="text-xs text-gray-500">seats</div>
                          </div>
                          <div className="col-span-1 text-center">
                            <div className="font-medium">
                              {event.totalTicketsSold || 0}
                            </div>
                            <div className="text-xs text-gray-500">
                              {event.totalCapacity ? Math.round(((event.totalTicketsSold || 0) / event.totalCapacity) * 100) : 0}%
                            </div>
                          </div>
                          <div className="col-span-1 text-center">
                            <div className="text-sm">
                              {event.createdAt ? new Date(event.createdAt).toLocaleDateString('id-ID', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric'
                              }) : "N/A"}
                            </div>
                            <div className="text-xs text-gray-500">
                              {event.totalTransactions || 0} orders
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-6 py-12 text-center">
                      <div className="text-gray-500 text-lg font-medium mb-2">
                        No events found
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        Create your first event to get started
                      </p>
                      {/* Debug info when no events */}
                      <div className="text-xs text-gray-300 bg-gray-50 p-3 rounded border max-w-md mx-auto">
                        <strong>Debug Info:</strong><br/>
                        Current User ID: {user?.id || 'Not available'}<br/>
                        User Role: {user?.role || 'Not available'}<br/>
                        Is Authenticated: {isAuthenticated ? 'Yes' : 'No'}<br/>
                        Auth Loading: {authLoading ? 'Yes' : 'No'}<br/>
                        User Object: {user ? JSON.stringify(user) : 'null'}<br/>
                        LocalStorage Token: {typeof window !== 'undefined' ? (localStorage.getItem('token') ? 'exists' : 'missing') : 'server'}<br/>
                        LocalStorage User: {typeof window !== 'undefined' ? (localStorage.getItem('user') ? 'exists' : 'missing') : 'server'}<br/>
                        Raw LocalStorage User: {typeof window !== 'undefined' ? localStorage.getItem('user') : 'server'}<br/>
                        Looking for events with organizerId: {user?.id || 'Not available'}
                        <br/>
                        <button 
                          onClick={() => {
                            const fixedUser = {id: 1, email: 'theo123@example.com', name: 'Theo Organizer', role: 'ORGANIZER', phone: '08123456789'};
                            localStorage.setItem('user', JSON.stringify(fixedUser));
                            window.location.reload();
                          }}
                          className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                        >
                          🔧 Fix User ID
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Table Footer */}
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>
                      {selected.length} of {totalEvents} row(s) selected
                    </span>

                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setPage((p) => Math.max(1, p - 1));
                            }}
                          />
                        </PaginationItem>

                        {Array.from({ length: totalPages }).map((_, i) => (
                          <PaginationItem key={i}>
                            <PaginationLink
                              href="#"
                              isActive={page === i + 1}
                              onClick={(e) => {
                                e.preventDefault();
                                setPage(i + 1);
                              }}
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setPage((p) => Math.min(totalPages, p + 1));
                            }}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>

      {/* Dialog Components */}
      <CreateEventDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
      />

      <EditEventDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        event={selectedEventForEdit}
      />

      <DeleteEventDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        events={selectedEvents}
        onSuccess={handleOperationSuccess}
      />
    </SidebarProvider>
  );
}