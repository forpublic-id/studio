'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Button } from './Button'
import { Globe } from 'lucide-react'
import { useTransition } from 'react'

const languages = [
  { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
]

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  // Use prop instead of hook to ensure sync with server
  const locale = currentLocale

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      // Remove current locale from pathname and add new one
      const segments = pathname.split('/').filter(Boolean)

      // Remove existing locale if present
      if (segments.length > 0 && ['id', 'en'].includes(segments[0])) {
        segments.shift()
      }

      // Create new path with new locale
      const newPath = `/${newLocale}${segments.length > 0 ? '/' + segments.join('/') : ''}`

      // Use Next.js navigation
      router.push(newPath)
      router.refresh()
    })
  }

  const currentLanguage = languages.find(lang => lang.code === locale)

  return (
    <div className="relative group">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 border-gray-200 hover:border-gray-600 bg-transparent"
        disabled={isPending}
        aria-label={`Current language: ${currentLanguage?.name}. Click to change language`}
        aria-haspopup="true"
        aria-expanded="false"
        role="button"
      >
        <Globe className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline">{isPending ? 'Loading...' : currentLanguage?.name}</span>
        <span className="sm:hidden" role="img" aria-label={currentLanguage?.name}>
          {currentLanguage?.flag}
        </span>
      </Button>

      <div 
        className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[140px]"
        role="menu"
        aria-label="Language selection menu"
      >
        {languages.map(language => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            disabled={isPending || locale === language.code}
            className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex items-center gap-2 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-inset ${
              locale === language.code ? 'bg-gray-50 text-gray-900' : 'text-gray-700'
            }`}
            role="menuitem"
            aria-current={locale === language.code ? 'true' : 'false'}
            tabIndex={0}
          >
            <span role="img" aria-label={`${language.name} flag`}>
              {language.flag}
            </span>
            <span>{language.name}</span>
            {locale === language.code && (
              <span className="ml-auto" aria-hidden="true">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}