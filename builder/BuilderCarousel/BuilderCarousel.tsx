import { Carousel } from '@/components/Carousel/Carousel'
import { BuilderBlocks } from '@builder.io/react'
import { CarouselProps } from '@/components/Carousel/CarouselProps'
import { useMemo } from 'react'
import { BuilderComponentProps } from '../types/BuilderComponentProps'

export type BuilderCarouselProps = CarouselProps & BuilderComponentProps

export function BuilderCarousel(props: BuilderCarouselProps) {
  const { builderBlock, builderState, slides, ...carouselProps } = props
  const componentizedSlides = useMemo(
    () =>
      slides?.map((slide, index) => ({
        ...slide,
        content: (
          <BuilderBlocks
            parentElementId={builderBlock?.id}
            dataPath={`component.options.slides.${index}.content`}
            blocks={slides[index].content}
          />
        ),
      })),
    [builderBlock?.id, slides],
  )
  return (
    <>
      <Carousel {...carouselProps} slides={componentizedSlides} />
    </>
  )
}
