"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function HeroSection({ searchQuery, onSearchChange }: HeroSectionProps) {
  // Remove local state and debounce - let parent handle it

  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Amazing Events
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-purple-100">
          Find and book the best events in your area
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search events, locations, or categories..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg bg-white text-gray-900 placeholder-gray-500 border-0 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
