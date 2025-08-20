export const routes = {
  home: (locale: string) => `/${locale}`,
  applications: (locale: string) => `/${locale}/applications`,
  notFound: (locale: string) => `/${locale}/not-found`,
  // API routes
  api: {
    health: '/api/health',
    analytics: '/api/analytics',
  },
  // External links
  external: {
    github: 'https://github.com/forpublic-id',
    x: 'https://x.com/forpublicid',
    email: 'mailto:forpublic.indonesia@gmail.com',
  },
  // Page sections (hash links)
  sections: {
    hero: '#hero',
    applications: '#applications',
    features: '#features',
    about: '#about',
    contact: '#contact',
  },
} as const

export const supportedLocales = ['id', 'en'] as const
export const defaultLocale = 'id' as const

export type Locale = (typeof supportedLocales)[number]
export type RouteKey = keyof typeof routes
export type SectionKey = keyof typeof routes.sections
