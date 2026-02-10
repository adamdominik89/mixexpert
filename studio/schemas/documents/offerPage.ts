import {defineField, defineType} from 'sanity'
import {DocumentsIcon} from '@sanity/icons'

export default defineType({
  name: 'offerPage',
  title: 'Offer Page',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'categoryCards',
      title: 'Category Cards',
      type: 'array',
      of: [{type: 'categoryCard'}],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
