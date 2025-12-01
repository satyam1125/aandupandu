"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultPackage?: string
}

export function BookingModal({ open, onOpenChange, defaultPackage }: BookingModalProps) {
  const [redirectURL, setRedirectURL] = useState("")
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRedirectURL(`${window.location.origin}/thank-you`)
    }
  }, [])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-[#00A7B5]">Book Your Tour</DialogTitle>
          <DialogDescription className="text-center">
            Fill out the form below to book your spiritual journey with us.
          </DialogDescription>
        </DialogHeader>

        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
          <input type="hidden" name="access_key" value="d8e15609-af66-4bd6-a266-e64ef6a0d449" />
          <input type="hidden" name="redirect" value={redirectURL || "https://web3forms.com/success"} />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input name="name" required placeholder="Enter your full name" className="w-full border rounded-md px-3 py-2 bg-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" required placeholder="Enter your email" className="w-full border rounded-md px-3 py-2 bg-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input name="phone" required placeholder="Enter your phone number" className="w-full border rounded-md px-3 py-2 bg-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Package</label>
              <select name="package" required defaultValue={defaultPackage || ""} className="w-full border rounded-md px-3 py-2 bg-transparent">
                <option value="">Select a package</option>
                <option value="kashmir">Kashmir Tour</option>
                <option value="chardham">Chardham Helicopter Tour</option>
                <option value="dodham">Do Dham Helicopter Tour</option>
                <option value="amarnath">Amarnath Helicopter Tour</option>
                <option value="road-chardham">Road-based Chardham Yatra</option>
                <option value="leh-ladakh">Leh Ladakh Tour</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Travel Date</label>
              <input type="date" name="travelDate" min={new Date().toISOString().split("T")[0]} className="w-full border rounded-md px-3 py-2 bg-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Number of People</label>
              <select name="numberOfPeople" className="w-full border rounded-md px-3 py-2 bg-transparent" defaultValue="1">
                {[...Array(10)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
                <option value="more">More than 10</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Special Requirements</label>
            <textarea name="specialRequirements" placeholder="Any special requirements or questions?" className="w-full border rounded-md px-3 py-2 bg-transparent resize-none" rows={4} />
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button type="submit" className="w-full sm:w-auto bg-[#FF8200] hover:bg-[#FF9F1C] text-white">
              Submit Booking
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}