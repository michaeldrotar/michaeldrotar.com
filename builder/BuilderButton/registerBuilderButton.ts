import { Builder } from '@builder.io/react'
import { BuilderButton } from './BuilderButton'

export const registerBuilderButton = () => {
  Builder.registerComponent(BuilderButton, {
    name: 'Core:Button',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F81a15681c3e74df09677dfc57a615b13',
    inputs: [
      {
        name: 'text',
        type: 'text',
        defaultValue: 'Click me!',
        bubble: true,
      },
      {
        name: 'link',
        type: 'url',
        bubble: true,
      },
      {
        name: 'openLinkInNewTab',
        type: 'boolean',
        defaultValue: false,
        friendlyName: 'Open link in new tab',
      },
      {
        name: 'appearance',
        type: 'string',
        enum: ['glow', 'outline', 'solid', 'ghost'],
        defaultValue: 'glow',
      },
      {
        name: 'size',
        type: 'string',
        enum: ['sm', 'md', 'lg'],
        defaultValue: 'md',
      },
    ],
    noWrap: true,
  })
}
