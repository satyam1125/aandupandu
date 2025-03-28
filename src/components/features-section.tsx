"use client"

import type React from "react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { motion } from "framer-motion"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

interface FeaturesSectionProps {
  features: Feature[]
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#B0D8DF]/20 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00A7B5]"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Experience the perfect blend of spirituality and comfort with our premium services.
            </motion.p>
          </div>
        </div>
        <BentoGrid className="max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <BentoGridItem
                title={feature.title}
                description={feature.description}
                header={feature.icon}
                className="border-[#B0D8DF] hover:border-[#00A7B5]"
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

