"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function BackgroundBeams({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }
    }

    const element = ref.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn("h-full w-full overflow-hidden [--x-px:0] [--y-px:0]", className)}
      style={
        {
          "--x-px": `${mousePosition.x}px`,
          "--y-px": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative h-full w-full">
        <div className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[radial-gradient(circle_at_var(--x-px)_var(--y-px),rgba(0,167,181,0.15),transparent_25%)]" />
        <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full bg-[radial-gradient(circle_at_var(--x-px)_var(--y-px),rgba(255,130,0,0.1),transparent_25%)]" />
        <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full bg-[radial-gradient(circle_at_var(--x-px)_var(--y-px),rgba(255,204,0,0.1),transparent_25%)]" />
      </div>
    </div>
  )
}

