"use client";

import { useState } from "react";
import { useEventsPage } from "@/hooks/useEventsPage";
import { useAuth } from "@/contexts/AuthContext";
import { Event } from "@/types/event.type";
import AppDashboardHeader from "@/components/shared/AppDashboardHeader";
import { SearchFilter } from "@/components/dashboard/SearchFilter";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Plus,
  Pencil,
  Trash,
  ChevronRight,
  MapPin,
  Loader2,
} from "lucide-react";
import CreateEventDialog from "@/components/events/CreateEventDialog";
import EditEventDialog from "@/components/events/EditEventDialog";
import DeleteEventDialog from "@/components/events/DeleteEventDialog";
import { debugUserInfo } from "@/lib/debug";

export default function EventsPage() {
  const [selectedEventForEdit, setSelectedEventForEdit] = useState<Event | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();
  debugUserInfo('Dashboard Events', user, authLoading, isAuthenticated);

  const {
    events,
    totalPages,
    isLoading,
    error,
    page,
    setPage,
  } = useEventsPage({
    pageSize: 10,
  });

  const handleRefresh = () => {
    // Refresh will be handled by the hook automatically
    window.location.reload();
  };

  const handleEditEvent = (event: Event) => {
    setSelectedEventForEdit(event);
  };

  const handleDeleteEvent = (event: Event) => {
    // Delete logic will be handled by DeleteEventDialog
  };

  if (error) {
    return (
      <>
        <AppDashboardHeader showUserMenu={true} />
        <div className="flex flex-1 flex-col bg-gray-50 p-6">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <p className="text-red-600">Error loading events: {error.message}</p>
              <Button onClick={handleRefresh} className="mt-4">
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AppDashboardHeader showUserMenu={true} />
      <div className="flex flex-1 flex-col bg-gray-50 p-6">
            {/* Header Section */}
            <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Manage Your Events</h2>
            <p className="text-sm text-gray-500">
              Create, edit, and manage your event listings
            </p>
              </div>

          <div className="flex items-center gap-3">
            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onRefresh={handleRefresh}
              placeholder="Search events..."
            />
            
            <CreateEventDialog />
          </div>
              </div>
            </div>

            {/* Events Table */}
            <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
              <span className="ml-2 text-gray-600">Loading events...</span>
                    </div>
          ) : events.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No events found</p>
              <CreateEventDialog />
                  </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tickets
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {events.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-xs font-medium">
                              {event.title.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {event.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: {event.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {new Date(event.startDate).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {event.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {event.ticketTypes?.length || 0} types
                      </div>
                        <div className="text-sm text-gray-500">
                          Capacity: 0
                      </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditEvent(event)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteEvent(event)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                      </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
                    </div>
                  )}
        </div>
                </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-4 sm:px-6 lg:px-8">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                  onClick={() => setPage(Math.max(1, page - 1))}
                  className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                          />
                        </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <PaginationItem key={p}>
                            <PaginationLink
                    onClick={() => setPage(p)}
                    isActive={p === page}
                    className="cursor-pointer"
                  >
                    {p}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        <PaginationItem>
                          <PaginationNext
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  className={page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
      )}

      {/* Dialogs */}
      {selectedEventForEdit && (
        <EditEventDialog
          event={selectedEventForEdit}
        />
      )}
      </div>
    </>
  );
}