"use client";

import { Layout } from "@/components/layout"
import Image from "next/image"
import { ChevronRight, Clock, Calendar, MapPin, CheckCircle2, AlertCircle, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RegistrationForm } from "@/components/registration-form"
import { motion } from "framer-motion"

export default function LehladakhtourTourPage() {
  return (
    <Layout>
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
                  Leh ladakh tour package
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explore the breathtaking landscapes of Leh Ladakh with our exclusive tour package, offering adventure and serenity.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>5 Nights / 6 Days</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>Available during Yatra Season (July-August)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>Starts from ladakh</span>
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
                src="https://i.pinimg.com/474x/39/31/f2/3931f2be8a79a86afe47018e7d57c55d.jpg"
                alt="Leh ladakh tour"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="text-[#00A7B5]">Overview</TabsTrigger>
              <TabsTrigger value="itinerary" id="itinerary" className="text-[#00A7B5]">
                Itinerary
              </TabsTrigger>
              <TabsTrigger value="inclusions" className="text-[#00A7B5]">Inclusions</TabsTrigger>
              <TabsTrigger value="terms" className="text-[#00A7B5]">Terms & Conditions</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Amarnath Helicopter Tour – 2 Nights/3 Days</h2>
                  <h3 className="text-xl font-medium text-muted-foreground">
                    Srinagar – Neelgrath – Panchtarni – Amarnath Cave
                  </h3>
                  <p className="mt-4">
                    The Amarnath Yatra is one of the most sacred pilgrimages in Hinduism, taking devotees to the holy cave shrine of Lord Shiva, where the ice lingam forms naturally. Our helicopter service makes this challenging pilgrimage accessible to all devotees, reducing a trek of several days to a comfortable helicopter ride.
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
  <ul className="space-y-2">
    <li className="flex items-start">
      <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
      <span>Helicopter service to Panchtarni helipad</span>
    </li>
    <li className="flex items-start">
      <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
      <span>Luxury accommodation in Srinagar</span>
    </li>
    <li className="flex items-start">
      <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
      <span>Priority darshan at the holy cave</span>
    </li>
    <li className="flex items-start">
      <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
      <span>Experienced guides for the trek from Panchtarni</span>
    </li>
    <li className="flex items-start">
      <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
      <span>All necessary permits and registrations</span>
    </li>
    <li className="flex items-start">
      <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
      <span>Customizable itinerary to suit your needs</span>
    </li>
    <li className="flex items-start">
      <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
      <span>Complimentary airport/railway station transfers</span>
    </li>
    <li className="flex items-start">
      <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
      <span>24/7 on-ground support and emergency assistance</span>
    </li>
    <li className="flex items-start">
      <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
      <span>All meals included during the tour</span>
    </li>
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
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                        <span>Leh – Stay in premium boutique hotels or camps</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                        <span>Nubra Valley – Deluxe camps with attached washrooms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                        <span>Pangong Lake – Lake-view tents or eco-resorts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                        <span>All accommodations with private facilities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                        <span>Vegetarian meals included</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                        <span>24-hour hot water and electricity backup (where available)</span>
                      </li>
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
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Medical fitness certificate is mandatory</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Helicopter operations are subject to weather conditions</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>GST @ 5% on total billing is extra</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="itinerary" className="mt-6">
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="space-y-8"
  >
    <div className="space-y-2">
      <h2 className="text-2xl font-bold text-[#00A7B5]">Tour Itinerary</h2>
      <p>A detailed day-by-day plan of your journey to explore the beauty of Leh Ladakh.</p>
    </div>

    <div className="space-y-6">
      {[1, 2, 3, 4, 5, 6].map((day, index) => (
        <motion.div 
          key={day}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border-l-4 border-[#00A7B5] pl-4"
        >
          <h3 className="text-xl font-bold">
            {day === 1 && "Day 01: Arrival in Leh"}
            {day === 2 && "Day 02: Leh Local Sightseeing"}
            {day === 3 && "Day 03: Leh to Nubra Valley via Khardung La"}
            {day === 4 && "Day 04: Nubra to Pangong Lake via Shyok"}
            {day === 5 && "Day 05: Pangong to Leh via Chang La"}
            {day === 6 && "Day 06: Departure from Leh"}
          </h3>
          <ul className="mt-2 space-y-2">
            {day === 1 && (
              <>
                <li>• Arrival at Leh Airport. Transfer to hotel for check-in.</li>
                <li>• Acclimatization day. Evening visit to Leh Market, Leh Palace & Shanti Stupa.</li>
                <li>• Overnight stay in Leh.</li>
              </>
            )}
            {day === 2 && (
              <>
                <li>• After breakfast, visit Hall of Fame, Gurudwara Pathar Sahib, Magnetic Hill & Sangam Point.</li>
                <li>• Return to hotel. Overnight stay in Leh.</li>
              </>
            )}
            {day === 3 && (
              <>
                <li>• Early morning departure to Nubra Valley via Khardung La (18,380 ft).</li>
                <li>• Visit Diskit Monastery and enjoy a camel ride on Hunder Sand Dunes.</li>
                <li>• Dinner & overnight stay in Nubra.</li>
              </>
            )}
            {day === 4 && (
              <>
                <li>• Post breakfast, depart for Pangong Lake via the scenic Shyok route.</li>
                <li>• Enjoy the mesmerizing views of Pangong Lake.</li>
                <li>• Dinner and overnight stay at camp near Pangong Lake.</li>
              </>
            )}
            {day === 5 && (
              <>
                <li>• After breakfast, return to Leh via Chang La Pass (17,500 ft).</li>
                <li>• Visit Rancho School, Shey & Thiksey Monasteries.</li>
                <li>• Evening at leisure. Overnight stay in Leh.</li>
              </>
            )}
            {day === 6 && (
              <>
                <li>• After breakfast, check out from the hotel and transfer to Leh Airport.</li>
                <li>• Tour concludes with beautiful memories of Ladakh.</li>
              </>
            )}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.div>
</TabsContent>

            <TabsContent value="inclusions" className="mt-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Tour Inclusions</h2>
                  <p>What&#39;s included in your leh ladakh Tour package.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card className="border-[#B0D8DF] hover:border-[#00A7B5]">
                      <CardHeader>
                        <CardTitle className="text-[#00A7B5]">Included in the Package</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Leh Airport Pick up and Drop.</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Welcome drink on arrival.</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>03 Nights accommodation in Leh on double occupancy.</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>01 Night accommodation in Nubra Valley on double occupancy.</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>01 Night accommodation in Pangong Lake on double occupancy.</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>05 Breakfasts & 05 Dinners (Buffet).</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Inner Line Permit for restricted area entry.</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>
                              Non-AC Xylo/Scorpio (for up to 6 pax) or Non-AC Tempo Traveller (more than 6 pax) for the complete tour itinerary.
                            </span>
                          </li>
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
                        <CardTitle className="text-[#00A7B5]">Excluded from the Package</CardTitle>
                      </CardHeader>
                      <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>Airfare / Train tickets.</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>GST (if bill is required).</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>Oxygen cylinder.</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>Entry tickets for Monuments, Monasteries, Museums.</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>Guide charges, camera/video fees.</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>Optional activities like rafting, camel safari etc.</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>Any drinks (alcoholic, aerated, bottled water etc.).</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>Expenses of personal nature (laundry, tips, telephone calls etc.).</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>Extra transport not mentioned in the itinerary.</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>Additional meals or room service orders.</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>Travel/medical insurance.</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>
                          Any cost incurred due to changes in itinerary due to weather, flight delays, natural calamities, strikes, or any force majeure.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                        <span>Anything not mentioned under “Package Inclusions”.</span>
                      </li>
                    </ul>
                  </CardContent>

                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="terms" className="mt-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Terms & Conditions</h2>
                  <p>Important guidelines and policies for your Amarnath Helicopter Tour.</p>
                </div>

                <div className="space-y-6">
                  {["Payment Terms", "Cancellation and Refund Policy", "Health Requirements", "Important Information"].map((term, index) => (
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
                          <ul className="space-y-2">
                            {term === "Payment Terms" && (
                              <>
                                <li>• 50% of the tour package shall be paid in advance to confirm the booking.</li>
                                <li>• Remaining 50% to be paid 30 days prior to the date of travel.</li>
                                <li>• For bookings made within 30 days of travel, 100% payment is required at the time of booking.</li>
                                <li>• All payments to be made by bank transfer or online payment.</li>
                              </>
                            )}
                            {term === "Cancellation and Refund Policy" && (
                              <>
                                <li>• Cancellation more than 30 days before travel: 25% of the total tour cost.</li>
                                <li>• Cancellation between 15-30 days before travel: 50% of the total tour cost.</li>
                                <li>• Cancellation between 7-14 days before travel: 75% of the total tour cost.</li>
                                <li>• Cancellation less than 7 days before travel or no-show: 100% of the total tour cost.</li>
                                <li>• In case of cancellation due to bad weather or natural calamities, we will reschedule the tour or provide a refund after deducting 10% service charges.</li>
                              </>
                            )}
                            {term === "Health Requirements" && (
                              <>
                                <li>• A medical fitness certificate is mandatory for all pilgrims.</li>
                                <li>• Persons with heart ailments, high blood pressure, asthma, or pregnant women are advised not to undertake this pilgrimage.</li>
                                <li>• The minimum age for the yatra is 13 years and maximum is 75 years.</li>
                                <li>• Pilgrims are advised to carry personal medications and warm clothing.</li>
                              </>
                            )}
                            {term === "Important Information" && (
                              <>
                                <li>• Helicopter operations are subject to weather conditions and DGCA guidelines.</li>
                                <li>• The helicopter service operates only during daylight hours.</li>
                                <li>• Each passenger is allowed to carry only 5 kg of luggage.</li>
                                <li>• The company reserves the right to change the itinerary due to unforeseen circumstances.</li>
                                <li>• Yatra registration is mandatory and will be arranged by us.</li>
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

      <section
  id="booking"
  className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-[#B0D8DF]/20"
>
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-3xl mx-auto text-center space-y-6">

      {/* Title + Description */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00A7B5]">
          Book Your Leh Ladakh Tour
        </h2>

        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
          Fill out the form to register for the Leh Ladakh Tour. Our team will get in touch
          with you to confirm your booking and provide further details.
        </p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-2"
      >
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
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
      >
        <a
          href="/packages/contact-book"
          className="px-6 py-3 rounded-md bg-[#FF8200] hover:bg-[#FF9F1C] text-white text-lg font-medium"
        >
          Book Now
        </a>

        <a
          href="/packages/contact-book"
          className="px-6 py-3 rounded-md border border-[#00A7B5] text-[#00A7B5] hover:bg-[#00A7B5] hover:text-white text-lg font-medium"
        >
          Contact Us
        </a>
      </motion.div>

    </div>
  </div>
</section>

    </Layout>
  )
}
