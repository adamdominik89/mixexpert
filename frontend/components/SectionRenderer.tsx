import { Language } from '@/lib/languages'
import HeroSection from './sections/HeroSection'
import TextSection from './sections/TextSection'
import CategoryGridSection from './sections/CategoryGridSection'

interface SectionRendererProps {
  sections: any[]
  lang: Language
  categories?: any[]
}

export default function SectionRenderer({ sections, lang, categories = [] }: SectionRendererProps) {
  if (!sections || !Array.isArray(sections)) return null

  return (
    <>
      {sections.map((section: any, index: number) => {
        const key = section._key || `section-${index}`

        switch (section._type) {
          case 'heroSection':
            return <HeroSection key={key} section={section} lang={lang} />
          
          case 'textSection':
            return <TextSection key={key} section={section} />
          
          case 'categoryGridSection':
            return <CategoryGridSection key={key} section={section} categories={categories} lang={lang} />
          
          default:
            console.warn(`Unknown section type: ${section._type}`)
            return null
        }
      })}
    </>
  )
}
