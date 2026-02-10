import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'localizedString',
  title: 'Localized String',
  type: 'object',
  fields: [
    defineField({
      name: 'pl',
      title: '🇵🇱 Polish',
      type: 'string',
    }),
    defineField({
      name: 'en',
      title: '🇬🇧 English',
      type: 'string',
    }),
    defineField({
      name: 'de',
      title: '🇩🇪 German',
      type: 'string',
    }),
    defineField({
      name: 'fr',
      title: '🇫🇷 French',
      type: 'string',
    }),
    defineField({
      name: 'pt',
      title: '🇵🇹 Portuguese',
      type: 'string',
    }),
    defineField({
      name: 'ru',
      title: '🇷🇺 Russian',
      type: 'string',
    }),
    defineField({
      name: 'zh',
      title: '🇨🇳 Chinese',
      type: 'string',
    }),
  ],
})
