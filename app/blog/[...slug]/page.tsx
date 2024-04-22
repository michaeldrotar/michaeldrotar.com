import { initBuilder } from '@/builder/initBuilder'
import { RenderBuilderContent } from '@/components/builder'
import { notFound } from 'next/navigation'
import { getBuilderBlogArticle } from '@/builder/api/getBuilderBlogArticle'
import { Article } from '@/components/Article/Article'
import { ArticleHeader } from '@/components/ArticleHeader/ArticleHeader'
import { Metadata } from 'next'
import { getBuilderContentTextHtml } from '@/builder/getBuilderContentTextHtml/getBuilderContentTextHtml'
import { calculateReadingTimeMinutes } from '@/utils/calculateReadingTimeMinutes/calculateReadingTimeMinutes'
import { ArticleContent } from '@/components/ArticleContent/ArticleContent'
import { BuilderBlogArticlePreview } from '@/builder/api/BuilderBlogArticle'

initBuilder()

interface BlogPageProps {
  params: {
    slug: string[]
  }
  searchParams: {
    preview?: string
  }
}

async function getArticle(props: BlogPageProps) {
  const slug = props.params.slug[0]
  if (!slug) return

  return await getBuilderBlogArticle(slug, { includeRefs: true })
}

function getArticlePreview(props: BlogPageProps) {
  if (!props.searchParams.preview) return
  return JSON.parse(props.searchParams.preview) as BuilderBlogArticlePreview
}

export async function generateMetadata(
  props: BlogPageProps,
): Promise<Metadata> {
  const article = await getArticle(props)
  const preview = getArticlePreview(props)
  if (!article && !preview) return notFound()
  if (!article) return { title: preview?.title }

  const author = article.data.author.value?.data.fullName

  return {
    title: article.data.title,
    description: article.data.description,
    openGraph: {
      title: article.data.title,
      description: article.data.description,
      images: [
        {
          url: article.data.heroImage,
        },
      ],
      type: 'article',
      ...(article.data.publishedDate
        ? { publishedTime: new Date(article.data.publishedDate).toISOString() }
        : undefined),
      ...(article.data.updatedDate
        ? { modifiedTime: new Date(article.data.updatedDate).toISOString() }
        : undefined),
      ...(author ? { authors: [author] } : undefined),
    },
  }
}

export default async function BlogPage(props: BlogPageProps) {
  const article = await getArticle(props)
  const preview = getArticlePreview(props)
  if (!article && !preview) return notFound()

  // Approximate the reading time of the article (does not filter out HTML tags)
  const text = article ? getBuilderContentTextHtml(article) : ''
  const readingTimeMinutes = calculateReadingTimeMinutes(text)

  return (
    <>
      <Article className="-mt-32">
        <ArticleHeader
          title={preview?.title || article?.data.title || ''}
          description={preview?.description || article?.data.description || ''}
          heroImageUrl={preview?.heroImage || article?.data.heroImage || ''}
          publishedAt={preview?.publishedDate || article?.data.publishedDate}
          updatedAt={preview?.updatedDate || article?.data.updatedDate}
          authorName={
            preview?.fullName || article?.data.author.value?.data.fullName || ''
          }
          authorImageUrl={
            preview?.avatar || article?.data.author.value?.data.avatar || ''
          }
          readingTimeMinutes={readingTimeMinutes}
        />
        <div className="px-4">
          <ArticleContent className="relative z-20 bg-white dark:bg-neutral-800">
            <RenderBuilderContent content={article} model="blog-article" />
          </ArticleContent>
        </div>
      </Article>
    </>
  )
}
