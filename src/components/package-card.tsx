import Link from "next/link"
import Image from "next/image"
import { Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PackageCardProps {
  title: string
  description: string
  duration: string
  image: string
  href: string
}

export function PackageCard({ title, description, duration, image, href }: PackageCardProps) {
  

  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg rounded-lg border border-gray-200 p-0 max-w-full">
      {/* Image at the very top, flush with no top padding */}
      <div className="relative h-28 sm:h-32 md:h-40 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Duration Overlay */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-1 text-white text-xs bg-black/50 rounded-full">
          <Clock className="w-3 h-3" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Title / Header */}
      <CardHeader className="p-2 pb-1">
        <CardTitle className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-[#00A7B5] group-hover:text-[#FF8200] transition-colors tracking-widest uppercase drop-shadow-md line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>

      {/* Description / Content */}
      <CardContent className="px-2 pb-1">
        <p className="line-clamp-2 text-xs text-muted-foreground italic font-medium">
          {description}
        </p>
        
      </CardContent>

      {/* Footer / CTA */}
      <CardFooter className="px-2 pb-2">
        <Button asChild className="w-full bg-[#FF8200] hover:bg-[#FF9F1C] text-white text-xs py-1.5">
          <Link href={href}>
            View Details
            <ChevronRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
