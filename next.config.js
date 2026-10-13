const withBuilderDevTools = require('@builder.io/dev-tools/next')()

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  images: { domains: ['cdn.builder.io'] },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/projects/tabby',
        destination: '/projects/tabby/index.html',
      },
      {
        source: '/projects/tabby/:design(companion|focus|playground)',
        destination: '/projects/tabby/index.html',
      },
    ]
  },
})

module.exports = nextConfig
