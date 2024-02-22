import { ArticlePageProps } from './ArticlePageProps'
import { builder } from '@builder.io/sdk'
import { RenderBuilderContent } from '@/components/builder'
import { initBuilder } from '../initBuilder'
import { getBuilderBlogArticles } from '../api/getBuilderBlogArticles'
import { getBuilderContentAuthors } from '../api/getBuilderContentAuthors'
import { parseArticleUrl } from './parseArticleUrl'
import { notFound } from 'next/navigation'
import { getBuilderBlogArticle } from '../api/getBuilderBlogArticle'
import { Article } from '@/components/Article/Article'
import { ArticleHeader } from '@/components/ArticleHeader/ArticleHeader'

initBuilder()

export async function ArticlePage(props: ArticlePageProps) {
  // const url = Array.isArray(props.url) ? '/' + props.url.join('/') : props.url
  // const articles = await builder.getAll('blog-article', {
  //   options: { includeRefs: true },
  //   query: {},
  // })
  // .toPromise()

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
          publishedAt={article.firstPublished}
          updatedAt={article.lastUpdated}
          authorName={article.data.author.value?.data.fullName}
          authorImageUrl={article.data.author.value?.data.avatar}
        />
        <RenderBuilderContent content={article} model="blog-article" />
      </Article>
    </>
  )
}
