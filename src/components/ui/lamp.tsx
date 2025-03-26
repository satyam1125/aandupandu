"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        className,
      )}
    >
      <div className="relative z-10 w-full">{children}</div>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[30%] bg-[#FFCC00]/50 rounded-full blur-[80px]"
        animate={{
          x: mousePosition.x * 0.2 - 50,
          y: mousePosition.y * 0.2 - 50,
        }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
      />
    </div>
  )
}

