import {UIImage} from './Image'
import {
  VerticalAlignment, 
  Alignment
} from './Alignment'
import {Placement} from './Placement'
import {
  UITheme, 
  PageKind, 
  UIBodyText, 
  UIButton
} from './UI'
import {Theme} from '@td/styles'

export interface Dispensary {
  name: string
  age: AgeVerification
  ui: UITheme
  colors: Theme
}

export interface DispensaryPage {
  backgroundImage: UIImage
  title: string
  body: UIBodyText
  kind: PageKind
}

export interface AgeVerification extends DispensaryPage {
  logoImage: UIImage
  button: UIButton
  checkbox: boolean
  vAlign: VerticalAlignment
  align: Alignment
  logoPlacement: Placement
}
