'use client'

import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { 
  GitBranch, 
  Users, 
  Eye, 
  Handshake,
  Zap,
  BookOpen,
  DollarSign,
  CheckCircle
} from 'lucide-react'

export default function Philosophy() {
  const t = useTranslations()
  
  const principles = [
    {
      key: 'openSource',
      icon: GitBranch,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      key: 'communityCentered',
      icon: Users,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      key: 'accessibility',
      icon: Eye,
      color: 'bg-green-50 text-green-600',
    },
  ]

  const approaches = [
    {
      key: 'coDesign',
      icon: Handshake,
      color: 'bg-orange-50 text-orange-600',
    },
    {
      key: 'agile',
      icon: Zap,
      color: 'bg-gray-10 text-gray-900',
    },
    {
      key: 'capacityBuilding',
      icon: BookOpen,
      color: 'bg-indigo-50 text-indigo-600',
    },
  ]

  const pricingOptions = t.raw('philosophy.pricing.options')

  return (
    <section id="philosophy" className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-gray-900 border-gray-300 bg-gray-10">
            <Eye className="w-4 h-4 mr-2" />
            Our Approach
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('philosophy.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('philosophy.description')}
          </p>
        </div>

        {/* Development Principles */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Development Principles</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle) => {
              const Icon = principle.icon
              
              return (
                <Card key={principle.key} className="p-8 text-center bg-gray-50 border-0 hover:bg-white hover:shadow-md transition-all">
                  <div className={`w-16 h-16 ${principle.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {t(`philosophy.principles.${principle.key}.title`)}
                  </h4>
                  <p className="text-gray-600">
                    {t(`philosophy.principles.${principle.key}.description`)}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Collaboration Models */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('philosophy.approach.title')}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((approach) => {
              const Icon = approach.icon
              
              return (
                <Card key={approach.key} className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 ${approach.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {t(`philosophy.approach.${approach.key}.title`)}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t(`philosophy.approach.${approach.key}.description`)}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Pricing Philosophy */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-2xl mb-4">
              <DollarSign className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('philosophy.pricing.title')}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              {t('philosophy.pricing.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingOptions.map((option: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{option}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-medium transition-colors">
              Discuss Your Budget
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}