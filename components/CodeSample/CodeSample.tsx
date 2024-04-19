import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import { atomOneDark as darkTheme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CodeSampleProps } from './CodeSampleProps'

// NOTE: The demo does way better highlighting of React components.
// https://highlightjs.org/demo
// This may be due to react-syntax-highlighter being on v10 while the latest is v11.
// Adding v11 breaks the build but may be worth looking into it, maybe dropping the component and rolling it
// manually would work.
// Also look into Shiki and other server-side highlighters

// Register supported languages and add them to the props.
// More languages = more weight so fewer is better.
SyntaxHighlighter.registerLanguage('typescript', ts)

/**
 * Renders a code sample with syntax highlighting.
 */
export function CodeSample(props: CodeSampleProps) {
  const { ...restProps } = props
  return (
    <div className="not-prose drop-shadow-lg ">
      <SyntaxHighlighter
        {...restProps}
        showLineNumbers
        wrapLongLines
        style={darkTheme}
      />
    </div>
  )
}
