import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPerson',
  title: 'Contact Person',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'languageFlags',
      title: 'Language Flags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Languages spoken (e.g., "pl", "en", "de")',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo.image',
    },
  },
})
