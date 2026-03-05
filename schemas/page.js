import { defineField, defineType } from 'sanity';

export const pageType = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'text',
            rows: 2
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // Will be ignored if slugify is set
                slugify: input =>
                  input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
              }
        }),
        defineField({
            name: 'mainImage',
            title: 'Page Header Image',
            type: 'image'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'block-content'
        })
    ],
    preview: {
        select: {
          title: 'title',
          id: '_id'
        }
    }
});