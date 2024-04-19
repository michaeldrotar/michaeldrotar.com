import { SyntaxHighlighterProps } from 'react-syntax-highlighter'

export type CodeSampleProps = Pick<
  SyntaxHighlighterProps,
  'children' | 'language'
> & {
  language?: 'typescript'
}
