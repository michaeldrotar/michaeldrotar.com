import { buildUrl } from './buildUrl'

describe(buildUrl, () => {
  it('provides an absolute url', () => {
    expect(buildUrl('https://example.com')).toEqual('https://example.com/')
  })

  it('provides a relative url', () => {
    expect(buildUrl('/path/to/file')).toEqual('/path/to/file')
  })

  it('sets query params', () => {
    expect(buildUrl('/set?a=0', { query: { a: 'cat', b: 2 } })).toEqual(
      '/set?a=cat&b=2',
    )
  })

  it('ignores undefined query params', () => {
    expect(buildUrl('/skip?a=0', { query: { a: undefined } })).toEqual(
      '/skip?a=0',
    )
  })

  it('removes null query params', () => {
    expect(buildUrl('/remove?a=0', { query: { a: null } })).toEqual('/remove')
  })
})
