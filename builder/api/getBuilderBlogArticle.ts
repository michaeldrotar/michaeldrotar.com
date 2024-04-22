import { BuilderBlogArticle } from './BuilderBlogArticle'
import { builder } from '@builder.io/sdk'

type Options = {
  includeRefs?: boolean
}

export async function getBuilderBlogArticle(
  slug: string,
  { includeRefs = false }: Options = {},
) {
  const article = await builder
    .get('blog-article', {
      query: { 'data.slug': slug },
      options: { includeRefs },
    })
    .toPromise()
  if (!article) return undefined
  return article as BuilderBlogArticle
}
