import { formatDateToLocal } from '@/app/lib/utils'
import { BuilderImage } from '@/builder/BuilderImage/BuilderImage'

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
      <header className="relative aspect-video">
        <BuilderImage
          src={heroImageUrl}
          // TODO: Add alt text as a separate field or check if builderio is planning to include it from my feature request
          alt=""
          aria-hidden="true"
          fill
          priority
          className="not-prose object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <h1>{title}</h1>
          <p>{description}</p>
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
        </div>
      </header>
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
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
        <div className="relative aspect-video w-full">
          <BuilderImage
            src={heroImageUrl}
            // TODO: Add alt text as a separate field or check if builderio is planning to include it from my feature request
            alt=""
            aria-hidden="true"
            fill
            priority
            className="not-prose object-cover object-center"
          />
        </div>
      </header>
    </>
  )
}
