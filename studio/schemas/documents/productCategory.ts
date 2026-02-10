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
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'categoryId',
      title: 'Category ID',
      type: 'string',
      description: 'Unique identifier for this category',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'categoryId',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedRichText',
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
            {name: 'title', type: 'localizedString', title: 'Subcategory Title'},
            {name: 'description', type: 'localizedText', title: 'Description'},
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
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'metaTitle', type: 'localizedString', title: 'Meta Title'},
        {name: 'metaDescription', type: 'localizedText', title: 'Meta Description'},
        {name: 'ogImage', type: 'imageWithAlt', title: 'Open Graph Image'},
      ],
    }),
  ],
  preview: {
    select: {
      titlePl: 'title.pl',
      titleEn: 'title.en',
      media: 'icon.image',
    },
    prepare({titlePl, titleEn, media}) {
      return {
        title: titlePl || titleEn || 'Untitled',
        subtitle: 'Product Category',
        media,
      }
    },
  },
})
