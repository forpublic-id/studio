import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { routing } from '@/i18n/routing'
import { Analytics } from '@/lib/analytics'
import { StructuredData } from '@/components/seo/StructuredData'
import type { Metadata } from 'next'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ 
  params 
}: Props): Promise<Metadata> {
  const { locale } = await params
  // const t = await getTranslations({ locale })
  
  const baseUrl = 'https://studio.forpublic.id'
  const title = 'ForPublic.id Studio - Public Good Software Development'
  const description = 'Public Good Software Studio - Building transparent, accessible technology that serves communities. Partnership hub for government, NGO, and civic organizations.'
  
  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords: [
      'public good software',
      'government technology',
      'NGO solutions', 
      'civic technology',
      'digital transformation',
      'transparency platform',
      'public interest tech',
      'Indonesia software development',
      'forpublic.id'
    ],
    authors: [{ name: 'ForPublic.id Studio' }],
    creator: 'ForPublic.id Studio',
    publisher: 'ForPublic.id Studio',
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
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      url: `${baseUrl}/${locale}`,
      siteName: 'ForPublic.id Studio',
      title,
      description,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'ForPublic.id Studio - Public Good Software Development',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@forpublicid',
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'id': `${baseUrl}/id`,
        'en': `${baseUrl}/en`,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics 
          gaId={process.env.NEXT_PUBLIC_GA_ID}
          gtmId={process.env.NEXT_PUBLIC_GTM_ID}
        />
        <StructuredData locale={locale} />
      </div>
    </NextIntlClientProvider>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}