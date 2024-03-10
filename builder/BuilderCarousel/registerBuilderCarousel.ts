import { Builder } from '@builder.io/react'
import { BuilderCarousel } from '@/builder/BuilderCarousel/BuilderCarousel'

export const registerBuilderCarousel = () => {
  Builder.registerComponent(BuilderCarousel, {
    name: 'Carousel',
    inputs: [
      {
        name: 'autoPlay',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: 'interval',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'slideTransition',
        type: 'string',
        enum: ['fade', 'shove', 'slide', 'zoom', 'none'],
        defaultValue: 'slide',
      },
      {
        name: 'slides',
        type: 'list',
        subFields: [
          {
            name: 'content',
            type: 'uiBlocks',
            defaultValue: [],
          },
        ],
        defaultValue: [
          {
            content: [],
          },
        ],
      },
    ],
  })
}
