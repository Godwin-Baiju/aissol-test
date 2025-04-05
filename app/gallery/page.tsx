"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoadingAnimation from "@/components/loading-animation"

export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Simulate loading time for the gallery page
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingAnimation />
      </div>
    )
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Gallery</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our projects, installations, and team in action.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="projects" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="installations">Installations</TabsTrigger>
                  <TabsTrigger value="team">Our Team</TabsTrigger>
                  <TabsTrigger value="training">Training</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="projects" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Project+${index + 1}`}
                        alt={`Project ${index + 1}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="installations" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Installation+${index + 1}`}
                        alt={`Installation ${index + 1}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="team" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Team+${index + 1}`}
                        alt={`Team Member ${index + 1}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="training" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Training+${index + 1}`}
                        alt={`Training Session ${index + 1}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}

