export type Language = 'pl' | 'en' | 'de' | 'fr' | 'pt' | 'ru' | 'zh'

export const languages: Language[] = ['pl', 'en', 'de', 'fr', 'pt', 'ru', 'zh']

export const languageNames: Record<Language, string> = {
  pl: 'Polski',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  pt: 'Português',
  ru: 'Русский',
  zh: '中文',
}

export const defaultLanguage: Language = 'pl'

export function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language)
}
