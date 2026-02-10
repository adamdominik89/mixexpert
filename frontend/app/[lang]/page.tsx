import { notFound } from 'next/navigation'
import { Language } from '@/lib/languages'
import { getHomePage } from '@/lib/sanity.queries'
import SectionRenderer from '@/components/SectionRenderer'

// Revalidate every 60 seconds
export const revalidate = 60

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

  // If no sections in CMS, show basic content
  if (!homePage.sections || homePage.sections.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center">Mix Expert</h1>
        <p className="text-center mt-4 text-gray-600">Content being configured in Sanity Studio</p>
      </div>
    )
  }

  return <SectionRenderer sections={homePage.sections} lang={lang as Language} />
}
