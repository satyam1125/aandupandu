"use client";

import { Layout } from "@/components/layout"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Clock, Calendar, MapPin, CheckCircle2, AlertCircle, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RegistrationForm } from "@/components/registration-form"
import { motion } from "framer-motion"

export default function AmarnathHelicopterTourPage() {
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
                  Amarnath Helicopter Tour
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Experience the divine pilgrimage to the holy Amarnath Cave with our premium helicopter service, offering comfort and convenience.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>2 Nights / 3 Days</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>Available during Yatra Season (July-August)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>Starts from Srinagar</span>
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
                src="https://images.unsplash.com/photo-1626015788586-cea86872edc6?q=80&w=1974&auto=format&fit=crop"
                alt="Amarnath Helicopter Tour"
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
                            <span>Srinagar – Deluxe Houseboat or 4-star hotel</span>
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
                            <span>24-hour hot water and electricity backup</span>
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
                            <span>The trek from Panchtarni to the cave is approximately 6 km</span>
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
                  <p>A detailed day-by-day plan of your spiritual journey to the holy Amarnath Cave.</p>
                </div>

                <div className="space-y-6">
                  {[1, 2, 3].map((day, index) => (
                    <motion.div 
                      key={day}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-l-4 border-[#00A7B5] pl-4"
                    >
                      <h3 className="text-xl font-bold">
                        {day === 1 && "Day 01: Arrival in Srinagar"}
                        {day === 2 && "Day 02: Srinagar – Neelgrath – Panchtarni – Amarnath Cave – Panchtarni – Neelgrath – Srinagar"}
                        {day === 3 && "Day 03: Departure from Srinagar"}
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {day === 1 && (
                          <>
                            <li>• Arrive at Srinagar Airport where our representative will meet you.</li>
                            <li>• Transfer to your hotel/houseboat for check-in.</li>
                            <li>• Evening briefing about the Amarnath Yatra and helicopter procedures.</li>
                            <li>• Dinner and overnight stay in Srinagar.</li>
                          </>
                        )}
                        {day === 2 && (
                          <>
                            <li>• Early morning transfer to Neelgrath Helipad (approximately 1.5 hours drive from Srinagar).</li>
                            <li>• Board the helicopter for Panchtarni (flight time approximately 10 minutes).</li>
                            <li>• Trek from Panchtarni to the holy Amarnath Cave (approximately 6 km, 2-3 hours trek).</li>
                            <li>• Darshan at the holy cave where you can witness the natural ice lingam of Lord Shiva.</li>
                            <li>• Return trek to Panchtarni and board the helicopter back to Neelgrath.</li>
                            <li>• Drive back to Srinagar for dinner and overnight stay.</li>
                          </>
                        )}
                        {day === 3 && (
                          <>
                            <li>• After breakfast, check-out from the hotel.</li>
                            <li>• Optional sightseeing in Srinagar (Mughal Gardens, Dal Lake, etc.) depending on your departure time.</li>
                            <li>• Transfer to Srinagar Airport for your onward journey.</li>
                            <li>• Tour concludes with memories of the divine darshan of Lord Shiva at Amarnath Cave.</li>
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
                  <p>What's included in your Amarnath Helicopter Tour package.</p>
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
                            <span>2 nights accommodation in Srinagar (hotel/houseboat)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>All meals (breakfast, lunch, and dinner) as per itinerary</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Return helicopter tickets from Neelgrath to Panchtarni</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>All transfers in a private vehicle (airport – hotel – Neelgrath – hotel – airport)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Experienced guide for the trek from Panchtarni to Amarnath Cave</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Yatra registration and necessary permits</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Oxygen cylinder for emergency use during the trek</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Basic first aid kit</span>
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
                            <span>Airfare to and from Srinagar</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Pony/Palki/Porter charges for the trek from Panchtarni to Amarnath Cave (available at additional cost)</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Personal expenses such as telephone calls, laundry, tips, etc.</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Travel insurance</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Any meals not mentioned in the inclusions</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Additional sightseeing or excursions not mentioned in the itinerary</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>GST @ 5% on total billing</span>
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

      <section id="booking" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#B0D8DF]/20">
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
                Book Your Amarnath Helicopter Tour
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Fill out the form to register for the Amarnath Helicopter Tour. Our team will get in touch with you to
                confirm your booking and provide further details.
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
