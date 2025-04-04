
import { Layout } from "@/components/layout"
import { HeroSection } from "@/components/hero-section"
import { PackagesSection } from "@/components/packages-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import Image from "next/image"

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
      title: "Amarnath Helicopter Tour",
      description: "Reach the holy shrine of Kedarnath quickly and comfortably with our dedicated helicopter service.",
      duration: "2 Nights / 3 Days",
      image: "https://i.pinimg.com/736x/6c/5a/de/6c5adefe98ece43b5ba6797a043ecf70.jpg",
      href: "/packages/amarnath-helicopter-tour",
    },
    {
      title: "Road-based Chardham Yatra",
      description: "Experience the traditional Chardham Yatra by road, taking in the scenic beauty of the Himalayas.",
      duration: "10 Nights / 11 Days",
      image: "https://i.pinimg.com/736x/68/c8/3e/68c83e329865148545590b68e809ca18.jpg",
      href: "/packages/road-chardham-yatra",
    },
  ]

  // const testimonials = [
  //   {
  //     name: "Rajesh Sharma",
  //     location: "Delhi",
  //     quote:
  //       "The Chardham Helicopter Tour was a life-changing experience. The team at Triloki Hospitality took care of everything, making our pilgrimage smooth and comfortable.",
  //     rating: 5,
  //     image: "https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
  //   },
  //   {
  //     name: "Priya Patel",
  //     location: "Mumbai",
  //     quote:
  //       "I was amazed by the professionalism and attention to detail. The helicopter service was excellent, and the accommodations were comfortable despite being in remote locations.",
  //     rating: 5,
  //     image: "https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
  //   },
  //   {
  //     name: "Suresh Kumar",
  //     location: "Bangalore",
  //     quote:
  //       "As senior citizens, we were worried about the Chardham Yatra, but Triloki Hospitality made it possible for us to complete the pilgrimage comfortably with their helicopter service.",
  //     rating: 4,
  //     image: "https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
  //   },
  // ]

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
    <Layout>
      <HeroSection />
      <PackagesSection packageItems={packageItems} />
      <FeaturesSection features={features} />
      <AboutSection />
      {/* <TestimonialsSection testimonials={testimonials} /> */}
      <ContactSection />
    </Layout>
  )
}

