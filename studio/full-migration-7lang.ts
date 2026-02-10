import {createClient} from '@sanity/client'
import https from 'https'
import http from 'http'
import {URL} from 'url'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'y0cdogbw',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_IMPORT_TOKEN,
  apiVersion: '2024-01-01',
})

function downloadImage(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url)
    const protocol = parsedUrl.protocol === 'https:' ? https : http

    protocol.get(url, (res) => {
      const chunks: Buffer[] = []
      res.on('data', (chunk) => chunks.push(chunk))
      res.on('end', () => resolve(Buffer.concat(chunks)))
      res.on('error', reject)
    }).on('error', reject)
  })
}

async function uploadImage(imageBuffer: Buffer, filename: string) {
  const asset = await client.assets.upload('image', imageBuffer, {filename})
  return asset
}

async function main() {
  console.log('🚀 FULL MIGRATION WITH 7 LANGUAGES - STARTING...')
  console.log(`Project: ${client.config().projectId}`)
  console.log(`Dataset: ${client.config().dataset}`)

  // Step 1: Delete all
  console.log('\n📍 STEP 1: Cleaning dataset...')
  await client.delete({query: '*[!(_id in path("_.**"))]'})
  console.log('✅ Dataset cleaned')

  // Step 2: Upload images first
  console.log('\n📍 STEP 2: Uploading images...')
  const imageAssets: any = {}
  
  const images = [
    {url: 'http://www.mixexpert.com.pl/templates/mix_expert/images/logo.png', key: 'logo'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/koncentraty.png', key: 'koncentraty'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/lody.png', key: 'lody'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/wafle.png', key: 'wafle'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/syropy.png', key: 'syropy'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/granita.png', key: 'granita'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/mleczne.png', key: 'mleczne'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/gluten.png', key: 'gluten'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/skrobie.png', key: 'skrobie'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/dodatki.png', key: 'dodatki'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/maszyny.png', key: 'maszyny'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/granitory.png', key: 'granitory'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/gofrownice.png', key: 'gofrownice'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/mieszanie.png', key: 'mieszanie'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/baj3.png', key: 'baj'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/dezal.png', key: 'dezal'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/instalmasz.png', key: 'instalmasz'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/jureko.png', key: 'jureko'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/logobeztlamale3.png', key: 'logobeztla'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/maszyny-do-lodow-logo.png', key: 'maszynylodow'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/savpol.png', key: 'savpol'},
  ]

  for (const img of images) {
    try {
      const buffer = await downloadImage(img.url)
      const asset = await uploadImage(buffer, `${img.key}.png`)
      imageAssets[img.key] = asset
      console.log(`✅ ${img.key}.png`)
    } catch (e) {
      console.log(`⚠️  Failed: ${img.key}`)
    }
  }

  const mkImage = (assetId: string, alt: string) => ({
    _type: 'imageWithAlt',
    image: {_type: 'image', asset: {_type: 'reference', _ref: assetId}},
    alt,
  })

  // Step 3: Create categories
  console.log('\n📍 STEP 3: Creating 13 categories with 7 languages...')
  const categoryData = [
    {id: 'koncentraty-spozywcze', img: 'koncentraty', title: {pl: 'Koncentraty spożywcze, mieszanki ciast i gofrów', en: 'Food concentrates, cake and waffle mixes', de: 'Lebensmittelkonzentrate', fr: 'Concentrés alimentaires', pt: 'Concentrados alimentares', ru: 'Пищевые концентраты', zh: '食品浓缩物'}},
    {id: 'lody-w-proszku', img: 'lody', title: {pl: 'Lody w proszku', en: 'Ice cream powder', de: 'Eispulver', fr: 'Poudre de crème glacée', pt: 'Sorvete em pó', ru: 'Порошок для мороженого', zh: '冰淇淋粉'}},
    {id: 'wafle-do-lodow', img: 'wafle', title: {pl: 'Wafle do lodów', en: 'Ice cream cones', de: 'Eiswaffeln', fr: 'Cornets de glace', pt: 'Cones de sorvete', ru: 'Вафельные рожки', zh: '冰淇淋甜筒'}},
    {id: 'syropy', img: 'syropy', title: {pl: 'Syropy', en: 'Syrups', de: 'Sirupe', fr: 'Sirops', pt: 'Xaropes', ru: 'Сиропы', zh: '糖浆'}},
    {id: 'granita-w-proszku', img: 'granita', title: {pl: 'Granita w proszku', en: 'Granita powder', de: 'Granita-Pulver', fr: 'Poudre de granita', pt: 'Granita em pó', ru: 'Порошок гранита', zh: '格兰尼塔粉'}},
    {id: 'produkty-mleczne', img: 'mleczne', title: {pl: 'Produkty mleczne', en: 'Dairy products', de: 'Milchprodukte', fr: 'Produits laitiers', pt: 'Produtos lácteos', ru: 'Молочные продукты', zh: '乳制品'}},
    {id: 'produkty-bezglutenowe', img: 'gluten', title: {pl: 'Produkty bezglutenowe', en: 'Gluten-free products', de: 'Glutenfreie Produkte', fr: 'Produits sans gluten', pt: 'Produtos sem glúten', ru: 'Безглютеновые продукты', zh: '无麸质产品'}},
    {id: 'skrobie', img: 'skrobie', title: {pl: 'Skrobie', en: 'Starches', de: 'Stärken', fr: 'Amidons', pt: 'Amidos', ru: 'Крахмалы', zh: '淀粉'}},
    {id: 'zaopatrzenie', img: 'dodatki', title: {pl: 'Zaopatrzenie', en: 'Supplies', de: 'Ausstattung', fr: 'Fournitures', pt: 'Suprimentos', ru: 'Принадлежности', zh: '用品'}},
    {id: 'maszyny-lodowe', img: 'maszyny', title: {pl: 'Maszyny do lodów', en: 'Ice cream machines', de: 'Eismaschinen', fr: 'Machines à glace', pt: 'Máquinas de sorvete', ru: 'Машины для мороженого', zh: '冰淇淋机'}},
    {id: 'granitory', img: 'granitory', title: {pl: 'Granitory', en: 'Slushie machines', de: 'Slushie-Maschinen', fr: 'Machines à granita', pt: 'Máquinas de granita', ru: 'Машины для гранита', zh: '冰沙机'}},
    {id: 'gofrownice', img: 'gofrownice', title: {pl: 'Gofrownice', en: 'Waffle makers', de: 'Waffeleisen', fr: 'Gaufriers', pt: 'Máquinas de waffle', ru: 'Вафельницы', zh: '华夫饼机'}},
    {id: 'mieszanie-pakowanie', img: 'mieszanie', title: {pl: 'Mieszanie i pakowanie', en: 'Mixing and packing', de: 'Mischen und Verpacken', fr: 'Mélange et emballage', pt: 'Mistura e embalagem', ru: 'Смешивание и упаковка', zh: '混合和包装'}},
  ]

  for (let i = 0; i < categoryData.length; i++) {
    const cat = categoryData[i]
    await client.createOrReplace({
      _id: `category-${cat.id}`,
      _type: 'productCategory',
      language: 'pl',
      categoryId: cat.id,
      title: {_type: 'localizedString', ...cat.title},
      slug: {_type: 'slug', current: cat.id},
      description: {
        _type: 'localizedRichText',
        pl: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: `Wysokiej jakości produkty ${cat.title.pl}`}]}],
        en: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: `High quality ${cat.title.en}`}]}],
        de: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: `Hochwertige ${cat.title.de}`}]}],
        fr: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: `${cat.title.fr} de haute qualité`}]}],
        pt: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: `${cat.title.pt} de alta qualidade`}]}],
        ru: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: `Высококачественные ${cat.title.ru}`}]}],
        zh: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: `高质量${cat.title.zh}`}]}],
      },
      icon: imageAssets[cat.img] ? mkImage(imageAssets[cat.img]._id, cat.title.pl) : null,
      order: i,
    })
    console.log(`✅ Category: ${cat.title.pl}`)
  }

  // Step 4: Create category cards for homepage
  console.log('\n📍 STEP 4: Creating category cards...')
  const categoryCards = categoryData.map((cat, i) => ({
    _key: `cat${i + 1}`,
    _type: 'categoryCard',
    title: {_type: 'localizedString', ...cat.title},
    description: `Wysokiej jakości produkty`,
    image: imageAssets[cat.img] ? mkImage(imageAssets[cat.img]._id, cat.title.pl) : null,
    link: `/kategoria/${cat.id}`,
    order: i,
  }))

  // Step 5: Create main documents with i18n
  console.log('\n📍 STEP 5: Creating main documents with i18n...')
  
  await client.createOrReplace({
    _id: 'siteSettings-main',
    _type: 'siteSettings',
    language: 'pl',
    siteName: 'Mix Expert',
    logo: imageAssets.logo ? mkImage(imageAssets.logo._id, 'Mix Expert Logo') : null,
    phone: '+48 663 902 452',
    email: 'biuro@mixexpert.com.pl',
    navigationItems: [
      {_key: 'n1', label: 'O nas', href: '/'},
      {_key: 'n2', label: 'Oferta', href: '/oferta'},
      {_key: 'n3', label: 'Kontakt', href: '/kontakt'},
    ],
  })
  console.log('✅ Site settings')

  await client.createOrReplace({
    _id: 'homePage-main',
    _type: 'homePage',
    language: 'pl',
    title: 'Mix Expert',
    slug: {_type: 'slug', current: 'home'},
    hero: {
      _type: 'hero',
      title: 'Mix Expert',
      subtitle: 'Producent wafli do lodów od 1985r.',
    },
    offerTitle: {
      _type: 'localizedString',
      pl: 'Nasza oferta',
      en: 'Our Offer',
      de: 'Unser Angebot',
      fr: 'Notre Offre',
      pt: 'Nossa Oferta',
      ru: 'Наше предложение',
      zh: '我们的产品',
    },
    categoryCards,
  })
  console.log('✅ Homepage with i18n')

  await client.createOrReplace({
    _id: 'offerPage-main',
    _type: 'offerPage',
    language: 'pl',
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
    categoryCards,
  })
  console.log('✅ Offer page with i18n')

  await client.createOrReplace({
    _id: 'contactPage-main',
    _type: 'contactPage',
    language: 'pl',
    title: {
      _type: 'localizedString',
      pl: 'Kontakt',
      en: 'Contact',
      de: 'Kontakt',
      fr: 'Contact',
      pt: 'Contato',
      ru: 'Контакт',
      zh: '联系我们',
    },
    slug: {_type: 'slug', current: 'kontakt'},
    companyName: 'Mix Expert',
    headquartersLabel: 'Siedziba Firmy:',
    address: {street: 'ul. Torowa 14', postalCode: '84-230', city: 'Rumia', country: 'Polska'},
    email: 'biuro@mixexpert.com.pl',
    phone: '+48 663 902 452',
    contactPersons: [
      {_key: 'p1', name: 'Katarzyna Rutkowska', department: 'Administracja', phone: '+48 663 902 452'},
      {_key: 'p2', name: 'Adam Dominik', department: 'Dział Handlowy'},
    ],
  })
  console.log('✅ Contact page with i18n')

  // Step 6: Create partners
  console.log('\n📍 STEP 6: Creating partners...')
  const partners = [
    {id: 'baj', name: 'Baj', img: 'baj'},
    {id: 'dezal', name: 'Dezal', img: 'dezal'},
    {id: 'instalmasz', name: 'Instalmasz', img: 'instalmasz'},
    {id: 'jureko', name: 'Jureko', img: 'jureko'},
    {id: 'logobeztla', name: 'Logobeztla', img: 'logobeztla'},
    {id: 'maszynylodow', name: 'Maszyny do lodów', img: 'maszynylodow'},
    {id: 'savpol', name: 'Savpol', img: 'savpol'},
  ]

  for (let i = 0; i < partners.length; i++) {
    const p = partners[i]
    await client.createOrReplace({
      _id: `partner-${p.id}`,
      _type: 'partner',
      name: p.name,
      logo: imageAssets[p.img] ? mkImage(imageAssets[p.img]._id, `${p.name} Logo`) : null,
      order: i,
    })
    console.log(`✅ Partner: ${p.name}`)
  }

  console.log('\n🎊 MIGRATION COMPLETE!')
  console.log('📊 Summary:')
  console.log(`   ✅ Images: ${Object.keys(imageAssets).length}`)
  console.log(`   ✅ Categories: 13 (with 7 languages each)`)
  console.log(`   ✅ Main pages: 3`)
  console.log(`   ✅ Partners: ${partners.length}`)
  console.log(`   ✅ Total documents: ~24`)
  console.log('\n🌍 Supported languages: PL, EN, DE, FR, PT, RU, ZH')
}

main()
