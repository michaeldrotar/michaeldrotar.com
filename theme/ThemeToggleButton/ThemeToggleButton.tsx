'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useTheme } from 'next-themes'

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'

export function ThemeToggleButton() {
  const { theme, systemTheme, setTheme, resolvedTheme } = useTheme()

  if (!theme) {
    return (
      <div
        className={`h-16 w-16 animate-pulse rounded-full bg-neutral-200 shadow-sm`}
      ></div>
    )
  }

  return (
    <button
      className={clsx(
        'group relative m-16 h-16 w-16 items-center gap-2 overflow-hidden rounded-full border-2 shadow-sm transition-colors',
        'border-neutral-300 hover:border-current dark:border-neutral-700 dark:hover:border-current',
        'text-neutral-700 hover:text-current dark:text-neutral-300 dark:hover:text-current',
      )}
      onClick={() => {
        let newTheme = resolvedTheme === 'light' ? 'dark' : 'light'
        if (systemTheme === newTheme) newTheme = 'system'
        setTheme(newTheme)
      }}
      aria-label={
        resolvedTheme === 'dark'
          ? 'Switch to Light theme'
          : 'Switch to Dark theme'
      }
    >
      <div className="absolute left-0 top-0 h-16 w-16 bg-gradient-to-t from-red-300 via-orange-200 to-yellow-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:group-hover:opacity-0"></div>
      <div className="absolute left-0 top-0 h-16 w-16 bg-gradient-to-tl from-purple-950 via-indigo-800 to-sky-700 opacity-0 transition-opacity duration-500 dark:group-hover:opacity-100"></div>
      <div className="absolute left-1/2 top-0 flex h-32 w-32 origin-center -translate-x-1/2 rotate-90 flex-row items-center justify-between transition-transform duration-500 dark:-rotate-90">
        <div className="flex h-16 w-16 items-center justify-center">
          <SunIcon height={24} width={24} />
        </div>
        <div className="flex h-16 w-16 items-center justify-center">
          <MoonIcon height={24} width={24} />
        </div>
      </div>
    </button>
  )
}
