export function parseArticleUrl(url: string) {
  const lastSegment = new URL(url, 'https://base.com').pathname.split('/').pop()
  const id = lastSegment?.split('-').pop()
  return { id }
}
