import {Level} from './Level'
import {Renderable} from './Renderable'
import {UIFont, UIBodyText} from './UI'
import {Alignment} from './Alignment'
import {ExtraStyles} from '@td/styles'

export interface BlockProps {
  fontTheme?: Omit<UIBodyText, 'text'>
  unicorn?: ExtraStyles
  level?: Level
  compact?: boolean
  fullBleed?: boolean
  weighted?: Level
  topWeighted?: Level
  children?: Renderable
  font?: UIFont
  alignment?: Alignment
  width?: number | string
  height?: number | string
  innerRef?: HTMLElement | null
}
