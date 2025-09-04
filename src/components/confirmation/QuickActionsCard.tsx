"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function QuickActionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Link href="/">
          <Button className="w-full">Browse More Events</Button>
        </Link>
        <Link href="/my-tickets">
          <Button variant="outline" className="w-full">
            View My Tickets
          </Button>
        </Link>
        <Button variant="ghost" className="w-full">
          Share Event
        </Button>
      </CardContent>
    </Card>
  );
}
