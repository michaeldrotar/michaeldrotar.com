import clsx from 'clsx'
import { ReactNode } from 'react'

export function ArticleContent({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8',
        className,
      )}
    >
      {children}
    </div>
  )
}
