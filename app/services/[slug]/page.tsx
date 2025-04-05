import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react"
import { notFound } from "next/navigation"
import ServiceEnquiryForm from "@/components/service-enquiry-form-fixed"
import { use, Suspense } from "react"
import LoadingAnimation from "@/components/loading-animation"
import NavigationLink from "@/components/navigation-link"

// Define the service data type
interface ServiceData {
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  image: string;
  relatedProducts: string[];
}

// Define the services data type with string keys
interface ServicesData {
  [key: string]: ServiceData;
}

// This would typically come from a database or CMS
const servicesData: ServicesData = {
  "fire-detection": {
    title: "Fire Detection & Alarm Systems",
    description: "Advanced systems engineered to detect and alert at the earliest signs of fire.",
    fullDescription: `
      Our Fire Detection and Alarm Systems are designed to provide early warning of fire, giving occupants valuable time to evacuate and allowing for prompt emergency response. We offer a comprehensive range of detection technologies suitable for various environments and risk profiles.
      
      Our systems are designed to meet the highest standards of reliability and performance, with features such as addressable detection, zoned alerting, and integration with building management systems. We work closely with clients to design, install, and maintain systems that provide optimal protection for their specific needs.
    `,
    features: [
      "Addressable fire alarm control panels",
      "Smoke, heat, and multi-sensor detectors",
      "Manual call points and notification devices",
      "Voice evacuation systems",
      "Remote monitoring and notification",
      "Integration with other building systems",
    ],
    benefits: [
      "Early detection of fire hazards",
      "Reduced risk of false alarms",
      "Compliance with regulatory requirements",
      "Enhanced occupant safety",
      "Potential insurance premium reductions",
      "Peace of mind for property owners",
    ],
    image: "/placeholder.svg?height=500&width=800&text=Fire+Detection+Systems",
    relatedProducts: [
      "Fire Alarm Control Panels",
      "Smoke Detectors",
      "Heat Detectors",
      "Manual Call Points",
      "Notification Devices",
    ],
  },
  "fire-fighting": {
    title: "Fire Fighting Services",
    description: "Comprehensive fire suppression solutions designed for immediate response.",
    fullDescription: `
      Our Fire Fighting Services encompass a wide range of suppression systems designed to control and extinguish fires quickly and effectively. We provide solutions for various hazard types and environments, from commercial buildings to industrial facilities.
      
      Our team of experienced engineers and technicians designs, installs, and maintains fire suppression systems that meet local and international standards. We conduct thorough risk assessments to determine the most appropriate suppression methods for each application, ensuring optimal protection against fire hazards.
    `,
    features: [
      "Sprinkler systems (wet, dry, pre-action, deluge)",
      "Water mist systems",
      "Foam suppression systems",
      "Clean agent systems",
      "Kitchen fire suppression",
      "Industrial fire protection",
    ],
    benefits: [
      "Rapid fire suppression",
      "Minimized property damage",
      "Protection of critical assets",
      "Reduced business interruption",
      "Compliance with fire safety regulations",
      "Customized solutions for specific hazards",
    ],
    image: "/placeholder.svg?height=500&width=800&text=Fire+Fighting+Services",
    relatedProducts: ["Sprinkler Heads", "Fire Pumps", "Fire Hose Reels", "Fire Extinguishers", "Foam Concentrates"],
  },
  "wet-chemical": {
    title: "Wet Chemical Systems",
    description: "Specialized systems for effective suppression of fires in high-risk environments.",
    fullDescription: `
      Our Wet Chemical Systems are specifically designed for commercial kitchens and other environments where cooking oils and fats present significant fire hazards. These systems use specialized wet chemical agents that not only extinguish fires but also prevent re-ignition by creating a cooling effect and forming a soap-like layer that seals the fuel surface.
      
      We provide complete solutions including system design, installation, testing, and maintenance. Our systems comply with NFPA 17A standards and are designed to integrate seamlessly with kitchen ventilation systems for automatic activation.
    `,
    features: [
      "Automatic detection and activation",
      "Manual activation option",
      "UL-listed components",
      "Fuel shut-off integration",
      "Low pH agents for minimal equipment damage",
      "Flexible nozzle placement for optimal coverage",
    ],
    benefits: [
      "Effective against Class K (cooking oil) fires",
      "Prevents fire re-ignition",
      "Minimizes damage to cooking equipment",
      "Complies with restaurant safety regulations",
      "Reduces kitchen downtime after discharge",
      "Protects staff and customers",
    ],
    image: "/placeholder.svg?height=500&width=800&text=Wet+Chemical+Systems",
    relatedProducts: [
      "Wet Chemical Agents",
      "Kitchen Hood Nozzles",
      "Detection Links",
      "Control Panels",
      "Manual Pull Stations",
    ],
  },
  fm200: {
    title: "FM200 Systems",
    description: "Clean agent systems engineered to extinguish fires while minimizing damage.",
    fullDescription: `
      Our FM200 (HFC-227ea) Systems provide rapid fire suppression for sensitive environments where water, foam, or powder agents would cause unacceptable damage. These clean agent systems are ideal for protecting critical infrastructure such as data centers, telecommunications facilities, electrical rooms, and valuable archives.
      
      FM200 extinguishes fires primarily by physical means, absorbing heat from the fire. It leaves no residue after discharge and is safe for use in occupied spaces when properly designed. Our systems are engineered to discharge within 10 seconds, minimizing fire damage to critical assets.
    `,
    features: [
      "Rapid discharge (under 10 seconds)",
      "Minimal space requirements",
      "Zero ozone depletion potential",
      "Electrically non-conductive",
      "Safe for occupied spaces at design concentrations",
      "Automatic and manual activation options",
    ],
    benefits: [
      "Protects sensitive equipment",
      "Minimizes business interruption",
      "No cleanup required after discharge",
      "Environmentally acceptable alternative to Halon",
      "Globally recognized and approved",
      "Long-term reliability",
    ],
    image: "/placeholder.svg?height=500&width=800&text=FM200+Systems",
    relatedProducts: [
      "FM200 Cylinders",
      "Discharge Nozzles",
      "Control Panels",
      "Detection Devices",
      "Manual Release Stations",
    ],
  },
  novac: {
    title: "Novac Systems",
    description: "State-of-the-art fire suppression technology for modern safety needs.",
    fullDescription: `
      Our Novac Systems represent the latest generation of clean agent fire suppression technology. Using Novec 1230 fluid, these systems provide effective fire protection with an exceptional environmental profile, making them an ideal choice for environmentally conscious organizations.
      
      Novec 1230 has zero ozone depletion potential, a global warming potential of just 1, and an atmospheric lifetime of only 5 days. Despite this environmental friendliness, it delivers powerful fire suppression performance, extinguishing fires before they can cause significant damage to valuable assets.
    `,
    features: [
      "Environmentally sustainable solution",
      "Rapid extinguishing capability",
      "Electrically non-conductive",
      "No residue after discharge",
      "Safe for occupied spaces",
      "Space-efficient storage requirements",
    ],
    benefits: [
      "Superior environmental profile",
      "Effective protection for sensitive equipment",
      "Compliance with environmental regulations",
      "Minimal business disruption after discharge",
      "Long-term viability as a suppression solution",
      "Reduced risk of secondary damage",
    ],
    image: "/placeholder.svg?height=500&width=800&text=Novac+Systems",
    relatedProducts: [
      "Novec 1230 Cylinders",
      "Discharge Nozzles",
      "Detection Systems",
      "Control Panels",
      "System Accessories",
    ],
  },
  "gas-detection": {
    title: "Gas Detection Systems",
    description: "Reliable monitoring systems for detecting toxic and combustible gases.",
    fullDescription: `
      Our Gas Detection Systems provide continuous monitoring for the presence of hazardous gases in industrial and commercial environments. These systems are designed to detect combustible gases, toxic gases, and oxygen depletion, providing early warning to prevent accidents, explosions, and health hazards.
      
      We offer both fixed and portable gas detection solutions, with options for point detection or open path detection depending on the application requirements. Our systems can be integrated with building management systems, fire alarm systems, and emergency shutdown procedures for comprehensive safety management.
    `,
    features: [
      "Continuous monitoring capability",
      "Multiple gas detection options",
      "Adjustable alarm thresholds",
      "Visual and audible alarms",
      "Data logging and trend analysis",
      "Remote monitoring options",
    ],
    benefits: [
      "Prevention of gas-related accidents",
      "Protection of personnel health",
      "Compliance with workplace safety regulations",
      "Early warning of gas leaks",
      "Reduced risk of explosions",
      "Comprehensive safety documentation",
    ],
    image: "/placeholder.svg?height=500&width=800&text=Gas+Detection+Systems",
    relatedProducts: [
      "Fixed Gas Detectors",
      "Portable Gas Monitors",
      "Gas Control Panels",
      "Calibration Equipment",
      "Gas Sampling Systems",
    ],
  },
  certification: {
    title: "Third-Party Civil Defense Certification",
    description: "Expert certification services ensuring compliance with the latest safety standards.",
    fullDescription: `
      Our Third-Party Civil Defense Certification services help organizations navigate the complex regulatory landscape of fire safety compliance in Saudi Arabia. We provide comprehensive inspection, testing, and certification services to ensure that fire protection systems meet the requirements of the Saudi Civil Defense.
      
      Our certified inspectors conduct thorough evaluations of fire protection systems, identifying any deficiencies and providing detailed reports with recommendations for remediation. We work closely with clients throughout the certification process, from initial assessment to final approval.
    `,
    features: [
      "Comprehensive system inspections",
      "Documentation review and preparation",
      "Compliance gap analysis",
      "Remediation recommendations",
      "Liaison with Civil Defense authorities",
      "Certificate renewal management",
    ],
    benefits: [
      "Assurance of regulatory compliance",
      "Reduced risk of penalties and fines",
      "Streamlined approval process",
      "Expert guidance on compliance requirements",
      "Documentation of due diligence",
      "Peace of mind for property owners and managers",
    ],
    image: "/placeholder.svg?height=500&width=800&text=Certification+Services",
    relatedProducts: [
      "Inspection Tools",
      "Testing Equipment",
      "Compliance Documentation",
      "Safety Signage",
      "Training Materials",
    ],
  },
  maintenance: {
    title: "Annual Maintenance Contracts (AMC)",
    description: "Tailored maintenance solutions to keep your safety systems fully operational.",
    fullDescription: `
      Our Annual Maintenance Contracts (AMC) provide scheduled, preventive maintenance for all types of fire protection systems. Regular maintenance is essential to ensure that systems will function as intended during an emergency, and our AMC programs are designed to provide this assurance while minimizing disruption to your operations.
      
      We offer flexible maintenance packages tailored to the specific needs of each client, with options for different service levels, response times, and coverage hours. Our technicians are factory-trained on all major brands of fire protection equipment, ensuring high-quality service regardless of system manufacturer.
    `,
    features: [
      "Scheduled preventive maintenance",
      "24/7 emergency response",
      "Comprehensive system testing",
      "Detailed service documentation",
      "Spare parts management",
      "Compliance reporting",
    ],
    benefits: [
      "Maximized system reliability",
      "Extended equipment lifespan",
      "Reduced risk of system failures",
      "Compliance with warranty requirements",
      "Predictable maintenance costs",
      "Priority response for emergency service",
    ],
    image: "/placeholder.svg?height=500&width=800&text=Maintenance+Services",
    relatedProducts: [
      "Replacement Parts",
      "Testing Equipment",
      "Maintenance Tools",
      "System Documentation",
      "Service Management Software",
    ],
  },
}

// Create a separate component for the service content
function ServiceContent({ slug }: { slug: string }) {
  const service = servicesData[slug]
  
  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div>
                  <NavigationLink 
                    href="/services" 
                    className="inline-flex items-center text-sm font-medium text-primary mb-4"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back to Services
                  </NavigationLink>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{service.title}</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
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
                  <h2 className="text-3xl font-bold">Overview</h2>
                  <div className="text-muted-foreground space-y-4">
                    {service.fullDescription.split("\n\n").map((paragraph: string, index: number) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Key Features</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Benefits</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Request Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Interested in learning more about our {service.title.toLowerCase()}?
                    </p>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-sm">
                        Our team of experts is ready to provide you with detailed information and a customized solution
                        for your specific needs.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href="/contact">
                        <Button className="w-full">Contact Us</Button>
                      </Link>
                      <ServiceEnquiryForm serviceName={service.title} />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Related Products</h3>
                    <p className="text-sm text-muted-foreground">Explore products related to this service</p>
                  </div>
                  <div className="p-6 pt-0">
                    <ul className="space-y-2">
                      {service.relatedProducts.map((product: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <ArrowLeft className="h-4 w-4 rotate-180 text-primary" />
                          <Link href="/products" className="text-sm hover:underline">
                            {product}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact our team today to discuss your {service.title.toLowerCase()} requirements.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <NavigationLink href="/contact">
                <Button className="w-full">Request a Consultation</Button>
              </NavigationLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  // Properly unwrap params using React.use()
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <LoadingAnimation />
      </div>
    }>
      <ServiceContent slug={slug} />
    </Suspense>
  )
}

