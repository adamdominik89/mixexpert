import { notFound } from 'next/navigation'
import { Language } from '@/lib/languages'
import { getHomePage } from '@/lib/sanity.queries'
import Hero from '@/components/Hero'
import CategoryGrid from '@/components/CategoryGrid'
import PortableText from '@/components/PortableText'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const homePage = await getHomePage(lang as Language)

  if (!homePage) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      {homePage.hero && <Hero hero={homePage.hero} />}

      {/* About Section */}
      {homePage.aboutSection && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {homePage.aboutSection.title}
                </h2>
                {homePage.aboutSection.subtitle && (
                  <div className="inline-block">
                    <h3 className="text-2xl font-semibold text-primary-600 border-b-4 border-primary-600 pb-2">
                      {homePage.aboutSection.subtitle}
                    </h3>
                  </div>
                )}
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
                {homePage.aboutSection.image?.image && (
                  <div className="float-right ml-8 mb-4 w-full md:w-1/3">
                    <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={urlFor(homePage.aboutSection.image.image).width(600).url()}
                        alt={homePage.aboutSection.image.alt || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                
                {homePage.aboutSection.description && (
                  <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                    <PortableText value={homePage.aboutSection.description} />
                  </div>
                )}

                {homePage.aboutSection.additionalContent && (
                  <div className="mt-6 text-lg text-gray-700 leading-relaxed space-y-4">
                    <PortableText value={homePage.aboutSection.additionalContent} />
                  </div>
                )}

                {homePage.aboutSection.ctaText && homePage.aboutSection.ctaLink && (
                  <div className="text-center mt-10 clear-both">
                    <a
                      href={`/${lang}${homePage.aboutSection.ctaLink}`}
                      className="inline-block bg-primary-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      {homePage.aboutSection.ctaText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Offer Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {homePage.offerTitle}
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          <CategoryGrid
            categories={homePage.categoryCards}
            currentLanguage={lang as Language}
          />
        </div>
      </section>
    </>
  )
}
