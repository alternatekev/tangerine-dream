import {Level} from './Level'
import {Alignment, VerticalAlignment} from './Alignment'

export enum UIMode {
  Light = 'light',
  Dark = 'dark'
}

export interface UITheme {
  button: Omit<UIButton, 'text' | 'level'>
  card: UICard
  typography: UITypography
  logo: UILogo
  mode: UIMode
}

export interface UILogo {
  borderRadius: number
}

export interface UICard {
  borderRadius: Level
}

export interface UITypography {
  header: UIFont
  body: UIFont
  nav: UIFont
  special: UIFont
}

export interface UIFont {
  font?: string
  weight?: FontWeight
}

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export enum PageTemplate {
  Captured = 'captured',
  Limited = 'limited',
  FullBleed = 'fullBleed'
}

export enum UIFieldKind {
  'TextField' = 'textfield',
  'Dropdown' = 'dropdown',
  'TextArea' = 'textarea',
  'Image' = 'image'
}

export interface UIField {
  label: string
  value?: string
  id: string
  kind: UIFieldKind
  setFieldValue(): void
}

export interface UIBodyText {
  lineHeight?: Level
  font?: UIFont
  text: string
  size?: number
  inverted?: boolean
  alignment?: Alignment
  fields?: UIField[]
}

export interface UIButton extends UIBodyText {
  borderRadius?: Level
  borderWidth?: Level
  borderColor?: string
  inline?: boolean
  level: number
}

export interface UIWeighting {
  weighted?: Level
  topWeighted?: Level
}

export interface PageLayout {
  template: PageTemplate
  align: Alignment
  verticalAlign: VerticalAlignment
}

