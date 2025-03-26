import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Clock, Calendar, MapPin, CheckCircle2, AlertCircle, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RegistrationForm } from "@/components/registration-form"

export default function ChardhamHelicopterTourPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/placeholder.svg?height=32&width=32" alt="Triloki Hospitality Logo" width={32} height={32} />
              <span className="hidden font-bold sm:inline-block">Triloki Hospitality</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/#packages" className="text-sm font-medium transition-colors hover:text-primary">
              Packages
            </Link>
            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm" className="hidden sm:flex">
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Chardham Helicopter Tour
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Experience the divine Chardham Yatra (Yamunotri, Gangotri, Kedarnath & Badrinath) in comfort with
                    our premium helicopter service.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    <span>5 Nights / 6 Days</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    <span>Available Year Round</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    <span>Starts from Dehradun</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <a href="#booking">
                      Book Now
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#itinerary">View Itinerary</a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Chardham Helicopter Tour"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary" id="itinerary">
                  Itinerary
                </TabsTrigger>
                <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold">Chardham Helicopter Tour – 5 Nights/6 Days</h2>
                    <h3 className="text-xl font-medium text-muted-foreground">
                      Yamunotri – Gangotri – Kedarnath – Badrinath
                    </h3>
                    <p className="mt-4">
                      The Chardham Yatra comprises a tour of north India's most revered Hindu shrines, Yamunotri,
                      Gangotri, Kedarnath & Badrinath. This pilgrim circuit is considered the most auspicious and
                      blissful by all Hindu devotees.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Package Highlights</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Helicopter flying to all Chardham shrines</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Accommodation for 5 nights with meals</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Priority Darshan at all shrines</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Guided local sightseeing</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Rudra Abhishek Puja at Kedarnath</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Accommodations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Dehradun – Fairfeild By Marriot or similar</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Kharshali (Yamunotri) – Holy Yamuna or similar</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Harshil (Gangotri) – Hotel Royal Hillcrest or similar</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Kedarnath – Kabra Bhawan or similar</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Badrinath – Hotel Snow Crest or similar</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Important Notes</CardTitle>
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
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="mt-6">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Tour Itinerary</h2>
                    <p>A detailed day-by-day plan of your spiritual journey.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold">Day 01: Dehradun</h3>
                      <ul className="mt-2 space-y-2">
                        <li>
                          • Dehradun is a helicopter base and is the starting & ending point of the Chardham heli yatra.
                        </li>
                        <li>• Land transfer from Dehradun Airport/railway station to hotel for a night stay.</li>
                        <li>
                          • Tour briefing to be carried out at the hotel in the evening by the base manager – Dinner &
                          Overnight Dehradun.
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold">Day 02: Dehradun – Kharshali (Yamunotri)</h3>
                      <ul className="mt-2 space-y-2">
                        <li>
                          • This is starting day of the Chardham yatra and the passengers shall check out early morning
                          from the hotel at 05:00 am and then get transferred to Sahastradhara Helidrome, Dehradun for
                          their spiritual journey ahead.
                        </li>
                        <li>
                          • Guests shall be escorted to the hotel upon arrival at Kharshali and later taken by palkis
                          for Yamunotri Darshan after breakfast.
                        </li>
                        <li>
                          • It takes approximately 05hrs (round-trip) to complete Yamunotri darshan as the trek is about
                          05 km one-way.
                        </li>
                        <li>
                          • Evening guided sightseeing of Yamuna Mata Temple & Shani Temple – Overnight Kharshali.
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold">Day 03: Kharshali – Harshil (Gangotri)</h3>
                      <ul className="mt-2 space-y-2">
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
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold">Day 04: Harshil – Phata – Kedarnath</h3>
                      <ul className="mt-2 space-y-2">
                        <li>
                          • Passengers shall check out by 0600 hrs from the hotel and Phata, a helicopter base of
                          Kedarnath, and later to Kedarnath after changing the helicopter. This changeover is likely to
                          take some time due to traffic congestion.
                        </li>
                        <li>
                          • Guests shall be received and escorted to the hotel for check-in upon arrival at Kedarnath
                          and later shall be taken to Kedarnath Temple for darshan. Post darshan back to the hotel for a
                          night's stay.
                        </li>
                        <li>• Evening optional guided tour of Bhairon Mandir – Overnight Kedarnath.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold">Day 05: Kedarnath - Phata- Badrinath</h3>
                      <ul className="mt-2 space-y-2">
                        <li>
                          • Guests shall attend early morning Rudra Abhishek and shall be back to the hotel & be ready
                          for their flight to Phata and later fly to Badrinath.
                        </li>
                        <li>
                          • Guests shall be received and transferred to the hotel upon arrival at Badrinath and shall be
                          taken for darshan at Badrinath temple after lunch.
                        </li>
                        <li>
                          • Approximate time taken for Badrinath Temple Darshan is about 01-1.5 Hrs and the Passengers
                          shall be taken from the hotel to the temple by car.
                        </li>
                        <li>• Evening guided sightseeing of Mana Village by cab.</li>
                        <li>
                          • Evening Aarti at Temple – Swaran/Chandi Aarti shall be on additional payment - Overnight
                          Badrinath.
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold">Day 06: Badrinath – Dehradun</h3>
                      <ul className="mt-2 space-y-2">
                        <li>
                          • After breakfast Guests are transferred to the Badrinath helipad for their flight to
                          Dehradun.
                        </li>
                        <li>
                          • Estimated time of arrival at Sahastradhara helipad, Dehradun shall be 0930 hrs. Our base
                          manager shall receive the guests upon their arrival and guests shall later be dropped to the
                          airport/railway station to commence their onward journey back home.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="inclusions" className="mt-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Tour Inclusions</h2>
                    <p>What's included in your Chardham Helicopter Tour package.</p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Included in the Package</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Helicopter flying from Dehradun to all Chardham shrines & back</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>
                              Airport / Railway Station – hotel – Helipad & return land transfers at Dehradun by Innova
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>
                              Complimentary 01-night accommodation with breakfast & Dinner at Dehradun on the day of
                              arrival
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>
                              Accommodation for 04 nights e.g., 01 night at each Dham with all vegetarian meals
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Guided local sightseeing post-temple visits</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Priority Darshan Slips at all shrines</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>
                              Palki for Yatris above 50yrs of old and Physically challenged, otherwise Pony for the rest
                              yatris at Yamunotri to undertake the trek
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>
                              Early morning Rudra Abhishek Puja at Kedarnath ji (subject to state government permission)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>Shared return Kedarnath ji helicopter shuttle services from Phata/Sirsi/Sitapur</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                            <span>
                              Ground handling, Landing, parking & royalty paid to Uttarakhand Civil Aviation Development
                              Authority
                            </span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Excluded from the Package</CardTitle>
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
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="terms" className="mt-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Terms & Conditions</h2>
                    <p>Important guidelines and policies for your Chardham Helicopter Tour.</p>
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Payment Terms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>
                            • 30% of the tour package shall be paid in advance to get confirmation of the booking by
                            official mail.
                          </li>
                          <li>• Approximately 70% is to be paid 30 days prior to the yatra date.</li>
                          <li>
                            • The full payment is to be made 30 days prior to the date of yatra ex-Dehradun (or any
                            other helicopter base).
                          </li>
                          <li>
                            • Any delay in payment on the due date shall invite the cancellation of the booking without
                            any refund.
                          </li>
                          <li>
                            • Passengers shall not be permitted to board or commence the tour unless full & final
                            payment of the tour is made on the due dates.
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Cancellation and Refund Policy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>
                            • Any moment after booking with an advance: 30% cancellation and 70% refund of total tour
                            cost.
                          </li>
                          <li>
                            • 30 days or fewer prior to travel date: 70% Cancellation and 30% refund of total tour cost.
                          </li>
                          <li>
                            • 15 days or fewer prior to the travel date: 100% cancellation and No refund of total tour
                            cost.
                          </li>
                          <li>
                            • No show or after commencement of the tour: 100% cancellation and No refund of total tour
                            cost.
                          </li>
                          <li>
                            • Full refund minus 15% of the tour cost (Services and flight management charges) shall only
                            be applicable if the entire tour gets cancelled due to bad
                            weather/International/National/State emergencies or force majeure reasons.
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Helicopter Weight Limitation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>
                            • The maximum weight capacity of the helicopter is 450 kgs (excluding baggage weight).
                          </li>
                          <li>
                            • Passengers are taken on board depending upon the load, weather, temperature conditions,
                            etc and the pilot's call shall be final.
                          </li>
                          <li>• The total weight of all passengers on board must be within this limit.</li>
                          <li>
                            • Passengers are required to provide their exact weights with heavy clothes at the time of
                            booking.
                          </li>
                          <li>
                            • Rs. 3000/- per kg shall be charged for any extra weight beyond 75 kgs including handbags
                            before boarding.
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Baggage Allowances</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>• Only one baggage weighing a maximum of 3 kg is allowed per passenger.</li>
                          <li>
                            • Guests are not permitted to carry suitcases or any other bags in the helicopter due to
                            size constraints of boot space.
                          </li>
                          <li>• Only duffle/handbags are to be carried on the tour.</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="booking" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Hotel Satyam Swagat, Uchapul Aryanagar, Jwalapur, Haridwar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+91-9720340187 / 8445214371</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>hospitality.triloki@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <RegistrationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg?height=32&width=32" alt="Triloki Hospitality Logo" width={32} height={32} />
              <span className="font-bold">Triloki Hospitality</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing premium travel experiences to sacred destinations since 2010.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Packages</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/packages/chardham-helicopter-tour"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Chardham Helicopter Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages/do-dham-helicopter-tour"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Do Dham Helicopter Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages/kedarnath-helicopter-tour"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Kedarnath Helicopter Tour
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Cancellation Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Triloki Hospitality. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

