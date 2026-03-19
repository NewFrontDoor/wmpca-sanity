import { defineField, defineType } from 'sanity';

export const videoSeriesType = defineType({
    name: 'videoseries',
    title: 'Video Series',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Series Title',
            type: 'string'
        })
    ]

});