import CategoryGrid from '../CategoryGrid'
import { Language } from '@/lib/languages'

interface CategoryGridSectionProps {
  section: {
    heading?: string
    showCategories?: boolean
  }
  categories: any[]
  lang: Language
}

export default function CategoryGridSection({ section, categories, lang }: CategoryGridSectionProps) {
  if (!section.showCategories) return null

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {section.heading && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {section.heading}
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
        )}
        <CategoryGrid categories={categories} currentLanguage={lang} />
      </div>
    </section>
  )
}
