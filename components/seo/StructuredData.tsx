interface StructuredDataProps {
  locale: string
}

export function StructuredData({ locale }: StructuredDataProps) {
  const baseUrl = 'https://studio.forpublic.id'
  
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ForPublic.id Studio',
    alternateName: 'ForPublic Studio',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    description: locale === 'id' 
      ? 'Studio pengembangan software untuk kepentingan publik - Membangun teknologi transparan dan mudah diakses untuk melayani komunitas.'
      : 'Public Good Software Studio - Building transparent, accessible technology that serves communities.',
    foundingDate: '2024',
    email: 'studio@forpublic.id',
    sameAs: [
      'https://github.com/forpublic-id',
      'https://x.com/forpublicid',
      'https://forpublic.id'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressLocality: 'Indonesia'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Partnership Inquiries',
      email: 'studio@forpublic.id',
      availableLanguage: ['Indonesian', 'English']
    }
  }

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ForPublic.id Studio',
    url: baseUrl,
    description: locale === 'id'
      ? 'Hub kolaborasi untuk layanan pengembangan software yang berfokus pada kepentingan publik'
      : 'Collaboration hub for public-good focused software development services',
    inLanguage: locale === 'id' ? 'id-ID' : 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'ForPublic.id Studio'
    }
  }

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Public Good Software Development',
    provider: {
      '@type': 'Organization',
      name: 'ForPublic.id Studio'
    },
    description: locale === 'id'
      ? 'Layanan pengembangan software khusus untuk pemerintah, NGO, dan organisasi yang fokus pada kepentingan publik'
      : 'Specialized software development services for government, NGOs, and organizations focused on public interest',
    serviceType: 'Software Development',
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'id' ? 'Transformasi Digital Pemerintah' : 'Government Digital Transformation',
            description: locale === 'id' 
              ? 'Platform transparansi, digitalisasi layanan publik'
              : 'Transparency platforms, public service digitization'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'id' ? 'Solusi NGO & Non-Profit' : 'NGO & Non-Profit Solutions',
            description: locale === 'id'
              ? 'Tracking dampak, tools engagement komunitas'
              : 'Impact tracking, community engagement tools'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'id' ? 'Public Interest Technology' : 'Public Interest Technology',
            description: locale === 'id'
              ? 'Pendidikan, kesehatan, solusi lingkungan'
              : 'Education, health, environmental solutions'
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  )
}