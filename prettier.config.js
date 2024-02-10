const styleguide = require('@vercel/style-guide/prettier')

module.exports = {
  ...styleguide,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
}
