/** @jsx jsx */
import {FC} from 'react'
import {jsx} from '@emotion/core'
import {useSSR} from 'use-ssr'
import SlideDown from 'react-slidedown'

import { ConditionalWrap } from '@td/components'


import {
  useTheme, 
  t, 
  css, 
  prepareStyles, 
  ThemeState, 
  UIMode, 
  UIWeighting,
  transition
} from '@td/styles'
import {
  BlockProps, 
  Renderable,
  Alignment,
} from '@td/types'

interface Props extends BlockProps {
  tag?: 'div' | 'article' | 'section'
  borderless?: boolean
  draggable?: boolean
  onClick?(e: MouseEvent | TouchEvent): void
}

export interface CardProps extends Props {}

const getStyles = (
  props: Omit<Props, 'tag' | 'children'>, 
  theme: ThemeState,
  weight: UIWeighting,
  isBrowser: boolean,
  mounted: boolean
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
    borderless
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
    colors.black700,
    colors.black500_50,
    'transparent',
  ]

  if (ui.mode === UIMode.Light) {
    backgroundColor.reverse()
    borderColor.reverse()
  }

  const borderRadius = borderless ? undefined : t[`br${ui.card.borderRadius}`]
  // const opacity = isBrowser && fadeIn ? 1 : 1

  return prepareStyles({
    Card: {
      ...t.border_box,
      ...align,
      ...t[`pa${paddingLevel}`],
      ...t[`mb${weighted}`],
      ...t[`mb${topWeighted}`],
      ...borderRadius,
      ...t[`mt${weight?.topWeighted}`],
      ...t[`mb${weight?.weighted}`],
      ...transition,
      backgroundColor: backgroundColor[level],
      border: !borderless 
        ? `${borderWidth[level]}px solid ${borderColor[level]}` 
        : undefined,
      width,
      height,
    }
  })
}

const wrapWithSlideDown = (isBrowser: boolean) => (children: Renderable) => 
  <SlideDown className="fade-in">
    {isBrowser ? children : null}
  </SlideDown>

export const Card: FC<Props> = ({
  tag,
  children,
  topWeighted,
  outerRef,
  innerRef,
  fadeIn,
  weighted,
  draggable,
  onClick,
  unicorn,
  ...rest
}: Props) => {

  const theme: ThemeState = useTheme()
  const { isBrowser } = useSSR()
  const styles = getStyles({...rest, fadeIn}, theme, {topWeighted, weighted}, isBrowser, false)
  const cardComponent = jsx(tag || 'div', {
    css: [css(styles.Card, unicorn)],
    ref: innerRef || outerRef,
    onClick: onClick
  }, children)

  return (
    <ConditionalWrap condition={!!fadeIn} wrap={wrapWithSlideDown(isBrowser)}>
      {cardComponent}
    </ConditionalWrap>
  )
}
