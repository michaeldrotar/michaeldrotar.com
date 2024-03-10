'use client'

import { ReactNode, useEffect, useId, useRef, useState } from 'react'
import { CarouselProps } from './CarouselProps'
import clsx from 'clsx'

const CarouselSlide = ({
  id,
  label,
  isSelected,
  children,
}: {
  id: string
  label: string
  isSelected: boolean
  children?: ReactNode
}) => {
  return (
    <div
      className={clsx(
        'relative overflow-hidden',
        isSelected ? 'block' : 'hidden',
      )}
      id={id}
      role="tabpanel"
      aria-roledescription="slide"
      aria-label={label}
    >
      {children}
    </div>
  )
}

const CarouselTabButton = ({
  label,
  isSelected,
  slideId,
  onClick,
}: {
  label: string
  isSelected: boolean
  slideId: string
  onClick: () => void
}) => {
  return (
    <button
      type="button"
      role="tab"
      className="background-transparent width-[34px] group relative top-[-2px] m-0 border-none p-0 outline-none"
      aria-label={label}
      aria-selected={isSelected ? 'true' : 'false'}
      tabIndex={isSelected ? undefined : -1}
      aria-controls={slideId}
      onClick={onClick}
    >
      <svg
        width="34"
        height="34"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* tab */}
        <circle
          className={clsx(
            'z-[16] stroke-white stroke-2 group-hover:stroke-[4] group-hover:opacity-100',
            isSelected
              ? 'fill-white group-hover:fill-white'
              : 'fill-transparent',
          )}
          cx="16"
          cy="15"
          r="6"
        ></circle>
      </svg>
    </button>
  )
}

export function Carousel(props: CarouselProps) {
  const uuid = useId()

  console.log(props.slides)

  const tabListRef = useRef<HTMLDivElement>(null)
  const userStateRef = useRef({ hovering: false, focusing: false })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [tabListHasFocus, setTabListHasFocus] = useState(false)
  const [isSlideFocused, setIsSlideFocused] = useState(false)
  const [userChangedFocus, setUserChangedFocus] = useState(false)
  const [userPressedPlay, setUserPressedPlay] = useState(false)

  // useEffect(() => console.log({ selectedIndex }), [selectedIndex])
  // useEffect(() => console.log({ isPlaying }), [isPlaying])
  // useEffect(() => console.log({ tabListHasFocus }), [tabListHasFocus])
  // useEffect(() => console.log({ isSlideFocused }), [isSlideFocused])
  // useEffect(() => console.log({ userChangedFocus }), [userChangedFocus])
  // useEffect(() => console.log({ userPressedPlay }), [userPressedPlay])

  useEffect(() => {
    if (selectedIndex >= props.slides.length) {
      setSelectedIndex(0)
    }
  }, [selectedIndex, props.slides.length])

  useEffect(() => {
    const hasReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    if (props.autoPlay && !hasReducedMotion.matches) {
      setIsPlaying(true)
    }
  }, [props.autoPlay])

  useEffect(() => {
    if (!userChangedFocus) return
    if (!tabListRef.current) return

    const element = tabListRef.current.children[selectedIndex]
    if (element instanceof HTMLElement) {
      element.focus()
    }

    setUserChangedFocus(false)
  }, [selectedIndex, userChangedFocus])

  useEffect(() => {
    if (!props.slides) return

    let slideTimeout = 0
    const advanceSlide = () => {
      if (isPlaying) {
        if (
          (!userStateRef.current.focusing && !userStateRef.current.hovering) ||
          userPressedPlay
        ) {
          setSelectedIndex((selectedIndex + 1) % props.slides.length)
        }
      }
      slideTimeout = window.setTimeout(advanceSlide, props.interval || 5000)
    }
    slideTimeout = window.setTimeout(advanceSlide, props.interval || 5000)

    return () => {
      clearTimeout(slideTimeout)
    }
  }, [isPlaying, userPressedPlay, props.interval, selectedIndex, props.slides])

  return (
    <div
      className={clsx('not-prose w-full', props.className)}
      style={props.style}
      aria-roledescription="carousel"
      aria-label="Highlighted television shows"
      onMouseOverCapture={() => (userStateRef.current.hovering = true)}
      onMouseOutCapture={() => (userStateRef.current.hovering = false)}
      onFocusCapture={() => (userStateRef.current.focusing = true)}
      onBlurCapture={() => (userStateRef.current.focusing = false)}
    >
      <div className="relative">
        <div className="controls absolute top-4 z-10 flex w-full px-5 pt-1">
          <button
            className="rotation group z-10 h-[30px] flex-auto flex-shrink-0 flex-grow-0 border-none bg-transparent p-0 opacity-40 outline-none hover:opacity-100 focus:opacity-100"
            type="button"
            onClick={() => {
              setIsPlaying((isPlaying) => !isPlaying)
              setUserPressedPlay(true)
            }}
          >
            <svg
              width="42"
              height="34"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="fill-black stroke-black stroke-1 opacity-60 group-focus:group-hover:opacity-100"
                x="2"
                y="2"
                rx="5"
                ry="5"
                width="38"
                height="24"
              ></rect>
              <rect
                className="fill-transparent stroke-transparent stroke-2 group-hover:stroke-white group-hover:opacity-100"
                x="4"
                y="4"
                rx="5"
                ry="5"
                width="34"
                height="20"
              ></rect>
              <polygon
                className={clsx(
                  'stroke-[4]',
                  isPlaying
                    ? 'fill-white stroke-white'
                    : 'fill-transparent stroke-transparent',
                )}
                points="17 8 17 20"
              ></polygon>
              <polygon
                className={clsx(
                  'stroke-[4]',
                  isPlaying
                    ? 'fill-white stroke-white'
                    : 'fill-transparent stroke-transparent',
                )}
                points="24 8 24 20"
              ></polygon>
              <polygon
                className={clsx(
                  'stroke-1',
                  !isPlaying
                    ? 'fill-white stroke-white'
                    : 'fill-transparent stroke-transparent',
                )}
                points="15 8 15 20 27 14"
              ></polygon>
            </svg>
          </button>
          <div className="h-[30] flex-auto text-center">
            <div
              ref={tabListRef}
              role="tablist"
              aria-label="Slides"
              className={clsx(
                'inline-block h-[30px] rounded-xl border-0 border-transparent bg-black bg-opacity-60 pt-[2] hover:opacity-100',
                tabListHasFocus ? 'opacity-100' : 'opacity-40',
              )}
              onFocusCapture={() => setTabListHasFocus(true)}
              onBlurCapture={() => setTabListHasFocus(false)}
              onKeyDownCapture={(event) => {
                if (!props.slides) return

                const handlers: Record<string, () => void> = {
                  ArrowRight: () =>
                    setSelectedIndex(
                      (index) => (index + 1) % props.slides.length,
                    ),
                  ArrowLeft: () =>
                    setSelectedIndex(
                      (index) =>
                        (index - 1 + props.slides.length) % props.slides.length,
                    ),
                  Home: () => setSelectedIndex(0),
                  End: () => setSelectedIndex(props.slides.length - 1),
                }

                const handler = handlers[event.key]
                if (handler) {
                  handler()
                  setUserChangedFocus(true)
                  setIsPlaying(false)
                  event.preventDefault()
                }
              }}
              data-focus-tracker--parent
            >
              {props.slides.map((slide, index) => {
                const num = index + 1
                return (
                  <CarouselTabButton
                    key={index}
                    label={`Slide ${num}`}
                    isSelected={selectedIndex === index}
                    slideId={`carousel-slide-${num}-${uuid}`}
                    onClick={() => {
                      setSelectedIndex(index)
                      setIsPlaying(false)
                    }}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'border-red-400',
            isSlideFocused ? 'border-[3px] p-[2px]' : 'border-0 p-[5px]',
          )}
          aria-live={isPlaying || tabListHasFocus ? 'polite' : 'off'}
          onFocusCapture={() => setIsSlideFocused(true)}
          onBlurCapture={() => setIsSlideFocused(false)}
        >
          {props.slides.map((slide, index) => {
            const num = index + 1
            return (
              <CarouselSlide
                key={index}
                id={`carousel-slide-${num}-${uuid}`}
                label={`${num} of ${props.slides.length}`}
                isSelected={selectedIndex === index}
              >
                {slide.content}
              </CarouselSlide>
            )
          })}
        </div>
      </div>
    </div>
  )
}
