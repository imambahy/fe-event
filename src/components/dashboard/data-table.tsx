"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { dummyUsers } from "@/lib/dummy-data"
import { UserRole } from "@/types/auth.type"

interface DataTableProps {
  data?: any[]
}

export function DataTable({ data = dummyUsers }: DataTableProps) {
  const [users, setUsers] = React.useState(data)

  const getRoleBadgeVariant = (role: UserRole) => {
    return role === UserRole.ORGANIZER ? "default" : "secondary"
  }

  const getRoleBadgeClass = (role: UserRole) => {
    return role === UserRole.ORGANIZER 
      ? "bg-purple-100 text-purple-800 border-purple-200" 
      : "bg-blue-100 text-blue-800 border-blue-200"
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Role</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Referral Code</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Points</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Referred By</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Created At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900">{user.id}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.email}</td>
                <td className="px-4 py-3">
                  <Badge 
                    variant={getRoleBadgeVariant(user.role)}
                    className={getRoleBadgeClass(user.role)}
                  >
                    {user.role}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 font-mono">{user.referralCode}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{user.points}</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {user.referredById ? `User ${user.referredById}` : '-'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{formatDate(user.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      
      <div className="mt-4 text-sm text-gray-500">
        Total Users: {users.length}
              </div>
            </div>
  )
}
