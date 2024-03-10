import { ReactNode } from 'react'

export type CarouselSlideProps = {
  content: ReactNode
}

export type CarouselProps = {
  autoPlay?: boolean
  interval?: number
  style?: React.CSSProperties
  className?: string
  slides: Array<CarouselSlideProps>
  slideTransition?: 'fade' | 'shove' | 'slide' | 'zoom' | 'none'
}
