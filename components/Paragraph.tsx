import {FC} from 'react'

import {BlockProps, ThemeState, UIFont} from '@td/types'
import {prepareStyles, css, useTheme, UIBodyText, UIMode} from '@td/styles'

const getStyles = (theme: ThemeState, font?: UIFont, fontStyles?: Omit<UIBodyText, 'text'>) => {
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
      color: color
    }
  })
}

export const P: FC<BlockProps> = ({
  children,
  font,
  fontStyles,
}: BlockProps) => {
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme, font, fontStyles)

  return (
    <p css={css(styles.Paragrah)}>
      {children}
    </p>
  )
}
