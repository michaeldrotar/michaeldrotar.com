export type BuilderContentReference<TModel = 'string'> = {
  '@type': '@builder.io/core:Reference'
  model: TModel
  id: string
}
