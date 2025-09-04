"use client";

import { Suspense, useState, useMemo } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import EventFilters from "@/components/landing/EventFilters";
import EventsSection from "@/components/landing/EventsSection";
import Footer from "@/components/landing/Footer";
import { useEvents } from "@/hooks/api/useEvents";
import { useDebounce } from "@/hooks/useDebounce";

// Loading skeleton component
function EventsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-200 h-48 rounded-t-lg"></div>
          <div className="bg-white p-4 rounded-b-lg space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  // state lokal buat filter-filter
  const [filters, setFilters] = useState({
    searchQuery: "",
    selectedCategory: "All",
    dateRange: "",
    priceRange: "Any Price",
    location: "",
    sortBy: "Most Popular",
  });
  
  // state lokal buat toggle filter
  const [showFilters, setShowFilters] = useState(false);
  
  // debounce search biar ga spam API calls - REDUCED FROM 300ms TO 150ms
  const debouncedSearchQuery = useDebounce(filters.searchQuery, 150);

  // panggil API buat dapetin events
  const { data: eventsResponse, isLoading, error } = useEvents({
    search: debouncedSearchQuery,
    category: filters.selectedCategory !== "All" ? filters.selectedCategory : undefined,
    location: filters.location || undefined,
  });

  // ambil data events dari response
  const events = eventsResponse?.data || [];
  
  // MEMOIZED: ambil categories dari events - OPTIMIZED
  const categories = useMemo(() => {
    const uniqueCategories = new Set(events.map(event => event.category));
    return ["All", ...Array.from(uniqueCategories)];
  }, [events]);

  // MEMOIZED: filtered events based on client-side filters
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      // Date range filter
      if (filters.dateRange) {
        const eventDate = new Date(event.startDate);
        const filterDate = new Date(filters.dateRange);
        if (eventDate < filterDate) return false;
      }

      // Price range filter
      if (filters.priceRange !== "Any Price") {
        const lowestPrice = event.ticketTypes?.length > 0 
          ? Math.min(...event.ticketTypes.map(ticket => ticket.price))
          : 0;
        
        switch (filters.priceRange) {
          case "Free":
            if (lowestPrice > 0) return false;
            break;
          case "Under Rp 100.000":
            if (lowestPrice >= 100000) return false;
            break;
          case "Rp 100.000 - Rp 500.000":
            if (lowestPrice < 100000 || lowestPrice > 500000) return false;
            break;
          case "Above Rp 500.000":
            if (lowestPrice <= 500000) return false;
            break;
        }
      }

      return true;
    });
  }, [events, filters.dateRange, filters.priceRange]);

  // update filter-filter - OPTIMIZED
  const updateFilters = useMemo(() => (newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  // handle kalo ada error
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
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
      <Header />
      
      <HeroSection 
        searchQuery={filters.searchQuery}
        onSearchChange={(value) => updateFilters({ searchQuery: value })}
      />
      
      <EventFilters
        categories={categories}
        selectedCategory={filters.selectedCategory}
        onCategoryChange={(category) => updateFilters({ selectedCategory: category })}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
        dateRange={filters.dateRange}
        onDateRangeChange={(dateRange) => updateFilters({ dateRange })}
        priceRange={filters.priceRange}
        onPriceRangeChange={(priceRange) => updateFilters({ priceRange })}
        location={filters.location}
        onLocationChange={(location) => updateFilters({ location })}
        sortBy={filters.sortBy}
        onSortByChange={(sortBy) => updateFilters({ sortBy })}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<EventsLoading />}>
          <EventsSection 
            events={filteredEvents}
          />
        </Suspense>
      </div>
      
      <Footer />
    </div>
  );
}