"use client";

import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Filter, ChevronDown } from "lucide-react";

interface EventFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  showFilters: boolean;
  onToggleFilters: () => void;
  dateRange: string;
  onDateRangeChange: (date: string) => void;
  priceRange: string;
  onPriceRangeChange: (price: string) => void;
  location: string;
  onLocationChange: (location: string) => void;
  sortBy: string;
  onSortByChange: (sort: string) => void;
}

// MEMOIZED: EventFilters component for better performance
const EventFilters = memo<EventFiltersProps>(({
  categories,
  selectedCategory,
  onCategoryChange,
  showFilters,
  onToggleFilters,
  dateRange,
  onDateRangeChange,
  priceRange,
  onPriceRangeChange,
  location,
  onLocationChange,
  sortBy,
  onSortByChange,
}) => {
  // OPTIMIZED: use useCallback for event handlers
  const handleCategoryChange = useCallback((category: string) => {
    onCategoryChange(category);
  }, [onCategoryChange]);

  const handleToggleFilters = useCallback(() => {
    onToggleFilters();
  }, [onToggleFilters]);

  const handleDateRangeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onDateRangeChange(e.target.value);
  }, [onDateRangeChange]);

  const handlePriceRangeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onPriceRangeChange(e.target.value);
  }, [onPriceRangeChange]);

  const handleLocationChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onLocationChange(e.target.value);
  }, [onLocationChange]);

  const handleSortByChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortByChange(e.target.value);
  }, [onSortByChange]);

  return (
    <section className="bg-white py-6 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === category
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Filter Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={handleToggleFilters}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filters
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                showFilters ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Range
                </label>
                <Input 
                  type="date" 
                  className="w-full" 
                  value={dateRange} 
                  onChange={handleDateRangeChange} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                  value={priceRange} 
                  onChange={handlePriceRangeChange}
                >
                  <option>Any Price</option>
                  <option>Free</option>
                  <option>Under Rp 100.000</option>
                  <option>Rp 100.000 - Rp 500.000</option>
                  <option>Above Rp 500.000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <Input 
                  placeholder="Enter location" 
                  className="w-full" 
                  value={location} 
                  onChange={handleLocationChange} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sort By
                </label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                  value={sortBy} 
                  onChange={handleSortByChange}
                >
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

EventFilters.displayName = "EventFilters";

export default EventFilters;
