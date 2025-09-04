import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardDescription className="text-gray-500">Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold text-gray-900 tabular-nums @[250px]/card:text-3xl">
            Rp.1,250.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              <IconTrendingUp />
              9.5%
            </Badge>
          </CardAction>
        </CardHeader>
      </Card>
      <Card className="@container/card bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardDescription className="text-gray-500">Total Events</CardDescription>
          <CardTitle className="text-2xl font-semibold text-gray-900 tabular-nums @[250px]/card:text-3xl">
            5
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              <IconTrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
      </Card>
      <Card className="@container/card bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardDescription className="text-gray-500">Total Tickets</CardDescription>
          <CardTitle className="text-2xl font-semibold text-gray-900 tabular-nums @[250px]/card:text-3xl">
            1,865
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
      </Card>
      <Card className="@container/card bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardDescription className="text-gray-500">Voucher Used</CardDescription>
          <CardTitle className="text-2xl font-semibold text-gray-900 tabular-nums @[250px]/card:text-3xl">
            84
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              <IconTrendingUp />
              +5%
            </Badge>
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  )
}
