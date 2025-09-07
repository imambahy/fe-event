"use client";

import { memo, useCallback } from "react";
import { Badge } from "@/components/ui/badge";

interface EventFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

// Simplified EventFilters component - only categories
const EventFilters = memo(function EventFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: EventFiltersProps) {
  // OPTIMIZED: Memoize event handlers untuk mencegah re-creation
  const handleCategoryClick = useCallback((category: string) => {
    onCategoryChange(category);
  }, [onCategoryChange]);

  return (
    <section className="bg-white py-6 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Category Filters Only */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              className={`cursor-pointer transition-colors ${
                selectedCategory === category
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
});

export default EventFilters;
