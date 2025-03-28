"use client"

import Image from "next/image"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#00A7B5]/5"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-10 px-4 md:px-10 md:gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00A7B5]">Contact Us</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Have questions about our travel packages? Get in touch with us, and our team will be happy to assist you.
            </p>
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#FF8200]" />
                <span>Hotel Satyam Swagat, Uchapul Aryanagar, Jwalapur, Haridwar</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#FF8200]" />
                <span>+91-9720340187 / 8445214371</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FF8200]" />
                <span>hospitality.triloki@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#FF8200]" />
                <span>Monday to Saturday: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="mt-8">
              <Image
                src="https://images.unsplash.com/photo-1626015788586-cea86872edc6?q=80&w=1974&auto=format&fit=crop"
                alt="Triloki Hospitality Office"
                width={500}
                height={300}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start space-y-4"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

