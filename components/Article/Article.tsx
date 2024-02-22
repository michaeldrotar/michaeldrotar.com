import { ReactNode } from 'react'

export function Article({ children }: { children?: ReactNode }) {
  return (
    <article className="prose prose-neutral dark:prose-invert sm:prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      {children}
    </article>
  )
}
