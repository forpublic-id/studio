import Hero from '@/components/sections/Hero'
import TwoOptions from '@/components/sections/TwoOptions'
import ContactSimple from '@/components/sections/ContactSimple'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  
  return (
    <div className="min-h-screen">
      <Hero locale={locale} />
      <TwoOptions locale={locale} />
      <ContactSimple locale={locale} />
    </div>
  )
}