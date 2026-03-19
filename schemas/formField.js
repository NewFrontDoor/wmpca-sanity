import { defineField, defineType } from "sanity";

export const formFieldType = defineType({
  name: 'formfield',
  title: 'Field',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description:
        'The label which will accompany this form input on the screen'
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      description:
        'A lowercase single word identifier for this field, usually just the label in lowercase label will suffice. For example: "First name" might have an ID of "first"'
    }),
    defineField({
      name: 'required',
      title: 'Required field',
      type: 'boolean',
      description: 'Does this form field require a value?'
    }),
    defineField({
      name: 'input',
      title: 'Input Type',
      type: 'string',
      options: {
        list: [
          'text',
          'email',
          'telephone',
          'date',
          'textarea',
          'select',
          'checkbox',
          'radio',
          'url',
          'file',
          'number'
        ],
        layout: 'dropdown'
      }
    }),
    defineField({
      name: 'values',
      title: 'Input Values',
      description:
        'If you selected Select, Checkbox, or Radio above, please create values to be available for that input type in the field below',
      type: 'array',
      of: [{type: 'string'}],
      layout: 'tags'
    }),
    defineField({
      name: 'validation',
      title: 'Validation',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        defineField({
          type: 'string',
          name: 'validationType',
          title: 'Validation type',
          options: {
            list: [
              {title: 'None', value: 'none'},
              {title: 'Default', value: 'default'},
              {title: 'Custom', value: 'custom'}
            ],
            layout: 'radio',
            direction: 'horizontal'
          },
          description:
            "Choose whether you use no validation, the default validation, or a custom regex for validating this field. If you're unsure, just use default validation."
        }),
        defineField({
          type: 'string', 
          name: 'regexString', 
          title: 'Regex String'
        }),
        defineField({
          type: 'string',
          name: 'warning',
          title: 'Warning text',
          description:
            'Input a warning that helpfully describes what your field expects'
        })
      ]
    }),
  ]
});