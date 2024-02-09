'use client'
import { builder, Builder } from '@builder.io/react'
import Counter from './components/Counter/Counter'
import { initBuilder } from './builder/initBuilder'

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
