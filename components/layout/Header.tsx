'use client'

import { Button } from '@/components/ui/Button'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Image from 'next/image'

export default function Header() {
  const t = useTranslations()

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8">
            <Image
              src="/logo.svg"
              alt="ForPublic.id Logo"
              width={32}
              height={32}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900">
              ForPublic<span className="text-red-600">.id</span>
            </span>
            <span className="text-xs text-gray-600 -mt-1">Studio</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-red-600 transition-colors"
          >
            {t('header.nav.home')}
          </Link>
          <a 
            href="#services" 
            className="text-gray-600 hover:text-red-600 transition-colors"
          >
            {t('header.nav.services')}
          </a>
          <a 
            href="#portfolio" 
            className="text-gray-600 hover:text-red-600 transition-colors"
          >
            {t('header.nav.portfolio')}
          </a>
          <a 
            href="#about" 
            className="text-gray-600 hover:text-red-600 transition-colors"
          >
            {t('header.nav.about')}
          </a>
          
          <LanguageSwitcher />
          
          <Button
            variant="outline"
            size="sm"
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
            asChild
          >
            <a href="#contact">{t('header.nav.contact')}</a>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}