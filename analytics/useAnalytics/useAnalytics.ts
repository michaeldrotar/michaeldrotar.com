import { usePostHog } from 'posthog-js/react'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { AnalyticsEventProperties } from '../types/AnalyticsEventProperties'
import { AnalyticsEventOptions } from '../types/AnalyticsEventOptions'
import { useAnalyticsContext } from '../useAnalyticsContext/useAnalayticsContext'
import chalk from 'chalk'
import { AnalyticsEventName } from '../types/AnalyticsEventName'

/**
 * Provides access to analytics events on the client side.
 *
 * Currently supports PostHog, can be expanded in the future.
 */
export function useAnalytics() {
  const postHog = usePostHog()

  const analyticsContext = useAnalyticsContext()
  const analyticsContextRef = useRef(analyticsContext)

  useEffect(() => {
    analyticsContextRef.current = analyticsContext
  }, [analyticsContext])

  const track = useCallback(
    /**
     * Tracks an analytics event.
     */
    (
      eventName: AnalyticsEventName,
      properties?: AnalyticsEventProperties,
      options?: AnalyticsEventOptions,
    ) => {
      const postHogResult = postHog.capture(eventName, properties, {
        send_instantly: options?.immediate,
      })

      if (analyticsContextRef.current.debug) {
        const propertiesString = properties
          ? Object.keys(properties)
              .map((key) => {
                const value = properties[key]
                let valueString = ''
                if (typeof value === 'string') {
                  valueString = chalk.rgb(0xa5, 0xf3, 0xfc)(`"${value}"`)
                } else if (typeof value === 'number') {
                  valueString = chalk.rgb(0xe9, 0xd5, 0xff)(value)
                } else if (typeof value === 'boolean') {
                  valueString = chalk.rgb(0xe9, 0xd5, 0xff)(value)
                } else {
                  valueString = chalk.gray(String(value))
                }
                return `  ${chalk.rgb(0xbf, 0xdb, 0xfe)(key)}: ${valueString}`
              })
              .join('\n')
          : ''
        console.log(
          `${chalk.dim('[Analytics]')} ${chalk.rgb(0xfe, 0xf0, 0x8a)(eventName)}${propertiesString ? `\n${propertiesString}` : ''}\n`,
          { postHog: postHogResult },
        )
      }
    },
    [postHog],
  )

  const analytics = useMemo(() => {
    return { track }
  }, [track])

  return analytics
}
