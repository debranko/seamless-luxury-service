import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Obedio - The Intelligence of Service | METSTRADE 2025',
  description: 'The next-generation service platform engineered to solve the greatest challenges in luxury: time and language. 100% Local. Absolute Privacy. Zero Internet Dependency.',
  keywords: 'luxury service, yacht service, hospitality technology, voice translation, private service, METSTRADE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
