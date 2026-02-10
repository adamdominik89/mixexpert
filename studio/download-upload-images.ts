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

async function uploadImageToSanity(imageBuffer: Buffer, filename: string): Promise<any> {
  const asset = await client.assets.upload('image', imageBuffer, {
    filename,
  })
  return asset
}

async function downloadAndUploadImage(url: string, filename: string) {
  try {
    console.log(`📥 Downloading: ${filename}`)
    const imageBuffer = await downloadImage(url)
    console.log(`📤 Uploading: ${filename}`)
    const asset = await uploadImageToSanity(imageBuffer, filename)
    console.log(`✅ Uploaded: ${filename}`)
    return asset
  } catch (error) {
    console.error(`❌ Failed: ${filename}`, error)
    return null
  }
}

async function main() {
  console.log('🖼️  Starting image download and upload...')

  // Download and upload logo
  const logoAsset = await downloadAndUploadImage(
    'http://www.mixexpert.com.pl/templates/mix_expert/images/logo.png',
    'logo.png'
  )

  // Update site settings with logo (i18n version)
  if (logoAsset) {
    await client
      .patch('siteSettings-main')
      .set({
        logo: {
          _type: 'imageWithAlt',
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: logoAsset._id,
            },
          },
          alt: 'Mix Expert Logo',
        },
      })
      .commit()

    console.log('✅ Logo added to site settings!')
  }

  // Download category images
  const categoryImages = [
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/koncentraty.png', name: 'koncentraty.png'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/lody.png', name: 'lody.png'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/wafle.png', name: 'wafle.png'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/syropy.png', name: 'syropy.png'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/granita.png', name: 'granita.png'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/mleczne.png', name: 'mleczne.png'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/gluten.png', name: 'gluten.png'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/skrobie.png', name: 'skrobie.png'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/dodatki.png', name: 'dodatki.png'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/maszyny.png', name: 'maszyny.png'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/granitory.png', name: 'granitory.png'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/gofrownice.png', name: 'gofrownice.png'},
    {url: 'http://www.mixexpert.com.pl/images/glowna_nowe/mieszanie.png', name: 'mieszanie.png'},
  ]

  const uploadedCategoryImages: any = {}
  for (const img of categoryImages) {
    const asset = await downloadAndUploadImage(img.url, img.name)
    if (asset) {
      uploadedCategoryImages[img.name] = asset
    }
  }

  console.log('✅ Brand logos will be added when brand documents are created')

  // Download partner logos
  const partnerImages = [
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/baj3.png', partner: 'partner-baj', name: 'baj.png'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/dezal.png', partner: 'partner-dezal', name: 'dezal.png'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/instalmasz.png', partner: 'partner-instalmasz', name: 'instalmasz.png'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/jureko.png', partner: 'partner-jureko', name: 'jureko.png'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/logobeztlamale3.png', partner: 'partner-logobeztla', name: 'logobeztla.png'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/maszyny-do-lodow-logo.png', partner: 'partner-maszynylodow', name: 'maszynylodow.png'},
    {url: 'http://www.mixexpert.com.pl/images/partnerzy/savpol.png', partner: 'partner-savpol', name: 'savpol.png'},
  ]

  for (const img of partnerImages) {
    const asset = await downloadAndUploadImage(img.url, img.name)
    if (asset) {
      await client
        .patch(img.partner)
        .set({
          logo: {
            _type: 'imageWithAlt',
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: asset._id,
              },
            },
            alt: `${img.name.replace('.png', '')} Logo`,
          },
        })
        .commit()
      console.log(`✅ Updated partner: ${img.partner}`)
    }
  }

  console.log('🎉 All images uploaded and linked!')
}

main()
