'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, Code2, Users, Zap } from 'lucide-react'
import { Link } from '@/i18n/routing'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-32 md:py-48 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <Badge 
              variant="outline" 
              className="text-gray-900 border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium"
            >
              <Code2 className="w-4 h-4 mr-2" />
              {t('badge')}
            </Badge>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            {t('title')}
            <span className="text-gray-900 relative block mt-2">
              {t('titleHighlight')}
              <svg
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-md h-3 text-gray-300"
                viewBox="0 0 100 12"
                fill="currentColor"
                preserveAspectRatio="none"
              >
                <path d="M0 8c30-6 70-6 100 0v4H0z" opacity="0.6" />
              </svg>
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium group"
              asChild
            >
              <a href="#contact">
                {t('cta.partnership')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium"
              asChild
            >
              <Link href="/work">
                {t('cta.viewWork')}
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Features preview */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Government & NGO
            </h3>
            <p className="text-sm text-gray-600">
              Specialized solutions for public sector organizations
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Open Source First
            </h3>
            <p className="text-sm text-gray-600">
              Transparent, community-driven development approach
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              High Impact
            </h3>
            <p className="text-sm text-gray-600">
              Technology solutions that create real social change
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}