import { ArticlePageProps } from '@/builder/ArticlePage/ArticlePageProps'
import { builder } from '@builder.io/sdk'
import { initBuilder } from '@/builder/initBuilder'
import { ArticlePage } from '@/builder/ArticlePage/ArticlePage'
import { BuilderBlogArticle } from './BuilderBlogArticle'

type Options = {
  includeRefs?: boolean
}

export async function getBuilderBlogArticles({
  includeRefs = false,
}: Options = {}) {
  return (await builder.getAll('blog-article', {
    options: { includeRefs },
    query: {},
  })) as BuilderBlogArticle[]
}
