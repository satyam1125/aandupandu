"use client"

import { useEffect, useState } from "react"
import { databases, DATABASE_ID, BOOKINGS_COLLECTION_ID } from "@/lib/appwrite"
import { Query } from "appwrite"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, MapPin, Phone, Mail, Users } from "lucide-react"
import { format } from "date-fns"

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await databases.listDocuments(DATABASE_ID, BOOKINGS_COLLECTION_ID, [
          Query.orderDesc("createdAt"),
        ])
        setBookings(response.documents)
      } catch (err) {
        console.error("Error fetching bookings:", err)
        setError("Failed to load bookings. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPackageName = (packageId: string) => {
    switch (packageId) {
      case "chardham":
        return "Chardham Helicopter Tour"
      case "dodham":
        return "Do Dham Helicopter Tour"
      case "kedarnath":
        return "Kedarnath Helicopter Tour"
      case "road-chardham":
        return "Road-based Chardham Yatra"
      default:
        return packageId
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="text-center">
          <Clock className="h-10 w-10 animate-spin mx-auto text-[#00A7B5]" />
          <p className="mt-4">Loading bookings...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-red-50 p-4 rounded-md">
          <p className="text-red-800">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-[#00A7B5]">Booking Management</h1>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Bookings</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-6">
            {bookings.length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">No bookings found.</p>
            ) : (
              bookings.map((booking) => <BookingCard key={booking.$id} booking={booking} />)
            )}
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <div className="grid gap-6">
            {bookings.filter((b) => b.status === "pending").length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">No pending bookings found.</p>
            ) : (
              bookings
                .filter((b) => b.status === "pending")
                .map((booking) => <BookingCard key={booking.$id} booking={booking} />)
            )}
          </div>
        </TabsContent>

        <TabsContent value="confirmed">
          <div className="grid gap-6">
            {bookings.filter((b) => b.status === "confirmed").length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">No confirmed bookings found.</p>
            ) : (
              bookings
                .filter((b) => b.status === "confirmed")
                .map((booking) => <BookingCard key={booking.$id} booking={booking} />)
            )}
          </div>
        </TabsContent>

        <TabsContent value="cancelled">
          <div className="grid gap-6">
            {bookings.filter((b) => b.status === "cancelled").length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">No cancelled bookings found.</p>
            ) : (
              bookings
                .filter((b) => b.status === "cancelled")
                .map((booking) => <BookingCard key={booking.$id} booking={booking} />)
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )

  function BookingCard({ booking }: { booking: any }) {
    return (
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{booking.name}</CardTitle>
              <CardDescription>Booking ID: {booking.$id.substring(0, 8)}</CardDescription>
            </div>
            <Badge className={getStatusColor(booking.status)}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-[#FF8200]" />
                <span>{getPackageName(booking.package)}</span>
              </div>
              <div className="flex items-center text-sm">
                <CalendarIcon className="h-4 w-4 mr-2 text-[#FF8200]" />
                <span>Travel Date: {format(new Date(booking.travelDate), "PPP")}</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 mr-2 text-[#FF8200]" />
                <span>Number of People: {booking.numberOfPeople}</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 text-[#FF8200]" />
                <span>Booked on: {format(new Date(booking.createdAt), "PPP")}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-[#FF8200]" />
                <span>{booking.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-[#FF8200]" />
                <span>{booking.phone}</span>
              </div>
              {booking.specialRequirements && (
                <div className="mt-2">
                  <p className="text-sm font-medium">Special Requirements:</p>
                  <p className="text-sm text-muted-foreground">{booking.specialRequirements}</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
}

