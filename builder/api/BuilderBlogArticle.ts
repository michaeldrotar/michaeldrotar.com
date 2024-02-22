import { BuilderContentReference } from './BuilderContentReference'
import { BuilderContentAuthor } from './BuilderContentAuthor'
import { BuilderContent } from '@builder.io/sdk'

export type BuilderBlogArticle = BuilderContent & {
  firstPublished?: number
  data: {
    description: string
    heroImage: string
    title: string
    author: BuilderContentReference<'content-author'> & {
      value?: BuilderContentAuthor
    }
  }
}
