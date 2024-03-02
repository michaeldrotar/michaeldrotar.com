import { BuilderContentReference } from './BuilderContentReference'
import { BuilderContentAuthor } from './BuilderContentAuthor'
import { BuilderContent } from '@builder.io/sdk'

export type BuilderBlogArticle = BuilderContent & {
  data: {
    title: string
    heroImage: string
    description: string
    author: BuilderContentReference<'content-author'> & {
      value?: BuilderContentAuthor
    }
    slug: string
    publishedDate?: number
    updatedDate?: number
  }
}

export type BuilderBlogArticlePreview = {
  title?: string
  heroImage?: string
  description?: string
  fullName?: string
  avatar?: string
  slug?: string
  publishedDate?: number
  updatedDate?: number
}
