"use client";

import { useState, useMemo } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import AppDashboardHeader from "@/components/shared/AppDashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Users,
  TrendingUp,
  Activity,
  Eye,
  Clock,
  MapPin,
  ChevronRight,
  BarChart3,
  UserCheck,
  CalendarDays,
  DollarSign
} from "lucide-react";


// Mock data - replace with real API calls
const mockStats = {
  year: {
    totalEvents: 48,
    totalAttendees: 2450,
    totalRevenue: 125000000,
    activeEvents: 12
  },
  month: {
    totalEvents: 8,
    totalAttendees: 420,
    totalRevenue: 18500000,
    activeEvents: 5
  },
  day: {
    totalEvents: 2,
    totalAttendees: 85,
    totalRevenue: 3200000,
    activeEvents: 2
  }
};

const mockRecentActivities = [
  {
    id: 1,
    eventTitle: "Tech Conference 2024",
    action: "New registration",
    userName: "Ahmad Rizki",
    timestamp: "2 menit yang lalu",
    type: "registration",
    status: "success"
  },
  {
    id: 2,
    eventTitle: "Music Festival",
    action: "Payment confirmed",
    userName: "Sari Indah",
    timestamp: "5 menit yang lalu",
    type: "payment",
    status: "success"
  },
  {
    id: 3,
    eventTitle: "Workshop Design",
    action: "Event updated",
    userName: "Admin",
    timestamp: "15 menit yang lalu",
    type: "update",
    status: "info"
  },
  {
    id: 4,
    eventTitle: "Business Summit",
    action: "Registration cancelled",
    userName: "Budi Santoso",
    timestamp: "1 jam yang lalu",
    type: "cancellation",
    status: "warning"
  }
];

const mockAttendees = [
  {
    id: 1,
    name: "Ahmad Rizki",
    email: "ahmad.rizki@email.com",
    event: "Tech Conference 2024",
    status: "confirmed",
    registeredAt: "2024-01-15",
    ticketType: "VIP"
  },
  {
    id: 2,
    name: "Sari Indah",
    email: "sari.indah@email.com",
    event: "Music Festival",
    status: "pending",
    registeredAt: "2024-01-14",
    ticketType: "Regular"
  },
  {
    id: 3,
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    event: "Workshop Design",
    status: "confirmed",
    registeredAt: "2024-01-13",
    ticketType: "Early Bird"
  },
  {
    id: 4,
    name: "Maya Putri",
    email: "maya.putri@email.com",
    event: "Business Summit",
    status: "confirmed",
    registeredAt: "2024-01-12",
    ticketType: "Premium"
  }
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [timePeriod, setTimePeriod] = useState<'day' | 'month' | 'year'>('month');
  const { user } = useAuth();

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const currentStats = useMemo(() => {
    return mockStats[timePeriod];
  }, [timePeriod]);

  const getTimePeriodLabel = () => {
    switch (timePeriod) {
      case 'day': return 'Hari Ini';
      case 'month': return 'Bulan Ini';
      case 'year': return 'Tahun Ini';
      default: return 'Bulan Ini';
    }
  };

  const getActivityTypeIcon = (type: string) => {
    switch (type) {
      case 'registration': return <UserCheck className="w-4 h-4" />;
      case 'payment': return <DollarSign className="w-4 h-4" />;
      case 'update': return <Activity className="w-4 h-4" />;
      case 'cancellation': return <Clock className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getActivityStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'info': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAttendeeStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <SidebarProvider
      defaultOpen={sidebarOpen}
      open={sidebarOpen}
      onOpenChange={setSidebarOpen}
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <AppDashboardHeader 
          showUserMenu={true} 
          onSidebarToggle={handleSidebarToggle}
        />
        <div className="flex flex-1 flex-col bg-gray-50">
          <div className="@container/main flex flex-1 flex-col gap-6 py-6">
            
            {/* Header Section */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    Dashboard Overview
                  </h1>
                  <p className="text-gray-600 mt-1">
                    Selamat datang kembali, {user?.name}! Monitor statistik dan aktivitas terbaru.
                  </p>
                </div>
                
                {/* Time Period Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Periode:</span>
                  <Select value={timePeriod} onValueChange={(value) => setTimePeriod(value as 'day' | 'month' | 'year')}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Hari Ini</SelectItem>
                      <SelectItem value="month">Bulan Ini</SelectItem>
                      <SelectItem value="year">Tahun Ini</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Events
                    </CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{currentStats.totalEvents}</div>
                    <p className="text-xs text-muted-foreground">
                      {getTimePeriodLabel()}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Attendees
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{currentStats.totalAttendees.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">
                      {getTimePeriodLabel()}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      Rp {(currentStats.totalRevenue / 1000000).toFixed(1)}M
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {getTimePeriodLabel()}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Events
                    </CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{currentStats.activeEvents}</div>
                    <p className="text-xs text-muted-foreground">
                      Sedang berlangsung
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Recent Activities */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Activity className="w-5 h-5 text-purple-600" />
                          Aktivitas Terbaru
                        </CardTitle>
                        <CardDescription>
                          Update kegiatan dan transaksi terakhir
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockRecentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className={`p-2 rounded-full ${getActivityStatusColor(activity.status)}`}>
                          {getActivityTypeIcon(activity.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {activity.action}
                            </p>
                            <span className="text-xs text-gray-500 ml-2">
                              {activity.timestamp}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">
                            {activity.userName} • {activity.eventTitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Attendee List */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-purple-600" />
                          Daftar Peserta Terbaru
                        </CardTitle>
                        <CardDescription>
                          Peserta yang mendaftar belakangan ini
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockAttendees.map((attendee) => (
                      <div key={attendee.id} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-purple-600">
                            {attendee.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {attendee.name}
                            </p>
                            <Badge className={`text-xs ${getAttendeeStatusColor(attendee.status)}`}>
                              {attendee.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 truncate">
                            {attendee.event}
                          </p>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <CalendarDays className="w-3 h-3 mr-1" />
                            {new Date(attendee.registeredAt).toLocaleDateString('id-ID')}
                            <span className="mx-2">•</span>
                            <span className="font-medium">{attendee.ticketType}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-4 sm:px-6 lg:px-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>
                    Akses cepat ke fitur-fitur utama
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col items-center justify-center space-y-2"
                      onClick={() => window.location.href = '/dashboard/events'}
                    >
                      <Calendar className="w-6 h-6 text-purple-600" />
                      <span className="font-medium">Kelola Events</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col items-center justify-center space-y-2"
                      onClick={() => window.location.href = '/dashboard/transactions'}
                    >
                      <DollarSign className="w-6 h-6 text-green-600" />
                      <span className="font-medium">Lihat Transaksi</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col items-center justify-center space-y-2"
                      onClick={() => window.location.href = '/dashboard/vouchers'}
                    >
                      <Activity className="w-6 h-6 text-blue-600" />
                      <span className="font-medium">Kelola Voucher</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
