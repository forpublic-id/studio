'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { Button } from './Button'

const languages = [
  { code: 'id', label: 'ID', flag: '🇮🇩' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale })
  }

  // const currentLanguage = languages.find((lang) => lang.code === locale)

  return (
    <div className="flex space-x-1 border border-gray-200 rounded-lg p-1">
      {languages.map((language) => (
        <Button
          key={language.code}
          variant={locale === language.code ? 'default' : 'ghost'}
          size="sm"
          onClick={() => handleLanguageChange(language.code)}
          className={`text-xs px-2 py-1 min-w-[40px] ${
            locale === language.code 
              ? 'bg-red-600 text-white hover:bg-red-700' 
              : 'text-gray-600 hover:text-red-600'
          }`}
        >
          <span className="mr-1">{language.flag}</span>
          {language.label}
        </Button>
      ))}
    </div>
  )
}