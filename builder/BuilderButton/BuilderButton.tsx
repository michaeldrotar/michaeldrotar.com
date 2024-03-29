import { Button } from '@/components/Button/Button'
import { ButtonProps } from '@/components/Button/ButtonProps'
import { BuilderComponentProps } from '../types/BuilderComponentProps'

// Needs to rewrite some props to maintain compatability with builder's Button props
export type BuilderButtonProps = BuilderComponentProps &
  Omit<ButtonProps, 'children' | 'href' | 'target'> & {
    text?: string
    link?: string
    openLinkInNewTab?: boolean
  }

export function BuilderButton(props: BuilderButtonProps) {
  const { attributes, link, openLinkInNewTab, text, ...restProps } = props
  const { key, ...safeAttributes } = attributes || {}
  return (
    <Button
      key={key}
      href={link || undefined}
      target={openLinkInNewTab ? '_blank' : undefined}
      {...safeAttributes}
      {...restProps}
    >
      {text}
    </Button>
  )
}
