import Link from 'next/link'
import Image from 'next/image'
import { CategoryCard } from '@/lib/types'
import { urlFor } from '@/lib/sanity.image'
import { Language } from '@/lib/languages'

interface CategoryGridProps {
  categories: CategoryCard[]
  currentLanguage: Language
}

export default function CategoryGrid({ categories, currentLanguage }: CategoryGridProps) {
  // Sort by order if available
  const sortedCategories = [...categories].sort((a, b) => 
    (a.order || 0) - (b.order || 0)
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedCategories.map((category: CategoryCard, index: number) => (
        <Link
          key={index}
          href={`/${currentLanguage}${category.link}`}
          className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {category.image?.image ? (
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={urlFor(category.image.image).width(500).height(375).url()}
                alt={category.image.alt || category.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ) : (
            <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 flex items-center justify-center">
              <div className="text-6xl group-hover:scale-110 transition-transform duration-300">📦</div>
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 min-h-[3.5rem]">
              {category.title}
            </h3>
            {category.description && (
              <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                {category.description}
              </p>
            )}
            <div className="mt-4 inline-flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
              <span>Zobacz więcej</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
