import clsx from 'clsx'
import { ButtonProps } from './ButtonProps'
import Link from 'next/link'

export function Button(props: ButtonProps) {
  const { children, disabled, href, target, className, ...restProps } = props
  const Tag = href ? Link : 'button'
  return (
    <Tag
      {...restProps}
      href={href || ''}
      target={target}
      disabled={disabled}
      className={clsx(
        'rounded bg-red-500 px-8 py-4 font-bold text-white no-underline shadow-lg shadow-red-500/50 transition-all duration-200',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
