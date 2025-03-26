"use client"
import React from "react"
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export function MovingBorderButton({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 2000,
  className,
  ...otherProps
}: {
  borderRadius?: string
  children: React.ReactNode
  as?: any
  containerClassName?: string
  borderClassName?: string
  duration?: number
  className?: string
  [key: string]: any
}) {
  const pathRef = React.useRef<any>()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  const centerX = useMotionValue(0)
  const centerY = useMotionValue(0)

  const transformedCenterX = useTransform(() => {
    return mouseX.get() - centerX.get()
  })

  const transformedCenterY = useTransform(() => {
    return mouseY.get() - centerY.get()
  })

  useAnimationFrame(() => {
    if (!pathRef.current) return

    const rect = pathRef.current.getBoundingClientRect()
    const halfWidth = rect.width / 2
    const halfHeight = rect.height / 2

    centerX.set(rect.left + halfWidth)
    centerY.set(rect.top + halfHeight)
  })

  const clipPath = useMotionTemplate`radial-gradient(${duration}px circle at ${transformedCenterX}px ${transformedCenterY}px, white, transparent 80%)`

  return (
    <Component
      className={cn(
        "relative text-xl h-10 rounded-full border border-[#00A7B5] px-4 py-2 font-medium text-[#00A7B5] transition-all hover:text-white hover:bg-[#00A7B5]",
        containerClassName,
        className,
      )}
      style={{
        borderRadius,
      }}
      ref={pathRef}
      {...otherProps}
    >
      <div className="relative z-10">{children}</div>
      <motion.div
        className={cn("absolute inset-0 z-0 opacity-0 transition-all group-hover:opacity-100", borderClassName)}
        style={{
          borderRadius,
          clipPath,
        }}
      />
    </Component>
  )
}

