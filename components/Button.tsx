/** @jsx jsx */
import {FC, Dispatch, SetStateAction, useState} from 'react'
import {jsx} from '@emotion/core'
import Link from 'next/link'
import Popover, {Position} from 'react-tiny-popover'
import {clamp} from 'ramda'

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
  Placement,
  UIFont,
} from '@td/types'
import {
  ConditionalWrap,
  Card,
  P
} from '@td/components'

interface Props extends BlockProps, Omit<UIButton, 'text' | 'level'> {
  href?: string
  hoverLabel?: Placement
  icon?: Renderable
  draggable?: boolean
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
    size = 1,
    font,
    draggable,
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
    colors.button975,
    'transparent'
  ]
  const backgroundColor = [
    'transparent',
    'transparent',
    colors.button500_10,
    colors.button100,
    colors.button200,
    colors.button500,
    colors.button900,
    colors.button950,
    'transparent',
    'transparent',
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

  if (ui.mode === UIMode.Light) {
    backgroundColor.reverse()
    borderColor.reverse()
    textColor.reverse()
  }
  const globalWeight = ui.typography.nav.weight || 300
  const fontWeight = font && font.weight ? font.weight / 100 : globalWeight / 100

  const display = inline ? t.dib : t.db
  const brColor = inverted 
    ? colors.white500
    : borderColor[level]
  const iconMargin = compact ? t.mr1 : t.mr2
  const cursor = draggable ? {cursor: 'grab'} : {cursor: 'pointer'}

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
      ...cursor,
      zIndex: 10000,
      color: inverted ? brColor : level === 0 ? colors.link500 : brColor,
      fontFamily: ui.typography.nav.font,
      fontSize: size ? `${size}rem` : t.f2.fontSize,
      backgroundColor: backgroundColor[level],
      border: `${borderWidths[borderWidth]}px solid ${level === 0 ? 'transparent' : brColor}`,
      ':hover': {
        ...cursor,
        backgroundColor: backgroundColor[clamp(0, 6)(level + 1)],
        border: `${borderWidths[borderWidth]}px solid ${level === 0 ? 'transparent' : brColor}`,

      }
    },
    ButtonLabel: {
      ...t.relative,
      ...cursor,
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

const wrapWithPopover = (isOpen: boolean, position: Placement, hoverLabel?: Renderable, font?: UIFont) => (children: Renderable) =>
  <Popover 
    isOpen={isOpen}
    padding={20}
    position={[position as Position]}
    content={
      <Card
        level={7}
        fontTheme={{inverted: true}}
      >
        <P 
          compact 
          fontTheme={{inverted: true, size: 1.25}}
          font={{
            ...font,
            weight: 300
          }}
          weighted={0} 
          topWeighted={0}
        >
          {hoverLabel}
        </P>
      </Card>
    }
  >
    {ref => (
      <div ref={ref}>
        {children}
      </div>
    )}
  </Popover>

const handleMouseOver = (setOpen: Dispatch<SetStateAction<boolean>>, isOpen: boolean) => (_: Dispatch<SetStateAction<boolean>>) => {
  setOpen(!isOpen)
}

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
  const [open, setOpen] = useState(false)

  return(
    <ConditionalWrap
      condition={!!hoverLabel}
      wrap={wrapWithPopover(open, hoverLabel || Placement.Top, children, theme.ui.typography.nav)}
    >
      <ConditionalWrap 
        condition={!!href} 
        wrap={wrapWithLink(href)}
      >
        {jsx(buttonTag, {
          css: css(
            styles.Button, 
            unicorn
          ),
          onClick: onClick,
          onMouseEnter: handleMouseOver(setOpen, open),
          onMouseLeave: handleMouseOver(setOpen, open)
        }, 
          <label 
            css={css(styles.ButtonLabel, icon && styles.hasIcon)}
          >
            {icon}
            {!hoverLabel && children}
          </label>)
        }
      </ConditionalWrap>
    </ConditionalWrap>
  )
}
