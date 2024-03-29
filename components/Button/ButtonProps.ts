import { buttonVariants } from './buttonVariants'
import { VariantProps } from 'class-variance-authority'
import { ActionProps } from '../Action/ActionProps'

export type ButtonProps = ActionProps & VariantProps<typeof buttonVariants>
