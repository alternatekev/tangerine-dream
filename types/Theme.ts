import Color from 'color'
import {calculateColors} from '@alt/styles'

export enum ThemeContext {
  Home = 'home',
  Portfolio = 'portfolio',
  Audio = 'audio'
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
  | 'alert'
  | 'grey'
  | 'link'
  | 'black'
  | 'white'
  | 'confirm'
  | 'warning'
  | 'background'

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

export interface DerivedTheme {
  primary1: string
  primary2: string
  primary5: string
  primary10: string
  primary20: string
  primary25: string
  primary30: string
  primary40: string
  primary50: string
  primary100: string
  primary200: string
  primary300: string
  primary400: string
  primary500: string
  primary500_95: string
  primary500_90: string
  primary500_75: string
  primary500_50: string
  primary500_25: string
  primary500_10: string
  primary500_5: string
  primary600: string
  primary700: string
  primary800: string
  primary900: string
  primary950: string
  primary975: string
  primary1000: string
  secondary1: string
  secondary2: string
  secondary5: string
  secondary10: string
  secondary20: string
  secondary25: string
  secondary30: string
  secondary40: string
  secondary50: string
  secondary100: string
  secondary200: string
  secondary300: string
  secondary400: string
  secondary500: string
  secondary500_95: string
  secondary500_90: string
  secondary500_75: string
  secondary500_50: string
  secondary500_25: string
  secondary500_10: string
  secondary500_5: string
  secondary600: string
  secondary700: string
  secondary800: string
  secondary900: string
  secondary950: string
  secondary975: string
  secondary1000: string
  background1: string
  background2: string
  background5: string
  background10: string
  background20: string
  background25: string
  background30: string
  background40: string
  background50: string
  background100: string
  background200: string
  background300: string
  background400: string
  background500: string
  background500_95: string
  background500_90: string
  background500_75: string
  background500_50: string
  background500_25: string
  background500_10: string
  background500_5: string
  background600: string
  background700: string
  background800: string
  background900: string
  background950: string
  background975: string
  background1000: string
  button1: string
  button2: string
  button5: string
  button10: string
  button20: string
  button25: string
  button30: string
  button40: string
  button50: string
  button100: string
  button200: string
  button300: string
  button400: string
  button500: string
  button500_95: string
  button500_90: string
  button500_75: string
  button500_50: string
  button500_25: string
  button500_10: string
  button500_5: string
  button600: string
  button700: string
  button800: string
  button900: string
  button950: string
  button975: string
  button1000: string
  link1: string
  link2: string
  link5: string
  link10: string
  link20: string
  link25: string
  link30: string
  link40: string
  link50: string
  link100: string
  link200: string
  link300: string
  link400: string
  link500: string
  link500_95: string
  link500_90: string
  link500_75: string
  link500_50: string
  link500_25: string
  link500_10: string
  link500_5: string
  link600: string
  link700: string
  link800: string
  link900: string
  link950: string
  link975: string
  link1000: string
  grey1: string
  grey2: string
  grey5: string
  grey10: string
  grey20: string
  grey25: string
  grey30: string
  grey40: string
  grey50: string
  grey100: string
  grey200: string
  grey300: string
  grey400: string
  grey500: string
  grey500_95: string
  grey500_90: string
  grey500_75: string
  grey500_50: string
  grey500_25: string
  grey500_10: string
  grey500_5: string
  grey600: string
  grey700: string
  grey800: string
  grey900: string
  grey950: string
  grey975: string
  grey1000: string
  black1: string
  black2: string
  black5: string
  black10: string
  black20: string
  black25: string
  black30: string
  black40: string
  black50: string
  black100: string
  black200: string
  black300: string
  black400: string
  black500: string
  black500_95: string
  black500_90: string
  black500_75: string
  black500_50: string
  black500_25: string
  black500_10: string
  black500_5: string
  black600: string
  black700: string
  black800: string
  black900: string
  black950: string
  black975: string
  black1000: string
  white1: string
  white2: string
  white5: string
  white10: string
  white20: string
  white25: string
  white30: string
  white40: string
  white50: string
  white100: string
  white200: string
  white300: string
  white400: string
  white500: string
  white500_95: string
  white500_90: string
  white500_75: string
  white500_50: string
  white500_25: string
  white500_10: string
  white500_5: string
  white600: string
  white700: string
  white800: string
  white900: string
  white950: string
  white975: string
  white1000: string
}

export interface ThemeState {
  currentContext: ThemeContext
  themes: { [Context in ThemeContext]: Theme }
  derivedThemes: DerivedTheme
}

const defaultTheme = {
  primary: Color(`#dd2c00`),
  secondary: Color(`#FFF`),
  background: Color(`#00bcd4`),
  button: Color(`#ff5722`),
  link: Color(`#dd2c00`),
  grey: Color(`#999`),
  black: Color(`#3E3E3E`),
  white: Color(`#FFF`),
}

export const seedThemes = {
  home: defaultTheme,
  portfolio: {
    primary: Color(`#FC0`),
    secondary: Color(`#FFC`),
    background: Color(`#369`),
    button: Color(`#ff5722`),
    link: Color(`#dd2c00`),
    grey: Color(`#999`),
    black: Color(`#3E3E3E`),
    white: Color(`#FFF`),
  },
  audio: {
    primary: Color(`#FC0`),
    secondary: Color(`#FFC`),
    background: Color(`#693`),
    button: Color(`#ff5722`),
    link: Color(`#dd2c00`),
    grey: Color(`#999`),
    black: Color(`#3E3E3E`),
    white: Color(`#FFF`),
  }
}

interface Themes {
  home: Theme,
  portfolio: Theme,
  audio: Theme
}

export function deriveThemes(seededThemes: Themes) {
  const derivedThemes: any = {} // tslint:disable-line no-any - mutated object
  if (seededThemes) {
    for (const theme of Object.keys(seededThemes)) {
      derivedThemes[theme] = calculateColors(seededThemes[theme])
    }
  }

  return derivedThemes
}

export function createDerivedTheme(theme: Theme) {
  return calculateColors(theme as { [key: string]: Color })
}

export interface ThemeProps {
  theme: DerivedTheme
}
