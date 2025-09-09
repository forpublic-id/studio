'use client'

import { Button } from '@/components/ui/Button'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/Sheet'
import { Link } from '@/i18n/routing'
import { useMobileMenu } from '@/lib/store/useAppStore'
import Image from 'next/image'
import { Menu } from 'lucide-react'

interface HeaderProps {
  currentLocale: string
}

export default function Header({ currentLocale }: HeaderProps) {
  const { isOpen: isMobileMenuOpen, setOpen: setIsMobileMenuOpen } = useMobileMenu()

  const navigationItems = [
    { href: '/', label: currentLocale === 'id' ? 'Beranda' : 'Home' },
    { href: '/work', label: currentLocale === 'id' ? 'Portfolio' : 'Work' },
    { href: '/about', label: currentLocale === 'id' ? 'Tentang' : 'About' },
    { href: '/how-we-work', label: currentLocale === 'id' ? 'Cara Kerja' : 'How We Work' },
  ]

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
              ForPublic.id Studio
            </span>
            <span className="text-xs text-gray-600 font-medium whitespace-nowrap">
              {currentLocale === 'id' ? 'Layanan Pengembangan Software' : 'Software Development Services'}
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href as '/'}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <span className="whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
          
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
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                aria-label="Open mobile menu"
                className="p-2"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-96">
              <SheetHeader className="text-left">
                <SheetTitle className="text-lg font-bold">
                  {currentLocale === 'id' ? 'Menu' : 'Menu'}
                </SheetTitle>
              </SheetHeader>
              
              <div className="mt-6 space-y-4">
                {navigationItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href as '/'}
                      className="block px-4 py-2 text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                
                <div className="border-t pt-4 mt-6">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm text-gray-600">
                      {currentLocale === 'id' ? 'Bahasa' : 'Language'}
                    </span>
                    <LanguageSwitcher currentLocale={currentLocale} />
                  </div>
                </div>
                
                <div className="pt-4">
                  <SheetClose asChild>
                    <Button
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                      asChild
                    >
                      <a 
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {currentLocale === 'id' ? 'Kontak Kami' : 'Contact Us'}
                      </a>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}