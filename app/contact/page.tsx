"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import LoadingAnimation from "@/components/loading-animation"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: "",
    newsletter: false,
  })

  useEffect(() => {
    // Simulate loading time for the contact page
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({ ...prev, newsletter: checked }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will contact you shortly.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      service: "",
      newsletter: false,
    })
  }

  const contactDirectory = [
    { department: "Trading", phone: "+966 50 059 6791", email: "trading@aissol.com" },
    { department: "Projects", phone: "+966 50 060 3263", email: "projects@aissol.com" },
    { department: "Maintenance", phone: "+966 50 059 6791", email: "maintenance@aissol.com" },
    {
      department: "General",
      phone: "+966 50 059 6791 / +966 50 060 3263 / +966 50 555 1376",
      email: "info@aissol.com",
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team to discuss your fire safety needs.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Whether you need information about our products and services, want to request a quote, or have
                  questions about your existing systems, we're here to help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Offices</h2>
                  <p className="text-muted-foreground">
                    With offices across Saudi Arabia, we're always close to our customers.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Head Office - Al Khobar</CardTitle>
                    <CardDescription>Our main headquarters</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                      <div>
                        <p>Kinan Al Sharq Business Center, 3rd Floor</p>
                        <p>Al Rakah Ash Shamaliyah, Khaled Ibn Al Walid Street</p>
                        <p>P.O. Box 31952, Al Khobar, Saudi Arabia</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                      <div>
                        <a href="tel:+966138592623" className="hover:underline">
                          +966 13 859 2623
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                      <div>
                        <a href="mailto:info@aissol.com" className="hover:underline">
                          info@aissol.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                      <div>
                        <p>Saturday - Thursday: 8:00 AM - 5:00 PM</p>
                        <p>Friday: Closed</p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <a
                        href="https://maps.app.goo.gl/qVeiJU38MwdgNNoEA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        Get Directions
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>Riyadh</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href="tel:+966111234567" className="hover:underline">
                          +966 11 123 4567
                        </a>
                      </div>
                      <div className="flex items-start gap-2">
                        <Mail className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <div className="min-w-0">
                          <a href="mailto:info.riyadh@aissol.com" className="hover:underline break-all">
                            info.riyadh@aissol.com
                          </a>
                        </div>
                      </div>
                      <div className="pt-2 mt-auto">
                        <a
                          href="https://maps.google.com/?q=Riyadh,Saudi+Arabia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline text-sm"
                        >
                          Get Directions
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>Jeddah</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href="tel:+966123456789" className="hover:underline">
                          +966 12 345 6789
                        </a>
                      </div>
                      <div className="flex items-start gap-2">
                        <Mail className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <div className="min-w-0">
                          <a href="mailto:info.jeddah@aissol.com" className="hover:underline break-all">
                            info.jeddah@aissol.com
                          </a>
                        </div>
                      </div>
                      <div className="pt-2 mt-auto">
                        <a
                          href="https://maps.google.com/?q=Jeddah,Saudi+Arabia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline text-sm"
                        >
                          Get Directions
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>Tabuk</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href="tel:+966147890123" className="hover:underline">
                          +966 14 789 0123
                        </a>
                      </div>
                      <div className="flex items-start gap-2">
                        <Mail className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <div className="min-w-0">
                          <a href="mailto:info.tabuk@aissol.com" className="hover:underline break-all">
                            info.tabuk@aissol.com
                          </a>
                        </div>
                      </div>
                      <div className="pt-2 mt-auto">
                        <a
                          href="https://maps.google.com/?q=Tabuk,Saudi+Arabia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline text-sm"
                        >
                          Get Directions
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Contact Directory</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2 px-4 text-left">Department</th>
                          <th className="py-2 px-4 text-left">Phone</th>
                          <th className="py-2 px-4 text-left">Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contactDirectory.map((contact, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-2 px-4 font-medium">{contact.department}</td>
                            <td className="py-2 px-4">
                              {contact.phone.includes("/") ? (
                                <div className="space-y-1">
                                  {contact.phone.split("/").map((phone, idx) => (
                                    <a
                                      key={idx}
                                      href={`tel:${phone.trim()}`}
                                      className="flex items-center text-primary hover:underline"
                                    >
                                      <Phone className="h-3 w-3 mr-1 flex-shrink-0" />
                                      {phone.trim()}
                                    </a>
                                  ))}
                                </div>
                              ) : (
                                <a
                                  href={`tel:${contact.phone}`}
                                  className="flex items-center text-primary hover:underline"
                                >
                                  <Phone className="h-3 w-3 mr-1 flex-shrink-0" />
                                  {contact.phone}
                                </a>
                              )}
                            </td>
                            <td className="py-2 px-4">
                              <a
                                href={`mailto:${contact.email}`}
                                className="flex items-center text-primary hover:underline break-all"
                              >
                                <Mail className="h-3 w-3 mr-1 flex-shrink-0" />
                                {contact.email}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select onValueChange={handleSelectChange} value={formData.service}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fire-detection">Fire Detection & Alarm Systems</SelectItem>
                        <SelectItem value="fire-fighting">Fire Fighting Services</SelectItem>
                        <SelectItem value="wet-chemical">Wet Chemical Systems</SelectItem>
                        <SelectItem value="fm200">FM200 Systems</SelectItem>
                        <SelectItem value="novac">Novac Systems</SelectItem>
                        <SelectItem value="gas-detection">Gas Detection Systems</SelectItem>
                        <SelectItem value="certification">Third-Party Certification</SelectItem>
                        <SelectItem value="maintenance">Annual Maintenance Contracts</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please provide details about your inquiry..."
                      required
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" checked={formData.newsletter} onCheckedChange={handleCheckboxChange} />
                    <Label htmlFor="newsletter" className="text-sm font-normal">
                      Subscribe to our newsletter to receive updates on our products and services
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

