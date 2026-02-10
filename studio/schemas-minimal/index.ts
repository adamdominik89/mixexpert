// Minimal schema set for debugging
import {defineType, defineField} from 'sanity'

const imageWithAlt = defineType({
  name: 'imageWithAlt',
  type: 'object',
  fields: [
    defineField({name: 'image', type: 'image'}),
    defineField({name: 'alt', type: 'string'}),
  ],
})

const localizedString = defineType({
  name: 'localizedString',
  type: 'object',
  fields: [
    defineField({name: 'pl', title: '🇵🇱 PL', type: 'string'}),
    defineField({name: 'en', title: '🇬🇧 EN', type: 'string'}),
    defineField({name: 'de', title: '🇩🇪 DE', type: 'string'}),
    defineField({name: 'fr', title: '🇫🇷 FR', type: 'string'}),
    defineField({name: 'pt', title: '🇵🇹 PT', type: 'string'}),
    defineField({name: 'ru', title: '🇷🇺 RU', type: 'string'}),
    defineField({name: 'zh', title: '🇨🇳 ZH', type: 'string'}),
  ],
})

const localizedRichText = defineType({
  name: 'localizedRichText',
  type: 'object',
  fields: [
    defineField({name: 'pl', title: '🇵🇱 PL', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'en', title: '🇬🇧 EN', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'de', title: '🇩🇪 DE', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'fr', title: '🇫🇷 FR', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'pt', title: '🇵🇹 PT', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'ru', title: '🇷🇺 RU', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'zh', title: '🇨🇳 ZH', type: 'array', of: [{type: 'block'}]}),
  ],
})

const productCategory = defineType({
  name: 'productCategory',
  type: 'document',
  fields: [
    defineField({name: 'categoryId', type: 'string', title: 'Category ID'}),
    defineField({name: 'title', type: 'localizedString', title: 'Title'}),
    defineField({name: 'slug', type: 'slug', title: 'Slug'}),
    defineField({name: 'description', type: 'localizedRichText', title: 'Description'}),
    defineField({name: 'icon', type: 'imageWithAlt', title: 'Icon'}),
    defineField({name: 'order', type: 'number', title: 'Order'}),
  ],
})

const partner = defineType({
  name: 'partner',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'logo', type: 'imageWithAlt'}),
    defineField({name: 'order', type: 'number'}),
  ],
})

const siteSettings = defineType({
  name: 'siteSettings',
  type: 'document',
  fields: [
    defineField({name: 'siteName', type: 'string', title: 'Site Name'}),
    defineField({name: 'logo', type: 'imageWithAlt', title: 'Logo'}),
    defineField({name: 'phone', type: 'string', title: 'Phone'}),
    defineField({name: 'email', type: 'string', title: 'Email'}),
    defineField({
      name: 'navigationItems',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'label', type: 'string', title: 'Label'},
          {name: 'href', type: 'string', title: 'Link'},
        ],
      }],
    }),
    defineField({name: 'brandsTitle', type: 'string'}),
    defineField({name: 'partnersTitle', type: 'string'}),
  ],
})

const categoryCard = defineType({
  name: 'categoryCard',
  type: 'object',
  fields: [
    defineField({name: 'title', type: 'localizedString'}),
    defineField({name: 'description', type: 'string'}),
    defineField({name: 'image', type: 'imageWithAlt'}),
    defineField({name: 'link', type: 'string'}),
    defineField({name: 'order', type: 'number'}),
  ],
})

const homePage = defineType({
  name: 'homePage',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug'}),
    defineField({name: 'hero', type: 'object', fields: [
      {name: 'title', type: 'string'},
      {name: 'subtitle', type: 'string'},
    ]}),
    defineField({name: 'offerTitle', type: 'localizedString'}),
    defineField({name: 'categoryCards', type: 'array', of: [{type: 'categoryCard'}]}),
  ],
})

const offerPage = defineType({
  name: 'offerPage',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'localizedString'}),
    defineField({name: 'slug', type: 'slug'}),
    defineField({name: 'categoryCards', type: 'array', of: [{type: 'categoryCard'}]}),
  ],
})

const contactPerson = defineType({
  name: 'contactPerson',
  type: 'object',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'department', type: 'string'}),
    defineField({name: 'phone', type: 'string'}),
    defineField({name: 'email', type: 'string'}),
  ],
})

const contactPage = defineType({
  name: 'contactPage',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'localizedString'}),
    defineField({name: 'slug', type: 'slug'}),
    defineField({name: 'companyName', type: 'string'}),
    defineField({name: 'headquartersLabel', type: 'string'}),
    defineField({name: 'address', type: 'object', fields: [
      {name: 'street', type: 'string'},
      {name: 'postalCode', type: 'string'},
      {name: 'city', type: 'string'},
      {name: 'country', type: 'string'},
    ]}),
    defineField({name: 'phone', type: 'string'}),
    defineField({name: 'email', type: 'string'}),
    defineField({name: 'contactPersons', type: 'array', of: [{type: 'contactPerson'}]}),
  ],
})

export const schemaTypes = [
  imageWithAlt,
  localizedString,
  localizedRichText,
  categoryCard,
  contactPerson,
  productCategory,
  partner,
  siteSettings,
  homePage,
  offerPage,
  contactPage,
]
