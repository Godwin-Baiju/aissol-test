"use client"

import { Providers } from "@/components/providers"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="flex flex-col min-h-screen">
        <Header />
        <AnimatePresence mode="wait">
          <main className="flex-1">{children}</main>
        </AnimatePresence>
        <Footer />
      </div>
    </Providers>
  )
}

