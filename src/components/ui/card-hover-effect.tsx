"use client"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#00A7B5]/[0.08] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-[#B0D8DF] group-hover:border-[#00A7B5] relative z-20">
            <div className="relative z-50">
              <div className="p-4">
                <h4 className="text-xl font-bold text-[#00A7B5] tracking-tight">{item.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground tracking-tight">{item.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

