/** @jsx jsx */
import {FC} from 'react'
import {jsx} from '@emotion/core'
import Link from 'next/link'

import { 
  useTheme, 
  t, 
  css, 
  prepareStyles, 
  ThemeState, 
  UIMode, 
  UIButton, 
  transition
} from '@td/styles'
import { 
  BlockProps, 
  Alignment, 
  UIWeighting,
  Renderable,
} from '@td/types'
import {
  ConditionalWrap
} from '@td/components'

interface Props extends BlockProps, Omit<UIButton, 'text' | 'level'> {
  href?: string
  hoverLabel?: boolean
  icon?: Renderable
  onClick?(): void
}

export interface ButtonProps extends Props { }

const getStyles = (
  props: Omit<Props, 'tag' | 'children'>, 
  theme: ThemeState, 
  weight: UIWeighting
) => {
  const {
    compact,
    inverted,
    inline,
    level = 1,
    size,
    font,
    borderWidth = 1,
    alignment = Alignment.Center,
    fullBleed,
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

  const paddingLevel = fullBleed ? 0 : compact ? 1 : 2
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
  const globalWeight = ui.typography.nav.weight || 300
  const fontWeight = font && font.weight ? font.weight / 100 : globalWeight / 100

  const display = inline ? t.dib : t.db
  const brColor = inverted 
    ? ui.mode === UIMode.Light
      ? colors.white500
      : colors.black500
    : borderColor[level]
  const iconMargin = compact ? t.mr1 : t.mr2

  return prepareStyles({
    Button: {
      ...t[`pl${paddingLevel === 0 ? 0 : paddingLevel + 3}`],
      ...t[`pr${paddingLevel === 0 ? 0 : paddingLevel + 3}`],
      ...t[`pt${paddingLevel}`],
      ...t[`pb${paddingLevel}`],
      ...t[`mb${weight?.weighted}`],
      ...t[`br${ui.button.borderRadius}`],
      ...t[`mt${weight?.topWeighted}`],
      ...t[`fw${fontWeight}`],
      ...display,
      ...t.border_box,
      ...align,
      ...transition,
      ...t.pointer,
      zIndex: 10000,
      color: inverted ? brColor : level === 0 ? colors.link500 : brColor,
      fontFamily: ui.typography.nav.font,
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
      ...t.pointer,
      top: -1,
    },
    hasIcon: {
      ...t.flex,
      flex: '1 10',
      ...t.justify_start,
      ...t.items_center,
      '> svg': {
        ...t.relative,
        top: 2,
        ...iconMargin
      }
    }
  })
}

const wrapWithLink = (
  href?: string
  ) => (
    children: Renderable
    ) => (
      <Link 
        href={href || '#'}
      >
        {children}
      </Link>
    )

export const Button: FC<Props> = ({
  children,
  weighted,
  icon,
  topWeighted,
  hoverLabel,
  unicorn,
  href,
  onClick,
  ...rest
}: Props) => {

  const theme: ThemeState = useTheme()
  const styles = getStyles(rest, theme, {weighted, topWeighted})
  const buttonTag = href ? 'a' : 'button'

  return(
    <ConditionalWrap 
      condition={!!href} 
      wrap={wrapWithLink(href)}
    >
      {jsx(buttonTag, {
        css: css(
          styles.Button, 
          unicorn
        ),
        onClick: onClick
      }, 
        <label 
          css={css(styles.ButtonLabel, icon && styles.hasIcon)}
        >
          {icon}
          {!hoverLabel && children}
        </label>)
      }
    </ConditionalWrap>
  )
}
