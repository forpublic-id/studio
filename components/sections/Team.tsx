'use client'

import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { 
  Code,
  Palette,
  BarChart3,
  Server,
  Users,
  Github,
  Heart,
  Mic,
  CheckCircle,
  ExternalLink
} from 'lucide-react'

export default function Team() {
  const t = useTranslations()
  
  const competencies = t.raw('team.competencies.items')
  const expertise = t.raw('team.expertise')
  const openSourceContributions = t.raw('team.openSource.contributions')
  const communityActivities = t.raw('team.community.activities')

  const competencyIcons = [Code, Palette, BarChart3, Server]
  
  const techCategories = [
    { key: 'frontend', icon: Code, color: 'bg-blue-50 text-blue-600' },
    { key: 'backend', icon: Server, color: 'bg-green-50 text-green-600' },
    { key: 'data', icon: BarChart3, color: 'bg-purple-50 text-purple-600' },
    { key: 'infrastructure', icon: Server, color: 'bg-orange-50 text-orange-600' },
  ]

  return (
    <section id="team" className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-gray-900 border-gray-300 bg-gray-100">
            <Users className="w-4 h-4 mr-2" />
            Our Expertise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('team.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('team.description')}
          </p>
        </div>

        {/* Core Competencies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('team.competencies.title')}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {competencies.map((competency: { title: string; description: string; tech: string[] }, index: number) => {
              const Icon = competencyIcons[index] || Code
              
              return (
                <Card key={index} className="p-8 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gray-100 text-gray-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {competency.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {competency.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {competency.tech.map((tech: string, techIndex: number) => (
                          <Badge key={techIndex} variant="outline" className="text-xs text-gray-600 border-gray-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Technology Expertise */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('team.expertise.title')}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('team.expertise.description')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {techCategories.map((category) => {
                const Icon = category.icon
                const items = expertise[category.key].items
                
                return (
                  <div key={category.key} className="text-center">
                    <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-4">
                      {expertise[category.key].title}
                    </h4>
                    <div className="space-y-2">
                      {items.map((item: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs text-gray-600 border-gray-200 block">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Open Source & Community */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Open Source Contributions */}
          <Card className="p-8 bg-white border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t('team.openSource.title')}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {t('team.openSource.description')}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {openSourceContributions.map((contribution: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{contribution}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6 mt-6 border-t border-gray-100">
              <a 
                href="https://github.com/forpublic-id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center group"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </Card>

          {/* Community Involvement */}
          <Card className="p-8 bg-white border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t('team.community.title')}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {t('team.community.description')}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {communityActivities.map((activity: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Mic className="w-3 h-3" />
                  </div>
                  <span className="text-gray-700 text-sm">{activity}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our expertise can help your organization create meaningful impact through technology.
          </p>
          <button className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-3 rounded-xl font-medium transition-colors">
            Start a Partnership
          </button>
        </div>
      </div>
    </section>
  )
}