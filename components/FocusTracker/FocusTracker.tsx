'use client'

import { useEffect, useRef } from 'react'

export function FocusTracker() {
  const focusTrackerEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let loopId = 0
    let target = undefined as HTMLElement | undefined
    let isKeyboard = false

    const getFocusedElement = () => {
      const activeElement = document.activeElement as HTMLElement
      if (activeElement === document.body) return undefined
      return activeElement
    }

    const getAbsolutePosition = (element: HTMLElement) => {
      const position = { x: 0, y: 0 }
      while (element && element !== document.body) {
        position.x += element.offsetLeft
        position.y += element.offsetTop
        element = element.offsetParent as HTMLElement
      }
      return position
    }

    const disableTransition = () => {
      const tracker = focusTrackerEl.current
      if (!tracker) return
      tracker.style.transition = 'none'
    }
    const enableTransition = () => {
      const tracker = focusTrackerEl.current
      if (!tracker) return
      tracker.style.transition = ''
    }

    const updateTracker = (target: HTMLElement) => {
      const tracker = focusTrackerEl.current
      if (!tracker) return

      const position = getAbsolutePosition(target)
      tracker.style.left = `${position.x}px`
      tracker.style.top = `${position.y}px`
      tracker.style.width = `${target.offsetWidth}px`
      tracker.style.height = `${target.offsetHeight}px`
      tracker.style.borderRadius = `${
        window.getComputedStyle(target).borderRadius
      }`
    }

    const addTracker = (target: HTMLElement) => {
      const tracker = focusTrackerEl.current
      if (!tracker) return

      disableTransition()
      updateTracker(target)
      tracker.style.opacity = '0'
      tracker.style.transform = 'scale(2)'

      window.requestAnimationFrame(() => {
        enableTransition()
        tracker.style.opacity = '1'
        tracker.style.transform = 'scale(1)'
      })
    }

    const removeTracker = () => {
      const tracker = focusTrackerEl.current
      if (!tracker) return

      tracker.style.opacity = '0'
      tracker.style.transform = 'scale(2)'
    }

    const updateFocus = () => {
      if (isKeyboard) {
        const focusedElement = getFocusedElement()
        if (!focusedElement) {
          removeTracker()
        } else if (!target && focusedElement) {
          addTracker(focusedElement)
        } else if (target !== focusedElement) {
          updateTracker(focusedElement)
        }
        if (target !== focusedElement) target = focusedElement
      } else if (target) {
        removeTracker()
        target = undefined
      }
    }

    const listener = (event: KeyboardEvent | MouseEvent) => {
      const wasKeyboard = isKeyboard
      if ('key' in event) {
        if (event.key === 'Tab') isKeyboard = true
      } else {
        isKeyboard = false
      }
      if (wasKeyboard !== isKeyboard) {
        if (isKeyboard) {
          document.documentElement.classList.add('focus-tracker-visible')
        } else {
          document.documentElement.classList.remove('focus-tracker-visible')
        }
      }
    }

    document.addEventListener('keydown', listener)
    document.addEventListener('mousedown', listener)

    const loop = () => {
      updateFocus()
      loopId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(loopId)
      document.removeEventListener('keydown', listener)
      document.removeEventListener('mousedown', listener)
    }
  })

  return (
    <>
      <style jsx>{`
        *:focus-visible {
          outline: 2px solid red !important;
        }

        *:focus,
        *:focus-visible,
        :focus-visible {
          /* outline: none !important; */
        }
      `}</style>
      <div
        ref={focusTrackerEl}
        className="pointer-events-none absolute z-50 border-2 border-red-400 ring-1 ring-red-500 transition-all duration-200 ring-blur-8"
        style={{ opacity: 0 }}
      ></div>
    </>
  )
}
