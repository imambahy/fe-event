"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  Search,
  Download,
  Filter,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  Loader2
} from "lucide-react";
import { useState } from "react";
import { formatCurrency, formatDate, formatDateTime, formatTime } from "@/lib/utils";

interface Attendee {
  id: number;
  name: string;
  email: string;
  phone?: string;
  ticketType: string;
  quantity: number;
  totalPrice: number;
  purchaseDate: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  checkedIn?: boolean;
  checkInTime?: string;
}

interface AttendeeListProps {
  eventId?: number;
  eventTitle?: string;
  attendees: Attendee[];
  loading?: boolean;
  onExport?: () => void;
  onCheckIn?: (attendeeId: number) => void;
  onSendEmail?: (attendeeId: number) => void;
}

export function AttendeeList({
  eventId,
  eventTitle,
  attendees,
  loading = false,
  onExport,
  onCheckIn,
  onSendEmail
}: AttendeeListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [checkInFilter, setCheckInFilter] = useState<string>("all");

  // Filter attendees based on search and filters
  const filteredAttendees = attendees.filter(attendee => {
    const matchesSearch = attendee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         attendee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         attendee.ticketType.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || attendee.status === statusFilter;
    const matchesCheckIn = checkInFilter === "all" ||
                          (checkInFilter === "checked-in" && attendee.checkedIn) ||
                          (checkInFilter === "not-checked-in" && !attendee.checkedIn);

    return matchesSearch && matchesStatus && matchesCheckIn;
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'confirmed': { variant: 'default' as const, label: 'Confirmed', className: 'bg-green-100 text-green-800' },
      'pending': { variant: 'secondary' as const, label: 'Pending', className: '' },
      'cancelled': { variant: 'destructive' as const, label: 'Cancelled', className: '' },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;

    return (
      <Badge variant={config.variant} className={config.className}>
        {config.label}
      </Badge>
    );
  };


  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Event Attendees
          </CardTitle>
          <CardDescription>
            {eventTitle ? `Attendees for ${eventTitle}` : 'Loading attendee list...'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-3 bg-gray-200 rounded w-48"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Event Attendees
            </CardTitle>
            <CardDescription>
              {eventTitle ? `Attendees for ${eventTitle}` : 'Manage event attendees'}
              {attendees.length > 0 && ` • ${attendees.length} total attendees`}
            </CardDescription>
          </div>
          {onExport && attendees.length > 0 && (
            <Button onClick={onExport} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export List
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search attendees (name, email, ticket type)..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>

          <Select value={checkInFilter} onValueChange={setCheckInFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Check-in" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="checked-in">Checked In</SelectItem>
              <SelectItem value="not-checked-in">Not Checked In</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Attendees Table */}
        {filteredAttendees.length === 0 ? (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {attendees.length === 0 ? 'No attendees yet' : 'No attendees found'}
            </h3>
            <p className="text-gray-600">
              {attendees.length === 0
                ? 'Attendees will appear here once tickets are purchased'
                : 'Try adjusting your search or filter criteria'
              }
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Attendee</TableHead>
                  <TableHead>Ticket Type</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Purchase Date</TableHead>
                  <TableHead>Check-in</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAttendees.map((attendee) => (
                  <TableRow key={attendee.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{attendee.name}</div>
                        <div className="text-sm text-gray-500">{attendee.email}</div>
                        {attendee.phone && (
                          <div className="text-sm text-gray-500 flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {attendee.phone}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{attendee.ticketType}</Badge>
                    </TableCell>
                    <TableCell>{attendee.quantity}</TableCell>
                    <TableCell className="font-medium">
                      {formatCurrency(attendee.totalPrice)}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(attendee.status)}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {formatDate(attendee.purchaseDate)}
                      </div>
                    </TableCell>
                    <TableCell>
                      {attendee.checkedIn ? (
                        <div className="text-green-600">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">Checked in</span>
                          </div>
                          {attendee.checkInTime && (
                            <div className="text-xs text-gray-500 mt-1">
                              {formatTime(attendee.checkInTime)}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <span className="text-sm">Not checked in</span>
                          </div>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {onCheckIn && !attendee.checkedIn && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onCheckIn(attendee.id)}
                          >
                            Check In
                          </Button>
                        )}
                        {onSendEmail && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => onSendEmail(attendee.id)}
                          >
                            <Mail className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Summary Stats */}
        {attendees.length > 0 && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {attendees.length}
                </div>
                <div className="text-sm text-gray-600">Total Attendees</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {attendees.filter(a => a.checkedIn).length}
                </div>
                <div className="text-sm text-gray-600">Checked In</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {formatCurrency(attendees.reduce((sum, a) => sum + a.totalPrice, 0))}
                </div>
                <div className="text-sm text-gray-600">Total Revenue</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {attendees.reduce((sum, a) => sum + a.quantity, 0)}
                </div>
                <div className="text-sm text-gray-600">Tickets Sold</div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
