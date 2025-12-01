"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function ContactSection() {
  const [redirectURL, setRedirectURL] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") setRedirectURL(`${window.location.origin}/thank-you`);
  }, []);

  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#00A7B5]/5"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-10 px-4 md:px-10 md:gap-16 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00A7B5]">Contact Us</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Have questions or want to register? Fill the form — we’ll reach you shortly.
            </p>
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#FF8200]" />
                <a href="https://www.google.com/maps/place/OYO+Hotel+Satyam+Swagat/@29.9228372,78.1124992,17z" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#FF8200]">
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

          {/* Right column: Web3Forms form inside gradient card */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-full">
            <div className="rounded-xl p-[2px] bg-gradient-to-r from-[#00A7B5] via-[#5CC6CE] to-[#FF8200]">
              <Card className="w-full shadow-sm rounded-[12px] bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact / Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                    <input type="hidden" name="access_key" value="d8e15609-af66-4bd6-a266-e64ef6a0d449" />
                    <input type="hidden" name="redirect" value={redirectURL || "https://web3forms.com/success"} />
                    <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input name="name" placeholder="Enter your full name" required className="w-full border rounded-md px-3 py-2 bg-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" required className="w-full border rounded-md px-3 py-2 bg-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input name="phone" placeholder="Enter your phone number" required className="w-full border rounded-md px-3 py-2 bg-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Package</label>
                        <select name="package" required className="w-full border rounded-md px-3 py-2 bg-transparent">
                          <option value="">Select a package</option>
                          <option value="kashmir">Kashmir Tour</option>
                          <option value="chardham">Chardham Helicopter Tour</option>
                          <option value="dodham">Do Dham Helicopter Tour</option>
                          <option value="amarnath">Amarnath Helicopter Tour</option>
                          <option value="road-chardham">Road-based Chardham Yatra</option>
                          <option value="leh-ladakh">Leh Ladakh Tour</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Travel Date</label>
                        <input type="date" name="travelDate" min={new Date().toISOString().split("T")[0]} className="w-full border rounded-md px-3 py-2 bg-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Number of People</label>
                        <select name="numberOfPeople" className="w-full border rounded-md px-3 py-2 bg-transparent" defaultValue="1">
                          {[...Array(10)].map((_, i) => (
                            <option key={i+1} value={i+1}>{i+1}</option>
                          ))}
                          <option value="more">More than 10</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Special Requirements</label>
                      <textarea name="specialRequirements" placeholder="Any special requirements or questions?" className="w-full border rounded-md px-3 py-2 bg-transparent resize-none" rows={4} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button type="submit" className="w-full sm:w-auto bg-[#FF8200] hover:bg-[#FF9F1C] text-white">
                        Submit
                      </Button>
                      <Button type="reset" variant="outline" className="w-full sm:w-auto border-[#00A7B5] text-[#00A7B5] hover:bg-[#00A7B5] hover:text-white">
                        Reset
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

