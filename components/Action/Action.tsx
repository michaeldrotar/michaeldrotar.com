import { ButtonProps } from './ButtonProps'
import Link from 'next/link'
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export function Action(props: ButtonProps) {
  const {
    children,
    disabled,
    type,
    href,
    target,
    prefetch,
    replace,
    scroll,
    ...restProps
  } = props

  const Component =
    href && !disabled
      ? (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
          <Link {...props} {...{ href, target, prefetch, replace, scroll }} />
        )
      : (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
          <button {...props} {...{ disabled, type: type || 'button' }} />
        )

  return <Component {...restProps}>{children}</Component>
}
