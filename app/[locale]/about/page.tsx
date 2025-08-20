import Team from '@/components/sections/Team'
import Philosophy from '@/components/sections/Philosophy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - ForPublic.id Studio',
  description: 'Learn about our team, philosophy, and approach to building technology for public good.',
  openGraph: {
    title: 'About Us - ForPublic.id Studio',
    description: 'Our team and philosophy for technology solutions that create social impact.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <Philosophy />
      <Team />
    </div>
  )
}