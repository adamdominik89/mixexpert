import { notFound } from 'next/navigation'
import { Language } from '@/lib/languages'
import { getOfferPage, getProductCategories } from '@/lib/sanity.queries'
import CategoryGrid from '@/components/CategoryGrid'
import SectionRenderer from '@/components/SectionRenderer'

// Revalidate every 60 seconds
export const revalidate = 60

export default async function OfferPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const [offerPage, categories] = await Promise.all([
    getOfferPage(lang as Language),
    getProductCategories(lang as Language),
  ])

  if (!offerPage) {
    notFound()
  }

  return (
    <div>
      {offerPage.title && (
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-gray-900">
              {offerPage.title}
            </h1>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
        </div>
      )}

      {offerPage.sections && offerPage.sections.length > 0 ? (
        <SectionRenderer 
          sections={offerPage.sections} 
          lang={lang as Language}
          categories={categories}
        />
      ) : (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <CategoryGrid categories={categories} currentLanguage={lang as Language} />
          </div>
        </section>
      )}
    </div>
  )
}
