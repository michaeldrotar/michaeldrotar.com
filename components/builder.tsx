'use client'

import { BuilderComponent, useIsPreviewing } from '@builder.io/react'
import { BuilderContent, builder } from '@builder.io/sdk'
import DefaultErrorPage from 'next/error'
import '../builder-registry'
import { initBuilder } from '@/builder/initBuilder'

interface BuilderPageProps {
  content?: BuilderContent
  model?: 'page' | 'blog-article'
}

initBuilder()

export function RenderBuilderContent({
  content,
  model = 'page',
}: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing()
  // If "content" has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} />
  }
  // If the "content" is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />
}
