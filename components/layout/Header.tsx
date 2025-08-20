'use client'

import { Button } from '@/components/ui/Button'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { Link } from '@/i18n/routing'
import Image from 'next/image'

interface HeaderProps {
  currentLocale: string
}

export default function Header({ currentLocale }: HeaderProps) {

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-90 transition-opacity duration-200"
        >
          <div className="w-8 h-8 flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="ForPublic.id Logo"
              width={32}
              height={32}
              className="w-full h-full"
              priority
              unoptimized
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xl font-bold text-gray-900 whitespace-nowrap">
              {currentLocale === 'id' ? 'ForPublic.id Studio' : 'ForPublic.id Studio'}
            </span>
            <span className="text-xs text-gray-600 font-medium whitespace-nowrap">
              {currentLocale === 'id' ? 'Layanan Pengembangan Software' : 'Software Development Services'}
            </span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <span className="whitespace-nowrap">
              {currentLocale === 'id' ? 'Beranda' : 'Home'}
            </span>
          </Link>
          <Link 
            href="/work" 
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <span className="whitespace-nowrap">
              {currentLocale === 'id' ? 'Portfolio' : 'Work'}
            </span>
          </Link>
          <Link 
            href="/about" 
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <span className="whitespace-nowrap">
              {currentLocale === 'id' ? 'Tentang' : 'About'}
            </span>
          </Link>
          <Link 
            href="/how-we-work" 
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <span className="whitespace-nowrap">
              {currentLocale === 'id' ? 'Cara Kerja' : 'How We Work'}
            </span>
          </Link>
          
          <LanguageSwitcher currentLocale={currentLocale} />
          
          <Button
            variant="outline"
            size="sm"
            className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
            asChild
          >
            <a href="#contact">
              {currentLocale === 'id' ? 'Kontak' : 'Contact'}
            </a>
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