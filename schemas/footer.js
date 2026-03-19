import { defineField, defineType } from "sanity";

export const footerType = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
    fields: [
        defineField({
            title: 'Copyright',
            name: 'copyright',
            type: 'string'
        }),
        defineField({
            name: 'social',
            title: 'Social Icons',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({
                        name: 'type',
                        title: 'Type',
                        type: 'string',
                        options: {
                        layout: 'dropdown',
                        list: ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'vimeo', 'rss', 'podcast']
                        }
                    }),
                    defineField({
                        type: 'url',
                        name: 'url',
                        title: 'URL'
                    })
                ]
            }]
        })
    ]
});
