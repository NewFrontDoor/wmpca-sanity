import { defineField, defineType } from 'sanity';

export const mainType = defineType({
    name: 'main',
    title: 'Main',
    type: 'document',
    fields: [
        defineField({
            title: 'Heading',
            name: 'heading',
            type: 'text',
            rows: 2
        }),
        defineField({
            title: 'Image Carousel',
            name: 'images',
            description: 'Add images to be displayed in the slider on the front page',
            type: 'array',
            of: [
                {
                    type: 'image'
                }
            ]
        }),
        defineField({
            title: 'Menus',
            name: 'menuitems',
            description: 'Add pages below to feature in the main menu',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ 
                            title: 'Menu text', 
                            name: 'text', 
                            type: 'string' 
                        }),
                        defineField({
                            title: 'Child pages',
                            name: 'childpages',
                            type: 'array',
                            of: [
                                {
                                    type: 'reference',
                                    title: 'Child page',
                                    description: 'Pick a page from the dropdown list below',
                                    to: [
                                        { type: 'page' }
                                    ]
                                }
                            ]
                        })
                    ]
                }
            ]
        }),
        defineField({
            name: 'welcome',
            title: 'Welcome Text',
            type: 'block-content'
        }),
    ]
});
