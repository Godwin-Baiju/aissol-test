import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-6 py-8 md:py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/site-logo.png"
                alt="Al Shaikh International"
                width={80}
                height={80}
                className="h-100 w-auto"
              />
            </div>
            <p className="text-lg font-bold text-primary">Al Shaikh International Company</p>
            <p className="text-sm text-muted-foreground">
              Leading provider of fire and safety solutions across Saudi Arabia since 2007.
            </p>
            <div>
              <a 
                href="/Broucher-Al-Shaikh-International-Group.pdf" 
                download="Broucher-Al-Shaikh-International-Group.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                  Download Brochure
                </Button>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:underline">
                Home
              </Link>
              <Link href="/about" className="text-sm hover:underline">
                About Us
              </Link>
              <Link href="/products" className="text-sm hover:underline">
                Products
              </Link>
              <Link href="/services" className="text-sm hover:underline">
                Services
              </Link>
              <Link href="/gallery" className="text-sm hover:underline">
                Gallery
              </Link>
              <Link href="/careers" className="text-sm hover:underline">
                Careers
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/services" className="text-sm hover:underline">
                Fire Detection Systems
              </Link>
              <Link href="/services" className="text-sm hover:underline">
                Fire Fighting Services
              </Link>
              <Link href="/services" className="text-sm hover:underline">
                FM200 Systems
              </Link>
              <Link href="/services" className="text-sm hover:underline">
                Gas Detection Systems
              </Link>
              <Link href="/services" className="text-sm hover:underline">
                Maintenance Contracts
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span>Head Office: Dammam, Saudi Arabia</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <a href="tel:+966138260066" className="hover:underline">
                  +966 13 826 0066
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <a href="mailto:info@aissol.com" className="hover:underline">
                  info@aissol.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Al Shaikh International Limited Company. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                className="h-5 w-5"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              <span className="sr-only">X</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

