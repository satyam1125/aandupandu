"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"

export default function ClientSideBooking({ packageId }: { packageId: string }) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  
  return (
    <>
      <Button
        className="w-full md:w-auto bg-[#FF8200] hover:bg-[#FF9F1C] text-white"
        onClick={() => setBookingModalOpen(true)}
      >
        Book This Package
      </Button>
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} defaultPackage={packageId} />
    </>
  )
}