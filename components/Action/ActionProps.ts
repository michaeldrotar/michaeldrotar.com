import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type RawButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'className' | 'disabled' | 'onClick' | 'type'
>

type RawLinkProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children' | 'className' | 'href' | 'onClick' | 'target'
>

type NextLinkProps = Pick<
  LinkProps,
  'onClick' | 'prefetch' | 'replace' | 'scroll'
> & { href?: LinkProps['href'] }

export type ActionProps = RawButtonProps &
  (Omit<RawLinkProps, keyof NextLinkProps> & NextLinkProps)
