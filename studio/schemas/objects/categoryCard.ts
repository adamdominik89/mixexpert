import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'categoryCard',
  title: 'Category Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.integer().min(0),
    }),
  ],
  preview: {
    select: {
      titlePl: 'title.pl',
      titleEn: 'title.en',
      media: 'image.image',
    },
    prepare({titlePl, titleEn, media}) {
      return {
        title: titlePl || titleEn || 'Untitled',
        media,
      }
    },
  },
})
