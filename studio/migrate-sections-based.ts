import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'y0cdogbw',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_IMPORT_TOKEN,
  apiVersion: '2024-01-01',
})

async function migratToSections() {
  console.log('🔄 Migrating to sections-based system...')

  // Update Homepage - sections with company description (export focus)
  await client.createOrReplace({
    _id: 'homePage-main',
    _type: 'homePage',
    title: 'Mix Expert Homepage',
    slug: {_type: 'slug', current: 'home'},
    sections: [
      {
        _type: 'heroSection',
        _key: 'hero1',
        title: {
          _type: 'localizedString',
          pl: 'Mix Expert',
          en: 'Mix Expert',
          de: 'Mix Expert',
          fr: 'Mix Expert',
          pt: 'Mix Expert',
          ru: 'Mix Expert',
          zh: 'Mix Expert',
        },
        subtitle: {
          _type: 'localizedString',
          pl: 'Producent wysokiej jakości koncentratów spożywczych na eksport od 1985 roku',
          en: 'Producer of high-quality food concentrates for export since 1985',
          de: 'Hersteller hochwertiger Lebensmittelkonzentrate für den Export seit 1985',
          fr: 'Producteur de concentrés alimentaires de haute qualité pour l\'exportation depuis 1985',
          pt: 'Produtor de concentrados alimentares de alta qualidade para exportação desde 1985',
          ru: 'Производитель высококачественных пищевых концентратов на экспорт с 1985 года',
          zh: '自1985年以来生产用于出口的高质量食品浓缩物',
        },
      },
      {
        _type: 'textSection',
        _key: 'about1',
        heading: {
          _type: 'localizedString',
          pl: 'Mix Expert - Jakość naszą pasją',
          en: 'Mix Expert - Quality as Our Passion',
          de: 'Mix Expert - Qualität als unsere Leidenschaft',
          fr: 'Mix Expert - La qualité comme notre passion',
          pt: 'Mix Expert - Qualidade como nossa paixão',
          ru: 'Mix Expert - Качество - наша страсть',
          zh: 'Mix Expert - 质量是我们的热情',
        },
        content: {
          _type: 'localizedRichText',
          pl: [
            {_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', marks: ['strong'], text: 'Mix Expert - producent wafli do lodów, jako przedsiębiorstwo rodzinne istnieje w branży lodziarskiej, cukierniczej i piekarniczej od 1985r.'}]},
            {_type: 'block', _key: 'b2', style: 'normal', children: [{_type: 'span', _key: 's2', text: 'Zaczynając od wypieku wafli do lodów i deserów, stopniowo udoskonalaliśmy nasze produkty tak aby zawsze gwarantować najwyższą jakość oferowanych wyrobów.'}]},
            {_type: 'block', _key: 'b3', style: 'normal', children: [{_type: 'span', _key: 's3', text: 'W miarę upływu czasu spostrzegliśmy zmieniające się tendencje rynku i od 1996 roku jesteśmy producentem szerokiej gamy koncentratów spożywczych w proszku takich jak: ciasta, gofry, lody, kremy cukiernicze oraz wiele innych.'}]},
            {_type: 'block', _key: 'b4', style: 'normal', children: [{_type: 'span', _key: 's4', marks: ['strong'], text: 'Nasze produkty są kierowane głównie na rynek eksportowy.'}]},
            {_type: 'block', _key: 'b5', style: 'normal', children: [{_type: 'span', _key: 's5', text: 'Dla naszych Klientów stworzyliśmy także szeroki wachlarz specjalistycznych produktów mlecznych, będących odpowiednikami mleka odtłuszczonego i pełnego, ale w znacznie niższej cenie. Produkty te mogą być wykorzystywane przez producentów wyrobów piekarniczych, lodów, wafli, nadzień, ciast, czekolady i wielu innych, gwarantując niezachwianą jakość produktów końcowych w połączeniu z bardziej ekonomiczną i zyskowną produkcją.'}]},
          ],
          en: [
            {_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', marks: ['strong'], text: 'Mix Expert - manufacturer of ice cream cones is a family company which has existed in the confectionery and baking sector since 1985.'}]},
            {_type: 'block', _key: 'b2', style: 'normal', children: [{_type: 'span', _key: 's2', text: 'Starting from baking ice cream cones and dessert wafers, we have gradually improved our products to guarantee the highest quality of our offer.'}]},
            {_type: 'block', _key: 'b3', style: 'normal', children: [{_type: 'span', _key: 's3', text: 'As time went by, we noticed the changing market trends and since 1996 we have manufactured a wide selection of food powder concentrates, such as cakes, waffles, ice cream, cake creams and many other.'}]},
            {_type: 'block', _key: 'b4', style: 'normal', children: [{_type: 'span', _key: 's4', marks: ['strong'], text: 'Our products are primarily targeted at the export market.'}]},
            {_type: 'block', _key: 'b5', style: 'normal', children: [{_type: 'span', _key: 's5', text: 'For our Customers, we created a wide range of specialist milk products, being equivalents of skimmed and whole milk, but at a much lower price. These products can be used by producers of bread products, ice cream, wafers, stuffings, cakes, chocolate and many other, guaranteeing uncompromised quality of end products, combined with more economic and profitable production.'}]},
          ],
          de: [
            {_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', marks: ['strong'], text: 'Mix Expert - Hersteller von Eiswaffeln ist ein Familienunternehmen, das seit 1985 in der Konditorei- und Bäckereibranche tätig ist.'}]},
            {_type: 'block', _key: 'b2', style: 'normal', children: [{_type: 'span', _key: 's2', text: 'Beginnend mit dem Backen von Eiswaffeln und Dessertwaffeln haben wir unsere Produkte schrittweise verbessert, um die höchste Qualität unseres Angebots zu garantieren.'}]},
            {_type: 'block', _key: 'b3', style: 'normal', children: [{_type: 'span', _key: 's3', marks: ['strong'], text: 'Unsere Produkte sind hauptsächlich für den Exportmarkt bestimmt.'}]},
          ],
          fr: [
            {_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', marks: ['strong'], text: 'Mix Expert - fabricant de cornets de crème glacée est une entreprise familiale qui existe dans le secteur de la confiserie et de la boulangerie depuis 1985.'}]},
            {_type: 'block', _key: 'b2', style: 'normal', children: [{_type: 'span', _key: 's2', marks: ['strong'], text: 'Nos produits sont principalement destinés au marché d\'exportation.'}]},
          ],
          pt: [
            {_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', marks: ['strong'], text: 'Mix Expert - fabricante de cones de sorvete é uma empresa familiar que existe no setor de confeitaria e panificação desde 1985.'}]},
            {_type: 'block', _key: 'b2', style: 'normal', children: [{_type: 'span', _key: 's2', marks: ['strong'], text: 'Nossos produtos são principalmente destinados ao mercado de exportação.'}]},
          ],
          ru: [
            {_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', marks: ['strong'], text: 'Mix Expert - производитель вафельных рожков - семейная компания, существующая в кондитерской и хлебопекарной отрасли с 1985 года.'}]},
            {_type: 'block', _key: 'b2', style: 'normal', children: [{_type: 'span', _key: 's2', marks: ['strong'], text: 'Наша продукция в основном ориентирована на экспортный рынок.'}]},
          ],
          zh: [
            {_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', marks: ['strong'], text: 'Mix Expert - 冰淇淋甜筒制造商是一家自1985年以来一直从事糖果和烘焙行业的家族企业。'}]},
            {_type: 'block', _key: 'b2', style: 'normal', children: [{_type: 'span', _key: 's2', marks: ['strong'], text: '我们的产品主要面向出口市场。'}]},
          ],
        },
        alignment: 'left',
      },
    ],
  })
  console.log('✅ Homepage updated with sections')

  // Update Offer Page - sections with category grid
  await client.createOrReplace({
    _id: 'offerPage-main',
    _type: 'offerPage',
    title: {
      _type: 'localizedString',
      pl: 'Oferta',
      en: 'Offer',
      de: 'Angebot',
      fr: 'Offre',
      pt: 'Oferta',
      ru: 'Предложение',
      zh: '产品',
    },
    slug: {_type: 'slug', current: 'oferta'},
    sections: [
      {
        _type: 'categoryGridSection',
        _key: 'catgrid1',
        heading: {
          _type: 'localizedString',
          pl: 'Nasza Oferta Eksportowa',
          en: 'Our Export Offer',
          de: 'Unser Exportangebot',
          fr: 'Notre Offre d\'Exportation',
          pt: 'Nossa Oferta de Exportação',
          ru: 'Наше экспортное предложение',
          zh: '我们的出口产品',
        },
        showCategories: true,
      },
    ],
  })
  console.log('✅ Offer page updated with category grid section')

  console.log('🎉 Migration to sections complete!')
}

migratToSections()
