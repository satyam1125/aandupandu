"use client"
import type React from "react"
import { cn } from "@/lib/utils"

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-[22px] z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500",
          " bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#00A7B5] via-[#FFCC00] to-[#FF8200]",
        )}
        style={{
          background:
            "linear-gradient(to right, rgb(0, 167, 181), rgb(255, 204, 0), rgb(255, 130, 0), rgb(0, 167, 181))",
          backgroundSize: animate ? "200% 200%" : "100% 100%",
          animation: animate ? "gradient-animation 8s ease infinite" : "none",
        }}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-[22px] z-[1]",
          "bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#00A7B5] via-[#FFCC00] to-[#FF8200]",
        )}
        style={{
          background:
            "linear-gradient(to right, rgb(0, 167, 181), rgb(255, 204, 0), rgb(255, 130, 0), rgb(0, 167, 181))",
          backgroundSize: animate ? "200% 200%" : "100% 100%",
          animation: animate ? "gradient-animation 8s ease infinite" : "none",
        }}
      />

      <div className={cn("relative z-[2]", className)}>{children}</div>
    </div>
  )
}

