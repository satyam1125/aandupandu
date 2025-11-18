"use client"

import { Layout } from "@/components/layout"
import Image from "next/image"
import { ChevronRight, Clock, Calendar, MapPin, CheckCircle2, AlertCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RegistrationForm } from "@/components/registration-form"
import { motion } from "framer-motion"

export default function ChardhamHelicopterTourPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none text-[#00A7B5]">
                  Chardham Helicopter Tour
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Experience the divine Chardham Yatra (Yamunotri, Gangotri, Kedarnath & Badrinath) in comfort with our
                  premium helicopter service.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>5 Nights / 6 Days</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-[#FF8200]" />
                  <span>Available Year Round</span>
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
                src="https://i.pinimg.com/736x/e1/98/9f/e1989f4fc766b63dbb10f1244f253480.jpg"
                alt="Chardham Helicopter Tour"
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
              <TabsTrigger value="overview" className="text-[#00A7B5]">
                Overview
              </TabsTrigger>
              <TabsTrigger value="itinerary" id="itinerary" className="text-[#00A7B5]">
                Itinerary
              </TabsTrigger>
              <TabsTrigger value="inclusions" className="text-[#00A7B5]">
                Inclusions
              </TabsTrigger>
              <TabsTrigger value="terms" className="text-[#00A7B5]">
                Terms & Conditions
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#00A7B5]">Chardham Helicopter Tour – 5 Nights/6 Days</h2>
                  <h3 className="text-xl font-medium text-muted-foreground">
                    Yamunotri – Gangotri – Kedarnath – Badrinath
                  </h3>
                  <p className="mt-4">
                    The Chardham Yatra comprises a tour of north India&#39;s most revered Hindu shrines, Yamunotri,
                    Gangotri, Kedarnath & Badrinath. This pilgrim circuit is considered the most auspicious and blissful
                    by all Hindu devotees.
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
                            <span>Helicopter flying to all Chardham shrines</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Accommodation for 5 nights with meals</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Priority Darshan at all shrines</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Guided local sightseeing</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Rudra Abhishek Puja at Kedarnath</span>
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
                            <span>Kharshali (Yamunotri) – Holy Yamuna or similar</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Harshil (Gangotri) – Hotel Royal Hillcrest or similar</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Kedarnath – Kabra Bhawan or similar</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Badrinath – Hotel Snow Crest or similar</span>
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
                  <p>A detailed day-by-day plan of your spiritual journey.</p>
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
                        {day === 1 && "Day 01: Dehradun"}
                        {day === 2 && "Day 02: Dehradun – Kharshali (Yamunotri)"}
                        {day === 3 && "Day 03: Kharshali – Harshil (Gangotri)"}
                        {day === 4 && "Day 04: Harshil – Phata – Kedarnath"}
                        {day === 5 && "Day 05: Kedarnath - Phata- Badrinath"}
                        {day === 6 && "Day 06: Badrinath – Dehradun"}
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {day === 1 && (
                          <>
                            <li>
                              • Dehradun is a helicopter base and is the starting & ending point of the Chardham heli
                              yatra.
                            </li>
                            <li>• Land transfer from Dehradun Airport/railway station to hotel for a night stay.</li>
                            <li>
                              • Tour briefing to be carried out at the hotel in the evening by the base manager – Dinner
                              & Overnight Dehradun.
                            </li>
                          </>
                        )}
                        {day === 2 && (
                          <>
                            <li>
                              • This is starting day of the Chardham yatra and the passengers shall check out early
                              morning from the hotel at 05:00 am and then get transferred to Sahastradhara Helidrome,
                              Dehradun for their spiritual journey ahead.
                            </li>
                            <li>
                              • Guests shall be escorted to the hotel upon arrival at Kharshali and later taken by
                              palkis for Yamunotri Darshan after breakfast.
                            </li>
                            <li>
                              • It takes approximately 05hrs (round-trip) to complete Yamunotri darshan as the trek is
                              about 05 km one-way.
                            </li>
                            <li>
                              • Evening guided sightseeing of Yamuna Mata Temple & Shani Temple – Overnight Kharshali.
                            </li>
                          </>
                        )}
                        {day === 3 && (
                          <>
                            <li>
                              • Passengers shall check out by 0530 hrs from Kharshali hotel and fly by helicopter to
                              Harshil, the helicopter base of Gangotri Dham.
                            </li>
                            <li>
                              • Guests shall be received and transferred to the hotel upon arrival at Harshil and later
                              shall be taken by car for Gangotri Darshan after breakfast.
                            </li>
                            <li>
                              • Approximate Time taken for Gangotri Temple Darshan: 3hrs 30 mins (round-trip). The road
                              distance to Gangotri temple is approx. 25 km, which is roughly a 50-minute drive one way.
                            </li>
                            <li>
                              • Evening guided trek of Bagodi, Chholmi village, or darshan of Shiv Temple at Harshil –
                              Overnight Harshil.
                            </li>
                          </>
                        )}
                        {day === 4 && (
                          <>
                            <li>
                              • Passengers shall check out by 0600 hrs from the hotel and Phata, a helicopter base of
                              Kedarnath, and later to Kedarnath after changing the helicopter. This changeover is likely
                              to take some time due to traffic congestion.
                            </li>
                            <li>
                              • Guests shall be received and escorted to the hotel for check-in upon arrival at
                              Kedarnath and later shall be taken to Kedarnath Temple for darshan. Post darshan back to
                              the hotel for a night&#39;s stay.
                            </li>
                            <li>• Evening optional guided tour of Bhairon Mandir – Overnight Kedarnath.</li>
                          </>
                        )}
                        {day === 5 && (
                          <>
                            <li>
                              • Guests shall attend early morning Rudra Abhishek and shall be back to the hotel & be
                              ready for their flight to Phata and later fly to Badrinath.
                            </li>
                            <li>
                              • Guests shall be received and transferred to the hotel upon arrival at Badrinath and
                              shall be taken for darshan at Badrinath temple after lunch.
                            </li>
                            <li>
                              • Approximate time taken for Badrinath Temple Darshan is about 01-1.5 Hrs and the
                              Passengers shall be taken from the hotel to the temple by car.
                            </li>
                            <li>• Evening guided sightseeing of Mana Village by cab.</li>
                            <li>
                              • Evening Aarti at Temple – Swaran/Chandi Aarti shall be on additional payment - Overnight
                              Badrinath.
                            </li>
                          </>
                        )}
                        {day === 6 && (
                          <>
                            <li>
                              • After breakfast Guests are transferred to the Badrinath helipad for their flight to
                              Dehradun.
                            </li>
                            <li>
                              • Estimated time of arrival at Sahastradhara helipad, Dehradun shall be 0930 hrs. Our base
                              manager shall receive the guests upon their arrival and guests shall later be dropped to
                              the airport/railway station to commence their onward journey back home.
                            </li>
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
                  <p>What&#39;s included in your Chardham Helicopter Tour package.</p>
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
                            <span>Helicopter flying from Dehradun to all Chardham shrines & back</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>
                              Airport / Railway Station – hotel – Helipad & return land transfers at Dehradun by Innova
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>
                              Complimentary 01-night accommodation with breakfast & Dinner at Dehradun on the day of
                              arrival
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>
                              Accommodation for 04 nights e.g., 01 night at each Dham with all vegetarian meals
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Guided local sightseeing post-temple visits</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-[#FF8200]" />
                            <span>Priority Darshan Slips at all shrines</span>
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
                            <span>
                              Any services of personal nature and not mentioned in the inclusions like porter charges,
                              extra meals/snacks, pithhu, palki, tips & donations, etc.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Goods & Services Taxes @ 5% on total billing</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                            <span>Maha Abhishek puja at Badrinath</span>
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
                  <p>Important guidelines and policies for your Chardham Helicopter Tour.</p>
                </div>

                <div className="space-y-6">
                  {[
                    "Payment Terms",
                    "Cancellation and Refund Policy",
                    "Helicopter Weight Limitation",
                    "Baggage Allowances",
                  ].map((term, index) => (
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
                                <li>
                                  • 30% of the tour package shall be paid in advance to get confirmation of the booking
                                  by official mail.
                                </li>
                                <li>• Approximately 70% is to be paid 30 days prior to the yatra date.</li>
                                <li>
                                  • The full payment is to be made 30 days prior to the date of yatra ex-Dehradun (or
                                  any other helicopter base).
                                </li>
                                <li>
                                  • Any delay in payment on the due date shall invite the cancellation of the booking
                                  without any refund.
                                </li>
                              </>
                            )}
                            {term === "Cancellation and Refund Policy" && (
                              <>
                                <li>
                                  • Any moment after booking with an advance: 30% cancellation and 70% refund of total
                                  tour cost.
                                </li>
                                <li>
                                  • 30 days or fewer prior to travel date: 70% Cancellation and 30% refund of total tour
                                  cost.
                                </li>
                                <li>
                                  • 15 days or fewer prior to the travel date: 100% cancellation and No refund of total
                                  tour cost.
                                </li>
                                <li>
                                  • No show or after commencement of the tour: 100% cancellation and No refund of total
                                  tour cost.
                                </li>
                              </>
                            )}
                            {term === "Helicopter Weight Limitation" && (
                              <>
                                <li>
                                  • The maximum weight capacity of the helicopter is 450 kgs (excluding baggage weight).
                                </li>
                                <li>
                                  • Passengers are taken on board depending upon the load, weather, temperature
                                  conditions, etc and the pilot&#39;s call shall be final.
                                </li>
                                <li>• The total weight of all passengers on board must be within this limit.</li>
                                <li>
                                  • Passengers are required to provide their exact weights with heavy clothes at the
                                  time of booking.
                                </li>
                              </>
                            )}
                            {term === "Baggage Allowances" && (
                              <>
                                <li>• Only one baggage weighing a maximum of 3 kg is allowed per passenger.</li>
                                <li>
                                  • Guests are not permitted to carry suitcases or any other bags in the helicopter due
                                  to size constraints of boot space.
                                </li>
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

      {/* <section id="booking" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#B0D8DF]/20">
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
                Book Your Chardham Helicopter Tour
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Fill out the form to register for the Chardham Helicopter Tour. Our team will get in touch with you to
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
      </section> */}
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
          Book Your Chardham Helicopter Tour
        </h2>

        <p className="text-muted-foreground md:text-xl mx-auto max-w-2xl">
          Fill out the form to register for the Chardham Helicopter Tour.
          Our team will get in touch with you to confirm your booking
          and provide further details.
        </p>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-3"
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
          href="contact-book"
          className="px-6 py-3 rounded-md bg-[#FF8200] hover:bg-[#FF9F1C] text-white text-lg font-medium"
        >
          Book Now
        </a>

        <a
          href="contact-book"
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

