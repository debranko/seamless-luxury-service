export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Obedio',
    url: 'https://obedio.de',
    logo: 'https://obedio.de/images/logo.png',
    description: 'Luxury superyacht guest service systems with offline voice-to-text and instant translation',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@obedio.de',
      contactType: 'sales',
    },
    sameAs: [],
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Obedio Guest Button',
    description: 'Luxury call button with offline voice-to-text, 30+ language translation, and 9-month battery life. Built for superyachts and luxury villas.',
    brand: {
      '@type': 'Brand',
      name: 'Obedio',
    },
    category: 'Marine Electronics',
    image: 'https://obedio.de/images/button-leather-gold.png',
    url: 'https://obedio.de',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Obedio',
    url: 'https://obedio.de',
    description: 'The first luxury guest service system with offline voice-to-text and instant translation',
    publisher: {
      '@type': 'Organization',
      name: 'Obedio',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
