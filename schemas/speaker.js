import { defineField, defineType } from 'sanity';

export const speakerType = defineType({
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
  ]
});
  