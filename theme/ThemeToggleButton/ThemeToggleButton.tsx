'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'

export function ThemeToggleButton() {
  const { theme, systemTheme, setTheme, themes, forcedTheme, resolvedTheme } =
    useTheme()
  console.log({ theme, systemTheme, themes, forcedTheme, resolvedTheme })
  if (!theme) {
    return (
      <div
        className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
      >
        <div className="flex p-4">
          <div className="h-5 w-5 rounded-md bg-gray-200" />
          <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        </div>
        <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
          <div className="h-7 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    )
  }

  return (
    <button
      className="flex h-16 w-16 items-center gap-2 rounded-full border-2 border-gray-300 bg-transparent p-2 text-gray-800 shadow-sm transition-colors hover:bg-gray-200"
      onClick={() => {
        let newTheme = resolvedTheme === 'light' ? 'dark' : 'light'
        if (systemTheme === newTheme) newTheme = 'system'
        setTheme(newTheme)
      }}
    >
      <SunIcon height={24} width={24} className="" />
      <MoonIcon height={24} width={24} className="text-gray-800" />
      <span className="sr-only">
        {resolvedTheme === 'dark'
          ? 'Switch to Light theme'
          : 'Switch to Dark theme'}
      </span>
    </button>
  )
}
