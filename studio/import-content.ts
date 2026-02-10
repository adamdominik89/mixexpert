import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'q3ncxqvm',
  dataset: process.env.SANITY_STUDIO_DATASET || 'test',
  useCdn: false,
  token: process.env.SANITY_IMPORT_TOKEN,
  apiVersion: '2024-01-01',
})

// Delete all existing documents (clean slate)
async function deleteAllDocuments() {
  console.log('🗑️  Deleting all existing documents...')
  await client.delete({query: '*[!(_id in path("_.**"))]'})
  console.log('✅ All documents deleted')
}

// Create all documents
async function createDocuments() {
  console.log('📝 Creating documents...')

  const documents = [
    // ========== SITE SETTINGS ==========
    {
      _id: 'siteSettings-pl',
      _type: 'siteSettings',
      language: 'pl',
      siteName: 'Mix Expert',
      siteDescription: 'Producent wafli do lodów, koncentratów spożywczych, gofrów w proszku',
      phone: '+48 663 902 452',
      email: 'biuro@mixexpert.com.pl',
      navigationItems: [
        {_key: 'nav1', label: 'O nas', href: '/'},
        {_key: 'nav2', label: 'Oferta', href: '/oferta'},
        {_key: 'nav3', label: 'Kontakt', href: '/kontakt'},
      ],
      brandsTitle: 'Nasze marki:',
      partnersTitle: 'Nasi Partnerzy:',
      footerText: 'Mix Expert - Producent koncentratów spożywczych od 1985 roku',
    },
    {
      _id: 'siteSettings-en',
      _type: 'siteSettings',
      language: 'en',
      siteName: 'Mix Expert',
      siteDescription: 'Ice cream cone manufacturer, food concentrates, waffle mix producer',
      phone: '+48 663 902 452',
      email: 'biuro@mixexpert.com.pl',
      navigationItems: [
        {_key: 'nav1', label: 'About', href: '/'},
        {_key: 'nav2', label: 'Offer', href: '/oferta'},
        {_key: 'nav3', label: 'Contact', href: '/kontakt'},
      ],
      brandsTitle: 'Our Brands:',
      partnersTitle: 'Our Partners:',
      footerText: 'Mix Expert - Food concentrate manufacturer since 1985',
    },
    {
      _id: 'siteSettings-de',
      _type: 'siteSettings',
      language: 'de',
      siteName: 'Mix Expert',
      siteDescription: 'Eiswaffelhersteller, Lebensmittelkonzentrate, Waffelmischungshersteller',
      phone: '+48 663 902 452',
      email: 'biuro@mixexpert.com.pl',
      navigationItems: [
        {_key: 'nav1', label: 'Über uns', href: '/'},
        {_key: 'nav2', label: 'Angebot', href: '/oferta'},
        {_key: 'nav3', label: 'Kontakt', href: '/kontakt'},
      ],
      brandsTitle: 'Unsere Marken:',
      partnersTitle: 'Unsere Partner:',
      footerText: 'Mix Expert - Hersteller von Lebensmittelkonzentraten seit 1985',
    },

    // ========== HOME PAGES ==========
    {
      _id: 'homePage-pl',
      _type: 'homePage',
      language: 'pl',
      title: 'Mix Expert - Strona Główna',
      slug: {_type: 'slug', current: 'pl'},
      hero: {
        _type: 'hero',
        title: 'Mix Expert',
        subtitle: 'Producent wafli do lodów, jako przedsiębiorstwo rodzinne istnieje w branży lodziarskiej, cukierniczej i piekarniczej od 1985r.',
      },
      aboutSection: {
        _type: 'aboutSection',
        title: 'Mix Expert',
        subtitle: 'Jakość naszą pasją',
        description: [
          {
            _type: 'block',
            _key: 'desc1',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'span1',
                text: 'producent wafli do lodów, jako przedsiębiorstwo rodzinne istnieje w branży lodziarskiej, cukierniczej i piekarniczej od 1985r. Zaczynając od wypieku wafli do lodów i deserów, stopniowo udoskonalaliśmy nasze produkty tak aby zawsze gwarantować najwyższą jakość oferowanych wyrobów.',
              },
            ],
          },
          {
            _type: 'block',
            _key: 'desc2',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'span2',
                text: 'W miarę upływu czasu spostrzegliśmy zmieniające się tendencje rynku i od 1996 roku jesteśmy producentem szerokiej gamy koncentratów spożywczych w proszku takich jak: ciasta, gofry, lody, kremy cukiernicze oraz wiele innych. Nasze zaawansowane technologie oraz unikalne receptury są wynikiem wieloletniej pracy i starań aby sprostać wymaganiom rynku. Dlatego też nasze produkty cechuje wysoka i niezmienna jakość.',
              },
            ],
          },
        ],
      },
      offerTitle: 'Nasza oferta',
      categoryCards: [
        {
          _key: 'cat1',
          _type: 'categoryCard',
          title: 'Koncentraty spożywcze, mieszanki ciast i gofrów',
          description: 'Wysokiej jakości koncentraty dla przemysłu cukierniczego',
          link: '/kategoria/koncentraty-spozywcze',
          order: 0,
        },
        {
          _key: 'cat2',
          _type: 'categoryCard',
          title: 'Lody w proszku, proszek lodowy do automatów',
          description: 'Profesjonalne mieszanki lodów w proszku',
          link: '/kategoria/lody-w-proszku',
          order: 1,
        },
        {
          _key: 'cat3',
          _type: 'categoryCard',
          title: 'Wafle do lodów i deserów',
          description: 'Wysokiej jakości wafle do lodów',
          link: '/kategoria/wafle-do-lodow',
          order: 2,
        },
        {
          _key: 'cat4',
          _type: 'categoryCard',
          title: 'Syropy do granitorów, sorbetów i shake\'ów',
          description: 'Syropy owocowe i smakowe',
          link: '/kategoria/syropy',
          order: 3,
        },
        {
          _key: 'cat5',
          _type: 'categoryCard',
          title: 'Granita w proszku',
          description: 'Mieszanki granity w proszku',
          link: '/kategoria/granita-w-proszku',
          order: 4,
        },
        {
          _key: 'cat6',
          _type: 'categoryCard',
          title: 'Specjalistyczne mieszanki mleczne oraz produkty mleczne',
          description: 'Produkty mleczne dla przemysłu',
          link: '/kategoria/produkty-mleczne',
          order: 5,
        },
        {
          _key: 'cat7',
          _type: 'categoryCard',
          title: 'Produkty bezglutenowe',
          description: 'Linia produktów bezglutenowych Dr. GF',
          link: '/kategoria/produkty-bezglutenowe',
          order: 6,
        },
        {
          _key: 'cat8',
          _type: 'categoryCard',
          title: 'Skrobie pszenne glutenowe oraz bezglutenowe',
          description: 'Skrobie dla przemysłu spożywczego',
          link: '/kategoria/skrobie',
          order: 7,
        },
        {
          _key: 'cat9',
          _type: 'categoryCard',
          title: 'Zaopatrzenie lodziarni, cukierni i piekarni',
          description: 'Kompleksowe wyposażenie',
          link: '/kategoria/zaopatrzenie',
          order: 8,
        },
        {
          _key: 'cat10',
          _type: 'categoryCard',
          title: 'Maszyny i automaty do lodów',
          description: 'Profesjonalne maszyny do lodów',
          link: '/kategoria/maszyny-lodowe',
          order: 9,
        },
        {
          _key: 'cat11',
          _type: 'categoryCard',
          title: 'Granitory',
          description: 'Granitory GBG',
          link: '/kategoria/granitory',
          order: 10,
        },
        {
          _key: 'cat12',
          _type: 'categoryCard',
          title: 'Gofrownice',
          description: 'Gofrownice Dezal',
          link: '/kategoria/gofrownice',
          order: 11,
        },
        {
          _key: 'cat13',
          _type: 'categoryCard',
          title: 'Mieszanie i pakowanie usługowe',
          description: 'Usługi mieszania i pakowania',
          link: '/kategoria/mieszanie-pakowanie',
          order: 12,
        },
      ],
      seo: {
        _type: 'seo',
        metaTitle: 'Mix Expert - Producent koncentratów spożywczych',
        metaDescription: 'Mix Expert - producent wafli do lodów, koncentratów spożywczych, gofrów w proszku od 1985 roku',
        metaKeywords: ['koncentraty spożywcze', 'wafle do lodów', 'gofry w proszku', 'lody w proszku'],
      },
    },
    {
      _id: 'homePage-en',
      _type: 'homePage',
      language: 'en',
      title: 'Mix Expert - Home',
      slug: {_type: 'slug', current: 'en'},
      hero: {
        _type: 'hero',
        title: 'Mix Expert',
        subtitle: 'Manufacturer of ice cream cones is a family company which has existed in the confectionery and baking sector since 1985.',
      },
      aboutSection: {
        _type: 'aboutSection',
        title: 'Mix Expert',
        subtitle: 'Quality as Our Passion',
        description: [
          {
            _type: 'block',
            _key: 'desc1',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'span1',
                text: 'manufacturer of ice cream cones is a family company which has existed in the confectionery and baking sector since 1985. Starting from baking ice cream cones and dessert wafers, we have gradually improved our products to guarantee the highest quality of our offer.',
              },
            ],
          },
          {
            _type: 'block',
            _key: 'desc2',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'span2',
                text: 'As time went by, we noticed the changing market trends and since 1996 we have manufactured a wide selection of food powder concentrates, such as cakes, waffles, ice cream, cake creams and many other. Our advanced technologies and unique recipes are the outcome of many years work to meet the market requirements. Thanks to that our products are characterised by high and reliable quality.',
              },
            ],
          },
        ],
      },
      offerTitle: 'Our Offer',
      categoryCards: [
        {
          _key: 'cat1',
          _type: 'categoryCard',
          title: 'Food concentrates, cake and waffle mixes',
          description: 'High quality concentrates for confectionery industry',
          link: '/kategoria/koncentraty-spozywcze',
          order: 0,
        },
        {
          _key: 'cat2',
          _type: 'categoryCard',
          title: 'Ice cream powder mixes',
          description: 'Professional ice cream powder mixes',
          link: '/kategoria/lody-w-proszku',
          order: 1,
        },
        {
          _key: 'cat3',
          _type: 'categoryCard',
          title: 'Wafer cones for ice cream and desserts',
          description: 'High quality ice cream cones',
          link: '/kategoria/wafle-do-lodow',
          order: 2,
        },
        {
          _key: 'cat4',
          _type: 'categoryCard',
          title: 'Slush, granita syrup concentrates',
          description: 'Fruit and flavor syrups',
          link: '/kategoria/syropy',
          order: 3,
        },
        {
          _key: 'cat5',
          _type: 'categoryCard',
          title: 'Granita powder',
          description: 'Granita powder mixes',
          link: '/kategoria/granita-w-proszku',
          order: 4,
        },
        {
          _key: 'cat6',
          _type: 'categoryCard',
          title: 'Milk powder, milk blends and dairy products',
          description: 'Dairy products for industry',
          link: '/kategoria/produkty-mleczne',
          order: 5,
        },
        {
          _key: 'cat7',
          _type: 'categoryCard',
          title: 'Gluten-free mixes',
          description: 'Dr. GF gluten-free product line',
          link: '/kategoria/produkty-bezglutenowe',
          order: 6,
        },
        {
          _key: 'cat8',
          _type: 'categoryCard',
          title: 'Gluten and gluten-free wheat starch',
          description: 'Starches for food industry',
          link: '/kategoria/skrobie',
          order: 7,
        },
        {
          _key: 'cat9',
          _type: 'categoryCard',
          title: 'Supplies for ice cream parlours, confectioners and bakeries',
          description: 'Complete equipment',
          link: '/kategoria/zaopatrzenie',
          order: 8,
        },
        {
          _key: 'cat10',
          _type: 'categoryCard',
          title: 'Ice cream machines',
          description: 'Professional ice cream machines',
          link: '/kategoria/maszyny-lodowe',
          order: 9,
        },
        {
          _key: 'cat11',
          _type: 'categoryCard',
          title: 'Slushie machines',
          description: 'GBG slushie machines',
          link: '/kategoria/granitory',
          order: 10,
        },
        {
          _key: 'cat12',
          _type: 'categoryCard',
          title: 'Waffle makers',
          description: 'Dezal waffle makers',
          link: '/kategoria/gofrownice',
          order: 11,
        },
        {
          _key: 'cat13',
          _type: 'categoryCard',
          title: 'Service-related mixing and packing',
          description: 'Mixing and packing services',
          link: '/kategoria/mieszanie-pakowanie',
          order: 12,
        },
      ],
      seo: {
        _type: 'seo',
        metaTitle: 'Mix Expert - Food Concentrate Manufacturer',
        metaDescription: 'Mix Expert - ice cream cone manufacturer, food concentrates, waffle mixes since 1985',
        metaKeywords: ['food concentrates', 'ice cream cones', 'waffle powder', 'ice cream powder'],
      },
    },
    {
      _id: 'homePage-de',
      _type: 'homePage',
      language: 'de',
      title: 'Mix Expert - Startseite',
      slug: {_type: 'slug', current: 'de'},
      hero: {
        _type: 'hero',
        title: 'Mix Expert',
        subtitle: 'Hersteller von Eiswaffeln ist ein Familienunternehmen, das seit 1985 in der Konditorei- und Bäckereibranche tätig ist.',
      },
      aboutSection: {
        _type: 'aboutSection',
        title: 'Mix Expert',
        subtitle: 'Qualität als unsere Leidenschaft',
        description: [
          {
            _type: 'block',
            _key: 'desc1',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'span1',
                text: 'Hersteller von Eiswaffeln ist ein Familienunternehmen, das seit 1985 in der Konditorei- und Bäckereibranche tätig ist. Beginnend mit dem Backen von Eiswaffeln und Dessertwaffeln haben wir unsere Produkte schrittweise verbessert, um die höchste Qualität unseres Angebots zu garantieren.',
              },
            ],
          },
          {
            _type: 'block',
            _key: 'desc2',
            style: 'normal',
            children: [
              {
                _type: 'span',
                _key: 'span2',
                text: 'Mit der Zeit haben wir die sich ändernden Markttrends bemerkt und stellen seit 1996 eine breite Palette von Lebensmittelpulverkonzentraten her, wie Kuchen, Waffeln, Eis, Kuchencremes und viele andere. Unsere fortschrittlichen Technologien und einzigartigen Rezepturen sind das Ergebnis langjähriger Arbeit, um den Marktanforderungen gerecht zu werden. Dadurch zeichnen sich unsere Produkte durch hohe und zuverlässige Qualität aus.',
              },
            ],
          },
        ],
      },
      offerTitle: 'Unser Angebot',
      categoryCards: [
        {
          _key: 'cat1',
          _type: 'categoryCard',
          title: 'Lebensmittelkonzentrate, Kuchen- und Waffelmischungen',
          description: 'Hochwertige Konzentrate für die Konditoreiindustrie',
          link: '/kategoria/koncentraty-spozywcze',
          order: 0,
        },
        {
          _key: 'cat2',
          _type: 'categoryCard',
          title: 'Eispulvermischungen',
          description: 'Professionelle Eispulvermischungen',
          link: '/kategoria/lody-w-proszku',
          order: 1,
        },
        {
          _key: 'cat3',
          _type: 'categoryCard',
          title: 'Waffeltüten für Eis und Desserts',
          description: 'Hochwertige Eiswaffeln',
          link: '/kategoria/wafle-do-lodow',
          order: 2,
        },
        {
          _key: 'cat4',
          _type: 'categoryCard',
          title: 'Sirup-Konzentrate für Granita und Sorbet',
          description: 'Frucht- und Geschmackssirupe',
          link: '/kategoria/syropy',
          order: 3,
        },
        {
          _key: 'cat5',
          _type: 'categoryCard',
          title: 'Granita-Pulver',
          description: 'Granita-Pulvermischungen',
          link: '/kategoria/granita-w-proszku',
          order: 4,
        },
        {
          _key: 'cat6',
          _type: 'categoryCard',
          title: 'Milchpulver, Milchmischungen und Milchprodukte',
          description: 'Milchprodukte für die Industrie',
          link: '/kategoria/produkty-mleczne',
          order: 5,
        },
        {
          _key: 'cat7',
          _type: 'categoryCard',
          title: 'Glutenfreie Mischungen',
          description: 'Dr. GF glutenfreie Produktlinie',
          link: '/kategoria/produkty-bezglutenowe',
          order: 6,
        },
        {
          _key: 'cat8',
          _type: 'categoryCard',
          title: 'Gluten- und glutenfreie Weizenstärke',
          description: 'Stärken für die Lebensmittelindustrie',
          link: '/kategoria/skrobie',
          order: 7,
        },
        {
          _key: 'cat9',
          _type: 'categoryCard',
          title: 'Ausstattung für Eisdielen, Konditoreien und Bäckereien',
          description: 'Komplette Ausrüstung',
          link: '/kategoria/zaopatrzenie',
          order: 8,
        },
        {
          _key: 'cat10',
          _type: 'categoryCard',
          title: 'Eismaschinen',
          description: 'Professionelle Eismaschinen',
          link: '/kategoria/maszyny-lodowe',
          order: 9,
        },
        {
          _key: 'cat11',
          _type: 'categoryCard',
          title: 'Slushie-Maschinen',
          description: 'GBG Slushie-Maschinen',
          link: '/kategoria/granitory',
          order: 10,
        },
        {
          _key: 'cat12',
          _type: 'categoryCard',
          title: 'Waffeleisen',
          description: 'Dezal Waffeleisen',
          link: '/kategoria/gofrownice',
          order: 11,
        },
        {
          _key: 'cat13',
          _type: 'categoryCard',
          title: 'Misch- und Verpackungsdienstleistungen',
          description: 'Misch- und Verpackungsservices',
          link: '/kategoria/mieszanie-pakowanie',
          order: 12,
        },
      ],
      seo: {
        _type: 'seo',
        metaTitle: 'Mix Expert - Hersteller von Lebensmittelkonzentraten',
        metaDescription: 'Mix Expert - Eiswaffelhersteller, Lebensmittelkonzentrate, Waffelmischungen seit 1985',
        metaKeywords: ['Lebensmittelkonzentrate', 'Eiswaffeln', 'Waffelpulver', 'Eispulver'],
      },
    },

    // ========== CONTACT PAGES ==========
    {
      _id: 'contactPage-pl',
      _type: 'contactPage',
      language: 'pl',
      title: 'Kontakt',
      slug: {_type: 'slug', current: 'kontakt'},
      companyName: 'Mix Expert',
      headquartersLabel: 'Siedziba Firmy:',
      address: {
        street: 'ul. Torowa 14',
        postalCode: '84-230',
        city: 'Rumia',
        country: 'Polska',
      },
      email: 'biuro@mixexpert.com.pl',
      phone: '+48 663 902 452',
      administrationLabel: 'Administracja:',
      salesDepartmentLabel: 'Dział Handlowy:',
      contactPersons: [
        {
          _key: 'person1',
          _type: 'contactPerson',
          name: 'Katarzyna Rutkowska',
          department: 'Administracja',
          phone: '+48 663 902 452',
          languageFlags: ['pl', 'en', 'de'],
        },
        {
          _key: 'person2',
          _type: 'contactPerson',
          name: 'Adam Dominik',
          department: 'Dział Handlowy',
          languageFlags: ['pl', 'en', 'de'],
        },
      ],
      seo: {
        _type: 'seo',
        metaTitle: 'Kontakt - Mix Expert',
        metaDescription: 'Skontaktuj się z Mix Expert. Siedziba: Rumia, tel: +48 663 902 452',
      },
    },
    {
      _id: 'contactPage-en',
      _type: 'contactPage',
      language: 'en',
      title: 'Contact',
      slug: {_type: 'slug', current: 'kontakt'},
      companyName: 'Mix Expert',
      headquartersLabel: 'Headquarters:',
      address: {
        street: 'ul. Torowa 14',
        postalCode: '84-230',
        city: 'Rumia',
        country: 'Poland',
      },
      email: 'biuro@mixexpert.com.pl',
      phone: '+48 663 902 452',
      administrationLabel: 'Administration:',
      salesDepartmentLabel: 'Sales Department:',
      contactPersons: [
        {
          _key: 'person1',
          _type: 'contactPerson',
          name: 'Katarzyna Rutkowska',
          department: 'Administration',
          phone: '+48 663 902 452',
          languageFlags: ['pl', 'en', 'de'],
        },
        {
          _key: 'person2',
          _type: 'contactPerson',
          name: 'Adam Dominik',
          department: 'Sales Department',
          languageFlags: ['pl', 'en', 'de'],
        },
      ],
      seo: {
        _type: 'seo',
        metaTitle: 'Contact - Mix Expert',
        metaDescription: 'Contact Mix Expert. Headquarters: Rumia, phone: +48 663 902 452',
      },
    },
    {
      _id: 'contactPage-de',
      _type: 'contactPage',
      language: 'de',
      title: 'Kontakt',
      slug: {_type: 'slug', current: 'kontakt'},
      companyName: 'Mix Expert',
      headquartersLabel: 'Hauptsitz:',
      address: {
        street: 'ul. Torowa 14',
        postalCode: '84-230',
        city: 'Rumia',
        country: 'Polen',
      },
      email: 'biuro@mixexpert.com.pl',
      phone: '+48 663 902 452',
      administrationLabel: 'Verwaltung:',
      salesDepartmentLabel: 'Vertriebsabteilung:',
      contactPersons: [
        {
          _key: 'person1',
          _type: 'contactPerson',
          name: 'Katarzyna Rutkowska',
          department: 'Verwaltung',
          phone: '+48 663 902 452',
          languageFlags: ['pl', 'en', 'de'],
        },
        {
          _key: 'person2',
          _type: 'contactPerson',
          name: 'Adam Dominik',
          department: 'Vertriebsabteilung',
          languageFlags: ['pl', 'en', 'de'],
        },
      ],
      seo: {
        _type: 'seo',
        metaTitle: 'Kontakt - Mix Expert',
        metaDescription: 'Kontakt Mix Expert. Hauptsitz: Rumia, Telefon: +48 663 902 452',
      },
    },

    // ========== OFFER PAGES ==========
    {
      _id: 'offerPage-pl',
      _type: 'offerPage',
      language: 'pl',
      title: 'Oferta',
      slug: {_type: 'slug', current: 'oferta'},
      description: 'Poznaj pełną ofertę Mix Expert - koncentraty spożywcze, wafle do lodów, lody w proszku i wiele innych produktów dla branży lodziarskiej i cukierniczej.',
      categoryCards: [
        {
          _key: 'cat1',
          _type: 'categoryCard',
          title: 'Koncentraty spożywcze, mieszanki ciast i gofrów',
          description: 'Wysokiej jakości koncentraty dla przemysłu cukierniczego',
          link: '/kategoria/koncentraty-spozywcze',
          order: 0,
        },
        {
          _key: 'cat2',
          _type: 'categoryCard',
          title: 'Lody w proszku, proszek lodowy do automatów',
          description: 'Profesjonalne mieszanki lodów w proszku',
          link: '/kategoria/lody-w-proszku',
          order: 1,
        },
        {
          _key: 'cat3',
          _type: 'categoryCard',
          title: 'Wafle do lodów i deserów',
          description: 'Wysokiej jakości wafle do lodów',
          link: '/kategoria/wafle-do-lodow',
          order: 2,
        },
        {
          _key: 'cat4',
          _type: 'categoryCard',
          title: 'Syropy do granitorów, sorbetów i shake\'ów',
          description: 'Syropy owocowe i smakowe',
          link: '/kategoria/syropy',
          order: 3,
        },
        {
          _key: 'cat5',
          _type: 'categoryCard',
          title: 'Granita w proszku',
          description: 'Mieszanki granity w proszku',
          link: '/kategoria/granita-w-proszku',
          order: 4,
        },
        {
          _key: 'cat6',
          _type: 'categoryCard',
          title: 'Specjalistyczne mieszanki mleczne oraz produkty mleczne',
          description: 'Produkty mleczne dla przemysłu',
          link: '/kategoria/produkty-mleczne',
          order: 5,
        },
        {
          _key: 'cat7',
          _type: 'categoryCard',
          title: 'Produkty bezglutenowe',
          description: 'Linia produktów bezglutenowych Dr. GF',
          link: '/kategoria/produkty-bezglutenowe',
          order: 6,
        },
        {
          _key: 'cat8',
          _type: 'categoryCard',
          title: 'Skrobie pszenne glutenowe oraz bezglutenowe',
          description: 'Skrobie dla przemysłu spożywczego',
          link: '/kategoria/skrobie',
          order: 7,
        },
        {
          _key: 'cat9',
          _type: 'categoryCard',
          title: 'Zaopatrzenie lodziarni, cukierni i piekarni',
          description: 'Kompleksowe wyposażenie',
          link: '/kategoria/zaopatrzenie',
          order: 8,
        },
        {
          _key: 'cat10',
          _type: 'categoryCard',
          title: 'Maszyny i automaty do lodów',
          description: 'Profesjonalne maszyny do lodów',
          link: '/kategoria/maszyny-lodowe',
          order: 9,
        },
        {
          _key: 'cat11',
          _type: 'categoryCard',
          title: 'Granitory',
          description: 'Granitory GBG',
          link: '/kategoria/granitory',
          order: 10,
        },
        {
          _key: 'cat12',
          _type: 'categoryCard',
          title: 'Gofrownice',
          description: 'Gofrownice Dezal',
          link: '/kategoria/gofrownice',
          order: 11,
        },
        {
          _key: 'cat13',
          _type: 'categoryCard',
          title: 'Mieszanie i pakowanie usługowe',
          description: 'Usługi mieszania i pakowania',
          link: '/kategoria/mieszanie-pakowanie',
          order: 12,
        },
      ],
      seo: {
        _type: 'seo',
        metaTitle: 'Oferta - Mix Expert',
        metaDescription: 'Pełna oferta Mix Expert: koncentraty, wafle, lody w proszku, gofry, granita i wiele innych',
      },
    },
    {
      _id: 'offerPage-en',
      _type: 'offerPage',
      language: 'en',
      title: 'Offer',
      slug: {_type: 'slug', current: 'oferta'},
      description: 'Discover the complete offer of Mix Expert - food concentrates, ice cream cones, ice cream powder and many other products for the ice cream and confectionery industry.',
      categoryCards: [
        {
          _key: 'cat1',
          _type: 'categoryCard',
          title: 'Food concentrates, cake and waffle mixes',
          description: 'High quality concentrates for confectionery industry',
          link: '/kategoria/koncentraty-spozywcze',
          order: 0,
        },
        {
          _key: 'cat2',
          _type: 'categoryCard',
          title: 'Ice cream powder mixes',
          description: 'Professional ice cream powder mixes',
          link: '/kategoria/lody-w-proszku',
          order: 1,
        },
        {
          _key: 'cat3',
          _type: 'categoryCard',
          title: 'Wafer cones for ice cream and desserts',
          description: 'High quality ice cream cones',
          link: '/kategoria/wafle-do-lodow',
          order: 2,
        },
        {
          _key: 'cat4',
          _type: 'categoryCard',
          title: 'Slush, granita syrup concentrates',
          description: 'Fruit and flavor syrups',
          link: '/kategoria/syropy',
          order: 3,
        },
        {
          _key: 'cat5',
          _type: 'categoryCard',
          title: 'Granita powder',
          description: 'Granita powder mixes',
          link: '/kategoria/granita-w-proszku',
          order: 4,
        },
        {
          _key: 'cat6',
          _type: 'categoryCard',
          title: 'Milk powder, milk blends and dairy products',
          description: 'Dairy products for industry',
          link: '/kategoria/produkty-mleczne',
          order: 5,
        },
        {
          _key: 'cat7',
          _type: 'categoryCard',
          title: 'Gluten-free mixes',
          description: 'Dr. GF gluten-free product line',
          link: '/kategoria/produkty-bezglutenowe',
          order: 6,
        },
        {
          _key: 'cat8',
          _type: 'categoryCard',
          title: 'Gluten and gluten-free wheat starch',
          description: 'Starches for food industry',
          link: '/kategoria/skrobie',
          order: 7,
        },
        {
          _key: 'cat9',
          _type: 'categoryCard',
          title: 'Supplies for ice cream parlours, confectioners and bakeries',
          description: 'Complete equipment',
          link: '/kategoria/zaopatrzenie',
          order: 8,
        },
        {
          _key: 'cat10',
          _type: 'categoryCard',
          title: 'Ice cream machines',
          description: 'Professional ice cream machines',
          link: '/kategoria/maszyny-lodowe',
          order: 9,
        },
        {
          _key: 'cat11',
          _type: 'categoryCard',
          title: 'Slushie machines',
          description: 'GBG slushie machines',
          link: '/kategoria/granitory',
          order: 10,
        },
        {
          _key: 'cat12',
          _type: 'categoryCard',
          title: 'Waffle makers',
          description: 'Dezal waffle makers',
          link: '/kategoria/gofrownice',
          order: 11,
        },
        {
          _key: 'cat13',
          _type: 'categoryCard',
          title: 'Service-related mixing and packing',
          description: 'Mixing and packing services',
          link: '/kategoria/mieszanie-pakowanie',
          order: 12,
        },
      ],
      seo: {
        _type: 'seo',
        metaTitle: 'Offer - Mix Expert',
        metaDescription: 'Complete Mix Expert offer: concentrates, cones, ice cream powder, waffles, granita and more',
      },
    },
    {
      _id: 'offerPage-de',
      _type: 'offerPage',
      language: 'de',
      title: 'Angebot',
      slug: {_type: 'slug', current: 'oferta'},
      description: 'Entdecken Sie das komplette Angebot von Mix Expert - Lebensmittelkonzentrate, Eiswaffeln, Eispulver und viele andere Produkte für die Eis- und Konditoreiindustrie.',
      categoryCards: [
        {
          _key: 'cat1',
          _type: 'categoryCard',
          title: 'Lebensmittelkonzentrate, Kuchen- und Waffelmischungen',
          description: 'Hochwertige Konzentrate für die Konditoreiindustrie',
          link: '/kategoria/koncentraty-spozywcze',
          order: 0,
        },
        {
          _key: 'cat2',
          _type: 'categoryCard',
          title: 'Eispulvermischungen',
          description: 'Professionelle Eispulvermischungen',
          link: '/kategoria/lody-w-proszku',
          order: 1,
        },
        {
          _key: 'cat3',
          _type: 'categoryCard',
          title: 'Waffeltüten für Eis und Desserts',
          description: 'Hochwertige Eiswaffeln',
          link: '/kategoria/wafle-do-lodow',
          order: 2,
        },
        {
          _key: 'cat4',
          _type: 'categoryCard',
          title: 'Sirup-Konzentrate für Granita und Sorbet',
          description: 'Frucht- und Geschmackssirupe',
          link: '/kategoria/syropy',
          order: 3,
        },
        {
          _key: 'cat5',
          _type: 'categoryCard',
          title: 'Granita-Pulver',
          description: 'Granita-Pulvermischungen',
          link: '/kategoria/granita-w-proszku',
          order: 4,
        },
        {
          _key: 'cat6',
          _type: 'categoryCard',
          title: 'Milchpulver, Milchmischungen und Milchprodukte',
          description: 'Milchprodukte für die Industrie',
          link: '/kategoria/produkty-mleczne',
          order: 5,
        },
        {
          _key: 'cat7',
          _type: 'categoryCard',
          title: 'Glutenfreie Mischungen',
          description: 'Dr. GF glutenfreie Produktlinie',
          link: '/kategoria/produkty-bezglutenowe',
          order: 6,
        },
        {
          _key: 'cat8',
          _type: 'categoryCard',
          title: 'Gluten- und glutenfreie Weizenstärke',
          description: 'Stärken für die Lebensmittelindustrie',
          link: '/kategoria/skrobie',
          order: 7,
        },
        {
          _key: 'cat9',
          _type: 'categoryCard',
          title: 'Ausstattung für Eisdielen, Konditoreien und Bäckereien',
          description: 'Komplette Ausrüstung',
          link: '/kategoria/zaopatrzenie',
          order: 8,
        },
        {
          _key: 'cat10',
          _type: 'categoryCard',
          title: 'Eismaschinen',
          description: 'Professionelle Eismaschinen',
          link: '/kategoria/maszyny-lodowe',
          order: 9,
        },
        {
          _key: 'cat11',
          _type: 'categoryCard',
          title: 'Slushie-Maschinen',
          description: 'GBG Slushie-Maschinen',
          link: '/kategoria/granitory',
          order: 10,
        },
        {
          _key: 'cat12',
          _type: 'categoryCard',
          title: 'Waffeleisen',
          description: 'Dezal Waffeleisen',
          link: '/kategoria/gofrownice',
          order: 11,
        },
        {
          _key: 'cat13',
          _type: 'categoryCard',
          title: 'Misch- und Verpackungsdienstleistungen',
          description: 'Misch- und Verpackungsservices',
          link: '/kategoria/mieszanie-pakowanie',
          order: 12,
        },
      ],
      seo: {
        _type: 'seo',
        metaTitle: 'Angebot - Mix Expert',
        metaDescription: 'Komplettes Mix Expert-Angebot: Konzentrate, Waffeln, Eispulver, Waffeln, Granita und mehr',
      },
    },

    // ========== BRAND ==========
    {
      _id: 'brand-drgf-pl',
      _type: 'brand',
      language: 'pl',
      brandId: 'drgf',
      name: 'Dr. GF',
      description: 'Dr. GF został stworzony w trosce o ludzi borykających się z coraz bardziej szerzącą się nietolerancją na gluten. Pragniemy zaoferować Państwu wysokiej jakości linię produktów bezglutenowych, które są w 100% bezpieczne - potwierdzają to stosowne badania w akredytowanym laboratorium, co gwarantuje utrzymanie niezmiennego, wysokiego poziomu jakości naszych produktów. Zapraszamy do odwiedzin naszej strony internetowej www.drgf.com.pl',
      website: 'http://www.drgf.com.pl',
      order: 0,
    },
    {
      _id: 'brand-drgf-en',
      _type: 'brand',
      language: 'en',
      brandId: 'drgf',
      name: 'Dr. GF',
      description: 'Dr. GF was created in the interest of people struggling with the ever-increasing problem of gluten intolerance. We would like to offer you a range of high-quality, gluten-free products, which are 100% safe to consume. This is confirmed by appropriate testing in an accredited laboratory; which guarantees maintaining the consistent high quality of our products. Please visit our website: http://www.drgf.com.pl/',
      website: 'http://www.drgf.com.pl',
      order: 0,
    },
    {
      _id: 'brand-drgf-de',
      _type: 'brand',
      language: 'de',
      brandId: 'drgf',
      name: 'Dr. GF',
      description: 'Dr. GF wurde im Interesse von Menschen geschaffen, die mit dem immer häufiger auftretenden Problem der Glutenunverträglichkeit kämpfen. Wir möchten Ihnen eine Reihe hochwertiger, glutenfreier Produkte anbieten, die zu 100% sicher zu konsumieren sind. Dies wird durch entsprechende Tests in einem akkreditierten Labor bestätigt; was die Aufrechterhaltung der gleichbleibend hohen Qualität unserer Produkte garantiert. Bitte besuchen Sie unsere Website: http://www.drgf.com.pl/',
      website: 'http://www.drgf.com.pl',
      order: 0,
    },

    // ========== PARTNERS (no language) ==========
    {
      _id: 'partner-baj',
      _type: 'partner',
      name: 'Baj',
      order: 0,
    },
    {
      _id: 'partner-dezal',
      _type: 'partner',
      name: 'Dezal',
      order: 1,
    },
    {
      _id: 'partner-instalmasz',
      _type: 'partner',
      name: 'Instalmasz',
      order: 2,
    },
    {
      _id: 'partner-jureko',
      _type: 'partner',
      name: 'Jureko',
      order: 3,
    },
    {
      _id: 'partner-logobeztla',
      _type: 'partner',
      name: 'Logobeztla',
      order: 4,
    },
    {
      _id: 'partner-maszynylodow',
      _type: 'partner',
      name: 'Maszyny do lodów',
      order: 5,
    },
    {
      _id: 'partner-savpol',
      _type: 'partner',
      name: 'Savpol',
      order: 6,
    },
  ]

  // Create documents in batches
  const batchSize = 10
  for (let i = 0; i < documents.length; i += batchSize) {
    const batch = documents.slice(i, i + batchSize)
    const transaction = client.transaction()

    batch.forEach((doc) => {
      transaction.createOrReplace(doc)
    })

    await transaction.commit()
    console.log(`✅ Created batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(documents.length / batchSize)}`)
  }

  console.log(`🎉 Created ${documents.length} documents total!`)
}

// Main import function
async function importContent() {
  try {
    console.log('🚀 Starting content import...')
    console.log(`Project ID: ${client.config().projectId}`)
    console.log(`Dataset: ${client.config().dataset}`)

    if (!client.config().token) {
      console.error('❌ ERROR: SANITY_IMPORT_TOKEN not set!')
      console.log('Please create a token at: https://www.sanity.io/manage')
      console.log('Then run: set SANITY_IMPORT_TOKEN=your-token-here')
      process.exit(1)
    }

    await deleteAllDocuments()
    await createDocuments()

    console.log('🎊 Content import completed successfully!')
    console.log('Visit your studio to see the content: http://localhost:3333')
  } catch (error) {
    console.error('❌ Import failed:', error)
    process.exit(1)
  }
}

importContent()
