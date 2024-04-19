import { BuilderComponentProps } from '../types/BuilderComponentProps'
import { CodeSampleProps } from '@/components/CodeSample/CodeSampleProps'
import { CodeSample } from '@/components/CodeSample/CodeSample'

export type BuilderCodeSampleProps = BuilderComponentProps &
  Omit<CodeSampleProps, 'children'> & { content?: string }

export function BuilderCodeSample(props: BuilderCodeSampleProps) {
  const { content, ...restProps } = props
  return <CodeSample {...restProps}>{`${content}`}</CodeSample>
}
