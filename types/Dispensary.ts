import {UIImage} from './Image'
import {
  UITheme, 
  PageLayout, 
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

export interface PageTitle {
  titleText: string
}

export interface DispensaryPage {
  backgroundImage: UIImage
  pageTitle: PageTitle
  bodyText: UIBodyText
  pageLayout: PageLayout
}

export interface AgeVerification extends DispensaryPage {
  logoImage: UIImage
  actionButton: UIButton
  checkbox: boolean
}
