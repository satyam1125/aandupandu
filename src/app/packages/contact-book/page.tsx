"use client"

import { Layout } from "@/components/layout"
import { MapPin, Phone, Mail } from "lucide-react"
import { RegistrationForm } from "@/components/registration-form"
import { motion } from "framer-motion"

export default function ContactBook() {
  return (
    <Layout>
      <section
        id="booking"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#B0D8DF]/20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 px-4 md:px-10 md:gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00A7B5]">
                Contact us & Book Your Tour
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Fill out the form to register or send an enquiry. <br />
                Our team will contact you with details.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <div className="grid gap-2">
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
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-start space-y-4"
            >
              <RegistrationForm />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

