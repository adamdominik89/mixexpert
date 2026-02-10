import { notFound } from 'next/navigation'
import { Language } from '@/lib/languages'
import { getProductCategories } from '@/lib/sanity.queries'
import CategoryGrid from '@/components/CategoryGrid'

export default async function OfferPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const categories = await getProductCategories(lang as Language)

  const titles: Record<Language, string> = {
    pl: 'Nasza Oferta Eksportowa',
    en: 'Our Export Offer',
    de: 'Unser Exportangebot',
    fr: 'Notre Offre d\'Exportation',
    pt: 'Nossa Oferta de Exportação',
    ru: 'Наше экспортное предложение',
    zh: '我们的出口产品',
  }

  return (
    <div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-gray-900">
            {titles[lang as Language]}
          </h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <CategoryGrid categories={categories} currentLanguage={lang as Language} />
        </div>
      </section>
    </div>
  )
}
