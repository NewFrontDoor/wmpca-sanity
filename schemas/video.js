import { defineField, defineType } from 'sanity';

export const videoType = defineType({
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'topic',
            title: 'Topic',
            type: 'string'
        }),
        defineField({
            name: 'speaker',
            title: 'Speaker',
            type: 'reference',
            to: [
                {
                    type: 'speaker'
                }
            ]
        }),
        defineField({
            name: 'series',
            title: 'Series',
            type: 'reference',
            to: [
                {
                    type: 'videoseries'
                }
            ]
        }),
        defineField({
            name: 'video',
            title: 'Video',
            type: 'file'
        }),
        defineField({
            name: 'thumbnail',
            title: 'Video Thumbnail',
            type: 'image'
        })
    ]

});