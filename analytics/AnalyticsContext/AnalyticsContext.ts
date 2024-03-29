import { createContext } from 'react'
import { AnalyticsContextProps } from './AnalyticsContextProps'

export const AnalyticsContext = createContext<
  AnalyticsContextProps | undefined
>(undefined)
