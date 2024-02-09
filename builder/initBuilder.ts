import { builder } from '@builder.io/sdk'

export function initBuilder() {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)
}
