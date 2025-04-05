"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, MapPin, Target, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import LoadingAnimation from "@/components/loading-animation"

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [expandedProject, setExpandedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  useEffect(() => {
    // Simulate loading time for the about page
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  const certifications = [
    { name: "ISO 9001", logo: "/placeholder.svg?height=150&width=150&text=ISO+9001" },
    { name: "ISO 14001", logo: "/placeholder.svg?height=150&width=150&text=ISO+14001" },
    { name: "OHSAS 18001", logo: "/placeholder.svg?height=150&width=150&text=OHSAS+18001" },
    { name: "UL Certified", logo: "/placeholder.svg?height=150&width=150&text=UL+Certified" },
  ]

  const completedProjects = [
    {
      id: 1,
      name: "King Abdullah Financial District",
      location: "Riyadh",
      year: "2020",
      description: "Complete fire safety system installation for the prestigious financial hub in Riyadh.",
      services: ["Fire Detection Systems", "FM200 Systems", "Emergency Lighting"],
      images: [
        "/placeholder.svg?height=400&width=600&text=KAFD+Project+1",
        "/placeholder.svg?height=400&width=600&text=KAFD+Project+2",
        "/placeholder.svg?height=400&width=600&text=KAFD+Project+3",
      ],
    },
    {
      id: 2,
      name: "Aramco Headquarters",
      location: "Dhahran",
      year: "2019",
      description: "Comprehensive fire protection solutions for the Aramco headquarters complex.",
      services: ["Fire Alarm Systems", "Sprinkler Systems", "Gas Detection"],
      images: [
        "/placeholder.svg?height=400&width=600&text=Aramco+Project+1",
        "/placeholder.svg?height=400&width=600&text=Aramco+Project+2",
      ],
    },
    {
      id: 3,
      name: "Princess Noura University",
      location: "Riyadh",
      year: "2018",
      description: "Fire safety systems for the largest women's university in the world.",
      services: ["Fire Detection", "Voice Evacuation", "Emergency Response Planning"],
      images: [
        "/placeholder.svg?height=400&width=600&text=PNU+Project+1",
        "/placeholder.svg?height=400&width=600&text=PNU+Project+2",
        "/placeholder.svg?height=400&width=600&text=PNU+Project+3",
      ],
    },
    {
      id: 4,
      name: "Jeddah Tower",
      location: "Jeddah",
      year: "2021",
      description: "State-of-the-art fire protection for this iconic high-rise development.",
      services: ["High-Rise Fire Systems", "Smoke Control", "Emergency Evacuation"],
      images: [
        "/placeholder.svg?height=400&width=600&text=Jeddah+Tower+1",
        "/placeholder.svg?height=400&width=600&text=Jeddah+Tower+2",
      ],
    },
  ]

  const toggleProject = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null)
    } else {
      setExpandedProject(id)
      // Initialize the current image index for this project
      setCurrentImageIndex((prev) => ({ ...prev, [id]: 0 }))
    }
  }

  const nextImage = (projectId) => {
    const project = completedProjects.find((p) => p.id === projectId)
    if (!project) return

    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % project.images.length,
    }))
  }

  const prevImage = (projectId) => {
    const project = completedProjects.find((p) => p.id === projectId)
    if (!project) return

    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + project.images.length) % project.images.length,
    }))
  }

  // Animation variants for page transitions
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Al Shaikh International</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Established in 2007, Al Shaikh International Limited Company has grown into a leading provider of fire
                and safety solutions across Saudi Arabia.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="Al Shaikh International headquarters"
                width={800}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className="w-full py-12 md:py-24 lg:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">About Al Shaikh International Limited Company</h2>
              <p className="text-muted-foreground">
                Established in 2007, Al Shaikh International Limited Company has grown into a leading provider of fire
                and safety solutions across Saudi Arabia. With our Head Office in Al Khobar and additional offices in
                Riyadh, Jeddah, and Tabuk, we deliver comprehensive services and products throughout the Kingdom. Our
                team of technically skilled professionals is dedicated to providing prompt, around-the-clock support and
                innovative safety solutions tailored to a diverse range of industries.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Commitment</h2>
              <p className="text-muted-foreground">
                We are committed to enhancing safety and protecting lives and property by delivering high-quality
                solutions for various sectors, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Residential and Commercial Facilities</li>
                <li>Oil and Gas Industries</li>
                <li>Airports and Aviation</li>
                <li>Healthcare and Education</li>
                <li>Hospitality and Leisure</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Services</h2>
              <p className="text-muted-foreground">
                Al Shaikh International Limited Company offers an extensive portfolio of products and services,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Fire Detection & Alarm Systems:</strong> Advanced systems engineered to detect and alert at
                  the earliest signs of fire.
                </li>
                <li>
                  <strong>Fire Fighting Services:</strong> Comprehensive fire suppression solutions designed for
                  immediate response.
                </li>
                <li>
                  <strong>Wet Chemical Systems:</strong> Specialized systems for effective suppression of fires in
                  high-risk environments.
                </li>
                <li>
                  <strong>FM200 Systems:</strong> Clean agent systems engineered to extinguish fires while minimizing
                  damage.
                </li>
                <li>
                  <strong>Novac Systems:</strong> State-of-the-art fire suppression technology for modern safety needs.
                </li>
                <li>
                  <strong>Gas Detection Systems:</strong> Reliable monitoring systems for detecting toxic and
                  combustible gases.
                </li>
                <li>
                  <strong>Third-Party Civil Defense Certification:</strong> Expert certification services ensuring
                  compliance with the latest safety standards.
                </li>
                <li>
                  <strong>Annual Maintenance Contracts (AMC):</strong> Tailored maintenance solutions to keep your
                  safety systems fully operational.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                To be the most trusted and recognized provider of fire and safety solutions in Saudi Arabia by
                delivering innovative technology, exceptional service, and a relentless commitment to safety.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                To set the benchmark for excellence in fire protection and safety solutions, continuously evolving to
                meet the changing needs of our customers and industries.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-12 md:py-24 lg:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Certifications</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We maintain the highest industry certifications to ensure quality and compliance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mt-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Image
                  src={cert.logo || "/placeholder.svg"}
                  alt={cert.name}
                  width={150}
                  height={150}
                  className="object-contain h-24 w-auto"
                />
                <p className="mt-4 text-sm font-medium">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Completed Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A showcase of our successful fire safety implementations across Saudi Arabia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {completedProjects.map((project) => (
              <Card
                key={project.id}
                className={`overflow-hidden transition-all duration-300 ${expandedProject === project.id ? "md:col-span-2" : ""}`}
              >
                <div className={`grid ${expandedProject === project.id ? "md:grid-cols-2" : "grid-cols-1"} gap-4`}>
                  <div className={`${expandedProject === project.id ? "order-1" : ""} relative`}>
                    {/* Image gallery with navigation */}
                    <div className="relative w-full h-64">
                      {project.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            (expandedProject === project.id && currentImageIndex[project.id] === imgIndex) ||
                            (!expandedProject && imgIndex === 0)
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.name} - Image ${imgIndex + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Image navigation controls - only show when expanded */}
                    {expandedProject === project.id && project.images.length > 1 && (
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-black/50 text-white"
                          onClick={(e) => {
                            e.stopPropagation()
                            prevImage(project.id)
                          }}
                        >
                          <ChevronLeft className="h-5 w-5" />
                          <span className="sr-only">Previous image</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-black/50 text-white"
                          onClick={(e) => {
                            e.stopPropagation()
                            nextImage(project.id)
                          }}
                        >
                          <ChevronRight className="h-5 w-5" />
                          <span className="sr-only">Next image</span>
                        </Button>
                      </div>
                    )}

                    {/* Image counter */}
                    {expandedProject === project.id && project.images.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        {currentImageIndex[project.id] + 1} / {project.images.length}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>
                        {project.location} | {project.year}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {expandedProject === project.id
                          ? project.description
                          : `${project.description.substring(0, 100)}...`}
                      </p>

                      {expandedProject === project.id && (
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold mb-2">Services Provided:</h4>
                            <ul className="list-disc pl-5 text-sm text-muted-foreground">
                              {project.services.map((service, idx) => (
                                <li key={idx}>{service}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      <Button
                        variant="link"
                        className="p-0 h-auto text-primary"
                        onClick={() => toggleProject(project.id)}
                      >
                        {expandedProject === project.id ? "Show Less" : "View Details"}
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-12 md:py-24 lg:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover more about our services and how we can help safeguard your assets.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link href="/contact">
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

