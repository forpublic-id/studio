import Process from '@/components/sections/Process'
import Services from '@/components/sections/Services'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Work - ForPublic.id Studio',
  description: 'Our collaborative process and service approach for building technology solutions for public good organizations.',
  openGraph: {
    title: 'How We Work - ForPublic.id Studio',
    description: 'Our process and services for technology projects that create social impact.',
  },
}

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen pt-20">
      <Services />
      <Process />
    </div>
  )
}