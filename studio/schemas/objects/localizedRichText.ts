import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'localizedRichText',
  title: 'Localized Rich Text',
  type: 'object',
  fields: [
    defineField({
      name: 'pl',
      title: '🇵🇱 Polish',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'en',
      title: '🇬🇧 English',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'de',
      title: '🇩🇪 German',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'fr',
      title: '🇫🇷 French',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'pt',
      title: '🇵🇹 Portuguese',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'ru',
      title: '🇷🇺 Russian',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'zh',
      title: '🇨🇳 Chinese',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
