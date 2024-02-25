'use client'

import { buildUrl } from '@/utils/buildUrl/buildUrl'
import Image, { ImageLoader, ImageProps } from 'next/image'

const builderLoader: ImageLoader = ({ src, width, quality, ...rest }) => {
  return buildUrl(src, { query: { width, quality: quality || 75 } })
}

export function BuilderImage(props: ImageProps) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image loader={builderLoader} {...props} />
}
