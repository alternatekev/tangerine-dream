/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/core'

import { useTheme, t, css, prepareStyles, ThemeState, UIMode, UIButton, transition} from '@td/styles'
import { BlockProps, Alignment } from '@td/types'

interface Props extends BlockProps {
  tag?: 'button' | 'a'
}

export interface ButtonProps extends Props { }

const getStyles = (props: Omit<Props, 'tag' | 'children'> & Omit<UIButton, 'text'>, theme: ThemeState) => {
  const {
    compact,
    inverted,
    inline,
    level = 1,
    size,
    borderWidth = 1,
    alignment = Alignment.Center,
    fullBleed,
    weighted = 0,
    topWeighted = 0,
  } = props

  const align = alignment === Alignment.Center
    ? t.tc
    : alignment === Alignment.Right
      ? t.tr
      : t.tl

  const {
    colors,
    ui
  } = theme

  const paddingLevel = compact ? 1 : fullBleed ? 0 : 2
  const borderWidths = [
    0,
    1,
    2,
    3,
    5,
    8,
    13,
    21
  ]
  const borderColor = [
    'transparent',
    colors.button500,
    colors.button600,
    colors.button700,
    colors.button800,
    colors.button900,
    colors.button950,
    colors.button975
  ]
  const backgroundColor = [
    'transparent',
    'transparent',
    colors.button500_10,
    colors.button100,
    colors.button200,
    colors.button500,
    colors.button900,
    colors.button950
  ]
  const textColor = [
    colors.link500,
    colors.button500,
    colors.button500,
    colors.button500,
    colors.button500,
    colors.button500,
    colors.button500,
    colors.button500,
  ]
  const invertedBackgroundColor = [
    'transparent',
    'transparent',
    colors.white500_10,
    colors.white500,
    colors.white500,
    colors.white500,
    colors.white500,
    colors.white500,
    colors.white500,
  ]

  if (ui.mode === UIMode.Dark) {
    backgroundColor.reverse()
    borderColor.reverse()
    textColor.reverse()
  }

  const display = inline ? t.dib : t.db
  const brColor = inverted 
    ? ui.mode === UIMode.Light
      ? colors.white500
      : colors.black500
    : borderColor[level]

  return prepareStyles({
    Button: {
      ...display,
      ...t.border_box,
      ...align,
      ...transition,
      ...t[`pl${paddingLevel + 3}`],
      ...t[`pr${paddingLevel + 3}`],
      ...t[`pt${paddingLevel}`],
      ...t[`pb${paddingLevel}`],
      ...t[`mb${weighted}`],
      ...t[`mb${topWeighted}`],
      ...t[`br${ui.button.borderRadius}`],
      ...t.pointer,
      color: level === 0 ? colors.link500 : brColor,
      fontFamily: ui.typography.nav.font,
      fontWeight: ui.typography.nav.weight,
      fontSize: size ? `${size}rem` : t.f2.fontSize,
      backgroundColor: backgroundColor[level],
      border: `${borderWidths[borderWidth]}px solid ${level === 0 ? 'transparent' : brColor}`,
      ':hover': {
        ...t.pointer,
        backgroundColor: inverted ? invertedBackgroundColor[level + 1] : backgroundColor[level + 1],
        border: `${borderWidths[borderWidth]}px solid ${level === 0 ? 'transparent' : brColor}`,

      }
    },
    ButtonLabel: {
      ...t.relative,
      top: -2,
      ...t.pointer
    }
  })
}

export const Button: FC<Props> = ({
  tag,
  children,
  ...rest
}: Props) => {

  const theme: ThemeState = useTheme()
  const styles = getStyles(rest, theme)

  return jsx(tag || 'button', {
    css: css(styles.Button)
  }, <label css={css(styles.ButtonLabel)}>{children}</label>)
}
