import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./**/*.{js,ts,jsx,tsx,mdx}', '!node_modules'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {},
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(({ addUtilities, matchUtilities, theme }) => {
      matchUtilities(
        {
          ring: (value) => {
            return {
              '@defaults ring-width': {},
              '--tw-ring-offset-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
              '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 var(--tw-ring-blur) calc(${value} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
              'box-shadow': [
                `var(--tw-ring-offset-shadow)`,
                `var(--tw-ring-shadow)`,
                `var(--tw-shadow, 0 0 #0000)`,
              ].join(', '),
            }
          },
        },
        { values: theme('ringWidth'), type: 'length' },
      )
      matchUtilities(
        {
          'ring-blur': (value) => {
            return {
              '--tw-ring-blur': value,
            }
          },
        },
        { values: theme('ringWidth'), type: 'length' },
      )
    }),
  ],
}
export default config
