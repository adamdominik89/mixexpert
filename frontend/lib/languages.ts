export type Language = 'pl' | 'en' | 'de'

export const languages: Language[] = ['pl', 'en', 'de']

export const languageNames: Record<Language, string> = {
  pl: 'Polski',
  en: 'English',
  de: 'Deutsch',
}

export const defaultLanguage: Language = 'pl'

export function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language)
}
