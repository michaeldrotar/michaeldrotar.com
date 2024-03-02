'use client'

import { ReactNode, useEffect, useId, useRef, useState } from 'react'
import { CarouselProps, CarouselSlideProps } from './CarouselProps'
import clsx from 'clsx'

const css = `

/* More like bootstrap, less accessible */

.carousel-image a img {
  height: 100%;
  width: 100%;
}

.carousel-caption a {
  cursor: pointer;
  text-decoration: underline;
  color: #fff;
  font-weight: 600;
}

.carousel-caption a,
.carousel-caption span.contrast {
  margin: 0;
  padding: 6px;
  display: inline-block;
  background-color: rgb(0 0 0 / 65%);
  border-radius: 5px;
  border: 0 solid transparent;
}

.carousel-caption a:hover,
.carousel-caption span.contrast:hover {
  background-color: rgb(0 0 0 / 100%);
}

.carousel-caption a:focus {
  padding: 4px;
  border: 2px solid #eee;
  background-color: rgb(0 0 0 / 100%);
  outline: none;
  border-width: 2px solid #fff;
  color: #fff;
}

.carousel-caption p {
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 0;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 0;
  left: 15%;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}
`

const CarouselImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <>
      <div className="carousel-image">
        <a href="#">
          <img src={src} alt={alt} />
        </a>
      </div>
      <div className="carousel-caption">
        <h3>
          <a href="#">Dynamic Europe: Amsterdam, Prague, Berlin</a>
        </h3>
        <div className="hidden-xs hidden-sm">
          <p>
            <span className="contrast">7 pm Tuesday, March 3, on TV</span>
          </p>
        </div>
      </div>
    </>
  )
}

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

const DEFAULT_SLIDES: CarouselSlideProps[] = [
  {
    content: (
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fa649558eb1bf4e21940af3e890cdfa49%2F50d1eed397b844e3b36c1502a35e1328?format=webp&width=750&quality=75"
        className="w-full"
      />
    ),
  },
  {
    content: (
      <CarouselImage
        src="https://cdn.builder.io/api/v1/image/assets%2Fa649558eb1bf4e21940af3e890cdfa49%2F50d1eed397b844e3b36c1502a35e1328?format=webp&width=750&quality=75"
        alt="Walking Tour in Amsterdam"
      />
    ),
  },
  {
    content: (
      <CarouselImage
        src="data:image/jpeg;base64,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"
        alt="Land's End in Cornwall"
      />
    ),
  },
  {
    content: (
      <CarouselImage
        src="https://pixlr.com/images/index/ai-image-generator-one.webp"
        alt="Mom and daughter play Daniel Tiger game on notebook compute"
      />
    ),
  },
  {
    content: (
      <CarouselImage
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7h6XV-ooxKk8VGXJv3BSNlZl0HB8UUNN3iWUrItYmQ&s"
        alt="A man in a suit and fedora and a woman with coiffed hair look sternly into the camera."
      />
    ),
  },
  {
    content: (
      <CarouselImage
        src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="British flag with WILL-TV host David Thiel."
      />
    ),
  },
  {
    content: (
      <CarouselImage
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHZcctIFoDLsne72fvfoRwJe_CcDdlfHWO6TzvMTG&s"
        alt="Mid-American Gardener panelists on the set"
      />
    ),
  },
]

export function Carousel(props: CarouselProps) {
  const uuid = useId()

  const tabListRef = useRef<HTMLDivElement>(null)
  const userStateRef = useRef({ hovering: false, focusing: false })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [tabListHasFocus, setTabListHasFocus] = useState(false)
  const [isSlideFocused, setIsSlideFocused] = useState(false)
  const [userChangedFocus, setUserChangedFocus] = useState(false)
  const [userPressedPlay, setUserPressedPlay] = useState(false)

  const slides = props.slides || DEFAULT_SLIDES

  // useEffect(() => console.log({ selectedIndex }), [selectedIndex])
  // useEffect(() => console.log({ isPlaying }), [isPlaying])
  // useEffect(() => console.log({ tabListHasFocus }), [tabListHasFocus])
  // useEffect(() => console.log({ isSlideFocused }), [isSlideFocused])
  // useEffect(() => console.log({ userChangedFocus }), [userChangedFocus])
  // useEffect(() => console.log({ userPressedPlay }), [userPressedPlay])

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
    if (!slides) return

    let slideTimeout = 0
    const advanceSlide = () => {
      if (isPlaying) {
        if (
          (!userStateRef.current.focusing && !userStateRef.current.hovering) ||
          userPressedPlay
        ) {
          setSelectedIndex((selectedIndex + 1) % slides.length)
        }
      }
      slideTimeout = window.setTimeout(advanceSlide, props.interval || 5000)
    }
    slideTimeout = window.setTimeout(advanceSlide, props.interval || 5000)

    return () => {
      clearTimeout(slideTimeout)
    }
  }, [isPlaying, userPressedPlay, props.interval, selectedIndex, slides])

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
      <style>{css}</style>
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
                const handlers: Record<string, () => void> = {
                  ArrowRight: () =>
                    setSelectedIndex((index) => (index + 1) % slides.length),
                  ArrowLeft: () =>
                    setSelectedIndex(
                      (index) => (index - 1 + slides.length) % slides.length,
                    ),
                  Home: () => setSelectedIndex(0),
                  End: () => setSelectedIndex(slides.length - 1),
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
              {slides.map((slide, index) => {
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
          {slides.map((slide, index) => {
            const num = index + 1
            return (
              <CarouselSlide
                key={index}
                id={`carousel-slide-${num}-${uuid}`}
                label={`${num} of ${slides.length}`}
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
