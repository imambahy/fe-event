"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import AppDashboardHeader from "@/components/shared/AppDashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  DollarSign
} from "lucide-react";
import { useDashboardStats } from "@/hooks/api/useDashboard";

export default function DashboardPage() {
  const { user } = useAuth();

  const [timePeriod, setTimePeriod] = useState<'day' | 'month' | 'year'>('month');

  // Fetch dashboard stats
  const { data: stats } = useDashboardStats();

  const getTimePeriodLabel = () => {
    switch (timePeriod) {
      case 'day': return 'Hari Ini';
      case 'month': return 'Bulan Ini';
      case 'year': return 'Tahun Ini';
      default: return 'Bulan Ini';
    }
  };

  return (
    <>
      <AppDashboardHeader
        showUserMenu={true}
      />
      <div className="flex flex-1 flex-col bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto w-full space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Dashboard Overview
              </h1>
              <p className="text-gray-600 mt-1">
                Welcome back, {user?.name}!
              </p>
            </div>

            {/* Time Period Selector */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Period:</span>
              <Select value={timePeriod} onValueChange={(value) => setTimePeriod(value as 'day' | 'month' | 'year')}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Today</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Events
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats?.totalEvents || 0}</div>
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
                <div className="text-2xl font-bold">{stats?.totalAttendees || 0}</div>
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
                  Rp {(stats?.totalRevenue || 0) / 1000000}M
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
                <div className="text-2xl font-bold">{stats?.activeEvents || 0}</div>
                <p className="text-xs text-muted-foreground">
                  Currently running
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
}