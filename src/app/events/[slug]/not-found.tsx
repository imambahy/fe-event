import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Home } from "lucide-react";

export default function EventNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-gray-400 mb-4">
          <Search className="w-16 h-16 mx-auto" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Event Not Found
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          The event you're looking for doesn't exist or has been removed. 
          Please check the URL or browse our available events.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Browse Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
