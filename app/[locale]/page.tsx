import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Philosophy from '@/components/sections/Philosophy'
import Portfolio from '@/components/sections/Portfolio'
import Process from '@/components/sections/Process'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Philosophy />
      <Portfolio />
      <Process />
      <Team />
      <Contact />
    </div>
  )
}