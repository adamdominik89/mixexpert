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

const productCategory = defineType({
  name: 'productCategory',
  type: 'document',
  fields: [
    defineField({name: 'categoryId', type: 'string'}),
    defineField({name: 'title', type: 'localizedString'}),
    defineField({name: 'slug', type: 'slug'}),
    defineField({name: 'icon', type: 'imageWithAlt'}),
    defineField({name: 'order', type: 'number'}),
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
    defineField({name: 'siteName', type: 'string'}),
    defineField({name: 'logo', type: 'imageWithAlt'}),
    defineField({name: 'phone', type: 'string'}),
    defineField({name: 'email', type: 'string'}),
  ],
})

const homePage = defineType({
  name: 'homePage',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug'}),
    defineField({name: 'offerTitle', type: 'string'}),
  ],
})

const offerPage = defineType({
  name: 'offerPage',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug'}),
  ],
})

const contactPage = defineType({
  name: 'contactPage',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug'}),
    defineField({name: 'companyName', type: 'string'}),
    defineField({name: 'phone', type: 'string'}),
    defineField({name: 'email', type: 'string'}),
  ],
})

export const schemaTypes = [
  imageWithAlt,
  localizedString,
  productCategory,
  partner,
  siteSettings,
  homePage,
  offerPage,
  contactPage,
]
