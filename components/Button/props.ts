import {FormEvent, MouseEvent, ReactNode, RefObject} from 'react'

import {ExtraStyles} from '@alt/styles'

export interface ButtonProps {
  children?: ReactNode
  largeIcon?: boolean
  afterIcon?: ReactNode
  afterIconStyle?: ExtraStyles
  alignCenter?: boolean
  external?: boolean
  utility?: boolean
  iconOnly?: boolean
  highlighted?: boolean
  draggable?: boolean
  indentLevel?: 1 | 2 | 3 | 4 | 5 | 6
  hoverText?: string | boolean
  tabIndex?: number
  /** The location of the link. Uses `href` if not defined */
  as?: string
  id?: string
  value?: number | string | null
  block?: boolean
  ref?: RefObject<any> // tslint:disable-line no-any
  borderless?: boolean
  extraStyles?: ExtraStyles | ExtraStyles[] | undefined
  collapsed?: boolean
  compact?: boolean
  completed?: boolean
  confirm?: boolean
  decline?: boolean
  direction?: 'back' | 'forward'
  disabled?: boolean
  dimmed?: boolean
  /** Renders inside a `Link` if declared */
  href?: string
  target?: string,
  download?: string,
  icon?: ReactNode
  uppercase?: boolean
  capitalize?: boolean
  inButtonBar?: boolean
  segmented?: boolean
  inline?: boolean
  intense?: boolean
  inverted?: boolean
  labelStyles?: ExtraStyles
  large?: boolean
  miniWeighted?: boolean
  miniTopWeighted?: boolean
  /** Wraps the children in `OverflowEllipsis` if true */
  overflowEllipsis?: boolean
  primary?: boolean
  divider?: boolean
  required?: boolean
  secondary?: boolean
  selected?: boolean
  size?: number
  superTopWeighted?: boolean
  superWeighted?: boolean
  tertiary?: boolean
  topWeighted?: boolean
  type?: 'button' | 'submit' | 'reset'
  unread?: boolean
  weighted?: boolean
  wrap?: boolean
  hashLink?: boolean
  /** `Props` is unknown until declared */
  onClick?(e: FormEvent<HTMLFormElement>, props?: unknown): any  // tslint:disable-line no-any (might be a Promise<T>, might be void)
  onHover?(e: MouseEvent<HTMLButtonElement>, props?: unknown): void
  onMouseDown?(e: MouseEvent<HTMLButtonElement>, props?: unknown): void
}
