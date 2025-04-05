import { Inter } from "next/font/google"
import ClientLayout from "./clientLayout"
import "./globals.css"
import { ReactNode } from "react"
import { NavigationProvider } from '@/contexts/navigation-context'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Al Shaikh International - Fire & Safety Solutions",
  description: "Leading provider of fire and safety solutions across Saudi Arabia since 2007.",
  generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NavigationProvider>
          <ClientLayout>{children}</ClientLayout>
        </NavigationProvider>
      </body>
    </html>
  )
}



import './globals.css'