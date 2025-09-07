"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  backHref?: string;
  backText?: string;
  showBackButton?: boolean;
}

export default function PageHeader({ 
  title, 
  backHref = "/", 
  backText = "Back to Events",
  showBackButton = true 
}: PageHeaderProps) {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {showBackButton ? (
            <Link href={backHref}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {backText}
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
      </div>
    </div>
  );
}
