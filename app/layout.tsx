import '@/app/ui/global.css'
import { inter } from './ui/fonts'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { ThemeProvider } from '@/theme/ThemeProvider/ThemeProvider'
import { TopNavigation } from '@/components/TopNavigation/TopNavigation'
import { BottomFooter } from '@/components/BottomFooter/BottomFooter'
import { FocusTracker } from '@/components/FocusTracker/FocusTracker'
import { AnalyticsProvider } from '@/analytics/AnalyticsProvider/AnalyticsProvider'
import { PageTracker } from '@/analytics/PageTracker/PageTracker'

export const metadata: Metadata = {
  title: {
    template: '%s | Michael Drotar',
    default: 'Michael Drotar',
  },
  description: 'The man, the myth, the dragon.',
  metadataBase: new URL('https://www.michaeldrotar.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AnalyticsProvider debug={process.env.NODE_ENV === 'development'}>
        <ThemeProvider>
          <body
            className={`${inter.className} bg-white text-neutral-800 antialiased transition-colors duration-500 dark:bg-neutral-800 dark:text-white`}
          >
            {/* <Room> */}
            {/* <Cursors> */}
            <TopNavigation />
            {children}
            <BottomFooter />
            {/* </Cursors> */}
            {/* </Room> */}
            {/* <UserCursor /> */}
            <FocusTracker />
            <Analytics />
            <SpeedInsights />
          </body>
        </ThemeProvider>
        <PageTracker />
      </AnalyticsProvider>
    </html>
  )
}
