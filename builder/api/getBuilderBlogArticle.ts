import { ArticlePageProps } from '@/builder/ArticlePage/ArticlePageProps'
import { initBuilder } from '@/builder/initBuilder'
import { ArticlePage } from '@/builder/ArticlePage/ArticlePage'
import { BuilderBlogArticle } from './BuilderBlogArticle'
import { builder } from '@builder.io/sdk'

type Options = {
  includeRefs?: boolean
}

export async function getBuilderBlogArticle(
  id: string,
  { includeRefs = false }: Options = {},
) {
  const article = await builder
    .get('blog-article', {
      query: { id },
      options: { includeRefs: true },
    })
    .toPromise()
  if (!article) return undefined
  return article as BuilderBlogArticle
}
