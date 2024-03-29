import clsx from 'clsx'
import { ReactNode } from 'react'

export function Article({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return (
    <article
      className={clsx(
        'prose prose-neutral max-w-none dark:prose-invert sm:prose-lg',
        className,
      )}
    >
      {children}
    </article>
  )
}
