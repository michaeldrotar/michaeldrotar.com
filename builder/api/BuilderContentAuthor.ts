import { BuilderContent } from '@builder.io/sdk'

export type BuilderContentAuthor = Omit<BuilderContent, 'data'> & {
  data: {
    fullName: string
    avatar: string
  }
}
