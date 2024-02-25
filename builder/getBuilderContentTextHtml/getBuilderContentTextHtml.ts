import { BuilderContent, BuilderElement } from '@builder.io/sdk'

const toText = (block: BuilderElement) =>
  block.component?.options.text
    ? String(block.component.options.text)
    : undefined

/**
 * Provides a string of the text and HTML content of a Builder.io content object.
 *
 * Does not include image alt text.
 *
 * Can be used to get the reading time of a builder content object.
 */
export function getBuilderContentTextHtml(content: BuilderContent) {
  const blocks = content.data?.blocks || []
  return blocks?.map(toText).filter(Boolean).join(' ')
}
