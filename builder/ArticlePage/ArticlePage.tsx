import { ArticlePageProps } from './ArticlePageProps'
import { RenderBuilderContent } from '@/components/builder'
import { initBuilder } from '../initBuilder'
import { parseArticleUrl } from './parseArticleUrl'
import { notFound } from 'next/navigation'
import { getBuilderBlogArticle } from '../api/getBuilderBlogArticle'
import { Article } from '@/components/Article/Article'
import { ArticleHeader } from '@/components/ArticleHeader/ArticleHeader'

initBuilder()

export async function ArticlePage(props: ArticlePageProps) {
  const { id } = parseArticleUrl(
    Array.isArray(props.url) ? props.url.join('/') : props.url,
  )
  if (!id) return notFound()

  const article = await getBuilderBlogArticle(id, { includeRefs: true })
  if (!article) return notFound()

  return (
    <>
      <Article>
        <ArticleHeader
          title={article.data.title}
          description={article.data.description}
          heroImageUrl={article.data.heroImage}
          publishedAt={article.data.publishedDate}
          updatedAt={article.data.updatedDate}
          authorName={article.data.author.value?.data.fullName}
          authorImageUrl={article.data.author.value?.data.avatar}
        />
        <RenderBuilderContent content={article} model="blog-article" />
      </Article>
    </>
  )
}
