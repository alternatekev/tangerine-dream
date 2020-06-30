import {UIImage} from './Image'
import {
  UITheme, 
  PageLayout, 
  UIBodyText, 
  UIButton
} from './UI'
import {Theme} from '@td/styles'
import {FormikProps} from 'formik'

export interface DispensaryPages {
  age: AgeVerification
  adminLogin: AdminLogin
}

export interface Dispensary {
  name: string
  pages: DispensaryPages
  ui: UITheme
  colors: Theme
}

export interface AuthorizedDispensary extends Dispensary {
  prodUrl: string
  wpUrl: string
  username?: string
  password?: string
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
  logoImage: UIImage
}

export interface AdminLoginProps extends AdminLogin {
  formikProps: FormikProps<AuthorizedDispensary>
  onLogin(formikProps: FormikProps<AuthorizedDispensary>): (e: MouseEvent | TouchEvent) => void
}
