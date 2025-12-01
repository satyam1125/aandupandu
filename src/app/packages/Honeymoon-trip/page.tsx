"use client";

import { Layout } from "@/components/layout"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, MapPin, CheckCircle2, AlertCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export default function HoneymoonTripPage() {
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
                  Honeymoon Special Packages
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Kashmir • Manali • Goa — romantic stays, decorated rooms, and curated experiences. Basic and Luxury plans available.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>4 Nights / 5 Days</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>Kashmir / Manali / Goa</span>
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
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop"
                alt="Honeymoon trip"
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
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Romantic Getaways • Kashmir • Manali • Goa</h2>
                  <p className="mt-3">
                    Celebrate your new beginning with thoughtfully designed honeymoon packages. Enjoy decorated rooms on arrival,
                    flexible sightseeing, and end-to-end assistance. Choose your vibe — snowy mountains, pine valleys, or sunny beaches.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Destinations */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                      <CardHeader><CardTitle className="text-[#00A7B5]">Destination Options</CardTitle></CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Kashmir: Srinagar, Gulmarg, Pahalgam, Dal Lake shikara</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Manali: Solang/Atal Tunnel, Hidimba Temple, Mall Road</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Goa: North/South beaches, sunset cruise, forts & cafes</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Romantic Touches */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                      <CardHeader><CardTitle className="text-[#00A7B5]">Romantic Touches</CardTitle></CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Decorated room on arrival (flowers & cake)</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Cozy stays with great views</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Optional candlelight dinner & photoshoot</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Pricing */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                    <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                      <CardHeader><CardTitle className="text-[#00A7B5]">Packages & Pricing</CardTitle></CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Basic Package (3★ hotels): ₹17,000 per person</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Luxury Package (4–5★/Premium): ₹25,000 per person</li>
                          <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Prices vary by destination, dates, and nights</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Itinerary */}
            <TabsContent value="itinerary" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Sample 5D/4N Plan (Customizable)</h2>
                  <p>Pick your destination: Kashmir, Manali, or Goa. We tailor the daily plan to your preferences.</p>
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
                        {day === 1 && "Day 01: Arrival • Decorated Room • Leisure"}
                        {day === 2 && "Day 02: Signature Sightseeing"}
                        {day === 3 && "Day 03: Experiences & Free Time"}
                        {day === 4 && "Day 04: Scenic Day Trip"}
                        {day === 5 && "Day 05: Leisure • Checkout • Departure"}
                      </h3>
                      <ul className="mt-2 space-y-2 text-sm">
                        {day === 1 && (
                          <>
                            <li>Pickup and hotel check-in. Honeymoon room decoration with flowers & cake.</li>
                            <li>Evening: Shikara on Dal Lake (Kashmir) / Mall Road (Manali) / Beach sunset (Goa).</li>
                          </>
                        )}
                        {day === 2 && (
                          <>
                            <li>Kashmir: Mughal Gardens & Pari Mahal • Manali: Hidimba Temple & local markets • Goa: Forts & popular beaches.</li>
                            <li>Optional: Candlelight dinner arrangement.</li>
                          </>
                        )}
                        {day === 3 && (
                          <>
                            <li>Kashmir: Houseboat or local crafts • Manali: Solang Valley/Atal Tunnel • Goa: Old Goa churches & café trail.</li>
                            <li>Free time for couple activities and shopping.</li>
                          </>
                        )}
                        {day === 4 && (
                          <>
                            <li>Full-day scenic excursion: Gulmarg/Pahalgam (Kashmir) • Kullu/Naggar (Manali) • South Goa beaches/sunset cruise.</li>
                            <li>Return to hotel; relaxed evening.</li>
                          </>
                        )}
                        {day === 5 && (
                          <>
                            <li>Breakfast, leisure, hotel checkout.</li>
                            <li>Transfer to airport/railway/bus stand for departure.</li>
                          </>
                        )}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Inclusions */}
            <TabsContent value="inclusions" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#00A7B5]">What’s Included</h2>
                  <p>Both Basic and Luxury packages cover essentials with romantic add-ons.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Included */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                      <CardHeader><CardTitle className="text-[#00A7B5]">Included</CardTitle></CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Airport/stand pickup & drop</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Daily breakfast</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Private sightseeing transfers</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Decorated room on arrival + cake</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Assistance & on-ground support</li>
                          <li className="flex items-start"><CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" /> Basic: 3★ hotels • Luxury: 4–5★/premium stays</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Excluded */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                      <CardHeader><CardTitle className="text-[#00A7B5]">Excluded / Optional</CardTitle></CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Flights/train tickets, entry fees, adventure activities</li>
                          <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Lunch/dinner unless specified; room service</li>
                          <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Candlelight dinner, couple photoshoot (add-on)</li>
                          <li className="flex items-start"><AlertCircle className="mr-2 h-5 w-5 text-amber-500" /> Anything not in “Included”</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Terms */}
            <TabsContent value="terms" className="mt-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Terms & Conditions</h2>
                  <p>Important booking and cancellation policies.</p>
                </div>

                <div className="space-y-6">
                  {["Payment Terms", "Cancellation Policy", "Important Info"].map((term, index) => (
                    <motion.div
                      key={term}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                        <CardHeader><CardTitle className="text-[#00A7B5]">{term}</CardTitle></CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            {term === "Payment Terms" && (
                              <>
                                <li>30% advance to confirm; balance before travel.</li>
                                <li>Peak dates may require full advance.</li>
                              </>
                            )}
                            {term === "Cancellation Policy" && (
                              <>
                                <li>More than 15 days: 25% of package.</li>
                                <li>7–15 days: 50% of package.</li>
                                <li>Less than 7 days/no-show: 100%.</li>
                              </>
                            )}
                            {term === "Important Info" && (
                              <>
                                <li>Prices are per person on twin sharing; subject to availability and season.</li>
                                <li>Itinerary may change due to weather/operations.</li>
                              </>
                            )}
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
                Book Your Honeymoon Trip
              </h2>
              <p className="max-w-[650px] text-muted-foreground md:text-xl/relaxed mx-auto">
                Basic (3★) ₹17,000 per person • Luxury ₹25,000 per person. Share your preferred destination and dates — we’ll customize it for you.
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
