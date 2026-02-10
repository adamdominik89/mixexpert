import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'y0cdogbw',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_IMPORT_TOKEN,
  apiVersion: '2024-01-01',
})

async function addCategoryCards() {
  console.log('🎴 Adding category cards to homepage...')

  // Get all categories with their icons
  const categories = await client.fetch(`*[_type == "productCategory"] | order(order asc) {
    _id,
    categoryId,
    title,
    description,
    icon,
    order
  }`)

  console.log(`Found ${categories.length} categories`)

  const categoryCards = categories.map((cat: any, index: number) => {
    // Extract first text from Polish description
    let descText = ''
    if (cat.description?.pl && Array.isArray(cat.description.pl) && cat.description.pl[0]?.children?.[0]?.text) {
      descText = cat.description.pl[0].children[0].text
    }

    return {
      _key: `cat${index + 1}`,
      _type: 'categoryCard',
      title: cat.title, // Keep as localizedString
      description: descText, // Plain string
      image: cat.icon,
      link: `/kategoria/${cat.categoryId}`,
      order: cat.order,
    }
  })

  // Update homepage
  await client
    .patch('homePage-main')
    .set({categoryCards})
    .commit()

  console.log(`✅ Added ${categoryCards.length} category cards to homepage!`)
}

addCategoryCards()
