import Link from 'next/link'
import Image from 'next/image'
import { Language } from '@/lib/languages'
import { SiteSettings } from '@/lib/types'
import { urlFor } from '@/lib/sanity.image'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps {
  settings: SiteSettings
  currentLanguage: Language
}

export default function Header({ settings, currentLanguage }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-primary-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href={`/${currentLanguage}`} className="flex items-center hover:opacity-80 transition-opacity">
            {settings.logo?.image ? (
              <Image
                src={urlFor(settings.logo.image).width(220).url()}
                alt={settings.logo.alt || settings.siteName}
                width={220}
                height={70}
                className="h-14 w-auto"
              />
            ) : (
              <span className="text-3xl font-extrabold text-primary-600 tracking-tight">
                {settings.siteName}
              </span>
            )}
          </Link>

          {/* Phone */}
          <div className="hidden lg:flex items-center gap-3 bg-primary-50 px-6 py-3 rounded-lg">
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a
              href={`tel:${settings.phone}`}
              className="text-xl font-bold text-primary-700 hover:text-primary-800 transition-colors"
            >
              {settings.phone}
            </a>
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher currentLanguage={currentLanguage} />
        </div>

        {/* Navigation */}
        {settings.navigationItems && (
          <nav className="border-t border-gray-100 py-4">
            <ul className="flex flex-wrap gap-8 justify-center">
              {settings.navigationItems.map((item: any, index: number) => (
                <li key={index}>
                  <Link
                    href={`/${currentLanguage}${item.href}`}
                    className="text-gray-700 hover:text-primary-600 font-bold text-lg transition-all hover:scale-105 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
