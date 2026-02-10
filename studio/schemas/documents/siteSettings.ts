import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
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
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'navigationItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label', validation: (Rule: any) => Rule.required()},
            {name: 'href', type: 'string', title: 'Link', validation: (Rule: any) => Rule.required()},
          ],
        },
      ],
    }),
    defineField({
      name: 'brandsTitle',
      title: 'Brands Section Title',
      type: 'string',
    }),
    defineField({
      name: 'partnersTitle',
      title: 'Partners Section Title',
      type: 'string',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      language: 'language',
    },
    prepare({title, language}) {
      return {
        title: `Settings - ${title}`,
        subtitle: language.toUpperCase(),
      }
    },
  },
})
