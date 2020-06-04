import {Level} from './Level'
import {Renderable} from './Renderable'
import {UIFont, UIBodyText} from './UI'
import { Alignment } from './Alignment'

export interface BlockProps {
  level?: Level
  compact?: boolean
  fullBleed?: boolean
  weighted?: Level
  topWeighted?: Level
  children?: Renderable
  font?: UIFont
  alignment?: Alignment
  fontStyles?: Omit<UIBodyText, 'text'>
}