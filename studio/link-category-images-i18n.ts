import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'y0cdogbw',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_IMPORT_TOKEN,
  apiVersion: '2024-01-01',
})

async function linkImages() {
  console.log('🔗 Linking category images to i18n categories...')

  // Get all uploaded images
  const images = await client.fetch(`*[_type == "sanity.imageAsset"] {_id, originalFilename}`)
  
  const imageMap: any = {}
  images.forEach((img: any) => {
    imageMap[img.originalFilename] = img._id
  })

  const categoryImageMapping = [
    {filename: 'koncentraty.png', categoryId: 'koncentraty-spozywcze'},
    {filename: 'lody.png', categoryId: 'lody-w-proszku'},
    {filename: 'wafle.png', categoryId: 'wafle-do-lodow'},
    {filename: 'syropy.png', categoryId: 'syropy'},
    {filename: 'granita.png', categoryId: 'granita-w-proszku'},
    {filename: 'mleczne.png', categoryId: 'produkty-mleczne'},
    {filename: 'gluten.png', categoryId: 'produkty-bezglutenowe'},
    {filename: 'skrobie.png', categoryId: 'skrobie'},
    {filename: 'dodatki.png', categoryId: 'zaopatrzenie'},
    {filename: 'maszyny.png', categoryId: 'maszyny-lodowe'},
    {filename: 'granitory.png', categoryId: 'granitory'},
    {filename: 'gofrownice.png', categoryId: 'gofrownice'},
    {filename: 'mieszanie.png', categoryId: 'mieszanie-pakowanie'},
  ]

  for (const mapping of categoryImageMapping) {
    if (imageMap[mapping.filename]) {
      await client
        .patch(`category-${mapping.categoryId}`)
        .set({
          icon: {
            _type: 'imageWithAlt',
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageMap[mapping.filename],
              },
            },
            alt: `${mapping.categoryId} icon`,
          },
        })
        .commit()
      console.log(`✅ Linked icon to: ${mapping.categoryId}`)
    }
  }

  console.log('🎊 All category icons linked!')
}

linkImages()
