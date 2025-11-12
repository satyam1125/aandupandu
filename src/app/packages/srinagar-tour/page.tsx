"use client";

import { Layout } from "@/components/layout"
//import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, Phone, CheckCircle2, Mail, User, MessageSquare } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function SrinagarTourPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video
            src="/images/kashmir.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 flex items-end z-20">
            <div className="p-4 md:p-8 text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">Kashmir Tour Package</h1>
              <p className="text-lg md:text-xl drop-shadow-md">A serene Kashmir getaway with houseboat stay, scenic lake views, and cultural exploration</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tour Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Experience the breathtaking beauty of Kashmir with our carefully curated Srinagar tour package. 
                  Enjoy the serene Dal Lake, explore magnificent Mughal Gardens, stay in a traditional houseboat, 
                  and immerse yourself in the rich culture and natural beauty of the valley.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#00A7B5]" />
                    <span>5 Days / 4 Nights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#00A7B5]" />
                    <span>Srinagar, Kashmir</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#00A7B5]" />
                    <span>All Group Sizes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Detailed Itinerary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00A7B5] text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Arrival in Srinagar & Dal Lake Serenity</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Upon arrival at Srinagar Airport, you&apos;ll be greeted and transferred to your hotel or houseboat. After settling in, we&apos;ll embark on a magical evening on the iconic Dal Lake.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Airport Pickup & Check-in:</strong> Smooth transfer to your accommodation.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Shikara Ride on Dal Lake:</strong> Glide across the serene waters of Dal Lake, often called &quot;Kashmir&apos;s Jewel.&quot; Spanning 18 sq km, it&apos;s a world of its own with floating gardens, vibrant houseboats, and the majestic Zabarwan mountain range as a backdrop.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Nagin Lake Visit:</strong> Explore the quieter, more intimate Nagin Lake, a part of Dal Lake connected by a narrow causeway, perfect for a peaceful swim or simply relaxing.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Day 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00A7B5] text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Mughal Gardens, Pari Mahal & Shankaracharya Temple</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Discover the grandeur of the Mughal era and witness breathtaking panoramic views of the city from ancient hilltops.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Mughal Gardens Tour:</strong> Visit Nishat Bagh (&quot;Garden of Joy&quot;), Shalimar Bagh (&quot;Abode of Love&quot;), and Chashme Shahi (&quot;The Royal Spring&quot;). These gardens showcase stunning Persian architecture and are located within 10-15 km of the city center.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Tulip Garden (Seasonal):</strong> If visiting between late March and early May, witness Asia`s largest tulip garden in full bloom, a vibrant carpet of colors at the foothills of the Zabarwan range.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Pari Mahal (The Palace of Fairies):</strong> Explore this seven-terraced garden, once a Buddhist monastery and later a school of astrology. Located above Chashme Shahi, it offers spectacular sunset views over Dal Lake.</span>
                        </li>
                         <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Shankaracharya Temple:</strong> Perched atop a 1,000-foot hill, this ancient temple dedicated to Lord Shiva provides a 360-degree view of Srinagar and the surrounding valley.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Day 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00A7B5] text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Day Trip to Gulmarg – &quot;The Meadow of Flowers&quot;</h3>
                       <p className="text-sm text-muted-foreground mb-3">
                        Journey to the stunning alpine valley of Gulmarg, a paradise for nature lovers and adventure seekers, located 50 km (approx. 2 hours) from Srinagar.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Scenic Drive:</strong> Enjoy a picturesque drive through quaint villages and pine forests.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Gondola Ride (Optional):</strong> Take the world&apos;s second-highest operating cable car up to Apharwat Peak for breathtaking views of the Himalayas and Nanga Parbat.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Leisure & Activities:</strong> Spend the day exploring the lush meadows, enjoying a pony ride, or playing golf at one of the world&apos;s highest courses. Return to Srinagar in the evening.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Day 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00A7B5] text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Day Trip to Sonmarg or Pahalgam (Choose One)</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Choose your adventure for the day: the golden meadows of Sonmarg or the tranquil valleys of Pahalgam.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Option A: Sonmarg (&quot;Meadow of Gold&quot;):</strong> A 3-hour drive (80 km) takes you to this spectacular valley, the gateway to Ladakh. Famous for the Thajiwas Glacier, where you can enjoy snow activities even in summer.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Option B: Pahalgam (&quot;Valley of Shepherds&quot;):</strong> A 2.5-hour drive (95 km) leads to this serene town on the banks of the Lidder River. Explore Betaab Valley, Aru Valley, and Chandanwari (optional, by local union cab).</span>
                        </li>
                         <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span><strong>Evening:</strong> Return to your houseboat on Dal Lake for an authentic Kashmiri dinner and a memorable overnight stay.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Day 5 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00A7B5] text-white flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Departure from Srinagar</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        After a final Kashmiri breakfast, it`s time to head home with cherished memories.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span>Enjoy a leisurely breakfast on the houseboat.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                          <span>Check-out and transfer to Srinagar Airport for your onward journey, filled with wonderful memories of Kashmir.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 text-blue-800">Optional Extended Itinerary</h4>
                  <p className="text-sm text-muted-foreground">
                    For those with more time, consider extending your stay to explore these incredible destinations:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                    <li><strong>Gurez Valley:</strong> A remote, breathtakingly beautiful valley near the Line of Control, about 123 km from Srinagar. Requires a minimum of 2 extra days.</li>
                    <li><strong>Dachigam National Park:</strong> Located 22 km from Srinagar, this park is home to the rare Hangul (Kashmir Stag). Ideal for wildlife enthusiasts.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Tables */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Package Pricing</CardTitle>
                <CardDescription>Choose from our flexible tour duration options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 4 Night 5 Day Package */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#00A7B5]">4 Night 5 Day Package</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-3 text-left">Group Size</th>
                          <th className="border p-3 text-left">Per Person Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">2 Persons</td>
                          <td className="border p-3 text-[#00A7B5] font-semibold">₹13,999/- PP</td>
                        </tr>
                        <tr>
                          <td className="border p-3">4 Persons</td>
                          <td className="border p-3 text-[#00A7B5] font-semibold">₹9,999/- PP</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 5 Night 6 Day Package */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#00A7B5]">5 Night 6 Day Package</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-3 text-left">Group Size</th>
                          <th className="border p-3 text-left">Per Person Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">2 Persons</td>
                          <td className="border p-3 text-[#00A7B5] font-semibold">₹15,999/- PP</td>
                        </tr>
                        <tr>
                          <td className="border p-3">4 Persons</td>
                          <td className="border p-3 text-[#00A7B5] font-semibold">₹11,999/- PP</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 6 Night 7 Day Package */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#00A7B5]">6 Night 7 Day Package</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-3 text-left">Group Size</th>
                          <th className="border p-3 text-left">Per Person Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-3">2 Persons</td>
                          <td className="border p-3 text-[#00A7B5] font-semibold">₹18,999/- PP</td>
                        </tr>
                        <tr>
                          <td className="border p-3">4 Persons</td>
                          <td className="border p-3 text-[#00A7B5] font-semibold">₹15,999/- PP</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Prices are per person (PP). For groups larger than 4 persons or custom requirements, please contact us for a personalized quote.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Terms & Conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-[#00A7B5]">Booking Policy</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                      <span>Advance booking is required with a minimum deposit of 30% of the total package cost.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                      <span>Full payment must be completed 15 days before the tour start date.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                      <span>Bookings are confirmed only upon receipt of the deposit amount.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-[#00A7B5]">Cancellation Policy</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                      <span>Cancellation 30+ days before departure: 80% refund of total amount paid.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                      <span>Cancellation 15-29 days before departure: 50% refund of total amount paid.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                      <span>Cancellation less than 15 days before departure: No refund.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-[#00A7B5]">Important Notes</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                      <span>Guests must carry valid ID proof and medical fitness certificates.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                      <span>Package costs are subject to change due to unforeseen circumstances.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                      <span>Management reserves the right to modify itinerary due to weather or other conditions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                      <span>Travel insurance is recommended but not included in the package.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Inquiry Form</CardTitle>
                <CardDescription>Have questions? Send us a message and we&apos;ll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 1234567890"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your travel plans, group size, preferred dates..."
                        value={formData.message}
                        onChange={handleChange}
                        className="pl-10 min-h-[120px]"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-[#00A7B5] hover:bg-[#00A7B5]/90">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Book This Tour</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full bg-[#00A7B5] hover:bg-[#00A7B5]/90">
                  <Link href="tel:+918445214371">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now to Book
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-[#00A7B5] text-[#00A7B5] hover:bg-[#00A7B5] hover:text-white">
                  <Link href="https://wa.me/918445214371" target="_blank">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp Us
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Available 24/7 to customize your Kashmir experience
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Package Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5" />
                    <span className="text-sm">4 Nights Accommodation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5" />
                    <span className="text-sm">1 Night Traditional Houseboat Stay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5" />
                    <span className="text-sm">Daily Breakfast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5" />
                    <span className="text-sm">All Transfers (Sedan/Innova)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5" />
                    <span className="text-sm">Shikara Ride on Dal Lake</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5" />
                    <span className="text-sm">All Sightseeing as per Itinerary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5" />
                    <span className="text-sm">Professional Tour Guide</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#00A7B5]/10 to-[#FF8200]/10">
              <CardHeader>
                <CardTitle className="text-lg">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Best Time:</span>
                  <span className="font-semibold">Nov-May</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Group Size:</span>
                  <span className="font-semibold">2-20 People</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Starting From:</span>
                  <span className="font-semibold text-[#00A7B5]">₹9,999/person</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
