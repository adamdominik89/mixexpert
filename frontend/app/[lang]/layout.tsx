import { notFound } from 'next/navigation'
import { isValidLanguage, Language } from '@/lib/languages'
import { getSiteSettings, getBrands, getPartners } from '@/lib/sanity.queries'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  
  if (!isValidLanguage(lang)) {
    notFound()
  }

  const [settings, brands, partners] = await Promise.all([
    getSiteSettings(lang as Language),
    getBrands(lang as Language),
    getPartners(),
  ])

  if (!settings) {
    notFound()
  }

  return (
    <>
      <Script id="set-lang" strategy="beforeInteractive">
        {`document.documentElement.lang = '${lang}';`}
      </Script>
      <Header settings={settings} currentLanguage={lang as Language} />
      <main className="min-h-screen">{children}</main>
      <Footer settings={settings} brands={brands} partners={partners} />
    </>
  )
}

export async function generateStaticParams() {
  return [
    { lang: 'pl' },
    { lang: 'en' },
    { lang: 'de' },
  ]
}
