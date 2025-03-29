"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"

const packageData = {
  "chardham-helicopter-tour": {
    id: "chardham",
    title: "Chardham Helicopter Tour",
    description:
      "Experience the divine Chardham Yatra (Yamunotri, Gangotri, Kedarnath & Badrinath) in comfort with our premium helicopter service.",
    duration: "5 Nights / 6 Days",
    image: "/images/4dhamtour.jpg",
    price: "₹1,85,000 per person",
    locations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    highlights: [
      "Visit all four sacred Dhams in a single journey",
      "Luxury accommodations at each destination",
      "Experienced guides for spiritual insights",
      "Priority darshan at all temples",
      "All meals included (vegetarian)",
      "Comfortable helicopter transfers between destinations",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dehradun & Yamunotri",
        description: "Arrive at Dehradun airport, transfer to helipad, fly to Yamunotri, visit temple, overnight stay.",
      },
      {
        day: "Day 2",
        title: "Yamunotri to Gangotri",
        description: "Morning prayers, helicopter transfer to Gangotri, temple visit, overnight stay.",
      },
      {
        day: "Day 3",
        title: "Gangotri to Kedarnath",
        description: "Morning prayers, helicopter transfer to Kedarnath, temple visit, overnight stay.",
      },
      {
        day: "Day 4",
        title: "Kedarnath to Badrinath",
        description: "Morning prayers, helicopter transfer to Badrinath, temple visit, overnight stay.",
      },
      {
        day: "Day 5",
        title: "Badrinath Exploration",
        description: "Full day at Badrinath, visit Mana village, evening aarti, overnight stay.",
      },
      {
        day: "Day 6",
        title: "Return to Dehradun",
        description: "Morning prayers, helicopter transfer to Dehradun, departure.",
      },
    ],
  },
  "do-dham-helicopter-tour": {
    id: "dodham",
    title: "Do Dham Helicopter Tour",
    description:
      "Visit the sacred shrines of Kedarnath and Badrinath with our exclusive helicopter service for a spiritually enriching experience.",
    duration: "3 Nights / 4 Days",
    image: "https://i.pinimg.com/736x/5e/22/98/5e2298868c5b425c71b929d63b7f8509.jpg",
    price: "₹95,000 per person",
    locations: ["Kedarnath", "Badrinath"],
    highlights: [
      "Visit two major Dhams in a single journey",
      "Luxury accommodations at each destination",
      "Experienced guides for spiritual insights",
      "Priority darshan at all temples",
      "All meals included (vegetarian)",
      "Comfortable helicopter transfers between destinations",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dehradun & Transfer to Kedarnath",
        description: "Arrive at Dehradun airport, transfer to helipad, fly to Kedarnath, visit temple, overnight stay.",
      },
      {
        day: "Day 2",
        title: "Kedarnath Exploration",
        description: "Morning prayers, explore surrounding areas, evening aarti, overnight stay.",
      },
      {
        day: "Day 3",
        title: "Kedarnath to Badrinath",
        description: "Morning prayers, helicopter transfer to Badrinath, temple visit, overnight stay.",
      },
      {
        day: "Day 4",
        title: "Return to Dehradun",
        description: "Morning prayers, helicopter transfer to Dehradun, departure.",
      },
    ],
  },
  "kedarnath-helicopter-tour": {
    id: "kedarnath",
    title: "Kedarnath Helicopter Tour",
    description: "Reach the holy shrine of Kedarnath quickly and comfortably with our dedicated helicopter service.",
    duration: "2 Nights / 3 Days",
    image: "https://i.pinimg.com/736x/e1/98/9f/e1989f4fc766b63dbb10f1244f253480.jpg",
    price: "₹55,000 per person",
    locations: ["Kedarnath"],
    highlights: [
      "Quick and comfortable access to Kedarnath",
      "Luxury accommodations",
      "Experienced guides for spiritual insights",
      "Priority darshan at the temple",
      "All meals included (vegetarian)",
      "Comfortable helicopter transfers",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dehradun & Transfer to Kedarnath",
        description: "Arrive at Dehradun airport, transfer to helipad, fly to Kedarnath, visit temple, overnight stay.",
      },
      {
        day: "Day 2",
        title: "Kedarnath Exploration",
        description: "Morning prayers, explore surrounding areas, evening aarti, overnight stay.",
      },
      {
        day: "Day 3",
        title: "Return to Dehradun",
        description: "Morning prayers, helicopter transfer to Dehradun, departure.",
      },
    ],
  },
  "road-chardham-yatra": {
    id: "road-chardham",
    title: "Road-based Chardham Yatra",
    description: "Experience the traditional Chardham Yatra by road, taking in the scenic beauty of the Himalayas.",
    duration: "10 Nights / 11 Days",
    image: "https://i.pinimg.com/736x/0e/3a/17/0e3a17bc32ba490de419a7123b561dc8.jpg",
    price: "₹75,000 per person",
    locations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    highlights: [
      "Visit all four sacred Dhams in a single journey",
      "Comfortable accommodations at each destination",
      "Experienced guides for spiritual insights",
      "Assistance for darshan at all temples",
      "All meals included (vegetarian)",
      "Comfortable road transfers in AC vehicles",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Haridwar",
        description: "Arrive at Haridwar, check-in to hotel, evening Ganga Aarti, overnight stay.",
      },
      {
        day: "Day 2-3",
        title: "Haridwar to Yamunotri",
        description: "Drive to Janki Chatti, trek to Yamunotri, temple visit, overnight stay.",
      },
      {
        day: "Day 4-5",
        title: "Yamunotri to Gangotri",
        description: "Drive to Gangotri, temple visit, overnight stay.",
      },
      {
        day: "Day 6-7",
        title: "Gangotri to Kedarnath",
        description: "Drive to Sonprayag, trek to Kedarnath, temple visit, overnight stay.",
      },
      {
        day: "Day 8-9",
        title: "Kedarnath to Badrinath",
        description: "Trek down from Kedarnath, drive to Badrinath, temple visit, overnight stay.",
      },
      {
        day: "Day 10",
        title: "Badrinath Exploration",
        description: "Full day at Badrinath, visit Mana village, evening aarti, overnight stay.",
      },
      {
        day: "Day 11",
        title: "Return to Haridwar",
        description: "Drive back to Haridwar, departure.",
      },
    ],
  },
}

export default function PackageDetail({ params }: { params: { slug: string } }) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const packageSlug = params.slug
  const packageInfo = packageData[packageSlug as keyof typeof packageData]

  if (!packageInfo) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
        <p className="mb-6">The package you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-[#00A7B5] hover:text-[#FF8200] mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image src={packageInfo.image || "/placeholder.svg"} alt={packageInfo.title} fill className="object-cover" />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#00A7B5]">{packageInfo.title}</h1>

          <div className="flex items-center text-muted-foreground">
            <Clock className="h-5 w-5 text-[#FF8200] mr-2" />
            <span>{packageInfo.duration}</span>
          </div>

          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-5 w-5 text-[#FF8200] mr-2" />
            <span>{packageInfo.locations.join(" • ")}</span>
          </div>

          <div className="flex items-center text-muted-foreground">
            <Users className="h-5 w-5 text-[#FF8200] mr-2" />
            <span>Min 1 person, Max 10 persons</span>
          </div>

          <p className="text-lg">{packageInfo.description}</p>

          <div className="text-2xl font-bold text-[#FF8200]">{packageInfo.price}</div>

          <Button
            className="w-full md:w-auto bg-[#FF8200] hover:bg-[#FF9F1C] text-white"
            onClick={() => setBookingModalOpen(true)}
          >
            Book This Package
          </Button>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#00A7B5]">Highlights</h2>
        <ul className="grid md:grid-cols-2 gap-2">
          {packageInfo.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#FF8200] mr-2">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-[#00A7B5]">Itinerary</h2>
        <div className="space-y-6">
          {packageInfo.itinerary.map((item, index) => (
            <div key={index} className="border-l-2 border-[#00A7B5] pl-4 pb-2">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-[#FF8200] mr-2" />
                <h3 className="text-lg font-semibold">
                  {item.day}: {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} defaultPackage={packageInfo.id} />
    </div>
  )
}

