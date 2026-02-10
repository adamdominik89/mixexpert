import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'y0cdogbw',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_IMPORT_TOKEN,
  apiVersion: '2024-01-01',
})

async function cleanupLanguageFields() {
  console.log('🧹 Cleaning up old "language" fields from all documents...')

  // Get all documents that have a language field
  const documents = await client.fetch(`*[defined(language) && !(_id in path("_.**"))]{_id, _type, language}`)
  
  console.log(`Found ${documents.length} documents with language field`)

  // Remove language field from each document
  for (const doc of documents) {
    await client
      .patch(doc._id)
      .unset(['language'])
      .commit()
    console.log(`✅ Cleaned: ${doc._type} (${doc._id})`)
  }

  console.log('🎉 Cleanup complete! All "language" fields removed.')
  console.log('Please refresh your browser at http://localhost:3333')
}

cleanupLanguageFields()
