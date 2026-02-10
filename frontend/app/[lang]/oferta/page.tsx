import { notFound } from 'next/navigation'
import { Language } from '@/lib/languages'
import { getOfferPage } from '@/lib/sanity.queries'
import CategoryGrid from '@/components/CategoryGrid'

export default async function OfferPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const offerPage = await getOfferPage(lang as Language)

  if (!offerPage) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          {offerPage.title}
        </h1>
        
        {offerPage.description && (
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            {offerPage.description}
          </p>
        )}

        <CategoryGrid
          categories={offerPage.categoryCards}
          currentLanguage={lang as Language}
        />
      </div>
    </div>
  )
}
