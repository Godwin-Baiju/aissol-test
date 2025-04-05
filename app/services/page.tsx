"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, Droplets, AlertTriangle, ArrowRight, Flame, Wind, FileCheck, Wrench } from "lucide-react"
import { useState, useEffect } from "react"
import LoadingAnimation from "@/components/loading-animation"

export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Simulate loading time for the services page
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  const services = [
    {
      slug: "fire-detection",
      title: "Fire Detection & Alarm Systems",
      description:
        "Advanced systems engineered to detect and alert at the earliest signs of fire, providing crucial early warning.",
      icon: <Bell className="h-6 w-6 text-primary" />,
    },
    {
      slug: "fire-fighting",
      title: "Fire Fighting Services",
      description:
        "Comprehensive fire suppression solutions designed for immediate response to protect lives and property.",
      icon: <Flame className="h-6 w-6 text-primary" />,
    },
    {
      slug: "wet-chemical",
      title: "Wet Chemical Systems",
      description:
        "Specialized systems for effective suppression of fires in high-risk environments like commercial kitchens.",
      icon: <Droplets className="h-6 w-6 text-primary" />,
    },
    {
      slug: "fm200",
      title: "FM200 Systems",
      description: "Clean agent systems engineered to extinguish fires while minimizing damage to sensitive equipment.",
      icon: <Wind className="h-6 w-6 text-primary" />,
    },
    {
      slug: "novac",
      title: "Novac Systems",
      description: "State-of-the-art fire suppression technology for modern safety needs in various environments.",
      icon: <Wind className="h-6 w-6 text-primary" />,
    },
    {
      slug: "gas-detection",
      title: "Gas Detection Systems",
      description: "Reliable monitoring systems for detecting toxic and combustible gases in industrial environments.",
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
    },
    {
      slug: "certification",
      title: "Third-Party Civil Defense Certification",
      description:
        "Expert certification services ensuring compliance with the latest safety standards and regulations.",
      icon: <FileCheck className="h-6 w-6 text-primary" />,
    },
    {
      slug: "maintenance",
      title: "Annual Maintenance Contracts (AMC)",
      description: "Tailored maintenance solutions to keep your safety systems fully operational and compliant.",
      icon: <Wrench className="h-6 w-6 text-primary" />,
    },
  ]

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingAnimation />
      </div>
    )
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive fire and safety solutions tailored to your industry needs.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="Fire safety services"
                width={800}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services Portfolio</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Al Shaikh International Limited Company offers an extensive portfolio of products and services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex flex-col items-start space-y-2">
                  <div className="p-2 bg-primary/10 rounded-full">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-medium text-primary inline-flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Industries We Serve</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                We are committed to enhancing safety and protecting lives and property by delivering high-quality
                solutions for various sectors.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 text-center">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Residential & Commercial</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 text-center">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 22h20" />
                    <path d="M18 10V2H6v8" />
                    <path d="M10 18V6h4v12" />
                    <path d="M2 10h20" />
                    <path d="M14 18h4v4h-4z" />
                    <path d="M6 18h4v4H6z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Oil & Gas</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 text-center">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Airports & Aviation</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 text-center">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Healthcare</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 text-center">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Education</h3>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 text-center">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 20h20" />
                    <path d="M5 20V7h5V4h4v3h5v13" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Hospitality & Leisure</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Need a Custom Solution?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact us today to discuss your specific fire safety requirements.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link href="/contact">
              <Button className="w-full">Request a Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

