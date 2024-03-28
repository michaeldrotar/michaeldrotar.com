'use client'

import posthog from 'posthog-js'
import { PostHogProvider as _PostHogProvider } from 'posthog-js/react'
import { ReactNode } from 'react'

if (typeof window !== 'undefined') {
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: false, // see PostHogPageViewTracker
    })
  } else {
    console.error('NEXT_PUBLIC_POSTHOG_KEY is not set')
  }
}

export function PostHogProvider({ children }: { children: ReactNode }) {
  return <_PostHogProvider client={posthog}>{children}</_PostHogProvider>
}
