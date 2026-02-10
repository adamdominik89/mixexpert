import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'q3ncxqvm',
  dataset: process.env.SANITY_STUDIO_DATASET || 'test',
  useCdn: false,
  token: process.env.SANITY_IMPORT_TOKEN,
  apiVersion: '2024-01-01',
})

async function migrateCategories() {
  console.log('🔄 Migrating product categories to i18n format...')

  // Get all existing categories
  const categoriesPl = await client.fetch(`*[_type == "productCategory" && language == "pl"]`)
  const categoriesEn = await client.fetch(`*[_type == "productCategory" && language == "en"]`)
  const categoriesDe = await client.fetch(`*[_type == "productCategory" && language == "de"]`)

  // Group by categoryId
  const categoryMap: any = {}

  categoriesPl.forEach((cat: any) => {
    if (!categoryMap[cat.categoryId]) {
      categoryMap[cat.categoryId] = {pl: cat}
    } else {
      categoryMap[cat.categoryId].pl = cat
    }
  })

  categoriesEn.forEach((cat: any) => {
    if (!categoryMap[cat.categoryId]) {
      categoryMap[cat.categoryId] = {en: cat}
    } else {
      categoryMap[cat.categoryId].en = cat
    }
  })

  categoriesDe.forEach((cat: any) => {
    if (!categoryMap[cat.categoryId]) {
      categoryMap[cat.categoryId] = {de: cat}
    } else {
      categoryMap[cat.categoryId].de = cat
    }
  })

  // Create new i18n documents
  const newCategories = []

  for (const [categoryId, langs] of Object.entries(categoryMap)) {
    const pl = (langs as any).pl
    const en = (langs as any).en
    const de = (langs as any).de

    if (!pl) continue // Skip if no Polish version

    const newDoc = {
      _id: `category-i18n-${categoryId}`,
      _type: 'productCategory',
      language: 'pl', // Base language for i18n plugin
      categoryId: categoryId,
      title: {
        _type: 'localizedString',
        pl: pl.title,
        en: en?.title || pl.title,
        de: de?.title || pl.title,
      },
      slug: pl.slug,
      description: {
        _type: 'localizedRichText',
        pl: pl.description,
        en: en?.description || pl.description,
        de: de?.description || pl.description,
      },
      headerImage: pl.headerImage,
      icon: pl.icon,
      order: pl.order,
      subcategories: pl.subcategories,
      features: pl.features,
      seo: pl.seo,
    }

    newCategories.push(newDoc)
  }

  // Delete old categories
  console.log('🗑️  Deleting old category documents...')
  await client.delete({query: '*[_type == "productCategory" && defined(language)]'})

  // Create new i18n categories
  console.log('📝 Creating new i18n category documents...')
  for (const doc of newCategories) {
    await client.createOrReplace(doc)
    console.log(`✅ Created: ${doc.title.pl}`)
  }

  console.log(`🎉 Migrated ${newCategories.length} categories!`)
}

migrateCategories()
