import { ButtonProps } from './ButtonProps'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from './buttonVariants'
import React from 'react'
import { Action } from '../Action/Action'

export function Button(props: ButtonProps) {
  const { appearance, size, className, ...restProps } = props

  return (
    <Action
      {...restProps}
      className={twMerge(
        buttonVariants({ appearance: appearance || 'glow', size, className }),
      )}
    />
  )
}
