'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useCallback, useEffect, useRef } from 'react'
import { Properties } from 'posthog-js'
import { useAnalytics } from '../useAnalytics/useAnalytics'
import { AnalyticsEventOptions } from '../types/AnalyticsEventOptions'

function PageTrackerFallback() {
  return null
}

function PageTrackerInner() {
  const analytics = useAnalytics()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lastScroll = useRef<number>()
  const maxScroll = useRef<number>()
  const previousUrl = useRef<string>()

  const checkCanScroll = useCallback(
    () => window.scrollY + window.innerHeight < document.body.offsetHeight,
    [],
  )
  const getScrollAmount = useCallback(() => window.scrollY, [])
  const toScrollPercent = useCallback((scrollAmount: number) => {
    const scrollPercent =
      scrollAmount / (document.body.offsetHeight - window.innerHeight)
    return Math.max(0, Math.min(1, scrollPercent))
  }, [])

  // Update last and max scroll when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      lastScroll.current = getScrollAmount()
      maxScroll.current = Math.max(maxScroll.current || 0, lastScroll.current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [getScrollAmount])

  // Record events and update state when the url changes
  useEffect(() => {
    if (!pathname) return

    const recordPageLeave = (
      url: string,
      properties?: Properties,
      options?: AnalyticsEventOptions,
    ) => {
      const canScroll = checkCanScroll()
      analytics.track(
        '$pageleave',
        {
          $current_url: url,
          $pathname: new URL(url).pathname,
          $prev_pageview_last_scroll: canScroll
            ? lastScroll.current
            : undefined,
          $prev_pageview_last_scroll_percentage:
            canScroll && lastScroll.current
              ? toScrollPercent(lastScroll.current)
              : undefined,
          $prev_pageview_max_scroll: canScroll ? maxScroll.current : undefined,
          $prev_pageview_max_scroll_percentage:
            canScroll && maxScroll.current
              ? toScrollPercent(maxScroll.current)
              : undefined,
          $prev_pageview_pathname: undefined,
          ...properties,
        },
        options,
      )
    }

    const recordPageView = (
      url: string,
      properties?: Properties,
      options?: AnalyticsEventOptions,
    ) => {
      analytics.track(
        '$pageview',
        {
          $current_url: url,
          ...properties,
        },
        options,
      )
    }

    const params = searchParams.toString()
    const url = `${window.origin}${pathname}${params ? `?${params}` : ''}`
    if (url !== previousUrl.current) {
      if (previousUrl.current) {
        recordPageLeave(previousUrl.current)
        recordPageView(url)
      } else {
        recordPageView(url, { first_page: true })
      }

      if (checkCanScroll()) {
        lastScroll.current = getScrollAmount()
        maxScroll.current = lastScroll.current
      } else {
        lastScroll.current = undefined
        maxScroll.current = undefined
      }

      previousUrl.current = url
    }

    const handleBeforeUnload = () => {
      recordPageLeave(url, { last_page: true }, { immediate: true })
    }
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [
    pathname,
    searchParams,
    checkCanScroll,
    getScrollAmount,
    toScrollPercent,
    analytics,
  ])

  return null
}

/**
 * Tracks page-level events, such as when users enter and leave pages.
 */
export function PageTracker() {
  return (
    // Use Suspense so useSearchParams doesn't block server-side rendering other components
    // https://nextjs.org/docs/app/api-reference/functions/use-search-params#static-rendering
    <Suspense fallback={<PageTrackerFallback />}>
      <PageTrackerInner />
    </Suspense>
  )
}
