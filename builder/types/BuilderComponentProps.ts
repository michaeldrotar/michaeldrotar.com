import { BuilderElement } from '@builder.io/sdk'

export type BuilderComponentProps = {
  /**
   * Exists if noWrap is set to true.
   * Should be spread onto the component to set styles, classes, etc
   *
   * @example
   * <MyComponent {...attributes} />
   */
  attributes?: Record<string, unknown>
  builderBlock?: BuilderElement
  builderState?: Record<string, unknown>
}
