'use client'

import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { 
  Calendar,
  DollarSign,
  Users2,
  Map,
  ExternalLink,
  Clock,
  Zap,
  Shield,
  Smartphone,
  Star,
  Quote
} from 'lucide-react'

export default function Portfolio() {
  const t = useTranslations()
  
  const ecosystemItems = [
    {
      key: 'holiday',
      icon: Calendar,
      color: 'bg-blue-50 text-blue-600',
      status: 'live',
      url: 'https://holiday.forpublic.id'
    },
    {
      key: 'budget',
      icon: DollarSign,
      color: 'bg-green-50 text-green-600',
      status: 'coming-soon'
    },
    {
      key: 'salary',
      icon: Users2,
      color: 'bg-purple-50 text-purple-600',
      status: 'coming-soon'
    },
    {
      key: 'plan',
      icon: Map,
      color: 'bg-orange-50 text-orange-600',
      status: 'coming-soon'
    },
  ]

  const achievements = t.raw('portfolio.achievements.items')
  const testimonials = t.raw('portfolio.testimonials.items')

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-gray-900 border-gray-300 bg-gray-100">
            <Star className="w-4 h-4 mr-2" />
            Our Work
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </div>

        {/* ForPublic.id Ecosystem */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('portfolio.ecosystem.title')}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ecosystemItems.map((item) => {
              const Icon = item.icon
              const isLive = item.status === 'live'
              
              return (
                <Card key={item.key} className="p-8 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all group">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center space-x-2">
                      {isLive ? (
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          Live
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-gray-600 border-gray-300">
                          <Clock className="w-3 h-3 mr-1" />
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {t(`portfolio.ecosystem.items.${item.key}.title`)}
                  </h4>
                  
                  <p className="text-gray-600 mb-4">
                    {t(`portfolio.ecosystem.items.${item.key}.description`)}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 text-sm mb-2">
                      <Users2 className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">Impact: {t(`portfolio.ecosystem.items.${item.key}.impact`)}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {t.raw(`portfolio.ecosystem.items.${item.key}.tech`).map((tech: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs text-gray-600 border-gray-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {isLive && item.url && (
                    <div className="pt-4 border-t border-gray-100">
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-gray-700 font-medium text-sm flex items-center group"
                      >
                        Visit Live App
                        <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>

        {/* Technical Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('portfolio.achievements.title')}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement: { metric: string; label: string; description: string }, index: number) => {
              const icons = [Clock, Zap, Smartphone, Shield]
              const Icon = icons[index] || Clock
              
              return (
                <Card key={index} className="p-6 text-center bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {achievement.metric}
                  </div>
                  <div className="font-semibold text-gray-900 mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('portfolio.testimonials.title')}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial: { quote: string; author: string; role: string; organization: string }, index: number) => (
              <Card key={index} className="p-8 bg-gray-50 border-0 relative">
                <Quote className="w-8 h-8 text-gray-400 mb-4" />
                <p className="text-gray-700 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users2 className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.organization}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}