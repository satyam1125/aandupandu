import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MovingBorderButton } from "@/components/ui/moving-border"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export function HeroSection() {
  const words = [
    {
      text: "Experience",
      className: "text-[#FF8200]",
    },
    {
      text: "the",
      className: "text-[#FF8200]",
    },
    {
      text: "Divine",
      className: "text-[#FF8200]",
    },
    {
      text: "Chardham",
      className: "text-[#FF8200]",
    },
    {
      text: "Yatra",
      className: "text-[#FF8200]",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#B0D8DF]/30 via-white to-[#FFCC00]/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/1200x/15/9d/df/159ddfefceff6438714f2af232c2716a.jpg"
          alt="Chardham Background"
          fill
          className="object-cover opacity-10"
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="py-4">
                <TypewriterEffect
                  words={words}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                />
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Embark on a spiritual journey to the sacred Chardham destinations with our premium helicopter services.
                Visit Yamunotri, Gangotri, Kedarnath, and Badrinath with ease and comfort.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              
<div className="flex justify-center">
  <Link
    href="/packages/chardham-helicopter-tour"
    className="flex items-center justify-center w-full max-w-xs px-5 py-2 bg-blue-500 text-white rounded-md"
  >
    Book Chardham Tour
    <ChevronRight className="ml-2 h-4 w-4 inline" />
  </Link>
</div>

              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-[#00A7B5] text-[#00A7B5] hover:bg-[#00A7B5] hover:text-white"
              >
                <Link href="#packages">Explore Packages</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <span className="font-medium text-[#FF8200]">100+</span>
                <span className="text-muted-foreground">Tours Completed</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-medium text-[#FF8200]">500+</span>
                <span className="text-muted-foreground">Happy Pilgrims</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-medium text-[#FF8200]">10+</span>
                <span className="text-muted-foreground">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A7B5]/20 to-[#FF8200]/20 rounded-xl"></div>
            <video 
              src="/images/chardham.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

