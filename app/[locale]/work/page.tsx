import Portfolio from '@/components/sections/Portfolio'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work - ForPublic.id Studio',
  description: 'Portfolio of technology solutions we\'ve built for government agencies, NGOs, and public interest organizations.',
  openGraph: {
    title: 'Our Work - ForPublic.id Studio',
    description: 'Portfolio of technology solutions for public good organizations.',
  },
}

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-20">
      <Portfolio />
    </div>
  )
}