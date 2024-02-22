import { ArticlePageProps } from '@/builder/ArticlePage/ArticlePageProps'
import { builder } from '@builder.io/sdk'
import { initBuilder } from '@/builder/initBuilder'
import { ArticlePage } from '@/builder/ArticlePage/ArticlePage'
import { BuilderBlogArticle } from './BuilderBlogArticle'
import { BuilderContentAuthor } from './BuilderContentAuthor'

export async function getBuilderContentAuthors() {
  return (await builder.getAll('content-author', {
    query: {},
  })) as BuilderContentAuthor[]
}
