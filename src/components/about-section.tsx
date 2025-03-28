"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-10 px-4 md:px-10 md:gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00A7B5]">
              <TextGenerateEffect words="About Triloki Group" />
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Triloki Hospitality is a premier travel agency specializing in curated travel packages to the sacred
              Chardham destinations. With years of experience, we provide seamless and comfortable journeys to pilgrims
              seeking spiritual fulfillment.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Our team of experienced professionals ensures that every aspect of your journey is meticulously planned
              and executed, allowing you to focus entirely on your spiritual experience.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-[#FF8200] hover:bg-[#FF9F1C] text-white">
                <Link href="#contact">Contact Us</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-[#00A7B5] text-[#00A7B5] hover:bg-[#00A7B5] hover:text-white"
              >
                <Link href="#packages">View Packages</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start space-y-4"
          >
            <Image
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/1c/82/8a/new-satyam-swagat.jpg?w=2100&h=1300&s=1"
              alt="Triloki Hospitality Office"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-lg"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#FF8200]" />
                <span className="text-sm">Hotel Satyam Swagat, Uchapul Aryanagar, Jwalapur, Haridwar</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#FF8200]" />
                <span className="text-sm">+91-9720340187 / 8445214371</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FF8200]" />
                <span className="text-sm">hospitality.triloki@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#FF8200]" />
                <span className="text-sm">9:00 AM - 6:00 PM (Mon-Sat)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

