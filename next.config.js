const withBuilderDevTools = require('@builder.io/dev-tools/next')()

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  images: { domains: ['cdn.builder.io'] },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/projects/tabby',
        destination: 'https://www.gettabby.org/',
        permanent: true,
      },
      {
        source: '/projects/tabby/:design(companion|focus|playground)',
        destination: 'https://www.gettabby.org/:design',
        permanent: true,
      },
    ]
  },
})

module.exports = nextConfig
