import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { routing } from '@/i18n/routing'
import type { Metadata } from 'next'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata({ 
  params: { locale } 
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale })
  
  const title = 'ForPublic.id Studio - Public Good Software Development'
  const description = 'Public Good Software Studio - Building transparent, accessible technology that serves communities. Partnership hub for government, NGO, and civic organizations.'
  
  return {
    title,
    description,
    keywords: [
      'public good software',
      'government technology',
      'NGO solutions', 
      'civic technology',
      'transparency platform',
      'public interest technology',
      'Indonesia government tech',
      'open source government',
      'digital transformation',
      'public sector innovation'
    ],
    authors: [{ name: 'ForPublic.id Studio' }],
    creator: 'ForPublic.id',
    publisher: 'ForPublic.id',
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
      locale: locale,
      alternateLocale: locale === 'id' ? 'en' : 'id',
      url: `https://studio.forpublic.id/${locale}`,
      siteName: 'ForPublic.id Studio',
      title,
      description,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@forpublicid',
      creator: '@forpublicid',
      title,
      description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `https://studio.forpublic.id/${locale}`,
      languages: {
        id: 'https://studio.forpublic.id/id',
        en: 'https://studio.forpublic.id/en',
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  if (!routing.locales.includes(locale as any)) {
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
      </div>
    </NextIntlClientProvider>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}