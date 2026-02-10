import {defineType, defineField} from 'sanity'

// Text Section - for company descriptions, about content
export const textSection = defineType({
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localizedString',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'localizedString',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'localizedRichText',
    }),
    defineField({
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
      },
      initialValue: 'left',
    }),
  ],
  preview: {
    select: {
      titlePl: 'heading.pl',
      titleEn: 'heading.en',
    },
    prepare({titlePl, titleEn}) {
      return {
        title: titlePl || titleEn || 'Text Section',
        subtitle: 'Text Content',
      }
    },
  },
})

// Hero Section - for main banner
export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localizedString',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'localizedString',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      titlePl: 'title.pl',
      titleEn: 'title.en',
    },
    prepare({titlePl, titleEn}) {
      return {
        title: titlePl || titleEn || 'Hero Section',
        subtitle: 'Hero Banner',
      }
    },
  },
})

// Category Grid Section - for showing product categories
export const categoryGridSection = defineType({
  name: 'categoryGridSection',
  title: 'Category Grid Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'localizedString',
    }),
    defineField({
      name: 'showCategories',
      title: 'Show Categories',
      type: 'boolean',
      description: 'Automatically display all product categories',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      titlePl: 'heading.pl',
      titleEn: 'heading.en',
    },
    prepare({titlePl, titleEn}) {
      return {
        title: titlePl || titleEn || 'Category Grid',
        subtitle: 'Product Categories',
      }
    },
  },
})
