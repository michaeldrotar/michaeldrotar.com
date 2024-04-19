import { Builder } from '@builder.io/react'
import { BuilderCodeSample } from './BuilderCodeSample'

export const registerBuilderCodeSample = () => {
  Builder.registerComponent(BuilderCodeSample, {
    name: 'Code Sample',
    inputs: [
      {
        name: 'language',
        type: 'string',
        enum: ['auto', 'typescript'],
        defaultValue: 'auto',
      },
      {
        name: 'content',
        type: 'longText',
        defaultValue: '',
      },
    ],
  })
}
