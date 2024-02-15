import { ReactNode } from 'react'

export type ButtonProps = {
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  children?: ReactNode
}
