import {UIImage} from './Image'
import {
  UITheme, 
  PageLayout, 
  UIBodyText, 
  UIButton
} from './UI'
import {Theme} from '@td/styles'
import { FormikProps } from 'formik'

export interface Dispensary {
  name: string
  age: AgeVerification
  adminLogin: AdminLogin
  ui: UITheme
  colors: Theme
}

export interface AuthorizedDispensary extends Dispensary {
  username: string
  password: string
}

export interface PageTitle {
  titleText: string
}

export interface DispensaryPage {
  backgroundImage: UIImage
  pageTitle: PageTitle
  bodyText?: UIBodyText
  pageLayout: PageLayout
}

export interface AgeVerification extends DispensaryPage {
  logoImage: UIImage
  actionButton: UIButton
  checkbox: boolean
}

export interface AdminLogin extends DispensaryPage {
  formikProps: FormikProps<AuthorizedDispensary>
  logoImage: UIImage
  onLogin(formikProps: FormikProps<AuthorizedDispensary>): void
}
