import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'q3ncxqvm',
  dataset: process.env.SANITY_STUDIO_DATASET || 'test',
  useCdn: false,
  token: process.env.SANITY_IMPORT_TOKEN,
  apiVersion: '2024-01-01',
})

const categories = [
  {
    categoryId: 'koncentraty-spozywcze',
    order: 0,
    pl: {
      title: 'Koncentraty spożywcze, mieszanki ciast i gofrów',
      slug: 'koncentraty-spozywcze',
      description: 'W naszej ofercie znajdziesz koncentraty spożywcze w dogodnych cenach. Pragniesz mieć pewność stałej jakości i powtarzalności twoich wypieków? Zgłoś się do nas, po wysokiej jakości koncentraty spożywcze. Na naszej linii produkcyjnej technolodzy tworzą niepowtarzalne receptury. Wychodzimy na wprost oczekiwaniom klienta i innowacyjności rynku, dlatego nasze koncentraty spożywcze są w każdym szczególe dopracowane.',
    },
    en: {
      title: 'Food concentrates, cake and waffle mixes',
      slug: 'koncentraty-spozywcze',
      description: 'In our offer you will find food concentrates at affordable prices. Do you want to be sure of consistent quality and repeatability of your baking? Contact us for high quality food concentrates. On our production line, technologists create unique recipes. We meet customer expectations and market innovation, which is why our food concentrates are refined in every detail.',
    },
    de: {
      title: 'Lebensmittelkonzentrate, Kuchen- und Waffelmischungen',
      slug: 'koncentraty-spozywcze',
      description: 'In unserem Angebot finden Sie Lebensmittelkonzentrate zu günstigen Preisen. Möchten Sie sicher sein, dass Ihre Backwaren eine gleichbleibende Qualität und Wiederholbarkeit haben? Kontaktieren Sie uns für hochwertige Lebensmittelkonzentrate. Auf unserer Produktionslinie entwickeln Technologen einzigartige Rezepturen. Wir erfüllen Kundenerwartungen und Marktinnovationen, weshalb unsere Lebensmittelkonzentrate in jedem Detail verfeinert sind.',
    },
  },
  {
    categoryId: 'lody-w-proszku',
    order: 1,
    pl: {
      title: 'Lody w proszku, proszek lodowy do automatów',
      slug: 'lody-w-proszku',
      description: 'Oferujemy wysokiej jakości lody w proszku oraz proszek lodowy do automatów. Nasze produkty gwarantują doskonały smak i konsystencję.',
    },
    en: {
      title: 'Ice cream powder mixes',
      slug: 'lody-w-proszku',
      description: 'We offer high-quality ice cream powder and ice cream powder for machines. Our products guarantee excellent taste and consistency.',
    },
    de: {
      title: 'Eispulvermischungen',
      slug: 'lody-w-proszku',
      description: 'Wir bieten hochwertiges Eispulver und Eispulver für Automaten. Unsere Produkte garantieren hervorragenden Geschmack und Konsistenz.',
    },
  },
  {
    categoryId: 'wafle-do-lodow',
    order: 2,
    pl: {
      title: 'Wafle do lodów i deserów',
      slug: 'wafle-do-lodow',
      description: 'Producent wafli do lodów oferuje wysokiej jakości produkty. Nasze wafle charakteryzują się wyjątkową kruchością i smakiem.',
    },
    en: {
      title: 'Wafer cones for ice cream and desserts',
      slug: 'wafle-do-lodow',
      description: 'Ice cream cone manufacturer offers high quality products. Our cones are characterized by exceptional crispness and taste.',
    },
    de: {
      title: 'Waffeltüten für Eis und Desserts',
      slug: 'wafle-do-lodow',
      description: 'Eiswaffelhersteller bietet hochwertige Produkte. Unsere Waffeln zeichnen sich durch außergewöhnliche Knusprigkeit und Geschmack aus.',
    },
  },
  {
    categoryId: 'syropy',
    order: 3,
    pl: {
      title: 'Syropy do granitorów, sorbetów i shake\'ów',
      slug: 'syropy',
      description: 'Szeroki wybór syropów owocowych i smakowych do granitorów, sorbetów i shake\'ów. Intensywny smak i aromat.',
    },
    en: {
      title: 'Slush, granita syrup concentrates',
      slug: 'syropy',
      description: 'Wide selection of fruit and flavor syrups for slush, granita and shakes. Intense taste and aroma.',
    },
    de: {
      title: 'Sirup-Konzentrate für Granita und Sorbet',
      slug: 'syropy',
      description: 'Große Auswahl an Frucht- und Geschmackssirups für Slush, Granita und Shakes. Intensiver Geschmack und Aroma.',
    },
  },
  {
    categoryId: 'granita-w-proszku',
    order: 4,
    pl: {
      title: 'Granita w proszku',
      slug: 'granita-w-proszku',
      description: 'Profesjonalne mieszanki granity w proszku. Łatwe w przygotowaniu, doskonały smak.',
    },
    en: {
      title: 'Granita powder',
      slug: 'granita-w-proszku',
      description: 'Professional granita powder mixes. Easy to prepare, excellent taste.',
    },
    de: {
      title: 'Granita-Pulver',
      slug: 'granita-w-proszku',
      description: 'Professionelle Granita-Pulvermischungen. Einfach zuzubereiten, ausgezeichneter Geschmack.',
    },
  },
  {
    categoryId: 'produkty-mleczne',
    order: 5,
    pl: {
      title: 'Specjalistyczne mieszanki mleczne oraz produkty mleczne',
      slug: 'produkty-mleczne',
      description: 'Produkty mleczne dla przemysłu spożywczego. Wysokiej jakości zamienniki mleka.',
    },
    en: {
      title: 'Milk powder, milk blends and dairy products',
      slug: 'produkty-mleczne',
      description: 'Dairy products for the food industry. High quality milk substitutes.',
    },
    de: {
      title: 'Milchpulver, Milchmischungen und Milchprodukte',
      slug: 'produkty-mleczne',
      description: 'Milchprodukte für die Lebensmittelindustrie. Hochwertige Milchersatzprodukte.',
    },
  },
  {
    categoryId: 'produkty-bezglutenowe',
    order: 6,
    pl: {
      title: 'Produkty bezglutenowe',
      slug: 'produkty-bezglutenowe',
      description: 'Linia produktów bezglutenowych Dr. GF. 100% bezpieczne produkty potwierdzone badaniami laboratoryjnymi.',
    },
    en: {
      title: 'Gluten-free mixes',
      slug: 'produkty-bezglutenowe',
      description: 'Dr. GF gluten-free product line. 100% safe products confirmed by laboratory tests.',
    },
    de: {
      title: 'Glutenfreie Mischungen',
      slug: 'produkty-bezglutenowe',
      description: 'Dr. GF glutenfreie Produktlinie. 100% sichere Produkte, bestätigt durch Labortests.',
    },
  },
  {
    categoryId: 'skrobie',
    order: 7,
    pl: {
      title: 'Skrobie pszenne glutenowe oraz bezglutenowe',
      slug: 'skrobie',
      description: 'Skrobie pszenne dla przemysłu spożywczego. Dostępne wersje glutenowe i bezglutenowe.',
    },
    en: {
      title: 'Gluten and gluten-free wheat starch',
      slug: 'skrobie',
      description: 'Wheat starch for the food industry. Available in gluten and gluten-free versions.',
    },
    de: {
      title: 'Gluten- und glutenfreie Weizenstärke',
      slug: 'skrobie',
      description: 'Weizenstärke für die Lebensmittelindustrie. Erhältlich in Gluten- und glutenfreien Versionen.',
    },
  },
  {
    categoryId: 'zaopatrzenie',
    order: 8,
    pl: {
      title: 'Zaopatrzenie lodziarni, cukierni i piekarni',
      slug: 'zaopatrzenie',
      description: 'Kompleksowe wyposażenie dla lodziarni, cukierni i piekarni. Wszystko czego potrzebujesz w jednym miejscu.',
    },
    en: {
      title: 'Supplies for ice cream parlours, confectioners and bakeries',
      slug: 'zaopatrzenie',
      description: 'Complete equipment for ice cream parlours, confectioneries and bakeries. Everything you need in one place.',
    },
    de: {
      title: 'Ausstattung für Eisdielen, Konditoreien und Bäckereien',
      slug: 'zaopatrzenie',
      description: 'Komplette Ausrüstung für Eisdielen, Konditoreien und Bäckereien. Alles was Sie brauchen an einem Ort.',
    },
  },
  {
    categoryId: 'maszyny-lodowe',
    order: 9,
    pl: {
      title: 'Maszyny i automaty do lodów',
      slug: 'maszyny-lodowe',
      description: 'Profesjonalne maszyny do produkcji lodów. Wysokiej klasy urządzenia dla przemysłu lodziarskiego.',
    },
    en: {
      title: 'Ice cream machines',
      slug: 'maszyny-lodowe',
      description: 'Professional ice cream production machines. High-class equipment for the ice cream industry.',
    },
    de: {
      title: 'Eismaschinen',
      slug: 'maszyny-lodowe',
      description: 'Professionelle Eiscrememaschinen. Erstklassige Ausrüstung für die Eisindustrie.',
    },
  },
  {
    categoryId: 'granitory',
    order: 10,
    pl: {
      title: 'Granitory',
      slug: 'granitory',
      description: 'Granitory GBG - profesjonalne urządzenia do produkcji granity i sorbetów.',
    },
    en: {
      title: 'Slushie machines',
      slug: 'granitory',
      description: 'GBG slushie machines - professional equipment for granita and sorbet production.',
    },
    de: {
      title: 'Slushie-Maschinen',
      slug: 'granitory',
      description: 'GBG Slushie-Maschinen - professionelle Geräte für die Herstellung von Granita und Sorbet.',
    },
  },
  {
    categoryId: 'gofrownice',
    order: 11,
    pl: {
      title: 'Gofrownice',
      slug: 'gofrownice',
      description: 'Gofrownice Dezal - profesjonalne urządzenia do produkcji gofrów.',
    },
    en: {
      title: 'Waffle makers',
      slug: 'gofrownice',
      description: 'Dezal waffle makers - professional equipment for waffle production.',
    },
    de: {
      title: 'Waffeleisen',
      slug: 'gofrownice',
      description: 'Dezal Waffeleisen - professionelle Geräte für die Waffelproduktion.',
    },
  },
  {
    categoryId: 'mieszanie-pakowanie',
    order: 12,
    pl: {
      title: 'Mieszanie i pakowanie usługowe',
      slug: 'mieszanie-pakowanie',
      description: 'Usługi mieszania i pakowania produktów. Profesjonalna obsługa i wysokie standardy jakości.',
    },
    en: {
      title: 'Service-related mixing and packing',
      slug: 'mieszanie-pakowanie',
      description: 'Product mixing and packaging services. Professional service and high quality standards.',
    },
    de: {
      title: 'Misch- und Verpackungsdienstleistungen',
      slug: 'mieszanie-pakowanie',
      description: 'Produktmisch- und Verpackungsdienstleistungen. Professioneller Service und hohe Qualitätsstandards.',
    },
  },
]

async function importCategories() {
  console.log('📦 Creating product categories...')

  for (const cat of categories) {
    // Polish
    await client.createOrReplace({
      _id: `category-${cat.categoryId}-pl`,
      _type: 'productCategory',
      language: 'pl',
      categoryId: cat.categoryId,
      title: cat.pl.title,
      slug: {_type: 'slug', current: cat.pl.slug},
      description: [
        {
          _type: 'block',
          _key: 'desc1',
          style: 'normal',
          children: [{_type: 'span', _key: 'span1', text: cat.pl.description}],
        },
      ],
      order: cat.order,
    })

    // English
    await client.createOrReplace({
      _id: `category-${cat.categoryId}-en`,
      _type: 'productCategory',
      language: 'en',
      categoryId: cat.categoryId,
      title: cat.en.title,
      slug: {_type: 'slug', current: cat.en.slug},
      description: [
        {
          _type: 'block',
          _key: 'desc1',
          style: 'normal',
          children: [{_type: 'span', _key: 'span1', text: cat.en.description}],
        },
      ],
      order: cat.order,
    })

    // German
    await client.createOrReplace({
      _id: `category-${cat.categoryId}-de`,
      _type: 'productCategory',
      language: 'de',
      categoryId: cat.categoryId,
      title: cat.de.title,
      slug: {_type: 'slug', current: cat.de.slug},
      description: [
        {
          _type: 'block',
          _key: 'desc1',
          style: 'normal',
          children: [{_type: 'span', _key: 'span1', text: cat.de.description}],
        },
      ],
      order: cat.order,
    })

    console.log(`✅ Created: ${cat.pl.title}`)
  }

  console.log(`🎉 Created ${categories.length * 3} category documents!`)
}

importCategories()
