import { formatDateToLocal } from '@/app/lib/utils'
import { BuilderImage } from '@/builder/BuilderImage/BuilderImage'
import { ArticleContent } from '../ArticleContent/ArticleContent'

export function ArticleHeader({
  title,
  description,
  heroImageUrl,
  publishedAt,
  updatedAt,
  authorName,
  authorImageUrl,
  readingTimeMinutes,
}: {
  title: string
  description: string
  heroImageUrl: string
  publishedAt?: Date | number
  updatedAt?: Date | number
  authorName?: string
  authorImageUrl?: string
  readingTimeMinutes?: number
}) {
  const publishedString = publishedAt ? formatDateToLocal(publishedAt) : ''
  const updatedString = updatedAt ? formatDateToLocal(updatedAt) : ''

  return (
    <>
      <header className="relative -mb-32 flex aspect-video flex-col justify-end">
        <BuilderImage
          src={heroImageUrl}
          // TODO: Add alt text as a separate field or check if builderio is planning to include it from my feature request
          alt=""
          aria-hidden="true"
          fill
          priority
          className="not-prose object-cover object-center"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70"></div>
        <ArticleContent className="relative z-10 pb-36 pt-36">
          <h1>{title}</h1>
          <div className="-mt-8">
            <p>{description}</p>
          </div>
          <div className="my-4 flex flex-row flex-nowrap gap-4">
            {authorImageUrl && (
              <div className="relative aspect-square overflow-clip rounded-full">
                <BuilderImage
                  src={authorImageUrl}
                  alt=""
                  height={64}
                  width={64}
                  aria-hidden="true"
                  priority
                  className="not-prose object-cover object-center"
                />
              </div>
            )}
            <div className="flex-grow self-center">
              {authorName && <div>{authorName}</div>}
              <div className="text-sm">
                {publishedString && <>{publishedString}</>}
                {updatedString && updatedString !== publishedString && (
                  <> (updated: {updatedString})</>
                )}
                {readingTimeMinutes && <> - {readingTimeMinutes} minutes </>}
              </div>
            </div>
          </div>
        </ArticleContent>
      </header>
    </>
  )
}
