"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { motion } from "framer-motion"
import { BookingModal } from "@/components/booking-modal"

export function Header() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-22 items-center justify-between px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/T_logo.png"
              alt="Triloki Hospitality Logo"
              width={60}
              height={60}
              className="rounded-full bg-[#00A7B5] object-cover"
            />
            <span className="hidden font-bold text-[#00A7B5] text-2xl sm:inline-block">Triloki Group Tours And Travels</span>
          </Link>
        </motion.div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-[#FF8200]">
            Home
          </Link>
          <Link href="/#packages" className="text-sm font-medium transition-colors hover:text-[#FF8200]">
            Packages
          </Link>
          <Link href="/#features" className="text-sm font-medium transition-colors hover:text-[#FF8200]">
            Features
          </Link>
          <Link href="/#about" className="text-sm font-medium transition-colors hover:text-[#FF8200]">
            About Us
          </Link>
          {/* <Link href="/#testimonials" className="text-sm font-medium transition-colors hover:text-[#FF8200]">
            Testimonials
          </Link> */}
          {/* <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-[#FF8200]">
            Contact
          </Link> */}
        </nav>
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:flex border-[#00A7B5] text-[#00A7B5] hover:bg-[#00A7B5] hover:text-white"
          >
            <Link href="#contact">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
          <Button
            size="sm"
            className="bg-[#FF8200] hover:bg-[#FF9F1C] text-white"
            onClick={() => setBookingModalOpen(true)}
          >
            Book Now
          </Button>
          <MobileNav />
        </div>
      </div>

      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </header>
  )
}

