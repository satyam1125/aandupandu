import { Star } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "../../lib/utils"
import { EvervaultCard } from "@/components/ui/evervault-card"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  rating: number
  image?: string
}

export function TestimonialCard({ name, location, quote, rating, image }: TestimonialCardProps) {
  return (
    <EvervaultCard text={name} className="border border-[#B0D8DF] hover:border-[#00A7B5]">
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            {image && (
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#00A7B5]">
                <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
              </div>
            )}
            <div>
              <p className="font-medium text-[#00A7B5]">{name}</p>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn("h-4 w-4", i < rating ? "fill-[#FFCC00] text-[#FFCC00]" : "fill-muted text-muted")}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground italic">"{quote}"</p>
        </CardContent>
      </Card>
    </EvervaultCard>
  )
}

