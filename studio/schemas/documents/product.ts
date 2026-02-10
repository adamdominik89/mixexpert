import {defineField, defineType} from 'sanity'
import {CubeIcon} from '@sanity/icons'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: CubeIcon,
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
      name: 'productId',
      title: 'Product ID',
      type: 'string',
      description: 'Unique identifier for this product (same across all languages)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'richText',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Product Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'gallery',
      title: 'Product Gallery',
      type: 'array',
      of: [{type: 'imageWithAlt'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'productCategory'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Product Features',
      type: 'array',
      of: [{type: 'feature'}],
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [{type: 'specification'}],
    }),
    defineField({
      name: 'isGlutenFree',
      title: 'Gluten Free',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.integer().min(0),
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
      language: 'language',
      media: 'mainImage.image',
    },
    prepare({title, language, media}) {
      return {
        title: title,
        subtitle: `${language.toUpperCase()} Product`,
        media,
      }
    },
  },
})
