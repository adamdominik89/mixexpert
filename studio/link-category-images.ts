import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'q3ncxqvm',
  dataset: process.env.SANITY_STUDIO_DATASET || 'test',
  useCdn: false,
  token: process.env.SANITY_IMPORT_TOKEN,
  apiVersion: '2024-01-01',
})

async function linkImages() {
  console.log('🔗 Linking category images...')

  // Get all uploaded images
  const images = await client.fetch(`*[_type == "sanity.imageAsset"] {_id, originalFilename}`)
  
  const imageMap: any = {}
  images.forEach((img: any) => {
    imageMap[img.originalFilename] = img._id
  })

  const categoryImageMapping = [
    {filename: 'koncentraty.png', key: 'cat1'},
    {filename: 'lody.png', key: 'cat2'},
    {filename: 'wafle.png', key: 'cat3'},
    {filename: 'syropy.png', key: 'cat4'},
    {filename: 'granita.png', key: 'cat5'},
    {filename: 'mleczne.png', key: 'cat6'},
    {filename: 'gluten.png', key: 'cat7'},
    {filename: 'skrobie.png', key: 'cat8'},
    {filename: 'dodatki.png', key: 'cat9'},
    {filename: 'maszyny.png', key: 'cat10'},
    {filename: 'granitory.png', key: 'cat11'},
    {filename: 'gofrownice.png', key: 'cat12'},
    {filename: 'mieszanie.png', key: 'cat13'},
  ]

  // Update Polish homepage
  const homePagePl = await client.getDocument('homePage-pl')
  if (homePagePl) {
    const updatedCards = homePagePl.categoryCards.map((card: any) => {
      const mapping = categoryImageMapping.find((m) => m.key === card._key)
      if (mapping && imageMap[mapping.filename]) {
        return {
          ...card,
          image: {
            _type: 'imageWithAlt',
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageMap[mapping.filename],
              },
            },
            alt: card.title,
          },
        }
      }
      return card
    })

    await client.patch('homePage-pl').set({categoryCards: updatedCards}).commit()
    console.log('✅ Updated Polish homepage category images')
  }

  // Update English homepage
  const homePageEn = await client.getDocument('homePage-en')
  if (homePageEn) {
    const updatedCards = homePageEn.categoryCards.map((card: any) => {
      const mapping = categoryImageMapping.find((m) => m.key === card._key)
      if (mapping && imageMap[mapping.filename]) {
        return {
          ...card,
          image: {
            _type: 'imageWithAlt',
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageMap[mapping.filename],
              },
            },
            alt: card.title,
          },
        }
      }
      return card
    })

    await client.patch('homePage-en').set({categoryCards: updatedCards}).commit()
    console.log('✅ Updated English homepage category images')
  }

  // Update German homepage
  const homePageDe = await client.getDocument('homePage-de')
  if (homePageDe) {
    const updatedCards = homePageDe.categoryCards.map((card: any) => {
      const mapping = categoryImageMapping.find((m) => m.key === card._key)
      if (mapping && imageMap[mapping.filename]) {
        return {
          ...card,
          image: {
            _type: 'imageWithAlt',
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageMap[mapping.filename],
              },
            },
            alt: card.title,
          },
        }
      }
      return card
    })

    await client.patch('homePage-de').set({categoryCards: updatedCards}).commit()
    console.log('✅ Updated German homepage category images')
  }

  // Update Offer Pages
  const offerPagePl = await client.getDocument('offerPage-pl')
  if (offerPagePl) {
    const updatedCards = offerPagePl.categoryCards.map((card: any) => {
      const mapping = categoryImageMapping.find((m) => m.key === card._key)
      if (mapping && imageMap[mapping.filename]) {
        return {
          ...card,
          image: {
            _type: 'imageWithAlt',
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageMap[mapping.filename],
              },
            },
            alt: card.title,
          },
        }
      }
      return card
    })

    await client.patch('offerPage-pl').set({categoryCards: updatedCards}).commit()
    console.log('✅ Updated Polish offer page category images')
  }

  const offerPageEn = await client.getDocument('offerPage-en')
  if (offerPageEn) {
    const updatedCards = offerPageEn.categoryCards.map((card: any) => {
      const mapping = categoryImageMapping.find((m) => m.key === card._key)
      if (mapping && imageMap[mapping.filename]) {
        return {
          ...card,
          image: {
            _type: 'imageWithAlt',
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageMap[mapping.filename],
              },
            },
            alt: card.title,
          },
        }
      }
      return card
    })

    await client.patch('offerPage-en').set({categoryCards: updatedCards}).commit()
    console.log('✅ Updated English offer page category images')
  }

  const offerPageDe = await client.getDocument('offerPage-de')
  if (offerPageDe) {
    const updatedCards = offerPageDe.categoryCards.map((card: any) => {
      const mapping = categoryImageMapping.find((m) => m.key === card._key)
      if (mapping && imageMap[mapping.filename]) {
        return {
          ...card,
          image: {
            _type: 'imageWithAlt',
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageMap[mapping.filename],
              },
            },
            alt: card.title,
          },
        }
      }
      return card
    })

    await client.patch('offerPage-de').set({categoryCards: updatedCards}).commit()
    console.log('✅ Updated German offer page category images')
  }

  console.log('🎊 All category images linked!')
}

linkImages()
