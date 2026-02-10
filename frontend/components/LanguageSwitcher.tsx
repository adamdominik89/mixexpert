'use client'

import { usePathname, useRouter } from 'next/navigation'
import { languages, languageNames, Language } from '@/lib/languages'
import { useState, useRef, useEffect } from 'react'

interface LanguageSwitcherProps {
  currentLanguage: Language
}

const languageFlags: Record<Language, string> = {
  pl: '🇵🇱',
  en: '🇬🇧',
  de: '🇩🇪',
  fr: '🇫🇷',
  pt: '🇵🇹',
  ru: '🇷🇺',
  zh: '🇨🇳',
}

export default function LanguageSwitcher({ currentLanguage }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleLanguageChange = (newLanguage: Language) => {
    const pathWithoutLang = pathname.replace(/^\/(pl|en|de|fr|pt|ru|zh)/, '')
    const newPath = `/${newLanguage}${pathWithoutLang}`
    router.push(newPath)
    setIsOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition-colors"
        aria-label="Select language"
      >
        <span className="text-2xl">{languageFlags[currentLanguage]}</span>
        <span className="font-semibold text-gray-700">{languageNames[currentLanguage]}</span>
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 z-50">
          {languages.map((lang: Language) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                lang === currentLanguage
                  ? 'bg-primary-50 text-primary-700 font-semibold'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <span className="text-2xl">{languageFlags[lang]}</span>
              <span className="flex-1">{languageNames[lang]}</span>
              {lang === currentLanguage && (
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
