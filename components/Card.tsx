/** @jsx jsx */
import {FC} from 'react'
import {jsx} from '@emotion/core'

import {useTheme, t, css, prepareStyles, ThemeState, UIMode} from '@td/styles'
import {BlockProps, Alignment} from '@td/types'

interface Props extends BlockProps {
  tag?: 'div' | 'article' | 'section'
}

export interface CardProps extends Props {}

const getStyles = (props: Omit<Props, 'tag' | 'children'>, theme: ThemeState) => {
  const {
    compact,
    level = 1,
    alignment = Alignment.Left,
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
  const borderWidth = [
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13
  ]
  const borderColor = [
    'transparent',
    colors.grey1,
    colors.grey100,
    colors.grey200,
    colors.grey500,
    colors.grey900,
    colors.grey950,
    colors.grey975
  ]
  const backgroundColor = [
    'transparent',
    colors.white500_50,
    colors.white500,
    colors.grey1,
    colors.grey10,
    colors.grey50,
    colors.grey200,
    colors.grey500
  ]

  if(ui.mode === UIMode.Dark) {
    backgroundColor.reverse()
    borderColor.reverse()
  }

  return prepareStyles({
    Card: {
      ...t.border_box,
      ...align,
      ...t[`pa${paddingLevel}`],
      ...t[`mb${weighted}`],
      ...t[`mb${topWeighted}`],
      ...t[`br${ui.card.borderRadius}`],
      backgroundColor: backgroundColor[level],
      border: `${borderWidth[level]}px solid ${borderColor[level]}`
    }
  })
}

export const Card: FC<Props> = ({
  tag,
  children,
  ...rest
}: Props) => {

  const theme: ThemeState = useTheme()
  const styles = getStyles(rest, theme)

  return jsx(tag || 'div', {
    css: css(styles.Card)
  }, children)
}
