import { defineField, defineType } from 'sanity';

export const menuType = defineType({
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Menu list', value: 'list' },
                    { title: 'Menu link', value: 'link' }
                ]
            }
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'reference',
            to: [{ type: 'page' }]
        }),
    ]
});
