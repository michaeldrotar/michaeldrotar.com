'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import Cursor from '../Cursor/Cursor'

export function UserCursor({ children }: { children?: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // document.body.style.overflow = 'hidden'
    // document.body.style.cursor = 'none'

    const capturedCursors: Array<{ target: HTMLElement; cursor: string }> = []

    const onPointerEnter = (event: PointerEvent) => {
      cursorRef.current?.style.setProperty('visibility', 'visible')
      if (event.target instanceof Element) {
        let target: Element | null = event.target
        while (target) {
          if (
            target instanceof HTMLElement &&
            getComputedStyle(target).cursor !== 'none'
          ) {
            console.log(
              target,
              getComputedStyle(target).cursor,
              target.style.cursor,
            )
            capturedCursors.push({
              target: target,
              cursor: target.style.cursor,
            })
            // target.style.cursor = 'none'
          }
          target = target.parentElement
        }
      }
    }

    const onPointerMove = (event: PointerEvent) => {
      event.preventDefault()
      if (cursorRef.current?.style.visibility !== 'visible')
        onPointerEnter(event)
      cursorRef.current?.style.setProperty('left', `${event.clientX}px`)
      cursorRef.current?.style.setProperty('top', `${event.clientY}px`)
    }

    const onPointerOut = (event: PointerEvent) => {
      cursorRef.current?.style.setProperty('visibility', 'hidden')
      // if (event.target && event.target instanceof Element) {
      //   const capturedCursor = capturedCursors.find(
      //     (capturedCursor) => capturedCursor.target === event.target,
      //   )
      //   if (capturedCursor) {
      //     event.target.style.cursor = capturedCursor.cursor
      //     capturedCursors.splice(capturedCursors.indexOf(capturedCursor), 1)
      //   }
      // }
    }

    document.addEventListener('pointerenter', onPointerEnter)
    document.addEventListener('pointermove', onPointerMove)
    document.addEventListener('pointerout', onPointerOut)

    setIsLoaded(true)
    return () => {
      document.removeEventListener('pointerenter', onPointerEnter)
      document.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerout', onPointerOut)
    }
  }, [])

  return (
    <>
      {isLoaded && <style>{`* { cursor: none !important;}`}</style>}
      <Cursor color="red" cursorRef={cursorRef} />
      {children}
    </>
  )
}
