"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white w-[80%] max-w-sm px-6 py-8"
>
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            href="/"
            className="text-lg font-medium transition-colors hover:text-[#FF8200]"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="#packages"
            className="text-lg font-medium transition-colors hover:text-[#FF8200]"
            onClick={handleLinkClick}
          >
            Packages
          </Link>
          <Link
            href="#features"
            className="text-lg font-medium transition-colors hover:text-[#FF8200]"
            onClick={handleLinkClick}
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium transition-colors hover:text-[#FF8200]"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            href="#testimonials"
            className="text-lg font-medium transition-colors hover:text-[#FF8200]"
            onClick={handleLinkClick}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium transition-colors hover:text-[#FF8200]"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
          <Button asChild className="mt-4 bg-[#FF8200] hover:bg-[#FF9F1C] text-white">
            <Link href="/packages/chardham-helicopter-tour" onClick={handleLinkClick}>
              Book Now
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

