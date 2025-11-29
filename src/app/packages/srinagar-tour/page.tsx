"use client"

import Link from "next/link"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Phone, CheckCircle2, AlertCircle, ChevronRight, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function SrinagarTourPage() {
  return (
    <Layout>
      {/* Hero Section */}
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none text-[#00A7B5]">
                  Kashmir Valley Escape
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Experience the serene beauty of Srinagar with houseboat stays, Mughal gardens, and Dal Lake exploration.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>4–6 Nights / 5–7 Days</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>Srinagar, Kashmir</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>All Group Sizes</span>
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

            {/* Right: Hero Video */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A7B5]/20 to-[#FF8200]/20 rounded-xl"></div>
              <video 
                src="/images/kashmir.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="text-[#00A7B5]">Overview</TabsTrigger>
              <TabsTrigger value="itinerary" id="itinerary" className="text-[#00A7B5]">Itinerary</TabsTrigger>
              <TabsTrigger value="inclusions" className="text-[#00A7B5]">Inclusions</TabsTrigger>
              <TabsTrigger value="terms" className="text-[#00A7B5]">Terms & Conditions</TabsTrigger>
            </TabsList>

            {/* Overview */}
            <TabsContent value="overview" className="mt-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Srinagar/Kashmir Tour Overview</h2>
                  <h3 className="text-xl font-medium text-muted-foreground">
                    Srinagar – Dal Lake – Mughal Gardens – Gulmarg – Sonmarg/Pahalgam
                  </h3>
                  <p className="mt-4">
                    Discover Kashmir’s tranquil charm — from shikara rides on Dal Lake and lush Mughal gardens to alpine meadows in Gulmarg and scenic valleys in Sonmarg or Pahalgam. Houseboat stays and curated sightseeing deliver a balanced, soulful experience.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                      <CardHeader>
                        <CardTitle className="text-[#00A7B5]">Package Highlights</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Dal Lake shikara ride & houseboat stay</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Mughal Gardens: Shalimar, Nishat, Chashme Shahi</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Gulmarg day trip with optional Gondola</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Sonmarg or Pahalgam scenic valley excursion</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                      <CardHeader>
                        <CardTitle className="text-[#00A7B5]">Accommodations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> 3–5 star hotels in Srinagar</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> 1 night houseboat stay (deluxe)</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Daily breakfast</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Clean, comfortable rooms</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                      <CardHeader>
                        <CardTitle className="text-[#00A7B5]">Important Notes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Weather may affect day trips (Gulmarg/Sonmarg)</li>
                          <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Gondola tickets are optional & subject to availability</li>
                          <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Peak-season surcharges may apply</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Itinerary */}
            <TabsContent value="itinerary" className="mt-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Tour Itinerary</h2>
                  <p>A balanced day-by-day plan for Srinagar and nearby highlights.</p>
                </div>

                <div className="space-y-6">
                  {[1, 2, 3, 4, 5].map((day, index) => (
                    <motion.div 
                      key={day}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-l-4 border-[#00A7B5] pl-4"
                    >
                      <h3 className="text-xl font-bold">
                        {day === 1 && "Day 01: Arrival • Houseboat • Shikara"}
                        {day === 2 && "Day 02: Mughal Gardens • Pari Mahal • Temple"}
                        {day === 3 && "Day 03: Gulmarg Day Trip • Gondola (Optional)"}
                        {day === 4 && "Day 04: Sonmarg or Pahalgam Excursion"}
                        {day === 5 && "Day 05: Departure"}
                      </h3>
                      <ul className="mt-2 space-y-2 text-sm">
                        {day === 1 && (<><li>Airport pickup and houseboat check-in</li><li>Evening shikara ride on Dal Lake</li></>)}
                        {day === 2 && (<><li>Visit Shalimar, Nishat, Chashme Shahi</li><li>Pari Mahal viewpoints and local temple</li></>)}
                        {day === 3 && (<><li>Drive to Gulmarg</li><li>Optional Gondola ride if weather permits</li></>)}
                        {day === 4 && (<><li>Choice of Sonmarg (glacier) or Pahalgam (valleys)</li><li>Local sightseeing & markets</li></>)}
                        {day === 5 && (<><li>Breakfast and airport transfer</li></>)}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Inclusions */}
            <TabsContent value="inclusions" className="mt-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Tour Inclusions</h2>
                  <p>What’s included in your Srinagar/Kashmir package.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                      <CardHeader>
                        <CardTitle className="text-[#00A7B5]">Included</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> 4–6 nights accommodation</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> 1 night deluxe houseboat</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Daily breakfast</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Transfers & sightseeing as per itinerary</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Shikara ride</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                      <CardHeader>
                        <CardTitle className="text-[#00A7B5]">Excluded</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Gondola tickets, entrance fees (where applicable)</li>
                          <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Lunch, dinners, personal expenses</li>
                          <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Anything not mentioned in inclusions</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Terms */}
            <TabsContent value="terms" className="mt-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Terms & Conditions</h2>
                  <p>Important guidelines and policies.</p>
                </div>

                <div className="space-y-6">
                  {["Payment Terms", "Cancellation and Refund Policy", "Weather & Local Conditions"].map((term, index) => (
                    <motion.div 
                      key={term}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                        <CardHeader>
                          <CardTitle className="text-[#00A7B5]">{term}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li>30% advance to confirm booking; balance 15 days prior.</li>
                            <li>Refunds subject to timing and provider policies.</li>
                            <li>Itinerary may adjust for weather or operational reasons.</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section
        id="booking"
        className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-[#B0D8DF]/20"
      >
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
                Book Your Kashmir Tour
              </h2>

              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
                Fill out the form to register your interest. Our team will contact you with details.
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
              className="flex flex-col items-center space-y-4"
            >
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
