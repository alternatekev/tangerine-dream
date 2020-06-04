import Color from 'color'
import {defaultColors, calculateColorSteps} from './Colors'
import {UITheme} from '@td/types'

export interface ThemeState {
  colors: DerivedTheme,
  ui: UITheme,
  editing: boolean
}

export type ValueFamilies =  // tslint:disable:no-multi-spaces
  | 1000
  | 975
  | 950
  | 900
  | 800
  | 700
  | 600
  | 500
  | 400
  | 300
  | 200
  | 100
  | 50
  | 40
  | 30
  | 25
  | 20
  | 10
  | 5
  | 2
  | 1

export type Opacities = 95 | 90 | 75 | 50 | 25 | 10 | 5 // tslint:disable:no-multi-space

export type ThemeOptions =  // tslint:disable:no-multi-spaces
  | 'primary'
  | 'secondary'
  | 'button'
  | 'background'
  | 'alert'
  | 'grey'
  | 'link'
  | 'black'
  | 'white'
  | 'confirm'
  | 'warning'

export type Theme = {
  [Option in ThemeOptions]?: Color
}

type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>
  }[Keys]

export type ThemeColor = RequireOnlyOne<DerivedTheme, keyof DerivedTheme>
export type CustomColor = string

export interface DerivedTheme { [key: string]: string }

export const seedThemes = {
  admin: defaultColors,
}

export function themify(theme: Theme) {
  return calculateColorSteps(theme as { [key: string]: Color })
}

export interface ThemeProps {
  theme: ThemeState
}
