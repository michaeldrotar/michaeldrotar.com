import { BuilderElement } from '@builder.io/sdk'

export type BuilderComponentProps = {
  /**
   * Exists if noWrap is set to true.
   * Should be spread onto the component to set styles, classes, etc
   *
   * @example
   * <MyComponent {...attributes} />
   */
  attributes?: {
    'builder-id'?: string
    className?: string
    key?: string
    style: Record<string, unknown>
  } & Record<string, unknown>
  builderBlock?: BuilderElement
  builderState?: Record<string, unknown>
}
