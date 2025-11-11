"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  // lock body scroll when menu is open so page is "cut" and can't be scrolled/interacted with
  useEffect(() => {
    if (typeof window === "undefined") return
    const prev = document.body.style.overflow
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = prev || ""
    }
    return () => {
      document.body.style.overflow = prev || ""
    }
  }, [isOpen])

  return (
    <div className="relative">
      {/* Single toggle button (hamburger -> animated X) */}
      <Button
        type="button"
        variant="ghost"
        onClick={toggleMenu}
        onTouchStart={(e) => {
          // ensure touch opens menu immediately on mobile
          e.stopPropagation()
          toggleMenu()
        }}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="p-2"
      >
        {/* moved the .open class to the wrapper below so CSS matches reliably */}
        <span className={`hamburger-btn ${isOpen ? "open" : ""}`} aria-hidden>
          <span className="hamburger-inner">
            <span className="hamburger-line top"></span>
            <span className="hamburger-line middle"></span>
            <span className="hamburger-line bottom"></span>
          </span>
        </span>

        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click-away backdrop (prevents interaction with rest of page) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/25 z-40"
            />

            {/* Panel opens from top-right corner */}
            <motion.div
              initial={{ opacity: 0, y: -6, x: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, x: 8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="absolute top-14 right-4 z-50 w-64 rounded-lg bg-white/95 dark:bg-slate-900/95 shadow-xl p-4"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center mb-4">
                <span className="font-cinzel font-semibold text-base text-[#00A7B5]">Menu</span>
              </div>

              <nav className="flex flex-col space-y-3 text-base">
                <Link href="/" className="block font-medium hover:text-[#FF8200]" onClick={toggleMenu}>Home</Link>
                <Link href="/#packages" className="block font-medium hover:text-[#FF8200]" onClick={toggleMenu}>Packages</Link>
                <Link href="/#features" className="block font-medium hover:text-[#FF8200]" onClick={toggleMenu}>Features</Link>
                <Link href="/#about" className="block font-medium hover:text-[#FF8200]" onClick={toggleMenu}>About Us</Link>
                <Link href="/#contact" className="block font-medium hover:text-[#FF8200]" onClick={toggleMenu}>Contact</Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Local styles to animate hamburger -> X using absolute-centred bars */}
      <style jsx>{`
        .hamburger-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: currentColor;
        }

        .hamburger-inner {
          position: relative;
          width: 22px;
          height: 18px; /* fixed height to center bars perfectly */
          display: inline-block;
        }

        .hamburger-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
          transition: transform 200ms ease, opacity 160ms ease, top 200ms ease, bottom 200ms ease;
        }

        /* Absolute positioning for perfect centering */
        .hamburger-line.top {
          top: 0;
          transform-origin: center;
        }

        .hamburger-line.middle {
          top: 50%;
          transform: translateY(-50%);
        }

        .hamburger-line.bottom {
          bottom: 0;
          transform-origin: center;
        }

        /* Open state: move top & bottom to center and rotate to form an X, hide middle */
        .hamburger-btn.open .hamburger-line.top {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }

        .hamburger-btn.open .hamburger-line.middle {
          opacity: 0;
        }

        .hamburger-btn.open .hamburger-line.bottom {
          bottom: auto;
          top: 50%;
          transform: translateY(-50%) rotate(-45deg);
        }
      `}</style>
    </div>
  )
}

