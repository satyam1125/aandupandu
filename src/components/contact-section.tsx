"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";

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
                <a
                  href="https://www.google.com/maps/place/OYO+Hotel+Satyam+Swagat/@29.9228372,78.1124992,17z/data=!3m1!4b1!4m9!3m8!1s0x390947c2a63dd281:0x7f1c094fea231f6a!5m2!4m1!1i2!8m2!3d29.9228326!4d78.1150741!16s%2Fg%2F11gn263v8g?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#FF8200]"
                >
                  Hotel Satyam Swagat, Uchapul Aryanagar, Jwalapur, Haridwar
                </a>
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
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/1c/82/8a/new-satyam-swagat.jpg?w=2100&h=1300&s=1"
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
  );
}

