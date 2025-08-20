import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['id', 'en'],
  defaultLocale: 'id',
  pathnames: {
    '/': '/',
    '/services': '/services',
    '/portfolio': '/portfolio', 
    '/about': '/about',
    '/contact': '/contact'
  }
})

export type Pathnames = keyof typeof routing.pathnames
export type Locale = (typeof routing.locales)[number]

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)