'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, Code2, Users, Zap } from 'lucide-react'

export default function Hero() {
  const t = useTranslations()

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 md:py-32 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-6">
            <Badge 
              variant="outline" 
              className="text-red-600 border-red-200 bg-red-50 px-4 py-2 text-sm font-medium"
            >
              <Code2 className="w-4 h-4 mr-2" />
              {t('hero.badge')}
            </Badge>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {t('hero.title')}{' '}
            <span className="text-red-600 relative">
              {t('hero.titleHighlight')}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-red-200"
                viewBox="0 0 100 12"
                fill="currentColor"
                preserveAspectRatio="none"
              >
                <path d="M0 8c30-6 70-6 100 0v4H0z" opacity="0.6" />
              </svg>
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium group"
              asChild
            >
              <a href="#contact">
                {t('hero.cta.partnership')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium"
              asChild
            >
              <a href="#portfolio">
                {t('hero.cta.viewWork')}
              </a>
            </Button>
          </div>
        </div>
        
        {/* Features preview */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Government & NGO</h3>
            <p className="text-sm text-gray-600">Specialized solutions for public sector organizations</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Open Source First</h3>
            <p className="text-sm text-gray-600">Transparent, community-driven development approach</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">High Impact</h3>
            <p className="text-sm text-gray-600">Technology solutions that create real social change</p>
          </div>
        </div>
      </div>
    </section>
  )
}