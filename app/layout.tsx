import '@/app/ui/global.css'
import { inter } from './ui/fonts'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { Room } from './Room'
import Cursors from './Cursors'
import { ThemeProvider } from '@/theme/ThemeProvider/ThemeProvider'
import { TopNavigation } from '@/components/TopNavigation/TopNavigation'
import { BottomFooter } from '@/components/BottomFooter/BottomFooter'

export const metadata: Metadata = {
  title: {
    template: '%s | Michael Drotar',
    default: 'Michael Drotar',
  },
  description: 'The man, the myth, the dragon.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-neutral-800 antialiased transition-colors duration-500 dark:bg-neutral-800 dark:text-white`}
      >
        <ThemeProvider>
          {/* <Room> */}
          {/* <Cursors> */}
          <TopNavigation />
          {children}
          <BottomFooter />
          {/* </Cursors> */}
          {/* </Room> */}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
