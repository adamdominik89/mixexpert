import { Language } from '@/lib/languages'
import SectionRenderer from '@/components/SectionRenderer'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  // Hero section
  const heroData = {
    _type: 'heroSection',
    _key: 'hero',
    title: 'Mix Expert',
    subtitle: {
      pl: 'Producent wysokiej jakości koncentratów spożywczych na eksport od 1985 roku',
      en: 'Producer of high-quality food concentrates for export since 1985',
      de: 'Hersteller hochwertiger Lebensmittelkonzentrate für den Export seit 1985',
      fr: 'Producteur de concentrés alimentaires de haute qualité pour l\'exportation depuis 1985',
      pt: 'Produtor de concentrados alimentares de alta qualidade para exportação desde 1985',
      ru: 'Производитель высококачественных пищевых концентратов на экспорт с 1985 года',
      zh: '自1985年以来生产用于出口的高质量食品浓缩物',
    }[lang as Language],
  }

  // Company description
  const textData = {
    _type: 'textSection',
    _key: 'about',
    heading: {
      pl: 'Mix Expert - Jakość naszą pasją',
      en: 'Mix Expert - Quality as Our Passion',
      de: 'Mix Expert - Qualität als unsere Leidenschaft',
      fr: 'Mix Expert - La qualité comme notre passion',
      pt: 'Mix Expert - Qualidade como nossa paixão',
      ru: 'Mix Expert - Качество - наша страсть',
      zh: 'Mix Expert - 质量是我们的热情',
    }[lang as Language],
    content: [
      {_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', marks: ['strong'], text: lang === 'pl' ? 'Mix Expert - producent wafli do lodów, jako przedsiębiorstwo rodzinne istnieje w branży lodziarskiej, cukierniczej i piekarniczej od 1985r.' : 'Mix Expert - manufacturer of ice cream cones is a family company which has existed in the confectionery and baking sector since 1985.'}]},
      {_type: 'block', _key: 'b2', style: 'normal', children: [{_type: 'span', _key: 's2', text: lang === 'pl' ? 'W miarę upływu czasu spostrzegliśmy zmieniające się tendencje rynku i od 1996 roku jesteśmy producentem szerokiej gamy koncentratów spożywczych w proszku.' : 'As time went by, we noticed the changing market trends and since 1996 we have manufactured a wide selection of food powder concentrates.'}]},
      {_type: 'block', _key: 'b3', style: 'normal', children: [{_type: 'span', _key: 's3', marks: ['strong'], text: lang === 'pl' ? 'Nasze produkty są kierowane głównie na rynek eksportowy.' : 'Our products are primarily targeted at the export market.'}]},
    ],
    alignment: 'left',
  }

  const sections = [heroData, textData]

  return <SectionRenderer sections={sections} lang={lang as Language} />
}
