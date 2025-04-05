import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, MapPin, ArrowLeft, CheckCircle, Clock, Building, GraduationCap } from "lucide-react"
import { notFound } from "next/navigation"
import { use } from "react"

// This would typically come from a database or CMS
const jobsData = {
  "fire-safety-engineer": {
    title: "Fire Safety Engineer",
    location: "Dammam",
    type: "Full-time",
    department: "Engineering",
    experience: "3-5 years",
    education: "Bachelor's degree in Fire Protection Engineering or related field",
    description: "Design and implement fire safety systems for commercial and industrial clients.",
    responsibilities: [
      "Design fire detection and suppression systems according to client requirements and safety standards",
      "Conduct site surveys and risk assessments to determine appropriate fire safety solutions",
      "Prepare detailed engineering drawings and specifications for fire safety systems",
      "Collaborate with project managers and installation teams to ensure proper implementation",
      "Review and approve system designs and modifications",
      "Stay updated on the latest fire safety technologies and regulations",
    ],
    qualifications: [
      "Bachelor's degree in Fire Protection Engineering, Mechanical Engineering, or related field",
      "3-5 years of experience in fire safety system design",
      "Knowledge of NFPA standards and Saudi Civil Defense requirements",
      "Proficiency in AutoCAD and fire system design software",
      "Strong analytical and problem-solving skills",
      "Excellent communication and teamwork abilities",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "Transportation allowance",
      "Professional development opportunities",
      "Annual performance bonuses",
      "Collaborative work environment",
    ],
  },
  "service-technician": {
    title: "Service Technician",
    location: "Riyadh",
    type: "Full-time",
    department: "Technical Services",
    experience: "2-4 years",
    education: "Technical diploma or equivalent experience",
    description: "Maintain and service fire detection and suppression systems across various client sites.",
    responsibilities: [
      "Perform scheduled maintenance and testing of fire alarm and suppression systems",
      "Diagnose and repair system malfunctions and deficiencies",
      "Complete detailed service reports and documentation",
      "Explain system operation and maintenance requirements to clients",
      "Respond to emergency service calls as needed",
      "Maintain inventory of parts and tools",
    ],
    qualifications: [
      "Technical diploma in Electronics, Fire Systems, or related field",
      "2-4 years of experience servicing fire safety systems",
      "Knowledge of various fire detection and suppression systems",
      "Valid Saudi driving license",
      "Strong troubleshooting and technical skills",
      "Good customer service abilities",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "Transportation allowance",
      "Technical training and certifications",
      "Performance incentives",
      "Career advancement opportunities",
    ],
  },
  "project-manager": {
    title: "Project Manager",
    location: "Jeddah",
    type: "Full-time",
    department: "Project Management",
    experience: "5-8 years",
    education: "Bachelor's degree in Engineering or related field",
    description: "Oversee fire safety installation projects from planning to completion.",
    responsibilities: [
      "Manage fire safety system installation projects from initiation to completion",
      "Develop and maintain project schedules, budgets, and resource allocations",
      "Coordinate with clients, engineers, and installation teams",
      "Monitor project progress and ensure quality standards are met",
      "Identify and mitigate project risks and issues",
      "Prepare project reports and documentation",
    ],
    qualifications: [
      "Bachelor's degree in Engineering, Construction Management, or related field",
      "5-8 years of experience in fire safety or construction project management",
      "PMP certification preferred",
      "Strong leadership and team management skills",
      "Excellent planning and organizational abilities",
      "Effective communication and negotiation skills",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "Transportation allowance",
      "Project completion bonuses",
      "Professional development opportunities",
      "Leadership training programs",
    ],
  },
  "sales-representative": {
    title: "Sales Representative",
    location: "Dammam",
    type: "Full-time",
    department: "Sales",
    experience: "3-5 years",
    education: "Bachelor's degree in Business, Marketing, or related field",
    description: "Develop client relationships and promote our fire safety solutions.",
    responsibilities: [
      "Identify and pursue new business opportunities in the fire safety market",
      "Build and maintain relationships with clients and key stakeholders",
      "Prepare and present product demonstrations and proposals",
      "Negotiate contracts and close sales",
      "Collaborate with technical teams to develop customized solutions",
      "Meet or exceed sales targets and objectives",
    ],
    qualifications: [
      "Bachelor's degree in Business, Marketing, or related field",
      "3-5 years of experience in B2B sales, preferably in fire safety or technical products",
      "Strong understanding of fire safety systems and solutions",
      "Excellent communication and presentation skills",
      "Proven track record of meeting sales targets",
      "Ability to build and maintain client relationships",
    ],
    benefits: [
      "Competitive base salary plus commission structure",
      "Health insurance",
      "Transportation allowance",
      "Sales incentives and bonuses",
      "Professional development opportunities",
      "Mobile phone and laptop allowance",
    ],
  },
  "technical-support-specialist": {
    title: "Technical Support Specialist",
    location: "Tabuk",
    type: "Full-time",
    department: "Customer Support",
    experience: "2-4 years",
    education: "Technical diploma or Bachelor's degree in related field",
    description: "Provide technical assistance for our fire safety systems and products.",
    responsibilities: [
      "Respond to customer inquiries and provide technical support via phone and email",
      "Troubleshoot and diagnose fire safety system issues remotely",
      "Create and maintain technical documentation and knowledge base articles",
      "Coordinate with field service technicians for on-site support when needed",
      "Track and document all support cases in the CRM system",
      "Provide product training and guidance to customers",
    ],
    qualifications: [
      "Technical diploma or Bachelor's degree in Electronics, Engineering, or related field",
      "2-4 years of experience in technical support, preferably with fire safety systems",
      "Strong knowledge of fire detection and suppression systems",
      "Excellent problem-solving and analytical skills",
      "Good communication abilities in both Arabic and English",
      "Customer service orientation",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "Transportation allowance",
      "Technical training and certifications",
      "Performance bonuses",
      "Career advancement opportunities",
    ],
  },
  "general-application": {
    title: "General Application",
    location: "Multiple Locations",
    type: "Full-time",
    department: "Various Departments",
    experience: "Varies by position",
    education: "Relevant to position",
    description: "Submit your resume for consideration for future opportunities at Al Shaikh International.",
    responsibilities: [
      "Responsibilities will vary based on the specific position",
      "All roles contribute to our mission of providing high-quality fire safety solutions",
      "Opportunities may be available in Engineering, Technical Services, Sales, Administration, and more",
      "We'll keep your application on file and contact you when a suitable position becomes available",
    ],
    qualifications: [
      "Qualifications vary by position",
      "Interest in fire safety and protection industry",
      "Commitment to quality and customer service",
      "Willingness to learn and grow professionally",
      "Team-oriented mindset",
      "Relevant education and experience for your field",
    ],
    benefits: [
      "Competitive salary packages",
      "Health insurance",
      "Transportation allowance",
      "Professional development opportunities",
      "Performance-based incentives",
      "Collaborative work environment",
    ],
  },
}

export default function JobDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  // Properly unwrap params using React.use()
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  
  const job = jobsData[slug]
  
  if (!job) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div>
              <Link href="/careers" className="inline-flex items-center text-sm font-medium text-primary mb-4">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Careers
              </Link>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{job.title}</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Briefcase className="mr-1 h-4 w-4" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="mr-1 h-4 w-4" />
                    {job.department}
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Join+Our+Team"
                  alt="Join our team"
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
            <div className="grid gap-10 md:gap-16 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Job Description</h2>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Qualifications</h3>
                  <ul className="space-y-2">
                    {job.qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Benefits</h3>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Briefcase className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium">Job Type</p>
                        <p className="text-sm text-muted-foreground">{job.type}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">{job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Building className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium">Department</p>
                        <p className="text-sm text-muted-foreground">{job.department}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium">Experience</p>
                        <p className="text-sm text-muted-foreground">{job.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <GraduationCap className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium">Education</p>
                        <p className="text-sm text-muted-foreground">{job.education}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Apply for this Position</h3>
                  <p className="text-sm text-muted-foreground">
                    Ready to join our team? Submit your application and we'll get back to you soon.
                  </p>
                  <Link href="/careers#application-form">
                    <Button className="w-full">Apply Now</Button>
                  </Link>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Share This Job</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-10 w-10">
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
                        className="h-4 w-4"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-10 w-10">
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
                        className="h-4 w-4"
                      >
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                      </svg>
                      <span className="sr-only">Share on X</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-10 w-10">
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
                        className="h-4 w-4"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-10 w-10">
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
                        className="h-4 w-4"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span className="sr-only">Share via Email</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Team</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're looking for talented individuals who are passionate about fire safety and protection.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href="/careers#application-form">
                <Button className="w-full">Apply Now</Button>
              </Link>
              <p className="text-xs text-muted-foreground">
                Or email your resume to{" "}
                <a href="mailto:careers@aissol.com" className="underline underline-offset-2">
                  careers@aissol.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

