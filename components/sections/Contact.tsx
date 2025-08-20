'use client'

import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { 
  Mail,
  Clock,
  Globe,
  MapPin,
  CheckCircle,
  Send,
  Github,
  Twitter,
  Linkedin,
  MessageSquare,
  Calendar
} from 'lucide-react'

export default function Contact() {
  const t = useTranslations()
  
  const consultationFeatures = t.raw('contact.consultation.features')
  
  const organizationTypes = [
    { value: 'government', label: t('contact.form.fields.type.options.government') },
    { value: 'ngo', label: t('contact.form.fields.type.options.ngo') },
    { value: 'international', label: t('contact.form.fields.type.options.international') },
    { value: 'civic', label: t('contact.form.fields.type.options.civic') },
    { value: 'other', label: t('contact.form.fields.type.options.other') },
  ]

  const budgetRanges = [
    { value: 'small', label: t('contact.form.fields.budget.options.small') },
    { value: 'medium', label: t('contact.form.fields.budget.options.medium') },
    { value: 'large', label: t('contact.form.fields.budget.options.large') },
    { value: 'enterprise', label: t('contact.form.fields.budget.options.enterprise') },
    { value: 'grant', label: t('contact.form.fields.budget.options.grant') },
    { value: 'discuss', label: t('contact.form.fields.budget.options.discuss') },
  ]

  const timelines = [
    { value: 'urgent', label: t('contact.form.fields.timeline.options.urgent') },
    { value: 'fast', label: t('contact.form.fields.timeline.options.fast') },
    { value: 'normal', label: t('contact.form.fields.timeline.options.normal') },
    { value: 'flexible', label: t('contact.form.fields.timeline.options.flexible') },
    { value: 'discuss', label: t('contact.form.fields.timeline.options.discuss') },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-red-600 border-red-200 bg-red-50">
            <MessageSquare className="w-4 h-4 mr-2" />
            Let&apos;s Work Together
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info & Consultation */}
          <div className="lg:col-span-1">
            {/* Free Consultation */}
            <Card className="p-8 bg-gradient-to-br from-red-50 to-red-100 border-red-200 mb-8">
              <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('contact.consultation.title')}
              </h3>
              <p className="text-gray-700 mb-6">
                {t('contact.consultation.description')}
              </p>
              
              <div className="space-y-3 mb-6">
                {consultationFeatures.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                {t('contact.form.booking.title')}
              </Button>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-gray-50 border-0">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{t('contact.info.email')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{t('contact.info.response')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{t('contact.info.availability')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{t('contact.info.timezone')}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  {t('contact.social.title')}
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/forpublic-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors"
                    title={t('contact.social.links.github')}
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors"
                    title={t('contact.social.links.linkedin')}
                  >
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href="https://x.com/forpublicid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors"
                    title={t('contact.social.links.twitter')}
                  >
                    <Twitter className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Partnership Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.form.title')}
              </h3>
              
              <form className="space-y-6">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.name.label')}
                    </label>
                    <Input
                      type="text"
                      placeholder={t('contact.form.fields.name.placeholder')}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.email.label')}
                    </label>
                    <Input
                      type="email"
                      placeholder={t('contact.form.fields.email.placeholder')}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.organization.label')}
                    </label>
                    <Input
                      type="text"
                      placeholder={t('contact.form.fields.organization.placeholder')}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.role.label')}
                    </label>
                    <Input
                      type="text"
                      placeholder={t('contact.form.fields.role.placeholder')}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Organization Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.fields.type.label')}
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                    {organizationTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.fields.project.label')}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t('contact.form.fields.project.placeholder')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Budget & Timeline */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.budget.label')}
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.timeline.label')}
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                      {timelines.map((timeline) => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-medium"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.form.submit')}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}