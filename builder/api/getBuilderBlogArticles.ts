import { builder } from '@builder.io/sdk'
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
