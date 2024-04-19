'use client'
import { Builder } from '@builder.io/react'
import Counter from './components/Counter/Counter'
import { initBuilder } from './builder/initBuilder'
import { registerBuilderCarousel } from './builder/BuilderCarousel/registerBuilderCarousel'
import { registerBuilderButton } from './builder/BuilderButton/registerBuilderButton'
import { registerBuilderCodeSample } from './builder/BuilderCodeSample/registerBuilderCodeSample'

initBuilder()

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
    {
      name: 'initialCount',
      type: 'number',
    },
    {
      name: 'minus',
      type: 'string',
    },
    {
      name: 'plus',
      type: 'string',
    },
  ],
})

registerBuilderButton()
registerBuilderCarousel()
registerBuilderCodeSample()
