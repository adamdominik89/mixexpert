import {defineField, defineType} from 'sanity'
import {PackageIcon} from '@sanity/icons'

export default defineType({
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  icon: PackageIcon,
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
      name: 'categoryId',
      title: 'Category ID',
      type: 'string',
      description: 'Unique identifier for this category (same across all languages)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Category Title',
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
      name: 'description',
      title: 'Description',
      type: 'richText',
    }),
    defineField({
      name: 'headerImage',
      title: 'Header Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'icon',
      title: 'Category Icon',
      type: 'imageWithAlt',
      description: 'Icon used in category cards on homepage',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this category appears',
      validation: (Rule) => Rule.required().integer().min(0),
    }),
    defineField({
      name: 'subcategories',
      title: 'Subcategories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Subcategory Title'},
            {name: 'description', type: 'text', title: 'Description'},
            {name: 'image', type: 'imageWithAlt', title: 'Image'},
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Category Features',
      type: 'array',
      of: [{type: 'feature'}],
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
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
      media: 'icon.image',
    },
    prepare({title, language, media}) {
      return {
        title: title,
        subtitle: `${language.toUpperCase()} Category`,
        media,
      }
    },
  },
})
