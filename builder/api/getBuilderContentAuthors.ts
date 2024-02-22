import { builder } from '@builder.io/sdk'
import { BuilderContentAuthor } from './BuilderContentAuthor'

export async function getBuilderContentAuthors() {
  return (await builder.getAll('content-author', {
    query: {},
  })) as BuilderContentAuthor[]
}
