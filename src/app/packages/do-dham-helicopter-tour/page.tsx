"use client";

import { Layout } from "@/components/layout"
import Image from "next/image"
import { ChevronRight, Clock, Calendar, MapPin, CheckCircle2, AlertCircle, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RegistrationForm } from "@/components/registration-form"
import { motion } from "framer-motion"

export default function DoDhamHelicopterTourPage() {
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
                  Do Dham Helicopter Tour
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Visit the sacred shrines of Kedarnath and Badrinath with our exclusive helicopter service for a spiritually enriching experience.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>3 Nights / 4 Days</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>Available May to October</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>Starts from Dehradun</span>
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
                src="https://i.pinimg.com/736x/5e/22/98/5e2298868c5b425c71b929d63b7f8509.jpg"
                alt="Do Dham Helicopter Tour"
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
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Do Dham Helicopter Tour – 3 Nights/4 Days</h2>
                  <h3 className="text-xl font-medium text-muted-foreground">
                    Kedarnath – Badrinath
                  </h3>
                  <p className="mt-4">
                    The Do Dham Yatra by helicopter offers a convenient and time-saving way to visit the sacred shrines of Kedarnath and Badrinath. These two temples are among the most revered in Hinduism, dedicated to Lord Shiva and Lord Vishnu respectively. Our premium helicopter service makes this pilgrimage accessible to devotees of all ages.
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
                            <span>Helicopter service to both Kedarnath and Badrinath</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Comfortable accommodations at all locations</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Priority darshan at both temples</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Rudra Abhishek Puja at Kedarnath</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Guided local sightseeing</span>
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
                            <span>Dehradun – Fairfeild By Marriot or similar</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Kedarnath – Kabra Bhawan or similar</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Badrinath – Hotel Snow Crest or similar</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>All accommodations with vegetarian meals</span>
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
                            <span>Maha Abhishek puja at Badrinath is not included</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Accommodations at Kedarnath are of basic budget categories</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Temperature at Kedarnath might drop to sub-zero during the night</span>
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
                  <p>A detailed day-by-day plan of your spiritual journey to Kedarnath and Badrinath.</p>
                </div>

                <div className="space-y-6">
                  {[1, 2, 3, 4].map((day, index) => (
                    <motion.div 
                      key={day}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-l-4 border-[#00A7B5] pl-4"
                    >
                      <h3 className="text-xl font-bold">
                        {day === 1 && "Day 01: Arrival in Dehradun"}
                        {day === 2 && "Day 02: Dehradun – Phata – Kedarnath"}
                        {day === 3 && "Day 03: Kedarnath – Badrinath"}
                        {day === 4 && "Day 04: Badrinath – Dehradun"}
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {day === 1 && (
                          <>
                            <li>• Arrive at Dehradun Airport/Railway Station where our representative will meet you.</li>
                            <li>• Transfer to your hotel for check-in and rest.</li>
                            <li>• Evening briefing about the Do Dham Yatra and helicopter procedures.</li>
                            <li>• Dinner and overnight stay in Dehradun.</li>
                          </>
                        )}
                        {day === 2 && (
                          <>
                            <li>• Early morning check-out from the hotel (around 5:00 AM).</li>
                            <li>• Transfer to Sahastradhara Helipad in Dehradun.</li>
                            <li>• Fly to Phata helipad and then to Kedarnath (flight time approximately 45 minutes).</li>
                            <li>• Check-in at your hotel in Kedarnath.</li>
                            <li>• Visit Kedarnath Temple for darshan of Lord Shiva.</li>
                            <li>• Evening free for personal activities or optional visit to Bhairav Temple.</li>
                            <li>• Dinner and overnight stay in Kedarnath.</li>
                          </>
                        )}
                        {day === 3 && (
                          <>
                            <li>• Early morning Rudra Abhishek Puja at Kedarnath Temple (subject to availability).</li>
                            <li>• Return to hotel for breakfast and check-out.</li>
                            <li>• Fly from Kedarnath to Badrinath via Phata (flight time approximately 1 hour).</li>
                            <li>• Check-in at your hotel in Badrinath.</li>
                            <li>• Visit Badrinath Temple for darshan of Lord Vishnu.</li>
                            <li>• Evening guided sightseeing of Mana Village, the last Indian village before the Tibet border.</li>
                            <li>• Attend evening aarti at Badrinath Temple (optional).</li>
                            <li>• Dinner and overnight stay in Badrinath.</li>
                          </>
                        )}
                        {day === 4 && (
                          <>
                            <li>• After breakfast, check-out from the hotel.</li>
                            <li>• Transfer to Badrinath helipad for your flight back to Dehradun.</li>
                            <li>• Arrive at Sahastradhara helipad in Dehradun (estimated arrival time 9:30 AM).</li>
                            <li>• Transfer to Dehradun Airport/Railway Station for your onward journey.</li>
                            <li>• Tour concludes with divine blessings of Lord Shiva and Lord Vishnu.</li>
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
                  <p>What&#39;s included in your Do Dham Helicopter Tour package.</p>
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
                            <span>Helicopter flying from Dehradun to Kedarnath and Badrinath & back</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Airport/Railway Station – hotel – Helipad & return transfers at Dehradun by Innova</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>1 night accommodation in Dehradun with breakfast & dinner</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>1 night accommodation in Kedarnath with all vegetarian meals</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>1 night accommodation in Badrinath with all vegetarian meals</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Guided local sightseeing post-temple visits</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Priority Darshan Slips at both shrines</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Early morning Rudra Abhishek Puja at Kedarnath (subject to state government permission)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>All applicable taxes except GST</span>
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
                            <span>Any services of personal nature not mentioned in the inclusions</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Porter charges, extra meals/snacks, tips & donations, etc.</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Goods & Services Taxes @ 5% on total billing</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Maha Abhishek puja at Badrinath</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Any cost arising due to natural calamities, landslides, road blockages, political disturbances, etc.</span>
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
                  <p>Important guidelines and policies for your Do Dham Helicopter Tour.</p>
                </div>

                <div className="space-y-6">
                  {["Payment Terms", "Cancellation and Refund Policy", "Helicopter Weight Limitation", "Baggage Allowances"].map((term, index) => (
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
                                <li>• 30% of the tour package shall be paid in advance to get confirmation of the booking by official mail.</li>
                                <li>• Approximately 70% is to be paid 30 days prior to the yatra date.</li>
                                <li>• The full payment is to be made 30 days prior to the date of yatra ex-Dehradun.</li>
                                <li>• Any delay in payment on the due date shall invite the cancellation of the booking without any refund.</li>
                              </>
                            )}
                            {term === "Cancellation and Refund Policy" && (
                              <>
                                <li>• Any moment after booking with an advance: 30% cancellation and 70% refund of total tour cost.</li>
                                <li>• 30 days or fewer prior to travel date: 70% Cancellation and 30% refund of total tour cost.</li>
                                <li>• 15 days or fewer prior to the travel date: 100% cancellation and No refund of total tour cost.</li>
                                <li>• No show or after commencement of the tour: 100% cancellation and No refund of total tour cost.</li>
                              </>
                            )}
                            {term === "Helicopter Weight Limitation" && (
                              <>
                                <li>• The maximum weight capacity of the helicopter is 450 kgs (excluding baggage weight).</li>
                                <li>• Passengers are taken on board depending upon the load, weather, temperature conditions, etc and the pilot&apos;s call shall be final.</li>
                                <li>• The total weight of all passengers on board must be within this limit.</li>
                                <li>• Passengers are required to provide their exact weights with heavy clothes at the time of booking.</li>
                              </>
                            )}
                            {term === "Baggage Allowances" && (
                              <>
                                <li>• Only one baggage weighing a maximum of 3 kg is allowed per passenger.</li>
                                <li>• Guests are not permitted to carry suitcases or any other bags in the helicopter due to size constraints of boot space.</li>
                                <li>• Only duffle/handbags are to be carried on the tour.</li>
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
          Book Your Do Dham Helicopter Tour
        </h2>

        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
          Fill out the form to register for the Do Dham Helicopter Tour.
          Our team will get in touch with you to confirm your booking
          and provide further details.
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
