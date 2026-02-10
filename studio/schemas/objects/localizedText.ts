import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'localizedText',
  title: 'Localized Text',
  type: 'object',
  fields: [
    defineField({
      name: 'pl',
      title: '🇵🇱 Polish',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'en',
      title: '🇬🇧 English',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'de',
      title: '🇩🇪 German',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fr',
      title: '🇫🇷 French',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'pt',
      title: '🇵🇹 Portuguese',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ru',
      title: '🇷🇺 Russian',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'zh',
      title: '🇨🇳 Chinese',
      type: 'text',
      rows: 3,
    }),
  ],
})
