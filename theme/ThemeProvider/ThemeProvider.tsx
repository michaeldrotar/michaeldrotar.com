'use client'

import { ThemeProvider as _ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export function ThemeProvider({ children }: { children?: ReactNode }) {
  return <_ThemeProvider attribute="class">{children}</_ThemeProvider>
}
