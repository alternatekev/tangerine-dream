import {FC} from 'react'

import {BlockProps, ThemeState, UIFont, UIWeighting} from '@td/types'
import {prepareStyles, css, useTheme, UIBodyText, UIMode, t} from '@td/styles'

const getStyles = (
  theme: ThemeState, 
  font?: UIFont, 
  fontStyles?: Omit<UIBodyText, 'text'>,
  weight?: UIWeighting
) => {
  const {ui: {typography, mode}} = theme
  const white = theme.colors.white500
  const black = theme.colors.black500
  const color = mode === UIMode.Light 
    ? fontStyles?.inverted
      ? white
      : black
    : fontStyles?.inverted
      ? black
      : white

  return prepareStyles({
    Paragrah: {
      fontFamily: font?.font || typography.body.font,
      fontWeight: font?.weight || typography.body.weight,
      lineHeight: fontStyles?.lineHeight || `1rem`,
      fontSize: `${fontStyles?.size}rem`,
      color: color,
      ...t[`mt${weight?.topWeighted}`],
      ...t[`mb${weight?.weighted}`],
    }
  })
}

export const P: FC<BlockProps> = ({
  children,
  font,
  topWeighted,
  weighted = 4,
  fontStyles,
}: BlockProps) => {
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme, font, fontStyles, {topWeighted, weighted})

  return (
    <p css={css(styles.Paragrah)}>
      {children}
    </p>
  )
}
