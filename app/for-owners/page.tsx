import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Obedio for Yacht & Villa Owners | Luxury Guest Service',
  description: 'Transform spoken words into immediate action. Instant 30+ language translation, absolute privacy with two-step activation, and bespoke design for your vessel or villa.',
  alternates: {
    canonical: 'https://obedio.de/for-owners',
  },
  openGraph: {
    title: 'Obedio for Owners',
    description: 'Time is the only luxury you cannot buy back. Obedio transforms guest requests into immediate, precise action.',
    url: 'https://obedio.de/for-owners',
    siteName: 'Obedio',
    images: [{
      url: '/images/button-leather-gold.png',
      width: 1200,
      height: 630,
      alt: 'Obedio Luxury Guest Service'
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obedio for Yacht & Villa Owners',
    description: 'Instant translation, absolute privacy, bespoke design',
    images: ['/images/button-leather-gold.png'],
  },
}

const features = [
  {
    title: 'Speak Your Language',
    subtitle: 'INSTANT TRANSLATION',
    description: 'Your guests speak Turkish, Russian, or Mandarin. The crew instantly receives the request in English. No delays, no misunderstandings.',
  },
  {
    title: 'Privacy by Design',
    subtitle: 'TWO-STEP ACTIVATION',
    description: 'The microphone activates only when pressed. A second press begins recording. Your conversations remain private—always.',
  },
  {
    title: 'Truly Bespoke',
    subtitle: 'UNIQUE TO YOUR VESSEL',
    description: 'Unlike other systems, Obedio is not defined by its shape—it defines its own. Custom materials, dimensions, and design to match your interior.',
  },
]

const additionalBenefits = [
  {
    title: 'Offline Voice-to-Text',
    description: 'Works without internet. All processing happens locally on board.',
  },
  {
    title: '30+ Languages',
    description: 'Instant translation between guests and crew in over 30 languages.',
  },
  {
    title: '9-Month Battery',
    description: 'Guest buttons last up to 9 months on a single charge.',
  },
  {
    title: 'Zero Cloud Dependency',
    description: 'Your data never leaves your vessel. Complete privacy guaranteed.',
  },
]

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Obedio',
      url: 'https://obedio.de',
      logo: 'https://obedio.de/images/logo.png',
      description: 'Luxury guest service system for superyachts and luxury villas',
    },
    {
      '@type': 'Product',
      name: 'Obedio Guest Service System',
      description: 'The first luxury guest service system with offline voice-to-text, instant 30+ language translation, and 9-month battery life. Built for superyachts and luxury villas.',
      brand: {
        '@type': 'Brand',
        name: 'Obedio',
      },
      category: 'Marine Electronics',
      audience: {
        '@type': 'Audience',
        audienceType: 'Yacht Owners, Villa Owners',
      },
    },
  ],
}

export default function ForOwnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-luxury-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-luxury-bronze text-sm uppercase tracking-[0.3em] mb-6">
              For Yacht & Villa Owners
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-luxury-white mb-6 leading-tight">
              Time is the only luxury
              <br />
              <span className="text-gradient-bronze">you cannot buy back.</span>
            </h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80 max-w-3xl mx-auto mb-4">
              Obedio transforms a spoken word into immediate, precise action.
            </p>
            <p className="text-lg text-luxury-gray-light max-w-2xl mx-auto mb-10">
              Your guests deserve service without delays, without barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@obedio.de?subject=Book a Demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-luxury-bronze text-luxury-black font-medium rounded hover:bg-luxury-bronze-light transition-colors"
              >
                Book a Demo
              </a>
              <a
                href="mailto:info@obedio.de?subject=Inquiry from Owner"
                className="inline-flex items-center justify-center px-8 py-4 border border-luxury-bronze text-luxury-bronze font-medium rounded hover:bg-luxury-bronze/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-6 bg-luxury-charcoal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-white text-center mb-4">
              What Makes Obedio Different
            </h2>
            <p className="text-luxury-gray-light text-center mb-12 max-w-2xl mx-auto">
              Built for those who expect the extraordinary
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-10 bg-gradient-to-br from-luxury-charcoal-light/50 to-luxury-black border border-luxury-bronze/20 rounded-xl hover:border-luxury-bronze/40 transition-all duration-500"
                >
                  <p className="text-luxury-bronze text-xs uppercase tracking-[0.2em] mb-3">
                    {feature.subtitle}
                  </p>
                  <h3 className="text-2xl font-serif text-luxury-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-luxury-gray-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-white text-center mb-12">
              The Complete Solution
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-luxury-charcoal/50 border border-luxury-bronze/10 rounded-lg text-center"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-luxury-bronze/10 text-luxury-bronze mb-4 mx-auto">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-luxury-white mb-2">{benefit.title}</h3>
                  <p className="text-luxury-gray-light text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Statement */}
        <section className="py-20 px-6 bg-luxury-charcoal">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 border border-luxury-bronze/30 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-luxury-bronze animate-pulse" />
              <p className="text-luxury-bronze text-sm uppercase tracking-[0.2em]">
                100% Local • Absolute Privacy • Zero Internet Dependency
              </p>
              <div className="w-2 h-2 rounded-full bg-luxury-bronze animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-white mb-6">
              Your Privacy is Non-Negotiable
            </h2>
            <p className="text-luxury-gray-light text-lg max-w-2xl mx-auto">
              Every conversation, every request, every interaction stays on your vessel.
              Obedio processes everything locally—no cloud, no external servers, no compromises.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-white mb-6">
              Experience the Difference
            </h2>
            <p className="text-luxury-gray-light mb-10 max-w-2xl mx-auto">
              See how Obedio transforms guest service on superyachts and luxury villas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@obedio.de?subject=Book a Demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-luxury-bronze text-luxury-black font-medium rounded hover:bg-luxury-bronze-light transition-colors"
              >
                Book a Demo
              </a>
              <a
                href="mailto:info@obedio.de?subject=Inquiry from Owner"
                className="inline-flex items-center justify-center px-8 py-4 border border-luxury-bronze text-luxury-bronze font-medium rounded hover:bg-luxury-bronze/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="py-8 px-6 text-center">
          <Link href="/" className="text-luxury-bronze hover:text-luxury-bronze-light transition-colors">
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  )
}
