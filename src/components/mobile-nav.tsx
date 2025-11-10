"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  }

  return (
    // The root div no longer has responsive classes like `md:hidden`
    <div>
      <Button variant="ghost" onClick={toggleMenu} className="p-2">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open Menu</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-cinzel font-semibold text-xl text-[#00A7B5]">Menu</span>
              <Button variant="ghost" onClick={toggleMenu} className="p-2">
                <X className="h-6 w-6" />
                <span className="sr-only">Close Menu</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-6 text-lg">
              <Link href="/" className="font-medium hover:text-[#FF8200]" onClick={toggleMenu}>Home</Link>
              <Link href="/#packages" className="font-medium hover:text-[#FF8200]" onClick={toggleMenu}>Packages</Link>
              <Link href="/#features" className="font-medium hover:text-[#FF8200]" onClick={toggleMenu}>Features</Link>
              <Link href="/#about" className="font-medium hover:text-[#FF8200]" onClick={toggleMenu}>About Us</Link>
              <Link href="/#contact" className="font-medium hover:text-[#FF8200]" onClick={toggleMenu}>Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

