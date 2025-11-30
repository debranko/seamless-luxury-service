import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Obedio for Integrators | Crestron & KNX Integration',
  description: 'Seamless crew call system integration for superyachts. Works with Crestron, KNX, and your existing automation. Offline voice-to-text, local processing, no cloud dependency.',
  alternates: {
    canonical: 'https://obedio.de/for-integrators',
  },
  openGraph: {
    title: 'Obedio for Integrators',
    description: 'Works with what you already have. Seamless integration with Crestron, KNX, and more.',
    url: 'https://obedio.de/for-integrators',
    siteName: 'Obedio',
    images: [{
      url: '/images/button-leather-gold.png',
      width: 1200,
      height: 630,
      alt: 'Obedio Integration Partners'
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obedio for Integrators',
    description: 'Seamless superyacht automation integration with Crestron & KNX',
    images: ['/images/button-leather-gold.png'],
  },
}

const integrations = {
  available: [
    { name: 'Crestron', logo: '/images/integrations/crestron.svg' },
    { name: 'KNX', logo: '/images/integrations/knx.png' },
  ],
  comingSoon: [
    { name: 'Control4', logo: '/images/integrations/control4.svg' },
    { name: 'Lutron', logo: '/images/integrations/lutron.svg' },
    { name: 'AMX', logo: '/images/integrations/amx.svg' },
  ],
}

const benefits = [
  {
    title: 'Fast Installation',
    description: 'Pre-provisioned systems. Send your GA, receive fully configured hardware.',
  },
  {
    title: 'Local-First Architecture',
    description: 'On-prem server, no cloud dependency. All data stays on board.',
  },
  {
    title: 'Clear Crew Workflows',
    description: 'Duty management, accept/delegate tasks, 3-stage escalation.',
  },
  {
    title: 'Multi-Language Support',
    description: 'Offline voice-to-text with instant translation in 30+ languages.',
  },
  {
    title: 'Logs & Analytics',
    description: 'Complete service history, response times, and performance metrics.',
  },
]

const faqs = [
  {
    question: 'Does Obedio work offline?',
    answer: 'Yes, 100%. The entire system operates locally on the vessel. Voice-to-text, translation, and all crew communications work without internet.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Typical installation takes 1-2 days. Systems arrive pre-provisioned — just connect to the local network and configure zones.',
  },
  {
    question: 'What protocols are supported?',
    answer: 'REST API and WebHooks are available now. Native Crestron and KNX integration is supported. Control4, Lutron, and AMX coming soon.',
  },
  {
    question: 'Can we white-label the system?',
    answer: 'Yes. White labeling is available for fleet owners and integration partners. Custom branding on hardware and software.',
  },
  {
    question: 'What happens if the server fails?',
    answer: 'Emergency Mode activates automatically. Repeaters form a mesh network ensuring guest buttons continue to reach crew watches.',
  },
  {
    question: 'Is there technical documentation?',
    answer: 'Full API documentation and integration guides are provided to certified partners. Contact us to become a partner.',
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
      name: 'Obedio Crew Call System',
      description: 'The first luxury guest service system with offline voice-to-text, instant 30+ language translation, and 9-month battery life. Built for superyachts and luxury villas.',
      brand: {
        '@type': 'Brand',
        name: 'Obedio',
      },
      category: 'Marine Electronics',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
}

export default function ForIntegratorsPage() {
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
              For AV Integrators
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-luxury-white mb-6">
              Obedio for Integrators
            </h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80 max-w-3xl mx-auto mb-4">
              Works with what you already have
            </p>
            <p className="text-lg text-luxury-gray-light max-w-2xl mx-auto mb-10">
              Seamless crew call system integration for superyachts. Offline voice-to-text,
              local processing, no cloud dependency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@obedio.de?subject=Book a Demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-luxury-bronze text-luxury-black font-medium rounded hover:bg-luxury-bronze-light transition-colors"
              >
                Book a Demo
              </a>
              <a
                href="mailto:info@obedio.de?subject=Partnership Inquiry"
                className="inline-flex items-center justify-center px-8 py-4 border border-luxury-bronze text-luxury-bronze font-medium rounded hover:bg-luxury-bronze/10 transition-colors"
              >
                Partner with us
              </a>
            </div>
          </div>
        </section>

        {/* Works With Existing Systems */}
        <section className="py-20 px-6 bg-luxury-charcoal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-white text-center mb-4">
              Works With Existing Systems
            </h2>
            <p className="text-luxury-gray-light text-center mb-12 max-w-2xl mx-auto">
              Seamless integration with your existing automation system
            </p>

            {/* Available Now */}
            <div className="mb-12">
              <p className="text-luxury-bronze text-sm uppercase tracking-[0.2em] text-center mb-8">
                Available Now
              </p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {integrations.available.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex flex-col items-center p-6 bg-luxury-black/50 rounded-lg border border-luxury-bronze/20 hover:border-luxury-bronze/40 transition-colors"
                  >
                    <div className="h-16 w-48 flex items-center justify-center mb-4 bg-white rounded p-4">
                      <Image
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        width={160}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-luxury-white font-medium">{integration.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coming Soon */}
            <div>
              <p className="text-luxury-gray-light text-sm uppercase tracking-[0.2em] text-center mb-8">
                Coming Soon
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {integrations.comingSoon.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex flex-col items-center p-4 opacity-60"
                  >
                    <div className="h-12 w-36 flex items-center justify-center mb-3 bg-white/10 rounded p-3">
                      <Image
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        width={120}
                        height={36}
                        className="object-contain grayscale"
                      />
                    </div>
                    <span className="text-luxury-gray-light text-sm">{integration.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Integrators Choose Obedio */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-white text-center mb-4">
              Why Integrators Choose Obedio
            </h2>
            <p className="text-luxury-gray-light text-center mb-12 max-w-2xl mx-auto">
              Built for professional AV integrators, not just end users
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-luxury-charcoal/50 border border-luxury-bronze/10 rounded-lg hover:border-luxury-bronze/30 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-luxury-bronze/10 text-luxury-bronze mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-luxury-white mb-2">{benefit.title}</h3>
                  <p className="text-luxury-gray-light">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Points */}
        <section className="py-20 px-6 bg-luxury-charcoal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-white text-center mb-12">
              Integration Points
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-luxury-black/50 border border-luxury-bronze/20 rounded-lg">
                <h3 className="text-2xl font-serif text-luxury-white mb-4">API & Webhooks</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-luxury-cream">
                    <span className="text-luxury-bronze">✓</span>
                    REST API — Available Now
                  </li>
                  <li className="flex items-center gap-3 text-luxury-cream">
                    <span className="text-luxury-bronze">✓</span>
                    WebHooks — Available Now
                  </li>
                  <li className="flex items-center gap-3 text-luxury-gray-light">
                    <span className="text-luxury-gray-light">○</span>
                    MQTT Events — Coming Soon
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-luxury-black/50 border border-luxury-bronze/20 rounded-lg">
                <h3 className="text-2xl font-serif text-luxury-white mb-4">Deployment</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-luxury-cream">
                    <span className="text-luxury-bronze">✓</span>
                    On-premises server
                  </li>
                  <li className="flex items-center gap-3 text-luxury-cream">
                    <span className="text-luxury-bronze">✓</span>
                    Local network operation
                  </li>
                  <li className="flex items-center gap-3 text-luxury-cream">
                    <span className="text-luxury-bronze">✓</span>
                    Full data sovereignty
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-white text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-luxury-charcoal/50 border border-luxury-bronze/10 rounded-lg"
                >
                  <h3 className="text-lg font-medium text-luxury-white mb-3">{faq.question}</h3>
                  <p className="text-luxury-gray-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-luxury-charcoal">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-white mb-6">
              Ready to integrate?
            </h2>
            <p className="text-luxury-gray-light mb-10 max-w-2xl mx-auto">
              Join our network of certified integration partners. Get access to technical documentation,
              priority support, and white-labeling options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@obedio.de?subject=Book a Demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-luxury-bronze text-luxury-black font-medium rounded hover:bg-luxury-bronze-light transition-colors"
              >
                Book a Demo
              </a>
              <a
                href="mailto:info@obedio.de?subject=Partnership Inquiry"
                className="inline-flex items-center justify-center px-8 py-4 border border-luxury-bronze text-luxury-bronze font-medium rounded hover:bg-luxury-bronze/10 transition-colors"
              >
                Partner with us
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
