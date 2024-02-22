// The URL constructor requires a base if a relative url is given, but our util will strip this back out so relative
// urls can be used and returned.
const baseUrl = 'https://base-never-matches-anything.donotmatch'

/**
 * Given an absolute or relative url, modify the given parts such as the query params and return the new url string.
 *
 * @example
 * <Image src={buildUrl(cmsImageUrl, { query: { width: 300, quality: 80 } })} />
 */
export function buildUrl(
  url: string,
  {
    query,
  }: {
    query?: Record<string, string | number | undefined | null>
  } = {},
) {
  const urlObject = new URL(url, baseUrl)
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined) return // skip
      if (value === null) {
        urlObject.searchParams.delete(key)
      } else {
        urlObject.searchParams.set(key, String(value))
      }
    })
  }
  return urlObject.toString().replace(baseUrl, '')
}
