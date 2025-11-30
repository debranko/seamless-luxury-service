import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Obedio for Crew | Smart Crew Call System',
  description: 'Stop managing your call system, start managing your service. Voice-to-text translation, 7-day battery watch, automated duty roster, and shake-to-delegate features.',
  alternates: {
    canonical: 'https://obedio.de/for-crew',
  },
  openGraph: {
    title: 'Obedio for Crew',
    description: 'Stop managing your call system. Start managing your service.',
    url: 'https://obedio.de/for-crew',
    siteName: 'Obedio',
    images: [{
      url: '/images/button-leather-gold.png',
      width: 1200,
      height: 630,
      alt: 'Obedio Crew Call System'
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obedio for Crew',
    description: '7-day battery watch, voice-to-text, automated duty management',
    images: ['/images/button-leather-gold.png'],
  },
}

const features = [
  {
    number: '1',
    title: 'Voice-to-Text & Live Translation',
    problem: 'A guest calls. You walk to the cabin. They speak Russian. You use Google Translate. You walk back to get the item.',
    solution: 'The guest speaks Russian. Your watch vibrates. You see the request: "Please bring one bottle of water." You bring the water on the first trip.',
  },
  {
    number: '2',
    title: 'The 7-Day Battery Watch',
    problem: 'Your Apple Watch or standard watch is dead by the afternoon, or you forget to charge it during a busy charter.',
    solution: 'Our optimized Wear OS watch lasts up to 7 days on a single charge. It is a reliable tool, not another liability.',
  },
  {
    number: '3',
    title: 'Automated Duty Roster',
    problem: 'Manually swapping shared watches at the end of every shift.',
    solution: 'You keep your own watch. The "Automatic Duty" software knows your schedule. When your shift starts, calls are routed to you. When it ends, they stop.',
  },
  {
    number: '4',
    title: '"Shake-to-Delegate"',
    problem: 'You\'re carrying a heavy tray or cleaning, and a new call comes in. You can\'t tap "Delegate."',
    solution: 'Simply shake your wrist. The call is instantly delegated to the next crew member on duty, hands-free.',
  },
  {
    number: '5',
    title: '"Serving Now" & 3-Stage Escalation',
    problem: 'Two crew members show up for the same request, while another request is ignored.',
    solution: 'When you tap "Accept," you appear in the "Serving Now" dashboard. Everyone knows you\'re handling it. If a call is not accepted, the system automatically escalates it until someone responds.',
  },
]

const benefits = [
  {
    title: 'Local & Reliable',
    description: 'It works even if the ship\'s internet fails.',
  },
  {
    title: 'Charter Management',
    description: 'Automatically logs requests against the current charter guests.',
  },
  {
    title: '"On My Way"',
    description: 'If a voice message is unclear, one tap tells the guest you are "On My Way" to hear the request personally.',
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
      name: 'Obedio Crew Watch System',
      description: 'Smart crew call system with 7-day battery watch, voice-to-text translation, automated duty roster, and shake-to-delegate features.',
      brand: {
        '@type': 'Brand',
        name: 'Obedio',
      },
      category: 'Marine Electronics',
      audience: {
        '@type': 'Audience',
        audienceType: 'Yacht Crew, Hospitality Staff',
      },
    },
  ],
}

export default function ForCrewPage() {
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
              For Yacht Crew
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-luxury-white mb-6">
              Stop managing your call system.
              <br />
              <span className="text-gradient-bronze">Start managing your service.</span>
            </h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80 max-w-4xl mx-auto mb-10">
              For too long, crew call systems have created more work. Lost signals, dead batteries, language barriers, and endless charging cycles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@obedio.de?subject=Book a Demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-luxury-bronze text-luxury-black font-medium rounded hover:bg-luxury-bronze-light transition-colors"
              >
                Book a Demo
              </a>
              <a
                href="mailto:info@obedio.de?subject=Crew Inquiry"
                className="inline-flex items-center justify-center px-8 py-4 border border-luxury-bronze text-luxury-bronze font-medium rounded hover:bg-luxury-bronze/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* 5 Ways Section */}
        <section className="py-20 px-6 bg-luxury-charcoal">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-white text-center mb-16">
              5 Ways Obedio Gives You Time Back
            </h2>

            <div className="space-y-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Number */}
                  <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className="w-16 h-16 rounded-full border-2 border-luxury-bronze flex items-center justify-center">
                      <span className="text-3xl font-serif text-luxury-bronze">{feature.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-11 space-y-6">
                    <h3 className="text-3xl md:text-4xl font-serif text-luxury-white">
                      {feature.title}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Problem */}
                      <div className="p-6 bg-luxury-black/50 border border-luxury-gray-dark/30 rounded-lg">
                        <p className="text-xs uppercase tracking-[0.2em] text-luxury-gray-light mb-3">
                          The Problem
                        </p>
                        <p className="text-lg text-luxury-cream leading-relaxed">
                          {feature.problem}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="p-6 bg-luxury-bronze/5 border border-luxury-bronze/20 rounded-lg">
                        <p className="text-xs uppercase tracking-[0.2em] text-luxury-bronze mb-3">
                          The Obedio Solution
                        </p>
                        <p className="text-lg text-luxury-white leading-relaxed">
                          {feature.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Benefits */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-white text-center mb-12">
              A system built for <span className="text-luxury-bronze">your reality</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-luxury-charcoal/30 rounded-lg border border-luxury-bronze/10"
                >
                  <h3 className="text-2xl font-serif text-luxury-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-luxury-gray-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-2xl text-luxury-bronze font-serif">
                Stop being a technician for your call system. Let Obedio work for you.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-luxury-charcoal">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-white mb-6">
              Ready to upgrade your workflow?
            </h2>
            <p className="text-luxury-gray-light mb-10 max-w-2xl mx-auto">
              See how Obedio transforms crew operations on superyachts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@obedio.de?subject=Book a Demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-luxury-bronze text-luxury-black font-medium rounded hover:bg-luxury-bronze-light transition-colors"
              >
                Book a Demo
              </a>
              <a
                href="mailto:info@obedio.de?subject=Crew Inquiry"
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
