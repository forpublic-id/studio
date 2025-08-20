'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Github, Twitter, Linkedin } from 'lucide-react'

interface FooterProps {
  variant?: 'full' | 'simple'
  className?: string
}

export default function Footer({ variant = 'full', className = '' }: FooterProps) {

  if (variant === 'simple') {
    return (
      <footer className={`bg-gray-900 text-white py-8 px-4 md:px-6 lg:px-8 ${className}`}>
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6">
              <Image
                src="/logo.svg"
                alt="ForPublic.id Logo"
                width={24}
                height={24}
                className="w-full h-full"
              />
            </div>
            <span className="text-lg font-bold">
              ForPublic<span className="text-white">.id</span>
              <span className="text-sm text-gray-400 ml-1">Studio</span>
            </span>
          </div>
          <p className="text-sm text-gray-300">
            © 2025 ForPublic.id Studio. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }

  return (
    <footer className={`bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
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
                <span className="text-xl font-bold">
                  ForPublic<span className="text-white">.id</span>
                </span>
                <span className="text-xs text-gray-400 -mt-1">Studio</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">Professional software development services for public good organizations</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/how-we-work"
                  className="hover:text-white transition-colors"
                >
                  Professional Services
                </Link>
              </li>
              <li>
                <a
                  href="#collaborate"
                  className="hover:text-white transition-colors"
                >
                  Non-Profit Collaboration
                </a>
              </li>
              <li>
                <Link
                  href="/how-we-work"
                  className="hover:text-white transition-colors"
                >
                  Custom Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-white transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300 mb-4">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/forpublic-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Open Source
                </a>
              </li>
              <li>
                <a 
                  href="https://forpublic.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Main Website
                </a>
              </li>
            </ul>
            
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/forpublic-id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/forpublicid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-sm text-gray-300">
              <p>studio@forpublic.id</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>© 2025 ForPublic.id Studio. All rights reserved. Made with ❤️ for public good.</p>
        </div>
      </div>
    </footer>
  )
}