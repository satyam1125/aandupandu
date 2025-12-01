"use client";

import { Layout } from "@/components/layout"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, MapPin, CheckCircle2, AlertCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export default function VaishnoDeviHelicopterPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#B0D8DF]/20 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#00A7B5]">
                  Vaishno Devi Helicopter Package
                </h1>
                <p className="text-lg font-medium text-muted-foreground">
                  2 Days / 1 Night · Triloki Divine Journey
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Seamless Katra-to-Katra assistance with priority darshan and comfortable stay.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>2 Days / 1 Night</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>Katra · Sanjichat · Bhawan</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-[#FF8200] hover:bg-[#FF9F1C] text-white">
                  <a href="#booking">
                    Book Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-[#00A7B5] text-[#00A7B5] hover:bg-[#00A7B5] hover:text-white"
                >
                  <a href="#itinerary">View Itinerary</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square"
            >
              <Image
                src="https://images.unsplash.com/photo-1719377678428-d9bcec6976f3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFpc2hubyUyMGRldml8ZW58MHx8MHx8fDA%3D"
                alt="Vaishno Devi Helicopter Darshan"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="text-[#00A7B5]">Overview</TabsTrigger>
              <TabsTrigger value="itinerary" id="itinerary" className="text-[#00A7B5]">Itinerary</TabsTrigger>
              <TabsTrigger value="inclusions" className="text-[#00A7B5]">Inclusions</TabsTrigger>
              <TabsTrigger value="terms" className="text-[#00A7B5]">Terms & Notes</TabsTrigger>
            </TabsList>

            {/* Overview */}
            <TabsContent value="overview" className="mt-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Triloki Divine Journey</h2>
                  <p className="mt-2">
                    A curated 2D/1N Vaishno Devi experience with helicopter transfers, priority darshan support, and a comfortable stay in Katra.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                    <CardHeader><CardTitle className="text-[#00A7B5]">Package Summary</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Duration: 2 Days / 1 Night</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Price: ₹11,999 per person</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Route: Katra → Sanjichat → Bhawan → Katra</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                    <CardHeader><CardTitle className="text-[#00A7B5]">Customization</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Extra night stay</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Upgrade to 4★ / 5★ hotel</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> VIP Darshan add-on</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Private vehicle for Jammu pickup/drop</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Group customization & senior citizen support</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                    <CardHeader><CardTitle className="text-[#00A7B5]">Important Notes</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Helicopter timings subject to weather/ops</li>
                        <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Carry valid ID and booking confirmation</li>
                        <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Light luggage recommended</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            {/* Itinerary */}
            <TabsContent value="itinerary" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Detailed Itinerary</h2>
                </div>

                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="border-l-4 border-[#00A7B5] pl-4">
                    <h3 className="text-xl font-bold">Day 1 – Arrival in Katra</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li><strong>Afternoon (12 PM – 8 PM):</strong> Check-in at 3★ hotel · Rest and prepare for next day’s darshan</li>
                      <li><strong>Night (8 PM – 7 AM):</strong> Dinner at hotel · Overnight stay · Early sleep recommended</li>
                    </ul>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-[#00A7B5] pl-4">
                    <h3 className="text-xl font-bold">Day 2 – Darshan</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li><strong>Morning (5 AM – 6 AM):</strong> Sunrise breakfast · Proceed to Katra Helipad · Fly to Sanjichat</li>
                      <li><strong>Morning–Afternoon (6 AM – 12 PM):</strong> Arrive Sanjichat · 8–10 min walk to Bhawan · Priority darshan assistance · Return to Sanjichat · Helicopter back to Katra · Hotel fresh-up and checkout</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Inclusions */}
            <TabsContent value="inclusions" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                    <CardHeader><CardTitle className="text-[#00A7B5]">Package Includes</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Katra-to-Katra complete assistance</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Helicopter / Electric vehicle services</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Meals at 3★ hotel</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Temple visit guide & on-ground assistance</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Priority darshan assistance</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Price: ₹11,999 per person</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Duration: 2 Days / 1 Night</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                    <CardHeader><CardTitle className="text-[#00A7B5]">Customization Available</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Extra night stay</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Upgrade to 4★ or 5★ hotel</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> VIP Darshan add-on</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Private vehicle for Jammu pickup/drop</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Group package customization</li>
                        <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Senior citizen support add-on</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            {/* Terms */}
            <TabsContent value="terms" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
                <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                  <CardHeader><CardTitle className="text-[#00A7B5]">Important Notes</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Helicopter operations subject to weather and authority guidelines</li>
                      <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Valid ID proof required; keep booking confirmation handy</li>
                      <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Early start advised for smooth darshan</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-[#B0D8DF]/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00A7B5]">
                Book Your Vaishno Devi Helicopter Package
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
                Contact us for booking and customization. Our team will assist you end-to-end.
              </p>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <div className="flex flex-col items-center gap-2 text-center">
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
              className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
            >
              <Link
                href="/packages/contact-book"
                className="px-6 py-3 rounded-md bg-[#FF8200] hover:bg-[#FF9F1C] text-white text-lg font-medium"
              >
                Book Now
              </Link>
              <Link
                href="/packages/contact-book"
                className="px-6 py-3 rounded-md border border-[#00A7B5] text-[#00A7B5] hover:bg-[#00A7B5] hover:text-white text-lg font-medium"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
