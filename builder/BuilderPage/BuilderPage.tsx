import { BuilderPageProps } from './BuilderPageProps'
import { builder } from '@builder.io/sdk'
import { RenderBuilderContent } from '@/components/builder'
import { initBuilder } from '../initBuilder'

initBuilder()

export async function BuilderPage(props: BuilderPageProps) {
  const url = Array.isArray(props.url) ? '/' + props.url.join('/') : props.url
  const content = await builder
    .get('page', {
      userAttributes: {
        urlPath: url,
      },
    })
    .toPromise()

  return (
    <>
      <RenderBuilderContent content={content} />
    </>
  )
}
