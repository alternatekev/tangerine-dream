import Color from 'color'
import { mapObjIndexed } from 'ramda'

import { ThemeOptions, DerivedTheme } from './Theme'
export * from '@td/data/defaultColors'

export const immutableThemeColors = {
  alert: Color('#F33'),
  grey: Color('#666'),
  black: Color('#333'),
  white: Color('#FFF'),
  warning: Color('#F63'),
}

export interface ContrastColors {
  backgroundColor: string
  foregroundColorFamily: ThemeOptions
  theme: DerivedTheme
  large?: boolean
}

const valueFamilies = {
  1000: 0.9,
  975: 0.75,
  950: 0.5,
  900: 0.4,
  800: 0.3,
  700: 0.2,
  600: 0.1,
  500: 0,
  400: 0.1,
  300: 0.2,
  200: 0.3,
  100: 0.4,
  50: 0.5,
  40: 0.6,
  30: 0.7,
  25: 0.75,
  20: 0.8,
  10: 0.9,
  5: 0.95,
  2: 0.98,
  1: 0.99
}

export function calculateColorSteps(
  colorSet: { [key: string]: Color }
) {
  const calculatedColors: { [key: string]: string } = {}
  const themeColors = {
    ...colorSet,
    ...immutableThemeColors
  }

  console.log(themeColors)

  return Object.keys(colorSet).reduce((results, colorName) => {
    const color = colorSet[colorName]

    return Object.keys(valueFamilies).reduce((innerResults, level) => {
      const levelInt = parseInt(level, 10)
      if (levelInt === 500) {
        return {
          ...innerResults,
          [colorName + level]: color.rgb().string(),
          [`${colorName + level}_95`]: color
            .fade(0.05)
            .rgb()
            .string(),
          [`${colorName + level}_90`]: color
            .fade(0.1)
            .rgb()
            .string(),
          [`${colorName + level}_75`]: color
            .fade(0.25)
            .rgb()
            .string(),
          [`${colorName + level}_50`]: color
            .fade(0.5)
            .rgb()
            .string(),
          [`${colorName + level}_25`]: color
            .fade(0.75)
            .rgb()
            .string(),
          [`${colorName + level}_10`]: color
            .fade(0.9)
            .rgb()
            .string(),
          [`${colorName + level}_5`]: color
            .fade(0.95)
            .rgb()
            .string()
        }
      } else if (levelInt > 500) {
        return {
          ...innerResults,
          [colorName + level]: colorSet[colorName]
            //@ts-ignore

            .darken(valueFamilies[level])
            .rgb()
            .string()
        }
      } else {
        console.log(colorSet[colorName])
      
        return {
          ...innerResults,
          [colorName + level]: colorSet[colorName]
            //@ts-ignore

            .mix(Color(`#FFFFFF`), valueFamilies[level])
            .rgb()
            .string()
        }
      }
    }, results)
  }, calculatedColors)
}

export const getAccessibleTextColor = (color: string) => {
  return Color(color).contrast(Color(immutableThemeColors.white)) >= 4.5
    ? immutableThemeColors.white
    : immutableThemeColors.black
}

export const findAccessibleContrast = ({
  backgroundColor,
  foregroundColorFamily,
  large,
  theme
}: ContrastColors) => {
  const bg = new Color(backgroundColor)

  for (const i of Object.keys(valueFamilies)) {
    //@ts-ignore
    const fg = new Color(theme[`${foregroundColorFamily}${i}`])
    const minContrast = large ? 3 : 4.5

    if (bg.contrast(fg) >= minContrast) {
      return fg.toString()
    }
  }
}
//@ts-ignore
function getColorFamily(thisColor, colors) {
  const localColors: { [key: string]: string } = {}

  return Object.keys(colors).reduce((results, colorName) => {
    if (colorName.indexOf(thisColor) > -1) {
      results[colorName.replace(thisColor, ``)] = colors[colorName]
    }

    return results
  }, localColors)
}
//@ts-ignore
function createColorFamilies(currentColors) {
  return mapObjIndexed(
    (color, colorName) => ({ name: colorName, family: getColorFamily(color, currentColors) }),
    currentColors
  )
}

export default {calculateColorSteps}
