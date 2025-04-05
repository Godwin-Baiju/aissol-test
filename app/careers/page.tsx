"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, MapPin, ArrowRight, GraduationCap, DollarSign, Clock, Layers, BookOpen, Users } from "lucide-react"
import LoadingAnimation from "@/components/loading-animation"

export default function CareersPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  })

  useEffect(() => {
    // Simulate loading time for the careers page
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Application submitted:", { ...formData, jobTitle: selectedJob?.title })
    alert("Thank you for your application. We will review it and contact you soon.")
    setIsDialogOpen(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: null,
    })
  }

  const openJobDialog = (job) => {
    setSelectedJob(job)
    setIsDialogOpen(true)
  }

  const jobs = [
    {
      title: "Fire Safety Engineer",
      location: "Dammam",
      type: "Full-time",
      description: "Design and implement fire safety systems for commercial and industrial clients.",
    },
    {
      title: "Service Technician",
      location: "Riyadh",
      type: "Full-time",
      description: "Maintain and service fire detection and suppression systems across various client sites.",
    },
    {
      title: "Project Manager",
      location: "Jeddah",
      type: "Full-time",
      description: "Oversee fire safety installation projects from planning to completion.",
    },
    {
      title: "Sales Representative",
      location: "Dammam",
      type: "Full-time",
      description: "Develop client relationships and promote our fire safety solutions.",
    },
    {
      title: "Technical Support Specialist",
      location: "Tabuk",
      type: "Full-time",
      description: "Provide technical assistance for our fire safety systems and products.",
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
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Build your career with a leading fire safety solutions provider in Saudi Arabia.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  At Al Shaikh International, we're always looking for talented individuals who are passionate about
                  safety and protection. Join our team of technically skilled professionals dedicated to providing
                  innovative safety solutions across the Kingdom.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="#current-openings">
                    <Button>View Current Openings</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Join Us?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the benefits of building your career with Al Shaikh International.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Professional Growth",
                  description: "Continuous learning opportunities and career advancement paths.",
                  icon: <GraduationCap className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Competitive Compensation",
                  description: "Attractive salary packages and comprehensive benefits.",
                  icon: <DollarSign className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Work-Life Balance",
                  description: "Flexible schedules and supportive work environment.",
                  icon: <Clock className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Diverse Projects",
                  description: "Work on varied and challenging projects across different industries.",
                  icon: <Layers className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Training & Development",
                  description: "Regular training programs to enhance your skills and knowledge.",
                  icon: <BookOpen className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Collaborative Culture",
                  description: "A team-oriented environment that values your contributions.",
                  icon: <Users className="h-10 w-10 text-primary" />,
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex justify-center">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-center">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="current-openings" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Current Openings</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our available positions and find your next career opportunity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              {jobs.map((job, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Briefcase className="mr-1 h-4 w-4" />
                          {job.type}
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{job.description}</p>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Link href={`/careers/${job.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button variant="outline" className="gap-1">
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button onClick={() => openJobDialog(job)}>Apply Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Application Process</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Our hiring process is designed to find the best talent while providing a positive candidate
                  experience.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Application Review</h3>
                    <p className="text-muted-foreground">
                      Submit your application and our HR team will review your qualifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Initial Interview</h3>
                    <p className="text-muted-foreground">
                      Selected candidates will be invited for an initial phone or video interview.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Technical Assessment</h3>
                    <p className="text-muted-foreground">
                      Depending on the role, you may be asked to complete a technical assessment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Final Interview</h3>
                    <p className="text-muted-foreground">
                      Meet with the team and discuss your potential role in more detail.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Offer & Onboarding</h3>
                    <p className="text-muted-foreground">
                      Successful candidates will receive an offer and begin the onboarding process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Don't See a Suitable Position?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're always looking for talented individuals. Send us your resume for future opportunities.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button className="w-full" onClick={() => openJobDialog({ title: "General Application" })}>
                Submit Your Resume
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Apply for {selectedJob?.title || "Position"}</DialogTitle>
            <DialogDescription>
              Fill out the form below to submit your application. We'll review it and get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="coverLetter">Cover Letter</Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Tell us why you're interested in this position and what makes you a good fit."
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume">Resume/CV</Label>
              <Input
                id="resume"
                name="resume"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
              />
              <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX</p>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Submit Application</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

