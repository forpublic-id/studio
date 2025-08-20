'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { 
  Briefcase, 
  Heart, 
  ArrowRight,
  CheckCircle,
  DollarSign,
  Handshake
} from 'lucide-react'

interface TwoOptionsProps {
  locale: string
}

export default function TwoOptions({ locale }: TwoOptionsProps) {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {locale === 'id' ? 'Bagaimana Kita Bisa Bekerja Sama?' : 'How Can We Work Together?'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {locale === 'id' 
              ? 'Pilih model kolaborasi yang paling sesuai dengan kebutuhan dan anggaran organisasi Anda.'
              : 'Choose the collaboration model that best fits your organization\'s needs and budget.'}
          </p>
        </div>

        {/* Two Options Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Option 1: Hire Us */}
          <Card id="hire" className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {locale === 'id' ? 'Hire Kami' : 'Hire Us'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'id' ? 'Layanan Profesional' : 'Professional Services'}
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {locale === 'id' 
                ? 'Dapatkan layanan pengembangan profesional yang dedicated untuk proyek penting Anda. Project management lengkap, deliverable terjamin, dan support berkelanjutan.'
                : 'Get dedicated professional development services for your critical projects. Full project management, guaranteed deliverables, and ongoing support.'}
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Custom software development</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Project management & timeline guarantees</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Ongoing maintenance & support</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Training & knowledge transfer</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 mb-6">
              <DollarSign className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Market-rate pricing</span>
            </div>
            
            <Button 
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 group"
              size="lg"
            >
              Get Project Quote
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>

          {/* Option 2: Collaborate */}
          <Card id="collaborate" className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Collaborate</h3>
                <p className="text-gray-600 text-sm">Non-Profit Partnership</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Partner with us on meaningful projects that create social impact. 
              Perfect for NGOs, research initiatives, and community-driven projects.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Open-source development</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Knowledge sharing & capacity building</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Community-driven approach</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Long-term partnership</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 mb-6">
              <Handshake className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Mutual benefit basis</span>
            </div>
            
            <Button 
              variant="outline"
              className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium py-3 group"
              size="lg"
            >
              Discuss Collaboration
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Not sure which option fits your needs? Let&apos;s have a conversation.
          </p>
          <Button 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}