"use client";

import { useState } from "react";
import { EventWithDetails } from "@/types/event.type";
import { dummyEvents, categories } from "@/data/events";

// Components
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import EventFilters from "@/components/landing/EventFilters";
import EventsSection from "@/components/landing/EventsSection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [dateRange, setDateRange] = useState("");
  const [priceRange, setPriceRange] = useState("Any Price");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("Most Popular");

  // Filter events based on search and category
  const filteredEvents = dummyEvents.filter((event) => {
    // Search filter
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    
    // Date filter
    const matchesDate = !dateRange || event.startDate >= dateRange;
    
    // Price filter - get lowest price from ticket types
    const lowestPrice = event.ticketTypes && event.ticketTypes.length > 0 
      ? Math.min(...event.ticketTypes.map(ticket => ticket.price))
      : 0;
    
    let matchesPrice = true;
    switch (priceRange) {
      case "Free":
        matchesPrice = lowestPrice === 0;
        break;
      case "Under Rp 100.000":
        matchesPrice = lowestPrice < 100000;
        break;
      case "Rp 100.000 - Rp 500.000":
        matchesPrice = lowestPrice >= 100000 && lowestPrice <= 500000;
        break;
      case "Above Rp 500.000":
        matchesPrice = lowestPrice > 500000;
        break;
      default:
        matchesPrice = true;
    }
    
    // Location filter
    const matchesLocation = !location || 
      event.location.toLowerCase().includes(location.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesDate && matchesPrice && matchesLocation;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case "Newest":
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      case "Price: Low to High":
        const priceA = a.ticketTypes && a.ticketTypes.length > 0 
          ? Math.min(...a.ticketTypes.map(ticket => ticket.price))
          : 0;
        const priceB = b.ticketTypes && b.ticketTypes.length > 0 
          ? Math.min(...b.ticketTypes.map(ticket => ticket.price))
          : 0;
        return priceA - priceB;
      case "Price: High to Low":
        const priceA2 = a.ticketTypes && a.ticketTypes.length > 0 
          ? Math.min(...a.ticketTypes.map(ticket => ticket.price))
          : 0;
        const priceB2 = b.ticketTypes && b.ticketTypes.length > 0 
          ? Math.min(...b.ticketTypes.map(ticket => ticket.price))
          : 0;
        return priceB2 - priceA2;
      case "Most Popular":
      default:
        return (b.totalAttendees || 0) - (a.totalAttendees || 0);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <HeroSection 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <EventFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        location={location}
        onLocationChange={setLocation}
        sortBy={sortBy}
        onSortByChange={setSortBy}
      />
      
      <EventsSection 
        events={sortedEvents}
        selectedCategory={selectedCategory}
      />
      
      <Footer />
    </div>
  );
}