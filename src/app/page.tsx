"use client";

import { Suspense, useState, useMemo, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

// hooks buat API calls
import { useEvents } from "@/hooks/api/useEvents";
import { useDebounce } from "@/hooks/useDebounce";
import { useAuth } from "@/contexts/AuthContext";

// komponen-komponen UI
import AppHeader from "@/components/shared/AppHeader";
import HeroSection from "@/components/landing/HeroSection";
import EventFilters from "@/components/landing/EventFilters";
import EventsSection from "@/components/landing/EventsSection";
import Footer from "@/components/landing/Footer";

// komponen loading buat tampilan sementara
function EventsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-200 h-48 rounded-t-lg"></div>
          <div className="bg-white p-4 rounded-b-lg space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();

  // Redirect organizer to dashboard
  useEffect(() => {
    if (!authLoading && isAuthenticated && user?.role === 'ORGANIZER') {
      router.push('/dashboard');
    }
  }, [isAuthenticated, user?.role, authLoading, router]);

  // state lokal buat filter-filter (simplified)
  const [filters, setFilters] = useState({
    searchQuery: "",
    selectedCategory: "All",
  });
  
  // debounce search biar ga spam API calls
  const debouncedSearchQuery = useDebounce(filters.searchQuery, 150);

  // panggil API buat dapetin events (simplified)
  const { data: eventsResponse, isLoading: eventsLoading, error } = useEvents({
    search: debouncedSearchQuery,
    category: filters.selectedCategory !== "All" ? filters.selectedCategory : undefined,
  });

  // ambil data events dari response
  const events = eventsResponse?.data || [];
  
  // OPTIMIZED: Memoize categories calculation untuk mencegah re-computation setiap render
  const categories = useMemo(() => {
    const uniqueCategories = new Set(events.map(event => event.category));
    return ["All", ...Array.from(uniqueCategories)];
  }, [events]);

  // OPTIMIZED: Memoize updateFilters function untuk mencegah re-creation
  const updateFilters = useCallback((newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  // Remove toggle filters function (not needed anymore)

  // handle kalo ada error
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AppHeader showAuthButtons={true} showUserMenu={true} />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Error loading events
            </h2>
            <p className="text-gray-600">
              Please try again later or contact support.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader showAuthButtons={true} showUserMenu={true} />
      
      <HeroSection 
        searchQuery={filters.searchQuery}
        onSearchChange={(value) => updateFilters({ searchQuery: value })}
      />
      
      <EventFilters
        categories={categories}
        selectedCategory={filters.selectedCategory}
        onCategoryChange={(category) => updateFilters({ selectedCategory: category })}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<EventsLoading />}>
          <EventsSection 
            events={events}
          />
        </Suspense>
      </div>
      
      <Footer />
    </div>
  );
}