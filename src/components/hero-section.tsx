import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export function HeroSection() {
  const words = [
    {
      text: "Discover",
      className: "text-[#FF8200]",
    },
    {
      text: "India's",
      className: "text-[#FF8200]",
    },
    {
      text: "Spiritual",
      className: "text-[#FF8200]",
    },
    {
      text: "Heartlands",
      className: "text-[#FF8200]",
    },
    {
      text: "with",
      className: "text-[#FF8200]",
    },
    {
      text: "Ease",
      className: "text-[#FF8200]",
    },
    {
      text: "and",
      className: "text-[#FF8200]",
    },
    {
      text: "Grace",
      className: "text-[#FF8200]",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#B0D8DF]/30 via-white to-[#FFCC00]/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/736x/3f/72/36/3f7236f7cb5deb545e24bd65eb307438.jpg"
          alt="Chardham Background"
          fill
          className="object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="py-4">
                <TypewriterEffect
                  words={words}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                />
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We guide travelers through India`s sacred landscapes — where mountains, temples, and ancient traditions meet. This journey is more than travel; it`s a calling.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row items-start">
              <Button
                size="lg"
                asChild
                className="bg-[#00A7B5] hover:bg-[#00A7B5]/90 text-white"
              >
                <Link href="/packages/srinagar-tour" className="inline-flex items-center">
                  Book Kashmir Tour
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-[#00A7B5] text-[#00A7B5] hover:bg-[#00A7B5] hover:text-white"
              >
                <Link href="#packages">Explore Packages</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
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
          <div className="relative aspect-video overflow-hidden rounded-xl w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A7B5]/20 to-[#FF8200]/20 rounded-xl"></div>
            <video 
              src="/images/kashmir.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

