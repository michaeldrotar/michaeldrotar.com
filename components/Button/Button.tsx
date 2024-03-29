import { ButtonProps } from './ButtonProps'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from './buttonVariants'
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export function Button(props: ButtonProps) {
  const {
    children,
    disabled,
    type,
    href,
    target,
    prefetch,
    replace,
    scroll,
    appearance,
    size,
    className,
    ...restProps
  } = props

  const Component = href
    ? (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <Link {...props} {...{ href, target, prefetch, replace, scroll }} />
      )
    : (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
        <button {...props} {...{ disabled, type: type || 'button' }} />
      )

  return (
    <Component
      {...restProps}
      className={twMerge(
        buttonVariants({ appearance: appearance || 'glow', size, className }),
      )}
    >
      {children}
    </Component>
  )
}
