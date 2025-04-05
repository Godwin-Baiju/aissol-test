"use client"

import Link from "next/link"
import {
  Shield,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Bell,
  Flame,
  Wind,
  AlertTriangle,
  FileCheck,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroCarousel from "@/components/hero-carousel"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import LoadingAnimation from "@/components/loading-animation"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Simulate loading time for the home page
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  const heroSlides = [
    {
      image: {
        src: "/images/HeroCarouselImage1.jpg?height=700&width=1600&text=Fire+Safety+Solutions+and+Services+in+Saudi+Arabia",
        alt: "Fire safety solutions",
      },
      content: (
        <div className="space-y-4 text-white">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-lg">
            Leading Fire & Safety Solutions in Saudi Arabia
          </h1>
          <p className="max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-xl/relaxed drop-shadow-md">
            Protecting lives and property since 2007 with comprehensive fire safety systems and services across the
            Kingdom.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/about" className="pointer-events-auto">
              <Button size="lg" className="shadow-lg">
                About Us
              </Button>
            </Link>
            <Link href="/contact" className="pointer-events-auto">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20 shadow-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      ),
    },
    {
      image: {
        src: "/images/HeroCarouselImage2.jpg?height=700&width=1600&text=Professional+Fire+Protection+Services+in+Saudi+Arabia",
        alt: "Professional fire protection services",
      },
      content: (
        <div className="space-y-4 text-white">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-lg">
            Professional Fire Protection Services
          </h1>
          <p className="max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-xl/relaxed drop-shadow-md">
            Our team of certified experts delivers cutting-edge fire safety solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <div className="flex items-center gap-2 drop-shadow-md">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Certified Technicians</span>
            </div>
            <div className="flex items-center gap-2 drop-shadow-md">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Industry-Leading Equipment</span>
            </div>
            <div className="flex items-center gap-2 drop-shadow-md">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Customized Solutions</span>
            </div>
          </div>
          <div className="pt-2">
            <Link href="/services" className="pointer-events-auto">
              <Button size="lg" className="shadow-lg">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      ),
    },
    {
      image: {
        src: "/images/HeroCarouselImage3.jpeg?height=700&width=1600&text=Fire+Fighting+Products+and+Services",
        alt: "Fire Fighting Products",
      },
      content: (
        <div className="space-y-4 text-white">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-lg">Fire Fighting Products</h1>
          <p className="max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-xl/relaxed drop-shadow-md">
              We specialize in the supply and distribution of a comprehensive range of fire protection and safety equipment.
          </p>
          <div className="pt-2">
            <Link href="/products" className="pointer-events-auto">
              <Button size="lg" className="shadow-lg">
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      ),
    },
  ]

  const services = [
    {
      slug: "fire-detection",
      title: "Fire Detection & Alarm Systems",
      description: "Advanced systems engineered to detect and alert at the earliest signs of fire.",
      icon: <Bell className="h-6 w-6 text-primary" />,
    },
    {
      slug: "fire-fighting",
      title: "Fire Fighting Services",
      description: "Comprehensive fire suppression solutions designed for immediate response.",
      icon: <Flame className="h-6 w-6 text-primary" />,
    },
    {
      slug: "fm200",
      title: "FM200 Systems",
      description: "Clean agent systems engineered to extinguish fires while minimizing damage.",
      icon: <Wind className="h-6 w-6 text-primary" />,
    },
    {
      slug: "gas-detection",
      title: "Gas Detection Systems",
      description: "Reliable monitoring systems for detecting toxic and combustible gases.",
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
    },
    {
      slug: "certification",
      title: "Third-Party Certification",
      description: "Expert certification services ensuring compliance with the latest safety standards.",
      icon: <FileCheck className="h-6 w-6 text-primary" />,
    },
    {
      slug: "maintenance",
      title: "Annual Maintenance",
      description: "Tailored maintenance solutions to keep your safety systems fully operational.",
      icon: <Wrench className="h-6 w-6 text-primary" />,
    },
  ]

  // Animation variants for page transitions
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingAnimation />
      </div>
    )
  }

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      <section className="w-full">
        <HeroCarousel slides={heroSlides} />
      </section>

      <motion.section
        className="w-full py-12 md:py-24 lg:py-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive fire and safety solutions for various industries across Saudi Arabia.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <div className="mt-auto">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm font-medium text-primary inline-flex items-center"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/services">
              <Button variant="outline" className="gap-1">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Al Shaikh International</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Established in 2007, Al Shaikh International Limited Company has grown into a leading provider of fire
                and safety solutions across Saudi Arabia.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button>Learn More About Us</Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Kingdom-wide Coverage</h3>
                    <p className="text-muted-foreground">
                      With offices in Dammam, Riyadh, Jeddah, and Tabuk, we deliver services throughout Saudi Arabia.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Industry Expertise</h3>
                    <p className="text-muted-foreground">
                      Serving residential, commercial, oil & gas, healthcare, education, and hospitality sectors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Our team of technically skilled professionals provides around-the-clock support.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-12 md:py-24 lg:py-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact us today to discuss your fire safety needs and how we can help safeguard your assets.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link href="/contact">
              <Button className="w-full">Contact Us</Button>
            </Link>
            <p className="text-xs text-muted-foreground">
              Or call us at:{" "}
              <a href="tel:+9660138592623" className="underline underline-offset-2">
                +966 13 859 2623
              </a>
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

