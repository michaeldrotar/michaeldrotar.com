import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { buttonVariants } from './buttonVariants'
import { VariantProps } from 'class-variance-authority'

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

type BaseProps = VariantProps<typeof buttonVariants>

export type ButtonProps = BaseProps &
  (RawButtonProps & (Omit<RawLinkProps, keyof NextLinkProps> & NextLinkProps))
