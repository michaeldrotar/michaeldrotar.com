'use client'
import { builder, Builder } from '@builder.io/react'
import Counter from './components/Counter/Counter'
import { initBuilder } from './builder/initBuilder'
import { Button } from './components/Button/Button'

initBuilder()

Builder.registerComponent(
  ({
    text,
    link,
    openLinkInNewTab,
    attributes,
  }: {
    text: string
    link: string
    openLinkInNewTab: boolean
    attributes: Record<string, unknown> & { key?: string }
  }) => {
    const { key, ...safeAttributes } = attributes
    return (
      <Button
        key={key}
        href={link}
        target={openLinkInNewTab ? '_blank' : undefined}
        {...safeAttributes}
      >
        {text}
      </Button>
    )
  },
  {
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
    ],
    noWrap: true,
  },
)

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
