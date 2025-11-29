import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import Navbar from '@/components/Navbar'
import StructuredData from './structured-data'
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
  metadataBase: new URL('https://obedio.de'),
  title: {
    default: 'Obedio | Superyacht Guest Service System',
    template: '%s | Obedio'
  },
  description: 'The first luxury guest service system with offline voice-to-text, instant 30+ language translation, and 9-month battery life. Built for superyachts and luxury villas.',
  keywords: [
    'superyacht guest service',
    'yacht call button',
    'luxury yacht technology',
    'yacht crew management',
    'offline voice to text',
    'yacht translation system',
    'marine hospitality',
    'superyacht service bell',
    'yacht privacy system',
    'luxury vessel communication'
  ],
  authors: [{ name: 'Obedio' }],
  creator: 'Obedio',
  publisher: 'Obedio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://obedio.de',
    siteName: 'Obedio',
    title: 'Obedio | Superyacht Guest Service System',
    description: 'Built to serve. Designed to seduce. The first luxury guest service system with offline voice-to-text and instant translation.',
    images: [{
      url: '/images/button-leather-gold.png',
      width: 1200,
      height: 630,
      alt: 'Obedio Luxury Call Button'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obedio | Superyacht Guest Service System',
    description: 'Built to serve. Designed to seduce. Offline voice-to-text, 30+ languages, 9-month battery.',
    images: ['/images/button-leather-gold.png'],
  },
  alternates: {
    canonical: 'https://obedio.de',
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <StructuredData />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
