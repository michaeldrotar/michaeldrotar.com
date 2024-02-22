import { initBuilder } from '@/builder/initBuilder'
import { RenderBuilderContent } from '@/components/builder'
import { parseArticleUrl } from '@/builder/ArticlePage/parseArticleUrl'
import { notFound } from 'next/navigation'
import { getBuilderBlogArticle } from '@/builder/api/getBuilderBlogArticle'
import { Article } from '@/components/Article/Article'
import { ArticleHeader } from '@/components/ArticleHeader/ArticleHeader'
import { Metadata } from 'next'
import { getBuilderContentTextHtml } from '@/builder/getBuilderContentTextHtml/getBuilderContentTextHtml'
import { calculateReadingTimeMinutes } from '@/utils/calculateReadingTimeMinutes/calculateReadingTimeMinutes'

initBuilder()

interface BlogPageProps {
  params: {
    slug: string[]
  }
}

async function getArticle(props: BlogPageProps) {
  const slug = props.params.slug.join('/')
  const { id } = parseArticleUrl(slug)
  if (!id) return

  return await getBuilderBlogArticle(id, { includeRefs: true })
}

export async function generateMetadata(props: BlogPageProps): Metadata {
  const article = await getArticle(props)
  if (!article) return notFound()

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
      ...(article.firstPublished
        ? { publishedTime: new Date(article.firstPublished).toISOString() }
        : undefined),
      ...(article.lastUpdated
        ? { modifiedTime: new Date(article.lastUpdated).toISOString() }
        : undefined),
      ...(author ? { authors: [author] } : undefined),
    },
  }
}

export default async function BlogPage(props: BlogPageProps) {
  const article = await getArticle(props)
  if (!article) return notFound()

  // Approximate the reading time of the article (does not filter out HTML tags)
  const text = getBuilderContentTextHtml(article)
  const readingTimeMinutes = calculateReadingTimeMinutes(text)

  console.log(text)

  return (
    <>
      <Article>
        <ArticleHeader
          title={article.data.title}
          description={article.data.description}
          heroImageUrl={article.data.heroImage}
          publishedAt={article.firstPublished}
          updatedAt={article.lastUpdated}
          authorName={article.data.author.value?.data.fullName}
          authorImageUrl={article.data.author.value?.data.avatar}
          readingTimeMinutes={readingTimeMinutes}
        />
        <RenderBuilderContent content={article} model="blog-article" />
      </Article>
    </>
  )
}
