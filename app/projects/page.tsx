import { BuilderPage } from '@/builder/BuilderPage/BuilderPage'
import { buttonVariants } from '@/components/Button/buttonVariants'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browser tools and libraries by Michael Drotar.',
}

export default function ProjectsPage() {
  return (
    <main>
      <section
        className="mx-auto max-w-7xl px-6 py-10"
        aria-labelledby="tabby-title"
      >
        <article className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-700">
          <div className="mb-4 flex items-center gap-3">
            <Image src="/tabby.png" width={48} height={48} alt="" />
            <h2 id="tabby-title" className="text-2xl font-bold">
              Tabby
            </h2>
          </div>
          <p className="mb-6 max-w-2xl">
            Find tabs, bookmarks, and history in one search. Organize tabs and
            groups across Chrome windows, work in batches, and make your browser
            feel like your space.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/projects/tabby"
              className={buttonVariants({ size: 'sm' })}
            >
              Website
            </a>
            <a
              href="https://github.com/michaeldrotar/tabby"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ appearance: 'outline', size: 'sm' })}
            >
              GitHub
            </a>
            <a
              href="https://chromewebstore.google.com/detail/tabby/jjkakicjobpalhifpeaggabpgdllmmob"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ appearance: 'outline', size: 'sm' })}
            >
              Chrome extension
            </a>
          </div>
        </article>
      </section>
      <BuilderPage url="/projects" />
    </main>
  )
}
