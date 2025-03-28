"use client"

import { LampContainer } from "@/components/ui/lamp"
import { TestimonialCard } from "@/components/testimonial-card"
import { motion } from "framer-motion"

interface Testimonial {
  name: string
  location: string
  quote: string
  rating: number
  image: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <LampContainer className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div id="testimonials" className="flex flex-col items-center justify-center space-y-4 text-center mb-20">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00A7B5]"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Hear from our satisfied customers about their experiences with Triloki Hospitality.
            </motion.p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                name={testimonial.name}
                location={testimonial.location}
                quote={testimonial.quote}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </LampContainer>
  )
}

