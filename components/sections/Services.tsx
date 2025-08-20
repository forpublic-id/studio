'use client'

import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { 
  Building2, 
  Heart, 
  GraduationCap, 
  Database,
  BarChart3,
  Users,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react'

const serviceIcons = {
  digitalTransformation: Building2,
  ngoSolutions: Heart, 
  publicInterestTech: GraduationCap,
}

export default function Services() {
  const t = useTranslations()
  
  const services = [
    {
      key: 'digitalTransformation',
      icon: Building2,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50 text-blue-600',
    },
    {
      key: 'ngoSolutions', 
      icon: Heart,
      color: 'bg-red-500',
      lightColor: 'bg-red-50 text-red-600',
    },
    {
      key: 'publicInterestTech',
      icon: GraduationCap,
      color: 'bg-green-500', 
      lightColor: 'bg-green-50 text-green-600',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-red-600 border-red-200 bg-red-50">
            <Database className="w-4 h-4 mr-2" />
            Specialized Solutions
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.key} 
                className="p-8 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${service.lightColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`services.items.${service.key}.title`)}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {t(`services.items.${service.key}.description`)}
                </p>
                
                <div className="space-y-3">
                  {t.raw(`services.items.${service.key}.features`).map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center group">
                    Learn More
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BarChart3 className="w-6 h-6 text-red-600" />
            <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">
              Custom Solutions
            </Badge>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We work closely with organizations to understand unique challenges and develop tailored technology solutions that create real impact.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-medium transition-colors">
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  )
}