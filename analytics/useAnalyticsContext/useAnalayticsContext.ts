import { useContext } from 'react'
import { AnalyticsContext } from '../AnalyticsContext/AnalyticsContext'
import { AnalyticsContextProps } from '../AnalyticsContext/AnalyticsContextProps'

export function useAnalyticsContext(): AnalyticsContextProps {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error(
      'No analytics context found, useAnalyticsContext may only be called within an AnalyticsProvider component',
    )
  }
  return context
}
