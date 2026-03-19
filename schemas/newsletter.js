import { defineField, defineType } from 'sanity';

export const newsletterType = defineType({
  title: 'Newsletter',
  name: 'newsletter',
  type: 'file',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
        name: 'year',
        type: 'number',
        title: 'Year'
    }),
    defineField({
        name: 'issue',
        type: 'string',
        title: 'Issue'
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {
          layout: 'tags'
      }
    })
  ]
});