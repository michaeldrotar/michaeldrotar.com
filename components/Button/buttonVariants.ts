import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center font-bold no-underline justify-center whitespace-nowrap rounded transition-all duration-200 disabled:opacity-50',
  {
    variants: {
      appearance: {
        solid: 'bg-red-500 text-white hover:bg-red-500/80',
        outline:
          'border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
        ghost:
          'hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
        glow: 'bg-red-500 text-white shadow-lg shadow-red-500/50 hover:bg-red-600',
        link: 'text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50',
      },
      size: {
        sm: 'h-8 px-3',
        md: 'h-10 px-6',
        lg: 'h-12 px-9',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      appearance: 'solid',
      size: 'md',
    },
  },
)
