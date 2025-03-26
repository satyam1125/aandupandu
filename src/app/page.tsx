import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { SparklesCore } from "@/components/ui/sparkles"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { PackageCard } from "@/components/package-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ContactForm } from "@/components/contact-form"
import { MobileNav } from "@/components/mobile-nav"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { LampContainer } from "@/components/ui/lamp"

export default function Home() {
  const packageItems = [
    {
      title: "Chardham Helicopter Tour",
      description:
        "Experience the divine Chardham Yatra (Yamunotri, Gangotri, Kedarnath & Badrinath) in comfort with our premium helicopter service.",
      duration: "5 Nights / 6 Days",
      image: "/images/4dhamtour.jpg",
      href: "/packages/chardham-helicopter-tour",
    },
    {
      title: "Do Dham Helicopter Tour",
      description:
        "Visit the sacred shrines of Kedarnath and Badrinath with our exclusive helicopter service for a spiritually enriching experience.",
      duration: "3 Nights / 4 Days",
      image: "https://i.pinimg.com/736x/5e/22/98/5e2298868c5b425c71b929d63b7f8509.jpg",
      href: "/packages/do-dham-helicopter-tour",
    },
    {
      title: "Kedarnath Helicopter Tour",
      description: "Reach the holy shrine of Kedarnath quickly and comfortably with our dedicated helicopter service.",
      duration: "2 Nights / 3 Days",
      image: "https://i.pinimg.com/736x/e1/98/9f/e1989f4fc766b63dbb10f1244f253480.jpg",
      href: "/packages/kedarnath-helicopter-tour",
    },
    {
      title: "Road-based Chardham Yatra",
      description: "Experience the traditional Chardham Yatra by road, taking in the scenic beauty of the Himalayas.",
      duration: "10 Nights / 11 Days",
      image: "https://i.pinimg.com/736x/0e/3a/17/0e3a17bc32ba490de419a7123b561dc8.jpg",
      href: "/packages/road-chardham-yatra",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Delhi",
      quote:
        "The Chardham Helicopter Tour was a life-changing experience. The team at Triloki Hospitality took care of everything, making our pilgrimage smooth and comfortable.",
      rating: 5,
      image: "https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
    },
    {
      name: "Priya Patel",
      location: "Mumbai",
      quote:
        "I was amazed by the professionalism and attention to detail. The helicopter service was excellent, and the accommodations were comfortable despite being in remote locations.",
      rating: 5,
      image: "https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
    },
    {
      name: "Suresh Kumar",
      location: "Bangalore",
      quote:
        "As senior citizens, we were worried about the Chardham Yatra, but Triloki Hospitality made it possible for us to complete the pilgrimage comfortably with their helicopter service.",
      rating: 4,
      image: "https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
    },
  ]

  const features = [
    {
      title: "Luxury Accommodations",
      description: "Stay in premium hotels and resorts throughout your spiritual journey.",
      icon: (
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Accommodations"
          width={400}
          height={200}
          className="rounded-lg object-cover h-40 w-full"
        />
      ),
    },
    {
      title: "Expert Guides",
      description: "Our knowledgeable guides provide insights into the spiritual significance of each destination.",
      icon: (
        <Image
          src="https://i.pinimg.com/736x/c3/d4/8b/c3d48bde09b926666aa47e217886b5a7.jpg"
          alt="Expert Guides"
          width={400}
          height={200}
          className="rounded-lg object-cover h-40 w-full"
        />
      ),
    },
    {
      title: "Priority Darshan",
      description: "Skip the lines with our VIP access to all temples and shrines.",
      icon: (
        <Image
          src="https://i.pinimg.com/736x/83/c8/69/83c869cfbd027228c92c50f8a3818748.jpg"
          alt="Priority Darshan"
          width={400}
          height={200}
          className="rounded-lg object-cover h-40 w-full"
        />
      ),
    },
    {
      title: "Helicopter Services",
      description: "Travel in comfort and style with our modern helicopter fleet.",
      icon: (
        <Image
          src="https://i.pinimg.com/736x/32/d3/91/32d391bbce3c7c8296889eb9c2de6214.jpg"
          alt="Helicopter Services"
          width={400}
          height={200}
          className="rounded-lg object-cover h-40 w-full"
        />
      ),
    },
    {
      title: "Customized Packages",
      description: "Tailor your spiritual journey to meet your specific needs and preferences.",
      icon: (
        <Image
          src="https://i.pinimg.com/736x/54/e7/c2/54e7c2ecf3ce00fab3eb719c515ffaf6.jpg"
          alt="Customized Packages"
          width={400}
          height={200}
          className="rounded-lg object-cover h-40 w-full"
        />
      ),
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is available around the clock to assist you throughout your journey.",
      icon: (
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
          alt="24/7 Support"
          width={400}
          height={200}
          className="rounded-lg object-cover h-40 w-full"
        />
      ),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FBFE]">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-22 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://i.pinimg.com/736x/85/ed/fa/85edfa82040e541abd7b997b4ab5a3b4.jpg"
                alt="Triloki Hospitality Logo"
                width={40}
                height={40}
                className="rounded-full bg-[#00A7B5] object-cover"
              />
              <span className="hidden font-bold text-[#00A7B5] sm:inline-block">Triloki Group Tours And Travels</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-[#FF8200]">
              Home
            </Link>
            <Link href="#packages" className="text-sm font-medium transition-colors hover:text-[#FF8200]">
              Packages
            </Link>
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-[#FF8200]">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-[#FF8200]">
              About Us
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-[#FF8200]">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-[#FF8200]">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden sm:flex border-[#00A7B5] text-[#00A7B5] hover:bg-[#00A7B5] hover:text-white"
            >
              <Link href="#contact">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
            <Button asChild size="sm" className="bg-[#FF8200] hover:bg-[#FF9F1C] text-white">
              <Link href="/packages/chardham-helicopter-tour">Book Now</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section id="packages" className="py-12 md:py-24 lg:py-32 relative">
          <BackgroundBeams className="opacity-20" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <SparklesCore
                      id="tsparticles"
                      background="transparent"
                      minSize={0.6}
                      maxSize={1.4}
                      particleDensity={100}
                      className="w-full h-full"
                      particleColor="#FFCC00"
                    />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00A7B5] relative z-10">
                    Our Travel Packages
                  </h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our curated travel experiences designed to provide you with unforgettable journeys.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
              {packageItems.map((pkg, index) => (
                <PackageCard
                  key={index}
                  title={pkg.title}
                  description={pkg.description}
                  duration={pkg.duration}
                  image={pkg.image}
                  href={pkg.href}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#B0D8DF]/20 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00A7B5]">Why Choose Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the perfect blend of spirituality and comfort with our premium services.
                </p>
              </div>
            </div>
            <BentoGrid className="max-w-6xl mx-auto">
              {features.map((feature, i) => (
                <BentoGridItem
                  key={i}
                  title={feature.title}
                  description={feature.description}
                  header={feature.icon}
                  className="border-[#B0D8DF] hover:border-[#00A7B5]"
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        <section id="about" className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <BackgroundBeams className="opacity-20" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00A7B5]">
                  <TextGenerateEffect words="About Triloki Group" />
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Triloki Hospitality is a premier travel agency specializing in curated travel packages to the sacred
                  Chardham destinations. With years of experience, we provide seamless and comfortable journeys to
                  pilgrims seeking spiritual fulfillment.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Our team of experienced professionals ensures that every aspect of your journey is meticulously
                  planned and executed, allowing you to focus entirely on your spiritual experience.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-[#FF8200] hover:bg-[#FF9F1C] text-white">
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-[#00A7B5] text-[#00A7B5] hover:bg-[#00A7B5] hover:text-white"
                  >
                    <Link href="#packages">View Packages</Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Image
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/1c/82/8a/new-satyam-swagat.jpg?w=2100&h=1300&s=1"
                  alt="Triloki Hospitality Office"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#FF8200]" />
                    <span className="text-sm">Hotel Satyam Swagat, Uchapul Aryanagar, Jwalapur, Haridwar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#FF8200]" />
                    <span className="text-sm">+91-9720340187 / 8445214371</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#FF8200]" />
                    <span className="text-sm">hospitality.triloki@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#FF8200]" />
                    <span className="text-sm">9:00 AM - 6:00 PM (Mon-Sat)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LampContainer className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 relative z-10">
            <div id="testimonials" className="flex flex-col items-center justify-center space-y-4 text-center mb-20">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00A7B5]">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experiences with Triloki Hospitality.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  location={testimonial.location}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                  image={testimonial.image}
                />
              ))}
            </div>
          </div>
        </LampContainer>

        <section id="contact" className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#00A7B5]/5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00A7B5]">
                  Contact Us
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Have questions about our travel packages? Get in touch with us, and our team will be happy to assist
                  you.
                </p>
                <div className="grid gap-4">
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
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#FF8200]" />
                    <span>Monday to Saturday: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1626015788586-cea86872edc6?q=80&w=1974&auto=format&fit=crop"
                    alt="Triloki Hospitality Office"
                    width={500}
                    height={300}
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="https://images.unsplash.com/photo-1626015633157-c8caef056ddd?q=80&w=2070&auto=format&fit=crop"
                alt="Triloki Hospitality Logo"
                width={32}
                height={32}
                className="rounded-full bg-[#00A7B5] object-cover"
              />
              <span className="font-bold text-[#00A7B5]">Triloki Hospitality</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing premium travel experiences to sacred destinations since 2010.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-[#00A7B5]">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-[#00A7B5]">Packages</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/packages/chardham-helicopter-tour"
                    className="text-sm text-muted-foreground hover:text-[#FF8200]"
                  >
                    Chardham Helicopter Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages/do-dham-helicopter-tour"
                    className="text-sm text-muted-foreground hover:text-[#FF8200]"
                  >
                    Do Dham Helicopter Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages/kedarnath-helicopter-tour"
                    className="text-sm text-muted-foreground hover:text-[#FF8200]"
                  >
                    Kedarnath Helicopter Tour
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-[#00A7B5]">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                    Cancellation Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6 bg-[#00A7B5]/5">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Triloki Hospitality. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

