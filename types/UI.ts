import {Level} from './Level'

export interface UITheme {
  button: UIButton
  typography: UITypography
  logo: UILogo
}

export interface UILogo {
  borderRadius: number
}

export interface UIButton {
  borderRadius: Level
  borderColor: string
}

export interface UITypography {
  header: UIFont
  body: UIFont
  nav: UIFont
  special: UIFont
}

export interface UIFont {
  font: string
  weight: FontWeight
}

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
