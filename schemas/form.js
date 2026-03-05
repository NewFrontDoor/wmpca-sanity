import { defineField, defineType } from "sanity";

export const formType = defineType({
    name: 'form',
    title: 'Form',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string'
      }),
      defineField({
        name: 'id',
        title: 'ID',
        type: 'string'
      }),
      defineField({
        name: 'body',
        title: 'Form description',
        type: 'block-content'
      }),
      defineField({
        name: 'fields',
        title: 'fields',
        type: 'array',
        of: [
          {
            type: 'formfield'
          }
        ]
      })
    ]
  });
  