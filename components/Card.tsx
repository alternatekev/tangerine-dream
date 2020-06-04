/** @jsx jsx */
import {FC} from 'react'
import {jsx} from '@emotion/core'

import {useTheme, t, css, prepareStyles, ThemeState, UIMode, UIWeighting} from '@td/styles'
import {BlockProps, Alignment} from '@td/types'

interface Props extends BlockProps {
  tag?: 'div' | 'article' | 'section'
}

export interface CardProps extends Props {}

const getStyles = (
  props: Omit<Props, 'tag' | 'children'>, 
  theme: ThemeState,
  weight: UIWeighting
) => {
  const {
    compact,
    width,
    level = 1,
    alignment = Alignment.Left,
    fullBleed,
    weighted = 0,
    height,
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
    2,
    3,
    3,
    3
  ]
  const borderColor = [
    'transparent',
    colors.grey1,
    colors.grey100,
    colors.grey200,
    colors.grey500,
    colors.grey900,
    colors.grey950,
    colors.grey975,
    'transparent',
  ]
  const backgroundColor = [
    'transparent',
    colors.white500_50,
    colors.white500,
    colors.grey1,
    colors.grey10,
    colors.black50,
    colors.black200,
    colors.black500,
    'transparent',
  ]

  if (ui.mode === UIMode.Dark) {
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
      ...t[`mt${weight?.topWeighted}`],
      ...t[`mb${weight?.weighted}`],
      backgroundColor: backgroundColor[level],
      border: `${borderWidth[level]}px solid ${borderColor[level]}`,
      width,
      height
    }
  })
}

export const Card: FC<Props> = ({
  tag,
  children,
  topWeighted,
  weighted,
  unicorn,
  ...rest
}: Props) => {

  const theme: ThemeState = useTheme()
  const styles = getStyles(rest, theme, {topWeighted, weighted})

  return jsx(tag || 'div', {
    css: css(styles.Card, unicorn)
  }, children)
}
