"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const EvervaultCard = ({
  text,
  className,
  children,
}: {
  text?: string
  className?: string
  children?: React.ReactNode
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [mouseEntered, setMouseEntered] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left - width / 2) / 25
      const y = (e.clientY - top - height / 2) / 25
      setRotateX(-y)
      setRotateY(x)
    }

    const handleMouseEnter = () => {
      setMouseEntered(true)
    }

    const handleMouseLeave = () => {
      setMouseEntered(false)
      setRotateX(0)
      setRotateY(0)
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "evervault-card-container relative h-full w-full rounded-xl transition duration-300 ease-out",
        className,
      )}
    >
      <div
        ref={cardRef}
        style={{
          transform: mouseEntered
            ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: mouseEntered ? "none" : "all 0.5s ease",
        }}
        className="evervault-card relative h-full w-full rounded-xl"
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-transparent">
          {children}
        </div>
      </div>
    </div>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}

