import {UIImage} from './Image'
import {VerticalAlignment, Alignment} from './Alignment'
import {Placement} from './Placement'
import {UITheme} from './UI'
import {Theme} from './Theme'

export interface Dispensary {
  age: AgeVerification
  ui: UITheme
  colors: Theme
}

export interface AgeVerification {
  backgroundImage: UIImage
  body: string
  logoImage: UIImage
  buttonText: string
  checkbox: boolean
  vAlign: VerticalAlignment
  align: Alignment
  logoPlacement: Placement
}
