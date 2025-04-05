import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import packagesData from "@/app/data/packages.json"
import ClientSideBooking from "./client-booking"

// Define the type for the params prop
interface PackageDetailParams {
  params: Promise<{
    slug: string
  }>
}

interface PackageItinerary {
  day: string
  title: string
  description: string
}

interface PackageDetails {
  id: string
  title: string
  description: string
  duration: string
  image: string
  price: string
  locations: string[]
  highlights: string[]
  itinerary: PackageItinerary[]
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return Object.keys(packagesData.packages).map((slug) => ({
    slug,
  }))
}

export default async function PackageDetail({ params }: PackageDetailParams) {
  const resolvedParams = await params; // Resolve the promise
  const packageInfo = (packagesData.packages as Record<string, PackageDetails>)[resolvedParams.slug]

  if (!packageInfo) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
        <p className="mb-6">The package you&apos;re looking for doesn&apos;t exist.</p>
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
          <Image
            src={packageInfo.image}
            alt={packageInfo.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
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

          <ClientSideBooking packageId={packageInfo.id} />
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
    </div>
  )
}