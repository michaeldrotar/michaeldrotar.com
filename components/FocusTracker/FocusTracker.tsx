'use client'

import { useEffect } from 'react'
import { focusTracker } from '@michaeldrotar/focus-tracker-js'

export function FocusTracker() {
  useEffect(() => {
    focusTracker.register(document.body, {
      boxShadow: '0 0 8px 1px currentColor',
      thickness: 2,
      color: 'rgb(248 113 113',
    })
    focusTracker.start()
  }, [])

  return null
}
