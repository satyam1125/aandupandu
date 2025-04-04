"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number
    name: string
    designation: string
    image: string
  }[]
}) => {
  return (
    <div className="flex flex-row items-center justify-center">
      {items.map((item) => (
        <AnimatedTooltipItem key={item.id} item={item} />
      ))}
    </div>
  )
}

const AnimatedTooltipItem = ({
  item,
}: {
  item: {
    id: number
    name: string
    designation: string
    image: string
  }
}) => {
  const [hovering, setHovering] = useState(false)

  return (
    <div className="group relative" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <div className="flex items-center justify-center">
        <motion.div
          className="absolute z-10 flex items-center justify-center opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={hovering ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.6 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute -bottom-1 h-3 w-3 rotate-45 bg-white" />
          <div className="flex flex-col items-center justify-center rounded-md bg-white p-2 shadow-xl">
            <p className="text-xs font-bold text-[#00A7B5]">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.designation}</p>
          </div>
        </motion.div>
        <motion.div
          className="relative h-8 w-8 rounded-full border-2 border-white bg-white"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            height={36}
            width={36}
            className="h-full w-full rounded-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}

