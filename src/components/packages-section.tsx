"use client"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { SparklesCore } from "@/components/ui/sparkles"
import { PackageCard } from "@/components/package-card"
import { motion } from "framer-motion"

interface PackageItem {
  title: string
  description: string
  duration: string
  image: string
  href: string
}

interface PackagesSectionProps {
  packageItems: PackageItem[]
}

export function PackagesSection({ packageItems }: PackagesSectionProps) {
  return (
    <section id="packages" className="py-12 md:py-24 lg:py-32 relative">
      <BackgroundBeams className="opacity-20" />
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <SparklesCore
                  id="tsparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFCC00"
                />
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00A7B5] relative z-10"
              >
                Our Travel Packages
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Discover our curated travel experiences designed to provide you with unforgettable journeys.
            </motion.p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 py-12 w-full">
          {packageItems.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <PackageCard
                title={pkg.title}
                description={pkg.description}
                duration={pkg.duration}
                image={pkg.image}
                href={pkg.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

