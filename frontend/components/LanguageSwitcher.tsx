'use client'

import { usePathname, useRouter } from 'next/navigation'
import { languages, languageNames, Language } from '@/lib/languages'

interface LanguageSwitcherProps {
  currentLanguage: Language
}

export default function LanguageSwitcher({ currentLanguage }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLanguageChange = (newLanguage: Language) => {
    // Remove the current language prefix and add the new one
    const pathWithoutLang = pathname.replace(/^\/(pl|en|de)/, '')
    const newPath = `/${newLanguage}${pathWithoutLang}`
    router.push(newPath)
  }

  return (
    <div className="flex gap-2">
      {languages.map((lang: Language) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            lang === currentLanguage
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          aria-label={`Switch to ${languageNames[lang]}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
