import React, {SFC, ReactNode} from 'react'

import {css, prepareStyles, inverseTachyonsUnit, t, ExtraStyles, useTheme, DerivedTheme} from '@alt/styles'

export interface Props {
  alignCenter?: boolean,
  borderless?: boolean,
  children?: ReactNode,
  actionable?: boolean
  compact?: boolean,
  stacked?: boolean,
  superCompact?: boolean,
  customBackgroundColor?: string,
  level?: number,
  inflated?: boolean,
  narrow?: boolean,
  extraStyles?: ExtraStyles,
  fullBleed?: boolean
}

export type CardFooterProps = Props

const CardFooter: SFC<CardFooterProps> = (props) => {
  const colors: DerivedTheme = useTheme()
  const styles = prepareStyles({
    CardFooter: {
      ...t.mt4,
      ...t.pa4,
      ...inverseTachyonsUnit(t.mb4),
      ...inverseTachyonsUnit(t.ml4),
      ...inverseTachyonsUnit(t.mr4),
      borderTopWidth: 1,
      borderTopColor: colors.grey25,
      borderTopStyle: `solid`,
      ...t.br3,
      ...t.br__bottom,
      ...t.relative,
      pointerEvents: 'auto',
    },
    hasCustomBackgroundColor: {
      backgroundColor: props.customBackgroundColor
    },
    isAlignedCenter: {
      ...t.items_center,
      ...t.justify_center,
      ...t.flex
    },
    isActionable: {
      ...t.flex,
      ...t.justify_between
    },
    isBorderless: {
      borderTop: 0,
      ...t.pt0
    },
    isFullBleed: {
      ...t.pa0
    },
    isCompact: {
      ...t.ma0,
      ...inverseTachyonsUnit(t.ml2),
      ...inverseTachyonsUnit(t.mr2),
      ...t.pa2,
      ...t.pb0,
      borderBottomWidth: 0,
      ':first-of-type': {
        ...t.br3,
        ...t.br__top
      },
      ':last-of-type': {
        borderBottomWidth: 1,
        ...t.br3,
        ...t.br__bottom
      }
    },
    isStacked: {
      ...t.pb2,
    },
    isInflated: {
      ...t.pt5,
      ...inverseTachyonsUnit(t.ml4),
      ...inverseTachyonsUnit(t.mr4),
    },
    isSuperCompact: {
      ...t.ma0,
      ...t.pa0,
      ...t.pt1
    },
    level_0: {
      backgroundColor: 'transparent',
      borderColor: colors.grey10
    },
    level_1: {
      backgroundColor: colors.grey25
    },
    level_3: {
      borderColor: colors.primary25
    },
    isNarrow: {
      marginLeft: -50,
      marginRight: -50,
      ...t.pr6,
      ...t.pl6
    }
  })

  const extraStyless = css(
    styles.CardFooter,
    styles[`level_${props.level}`],
    props.alignCenter && styles.isAlignedCenter,
    props.compact && styles.isCompact,
    props.superCompact && styles.isSuperCompact,
    props.borderless && styles.isBorderless,
    props.narrow && styles.isNarrow,
    props.customBackgroundColor && styles.hasCustomBackgroundColor,
    props.inflated && styles.isInflated,
    props.stacked && styles.isStacked,
    props.fullBleed && styles.isFullBleed,
    props.actionable && styles.isActionable,
    props.extraStyles
  )

  return (
    <div css={extraStyless}>
      {props.children}
    </div>
  )
}

CardFooter.defaultProps = {
  level: 0
}

export default CardFooter
