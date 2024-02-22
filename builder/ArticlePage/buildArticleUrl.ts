import { BuilderBlogArticle } from '../api/BuilderBlogArticle'

export function buildArticleUrl(article: BuilderBlogArticle) {
  return `/blog/${article.data.title.toLowerCase().replace(/[^\w\d]+/g, '-')}-${
    article.id
  }`
}
