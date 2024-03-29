'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ReactNode, useMemo } from 'react'
import { AnalyticsContextProps } from '../AnalyticsContext/AnalyticsContextProps'
import { AnalyticsContext } from '../AnalyticsContext/AnalyticsContext'

if (typeof window !== 'undefined') {
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,

      // The PageTracker will handle pageview events.
      capture_pageleave: false,
      capture_pageview: false,
    })
  } else {
    console.error('NEXT_PUBLIC_POSTHOG_KEY is not set')
  }
}

export function AnalyticsProvider({
  children,
  ...restProps
}: { children: ReactNode } & Partial<AnalyticsContextProps>) {
  const contextProps = useMemo<AnalyticsContextProps>(() => {
    return {
      debug: restProps.debug || false,
    }
  }, [restProps.debug])

  return (
    <AnalyticsContext.Provider value={contextProps}>
      <PostHogProvider client={posthog}>{children}</PostHogProvider>
    </AnalyticsContext.Provider>
  )
}
