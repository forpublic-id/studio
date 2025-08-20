'use client'

import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { 
  Search,
  Lightbulb,
  Code,
  Rocket,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  DollarSign,
  Calendar
} from 'lucide-react'

export default function Process() {
  const t = useTranslations()
  
  const steps = [
    {
      key: 'assessment',
      icon: Search,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      number: '01'
    },
    {
      key: 'coDesign',
      icon: Lightbulb,
      color: 'bg-orange-50 text-orange-600 border-orange-200',
      number: '02'
    },
    {
      key: 'development',
      icon: Code,
      color: 'bg-green-50 text-green-600 border-green-200',
      number: '03'
    },
    {
      key: 'support',
      icon: Rocket,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      number: '04'
    },
  ]

  const timelineExamples = [
    { key: 'small', icon: FileText, color: 'bg-green-100 text-green-700' },
    { key: 'medium', icon: DollarSign, color: 'bg-yellow-100 text-yellow-700' },
    { key: 'large', icon: Calendar, color: 'bg-gray-100 text-gray-700' },
  ]

  const partnershipOptions = t.raw('process.partnership.options')

  return (
    <section id="process" className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-gray-900 border-gray-300 bg-gray-100">
            <ArrowRight className="w-4 h-4 mr-2" />
            How We Work
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('process.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('process.description')}
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLast = index === steps.length - 1
              
              return (
                <div key={step.key} className="relative">
                  <Card className={`p-8 text-center bg-white border-2 ${step.color} hover:shadow-lg transition-all`}>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                    
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                      <Icon className="w-8 h-8 text-gray-700" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {t(`process.steps.${step.key}.title`)}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {t(`process.steps.${step.key}.description`)}
                    </p>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        {t(`process.steps.${step.key}.duration`)}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      {t.raw(`process.steps.${step.key}.deliverables`).map((deliverable: string, idx: number) => (
                        <div key={idx} className="flex items-start space-x-2 text-left">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                  
                  {!isLast && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline Examples */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('process.timeline.title')}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {timelineExamples.map((example) => {
              const Icon = example.icon
              
              return (
                <Card key={example.key} className="p-8 text-center bg-gray-50 border-0 hover:bg-white hover:shadow-lg transition-all">
                  <div className={`w-16 h-16 ${example.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {t(`process.timeline.${example.key}.title`)}
                  </h4>
                  <div className="text-lg font-semibold text-gray-900 mb-4">
                    {t(`process.timeline.${example.key}.duration`)}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {t(`process.timeline.${example.key}.description`)}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Partnership Models */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('process.partnership.title')}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('process.partnership.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {partnershipOptions.map((option: { title: string; description: string }, index: number) => (
              <Card key={index} className="p-6 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-100 text-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{option.title}</h4>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-medium transition-colors">
              Discuss Partnership Options
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}