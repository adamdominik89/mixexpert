import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'y0cdogbw',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_IMPORT_TOKEN,
  apiVersion: '2024-01-01',
})

// Delete all existing documents (clean slate)
async function deleteAllDocuments() {
  console.log('🗑️  Deleting all existing documents...')
  await client.delete({query: '*[!(_id in path("_.**"))]'})
  console.log('✅ All documents deleted')
}

async function createDocuments() {
  console.log('📝 Creating documents with i18n support...')

  const documents = [
    // ========== SITE SETTINGS (using i18n) ==========
    {
      _id: 'siteSettings-main',
      _type: 'siteSettings',
      language: 'pl', // Base language for i18n plugin
      siteName: 'Mix Expert',
      siteDescription: {
        _type: 'localizedString',
        pl: 'Producent wafli do lodów, koncentratów spożywczych, gofrów w proszku',
        en: 'Ice cream cone manufacturer, food concentrates, waffle mix producer',
        de: 'Eiswaffelhersteller, Lebensmittelkonzentrate, Waffelmischungshersteller',
        fr: 'Fabricant de cornets de crème glacée, concentrés alimentaires',
        pt: 'Fabricante de cones de sorvete, concentrados alimentares',
        ru: 'Производитель вафельных рожков, пищевых концентратов',
        zh: '冰淇淋甜筒制造商、食品浓缩物',
      },
      phone: '+48 663 902 452',
      email: 'biuro@mixexpert.com.pl',
      navigationItems: [
        {_key: 'nav1', label: {pl: 'O nas', en: 'About', de: 'Über uns', fr: 'À propos', pt: 'Sobre', ru: 'О нас', zh: '关于我们'}, href: '/'},
        {_key: 'nav2', label: {pl: 'Oferta', en: 'Offer', de: 'Angebot', fr: 'Offre', pt: 'Oferta', ru: 'Предложение', zh: '产品'}, href: '/oferta'},
        {_key: 'nav3', label: {pl: 'Kontakt', en: 'Contact', de: 'Kontakt', fr: 'Contact', pt: 'Contato', ru: 'Контакт', zh: '联系'}, href: '/kontakt'},
      ],
      brandsTitle: {
        _type: 'localizedString',
        pl: 'Nasze marki:',
        en: 'Our Brands:',
        de: 'Unsere Marken:',
        fr: 'Nos Marques:',
        pt: 'Nossas Marcas:',
        ru: 'Наши бренды:',
        zh: '我们的品牌：',
      },
      partnersTitle: {
        _type: 'localizedString',
        pl: 'Nasi Partnerzy:',
        en: 'Our Partners:',
        de: 'Unsere Partner:',
        fr: 'Nos Partenaires:',
        pt: 'Nossos Parceiros:',
        ru: 'Наши партнеры:',
        zh: '我们的合作伙伴：',
      },
    },

    // ========== HOME PAGE (i18n) ==========
    {
      _id: 'homePage-main',
      _type: 'homePage',
      language: 'pl',
      title: {
        _type: 'localizedString',
        pl: 'Mix Expert - Strona Główna',
        en: 'Mix Expert - Home',
        de: 'Mix Expert - Startseite',
        fr: 'Mix Expert - Accueil',
        pt: 'Mix Expert - Início',
        ru: 'Mix Expert - Главная',
        zh: 'Mix Expert - 首页',
      },
      slug: {_type: 'slug', current: 'home'},
      hero: {
        _type: 'hero',
        title: 'Mix Expert',
        subtitle: {
          _type: 'localizedString',
          pl: 'Producent wafli do lodów, jako przedsiębiorstwo rodzinne istnieje w branży lodziarskiej, cukierniczej i piekarniczej od 1985r.',
          en: 'Manufacturer of ice cream cones is a family company which has existed in the confectionery and baking sector since 1985.',
          de: 'Hersteller von Eiswaffeln ist ein Familienunternehmen, das seit 1985 in der Konditorei- und Bäckereibranche tätig ist.',
          fr: 'Fabricant de cornets de crème glacée est une entreprise familiale qui existe dans le secteur de la confiserie et de la boulangerie depuis 1985.',
          pt: 'Fabricante de cones de sorvete é uma empresa familiar que existe no setor de confeitaria e panificação desde 1985.',
          ru: 'Производитель вафельных рожков - семейная компания, существующая в кондитерской и хлебопекарной отрасли с 1985 года.',
          zh: '冰淇淋甜筒制造商是一家自1985年以来一直从事糖果和烘焙行业的家族企业。',
        },
      },
      aboutSection: {
        _type: 'aboutSection',
        title: 'Mix Expert',
        subtitle: {
          _type: 'localizedString',
          pl: 'Jakość naszą pasją',
          en: 'Quality as Our Passion',
          de: 'Qualität als unsere Leidenschaft',
          fr: 'La qualité comme notre passion',
          pt: 'Qualidade como nossa paixão',
          ru: 'Качество - наша страсть',
          zh: '质量是我们的热情',
        },
        description: [
          {
            _type: 'block',
            _key: 'desc1',
            style: 'normal',
            children: [{_type: 'span', _key: 'span1', text: 'producent wafli do lodów, jako przedsiębiorstwo rodzinne istnieje w branży lodziarskiej, cukierniczej i piekarniczej od 1985r.'}],
          },
        ],
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
      categoryCards: [], // Will be populated separately
    },

    // ========== OFFER PAGE (i18n) ==========
    {
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
      description: {
        _type: 'localizedText',
        pl: 'Poznaj pełną ofertę Mix Expert',
        en: 'Discover the complete Mix Expert offer',
        de: 'Entdecken Sie das komplette Mix Expert Angebot',
        fr: 'Découvrez l\'offre complète de Mix Expert',
        pt: 'Descubra a oferta completa da Mix Expert',
        ru: 'Откройте для себя полное предложение Mix Expert',
        zh: '探索Mix Expert的完整产品',
      },
      categoryCards: [], // Will be populated
    },

    // ========== CONTACT PAGE (i18n) ==========
    {
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
      headquartersLabel: {
        _type: 'localizedString',
        pl: 'Siedziba Firmy:',
        en: 'Headquarters:',
        de: 'Hauptsitz:',
        fr: 'Siège social:',
        pt: 'Sede:',
        ru: 'Штаб-квартира:',
        zh: '总部：',
      },
      address: {
        street: 'ul. Torowa 14',
        postalCode: '84-230',
        city: 'Rumia',
        country: 'Polska',
      },
      email: 'biuro@mixexpert.com.pl',
      phone: '+48 663 902 452',
      administrationLabel: {
        _type: 'localizedString',
        pl: 'Administracja:',
        en: 'Administration:',
        de: 'Verwaltung:',
        fr: 'Administration:',
        pt: 'Administração:',
        ru: 'Администрация:',
        zh: '行政部：',
      },
      salesDepartmentLabel: {
        _type: 'localizedString',
        pl: 'Dział Handlowy:',
        en: 'Sales Department:',
        de: 'Vertriebsabteilung:',
        fr: 'Service Commercial:',
        pt: 'Departamento de Vendas:',
        ru: 'Отдел продаж:',
        zh: '销售部：',
      },
      contactPersons: [
        {
          _key: 'person1',
          _type: 'contactPerson',
          name: 'Katarzyna Rutkowska',
          department: 'Administracja',
          phone: '+48 663 902 452',
          languageFlags: ['pl', 'en', 'de', 'fr', 'pt', 'ru', 'zh'],
        },
        {
          _key: 'person2',
          _type: 'contactPerson',
          name: 'Adam Dominik',
          department: 'Dział Handlowy',
          languageFlags: ['pl', 'en', 'de', 'fr', 'pt', 'ru', 'zh'],
        },
      ],
    },

    // ========== PARTNERS (no translation needed) ==========
    {_id: 'partner-baj', _type: 'partner', name: 'Baj', order: 0},
    {_id: 'partner-dezal', _type: 'partner', name: 'Dezal', order: 1},
    {_id: 'partner-instalmasz', _type: 'partner', name: 'Instalmasz', order: 2},
    {_id: 'partner-jureko', _type: 'partner', name: 'Jureko', order: 3},
    {_id: 'partner-logobeztla', _type: 'partner', name: 'Logobeztla', order: 4},
    {_id: 'partner-maszynylodow', _type: 'partner', name: 'Maszyny do lodów', order: 5},
    {_id: 'partner-savpol', _type: 'partner', name: 'Savpol', order: 6},
  ]

  // Create documents in batches
  for (const doc of documents) {
    await client.createOrReplace(doc)
    console.log(`✅ Created: ${doc._id}`)
  }

  console.log(`🎉 Created ${documents.length} base documents!`)
}

async function createCategories() {
  console.log('📦 Creating product categories with 7 languages...')

  const categories = [
    {
      categoryId: 'koncentraty-spozywcze',
      order: 0,
      title: {
        pl: 'Koncentraty spożywcze, mieszanki ciast i gofrów',
        en: 'Food concentrates, cake and waffle mixes',
        de: 'Lebensmittelkonzentrate, Kuchen- und Waffelmischungen',
        fr: 'Concentrés alimentaires, mélanges de gâteaux et de gaufres',
        pt: 'Concentrados alimentares, misturas de bolos e waffles',
        ru: 'Пищевые концентраты, смеси для тортов и вафель',
        zh: '食品浓缩物、蛋糕和华夫饼混合物',
      },
      description: {
        pl: 'Wysokiej jakości koncentraty dla przemysłu cukierniczego',
        en: 'High quality concentrates for confectionery industry',
        de: 'Hochwertige Konzentrate für die Konditoreiindustrie',
        fr: 'Concentrés de haute qualité pour l\'industrie de la confiserie',
        pt: 'Concentrados de alta qualidade para a indústria de confeitaria',
        ru: 'Высококачественные концентраты для кондитерской промышленности',
        zh: '糖果行业的高质量浓缩物',
      },
    },
    {
      categoryId: 'lody-w-proszku',
      order: 1,
      title: {
        pl: 'Lody w proszku, proszek lodowy do automatów',
        en: 'Ice cream powder mixes',
        de: 'Eispulvermischungen',
        fr: 'Mélanges de poudre de crème glacée',
        pt: 'Misturas de sorvete em pó',
        ru: 'Порошковые смеси для мороженого',
        zh: '冰淇淋粉混合物',
      },
      description: {
        pl: 'Profesjonalne mieszanki lodów w proszku',
        en: 'Professional ice cream powder mixes',
        de: 'Professionelle Eispulvermischungen',
        fr: 'Mélanges professionnels de poudre de crème glacée',
        pt: 'Misturas profissionais de sorvete em pó',
        ru: 'Профессиональные порошковые смеси для мороженого',
        zh: '专业冰淇淋粉混合物',
      },
    },
    {
      categoryId: 'wafle-do-lodow',
      order: 2,
      title: {
        pl: 'Wafle do lodów i deserów',
        en: 'Wafer cones for ice cream and desserts',
        de: 'Waffeltüten für Eis und Desserts',
        fr: 'Cornets de gaufrettes pour glaces et desserts',
        pt: 'Cones de wafer para sorvete e sobremesas',
        ru: 'Вафельные рожки для мороженого и десертов',
        zh: '冰淇淋和甜点的华夫饼筒',
      },
      description: {
        pl: 'Wysokiej jakości wafle do lodów',
        en: 'High quality ice cream cones',
        de: 'Hochwertige Eiswaffeln',
        fr: 'Cornets de crème glacée de haute qualité',
        pt: 'Cones de sorvete de alta qualidade',
        ru: 'Высококачественные вафельные рожки',
        zh: '高质量冰淇淋甜筒',
      },
    },
    {
      categoryId: 'syropy',
      order: 3,
      title: {
        pl: 'Syropy do granitorów, sorbetów i shake\'ów',
        en: 'Slush, granita syrup concentrates',
        de: 'Sirup-Konzentrate für Granita und Sorbet',
        fr: 'Concentrés de sirop pour granita et sorbet',
        pt: 'Concentrados de xarope para granita e sorvete',
        ru: 'Концентраты сиропа для гранита и сорбета',
        zh: '冰沙、格兰尼塔糖浆浓缩物',
      },
      description: {
        pl: 'Syropy owocowe i smakowe',
        en: 'Fruit and flavor syrups',
        de: 'Frucht- und Geschmackssirupe',
        fr: 'Sirops de fruits et aromatisés',
        pt: 'Xaropes de frutas e sabores',
        ru: 'Фруктовые и ароматические сиропы',
        zh: '水果和风味糖浆',
      },
    },
    {
      categoryId: 'granita-w-proszku',
      order: 4,
      title: {
        pl: 'Granita w proszku',
        en: 'Granita powder',
        de: 'Granita-Pulver',
        fr: 'Poudre de granita',
        pt: 'Granita em pó',
        ru: 'Порошок гранита',
        zh: '格兰尼塔粉',
      },
      description: {
        pl: 'Mieszanki granity w proszku',
        en: 'Granita powder mixes',
        de: 'Granita-Pulvermischungen',
        fr: 'Mélanges de poudre de granita',
        pt: 'Misturas de granita em pó',
        ru: 'Порошковые смеси для гранита',
        zh: '格兰尼塔粉混合物',
      },
    },
    {
      categoryId: 'produkty-mleczne',
      order: 5,
      title: {
        pl: 'Specjalistyczne mieszanki mleczne oraz produkty mleczne',
        en: 'Milk powder, milk blends and dairy products',
        de: 'Milchpulver, Milchmischungen und Milchprodukte',
        fr: 'Poudre de lait, mélanges de lait et produits laitiers',
        pt: 'Leite em pó, misturas de leite e produtos lácteos',
        ru: 'Сухое молоко, молочные смеси и молочные продукты',
        zh: '奶粉、牛奶混合物和乳制品',
      },
      description: {
        pl: 'Produkty mleczne dla przemysłu',
        en: 'Dairy products for industry',
        de: 'Milchprodukte für die Industrie',
        fr: 'Produits laitiers pour l\'industrie',
        pt: 'Produtos lácteos para a indústria',
        ru: 'Молочные продукты для промышленности',
        zh: '工业乳制品',
      },
    },
    {
      categoryId: 'produkty-bezglutenowe',
      order: 6,
      title: {
        pl: 'Produkty bezglutenowe',
        en: 'Gluten-free mixes',
        de: 'Glutenfreie Mischungen',
        fr: 'Mélanges sans gluten',
        pt: 'Misturas sem glúten',
        ru: 'Безглютеновые смеси',
        zh: '无麸质混合物',
      },
      description: {
        pl: 'Linia produktów bezglutenowych Dr. GF',
        en: 'Dr. GF gluten-free product line',
        de: 'Dr. GF glutenfreie Produktlinie',
        fr: 'Gamme de produits sans gluten Dr. GF',
        pt: 'Linha de produtos sem glúten Dr. GF',
        ru: 'Линия безглютеновых продуктов Dr. GF',
        zh: 'Dr. GF 无麸质产品系列',
      },
    },
    {
      categoryId: 'skrobie',
      order: 7,
      title: {
        pl: 'Skrobie pszenne glutenowe oraz bezglutenowe',
        en: 'Gluten and gluten-free wheat starch',
        de: 'Gluten- und glutenfreie Weizenstärke',
        fr: 'Amidon de blé avec et sans gluten',
        pt: 'Amido de trigo com e sem glúten',
        ru: 'Пшеничный крахмал с глютеном и без глютена',
        zh: '含麸质和无麸质小麦淀粉',
      },
      description: {
        pl: 'Skrobie dla przemysłu spożywczego',
        en: 'Starches for food industry',
        de: 'Stärken für die Lebensmittelindustrie',
        fr: 'Amidons pour l\'industrie alimentaire',
        pt: 'Amidos para a indústria alimentícia',
        ru: 'Крахмалы для пищевой промышленности',
        zh: '食品工业用淀粉',
      },
    },
    {
      categoryId: 'zaopatrzenie',
      order: 8,
      title: {
        pl: 'Zaopatrzenie lodziarni, cukierni i piekarni',
        en: 'Supplies for ice cream parlours, confectioners and bakeries',
        de: 'Ausstattung für Eisdielen, Konditoreien und Bäckereien',
        fr: 'Fournitures pour glaciers, confiseurs et boulangeries',
        pt: 'Suprimentos para sorveterias, confeitarias e padarias',
        ru: 'Принадлежности для кафе-мороженых, кондитерских и пекарен',
        zh: '冰淇淋店、糖果店和面包店的用品',
      },
      description: {
        pl: 'Kompleksowe wyposażenie',
        en: 'Complete equipment',
        de: 'Komplette Ausrüstung',
        fr: 'Équipement complet',
        pt: 'Equipamento completo',
        ru: 'Полное оборудование',
        zh: '完整设备',
      },
    },
    {
      categoryId: 'maszyny-lodowe',
      order: 9,
      title: {
        pl: 'Maszyny i automaty do lodów',
        en: 'Ice cream machines',
        de: 'Eismaschinen',
        fr: 'Machines à glace',
        pt: 'Máquinas de sorvete',
        ru: 'Машины для мороженого',
        zh: '冰淇淋机',
      },
      description: {
        pl: 'Profesjonalne maszyny do lodów',
        en: 'Professional ice cream machines',
        de: 'Professionelle Eismaschinen',
        fr: 'Machines à glace professionnelles',
        pt: 'Máquinas de sorvete profissionais',
        ru: 'Профессиональные машины для мороженого',
        zh: '专业冰淇淋机',
      },
    },
    {
      categoryId: 'granitory',
      order: 10,
      title: {
        pl: 'Granitory',
        en: 'Slushie machines',
        de: 'Slushie-Maschinen',
        fr: 'Machines à granita',
        pt: 'Máquinas de granita',
        ru: 'Машины для гранита',
        zh: '冰沙机',
      },
      description: {
        pl: 'Granitory GBG',
        en: 'GBG slushie machines',
        de: 'GBG Slushie-Maschinen',
        fr: 'Machines à granita GBG',
        pt: 'Máquinas de granita GBG',
        ru: 'Машины для гранита GBG',
        zh: 'GBG冰沙机',
      },
    },
    {
      categoryId: 'gofrownice',
      order: 11,
      title: {
        pl: 'Gofrownice',
        en: 'Waffle makers',
        de: 'Waffeleisen',
        fr: 'Gaufriers',
        pt: 'Máquinas de waffle',
        ru: 'Вафельницы',
        zh: '华夫饼机',
      },
      description: {
        pl: 'Gofrownice Dezal',
        en: 'Dezal waffle makers',
        de: 'Dezal Waffeleisen',
        fr: 'Gaufriers Dezal',
        pt: 'Máquinas de waffle Dezal',
        ru: 'Вафельницы Dezal',
        zh: 'Dezal华夫饼机',
      },
    },
    {
      categoryId: 'mieszanie-pakowanie',
      order: 12,
      title: {
        pl: 'Mieszanie i pakowanie usługowe',
        en: 'Service-related mixing and packing',
        de: 'Misch- und Verpackungsdienstleistungen',
        fr: 'Services de mélange et d\'emballage',
        pt: 'Serviços de mistura e embalagem',
        ru: 'Услуги по смешиванию и упаковке',
        zh: '混合和包装服务',
      },
      description: {
        pl: 'Usługi mieszania i pakowania',
        en: 'Mixing and packing services',
        de: 'Misch- und Verpackungsservices',
        fr: 'Services de mélange et d\'emballage',
        pt: 'Serviços de mistura e embalagem',
        ru: 'Услуги смешивания и упаковки',
        zh: '混合和包装服务',
      },
    },
  ]

  for (const cat of categories) {
    const doc = {
      _id: `category-${cat.categoryId}`,
      _type: 'productCategory',
      language: 'pl', // Base language for i18n plugin
      categoryId: cat.categoryId,
      title: {
        _type: 'localizedString',
        ...cat.title,
      },
      slug: {_type: 'slug', current: cat.categoryId},
      description: {
        _type: 'localizedRichText',
        pl: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: cat.description.pl}]}],
        en: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: cat.description.en}]}],
        de: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: cat.description.de}]}],
        fr: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: cat.description.fr}]}],
        pt: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: cat.description.pt}]}],
        ru: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: cat.description.ru}]}],
        zh: [{_type: 'block', _key: 'b1', style: 'normal', children: [{_type: 'span', _key: 's1', text: cat.description.zh}]}],
      },
      order: cat.order,
    }

    await client.createOrReplace(doc)
    console.log(`✅ Created: ${cat.title.pl}`)
  }

  console.log(`🎉 Created ${categories.length} categories with 7 languages each!`)
}

// Main import function
async function importContent() {
  try {
    console.log('🚀 Starting full migration with 7 languages...')
    console.log(`Project ID: ${client.config().projectId}`)
    console.log(`Dataset: ${client.config().dataset}`)

    if (!client.config().token) {
      console.error('❌ ERROR: SANITY_IMPORT_TOKEN not set!')
      process.exit(1)
    }

    await deleteAllDocuments()
    await createDocuments()
    await createCategories()

    console.log('🎊 Content import completed successfully!')
    console.log('📊 Summary:')
    console.log('   - Languages: 7 (PL, EN, DE, FR, PT, RU, ZH)')
    console.log('   - Documents: ~22 base documents')
    console.log('   - Categories: 13 (with all 7 languages)')
    console.log('   - Structure: i18n (single document per content)')
  } catch (error) {
    console.error('❌ Import failed:', error)
    process.exit(1)
  }
}

importContent()
