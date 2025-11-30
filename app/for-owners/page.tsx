import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Obedio for Yacht & Villa Owners | Luxury Guest Service',
  description: 'Transform spoken words into immediate action. Instant 30+ language translation, absolute privacy with two-step activation.',
  alternates: {
    canonical: 'https://obedio.de/for-owners',
  },
}

const additionalBenefits = [
  {
    title: 'Instant Onboard Processing',
    description: 'Zero latency. Voice requests are processed locally on the chip, ensuring immediate crew response without internet delays.',
    image: '/images/icons/voice-offline.png',
  },
  {
    title: 'Universal Communication',
    description: 'Guests speak in their native tongue; crew receive orders in English. Seamless translation for 30+ languages.',
    image: '/images/icons/languages.png',
  },
  {
    title: 'Full Season Autonomy',
    description: 'Engineered to last. A single charge covers an entire charter season (9+ months), eliminating daily maintenance.',
    image: '/images/icons/battery.png',
  },
  {
    title: '100% Air-Gapped Privacy',
    description: 'Physical isolation from the web. Your conversations and data never leave the vessel. The ultimate security standard.',
    image: '/images/icons/privacy.png',
  },
]

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

export default function ForOwnersPage() {
  return (
    <>
      <main className="min-h-screen bg-[#050505]">

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#C5A572] text-sm uppercase tracking-[0.3em] mb-6">
              For Yacht & Villa Owners
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              Time is the only luxury
              <br />
              <span className="text-[#C5A572]">you cannot buy back.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-light">
              Obedio transforms a spoken word into immediate, precise action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a href="mailto:info@obedio.de" className="px-8 py-4 bg-[#C5A572] text-black font-medium rounded hover:bg-[#b08d55] transition-colors">
                Book a Demo
              </a>
              <a href="mailto:info@obedio.de" className="px-8 py-4 border border-[#C5A572] text-[#C5A572] font-medium rounded hover:bg-[#C5A572]/10 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-6 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-10 border border-white/5 bg-white/5 rounded-xl hover:border-[#C5A572]/30 transition-all duration-500">
                  <p className="text-[#C5A572] text-xs uppercase tracking-[0.2em] mb-3">{feature.subtitle}</p>
                  <h3 className="text-2xl font-serif text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineered for the Ultra-Private */}
        <section className="py-24 px-6 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-white text-center mb-16">
              Engineered for the <span className="text-[#C5A572] italic">Ultra-Private</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center p-8 bg-[#0a0a0a] border border-white/10 rounded-lg hover:border-[#C5A572]/50 transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Title */}
                  <h3 className="text-lg font-serif text-white mb-6 text-center tracking-wide">
                    {benefit.title}
                  </h3>

                  {/* Image Icon */}
                  <div className="relative w-20 h-20 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm text-center leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / Privacy Note */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-serif text-white mb-4">Your Privacy is Non-Negotiable</h2>
            <p className="text-gray-500">100% Local Processing • No Cloud • Air-Gapped</p>
            <div className="py-8 text-center">
              <Link href="/" className="text-[#C5A572] hover:text-white transition-colors text-sm uppercase tracking-widest">
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
