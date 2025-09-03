"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HelpSupportCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Need Help?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <p className="text-gray-600">
          If you have any questions about your tickets or the event,
          please contact us:
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">Email:</span>
            <span className="text-blue-600">support@eventify.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Phone:</span>
            <span>+62 21 1234 5678</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
