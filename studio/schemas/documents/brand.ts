import {defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons'

export default defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'Polish', value: 'pl'},
          {title: 'English', value: 'en'},
          {title: 'German', value: 'de'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brandId',
      title: 'Brand ID',
      type: 'string',
      description: 'Unique identifier (same across languages)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'imageWithAlt',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
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
      title: 'name',
      language: 'language',
      media: 'logo.image',
    },
    prepare({title, language, media}) {
      return {
        title: title,
        subtitle: language.toUpperCase(),
        media,
      }
    },
  },
})
