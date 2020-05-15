import React, {SFC, ReactNode} from 'react'

import {css, prepareStyles, inverseTachyonsUnit, t, ExtraStyles, useTheme, DerivedTheme} from '@alt/styles'

export enum AspectRatio {
  Three = '3:1',
  Two = '2:1',
  OnePointFive = '1.5:1',
  One = '1:1',
  TwoPointFour = '2.4:1',
  SixteenByNine = '16:9',
}

export enum AspectRatioNum {
  Three = 3,
  Two = 2,
  OnePointFive = 1.5,
  One = 1,
  TwoPointFour = 2.4,
  SixteenByNine = 1.7777777778,
}

export interface Props {
  borderless?: boolean,
  children?: ReactNode,
  extraStyles?: ExtraStyles,
  color?: string,
  fullBleed?: boolean,
  weightless?: boolean,
  inflated?: boolean
  compact?: boolean,
  fitImage?: boolean,
  img?: string,
  size?: number | 'auto',
  weighted?: boolean,
  aspectRatio?: AspectRatio
}

export type CardHeaderProps = Props

const CardHeader: SFC<CardHeaderProps> = (props) => { //tslint:disable-line cyclomatic-complexity

  let height = props.size || 100
  let paddingTop

  if (props.aspectRatio) {
    if (props.aspectRatio === AspectRatio.Three) {
      paddingTop = '33%'
    }
    if (props.aspectRatio === AspectRatio.Two) {
      paddingTop = '50%'
    }
    if (props.aspectRatio === AspectRatio.OnePointFive) {
      paddingTop = '75%'
    }
    if (props.aspectRatio === AspectRatio.One) {
      paddingTop = '100%'
    }
    if (props.aspectRatio === AspectRatio.TwoPointFour) {
      paddingTop = '42%'
    }
    if (props.aspectRatio === AspectRatio.SixteenByNine) {
      paddingTop = '56.25%'
    }
    height = 0
  }

  const colors: DerivedTheme = useTheme()

  const styles = prepareStyles({
    CardHeader: {
      ...t.pa3,
      ...t.tc,
      ...t.flex,
      ...t.justify_center,
      ...t.items_baseline,
      ...t.mb1,
      transition: 'all 100ms ease-in-out',
      borderBottomWidth: 1,
      borderBottomColor: colors.grey10,
      borderBottomStyle: `solid`,
      color: colors.grey200,
      backgroundSize: `cover`,
      backgroundPosition: `center center`,
      backgroundRepeat: 'no-repeat',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      minHeight: height || 0,
      height: height,
      paddingTop: paddingTop,
      backgroundImage: props.img && `url(${props.img})`,
      backgroundColor: props.color,
    },
    fitsImage: {
      backgroundSize: 'auto 80%'
    },
    isInflated: {
      ...inverseTachyonsUnit(t.mt5),
      ...inverseTachyonsUnit(t.ml5),
      ...inverseTachyonsUnit(t.mr5),      
    },
    isCompact: {
      ...t.pb2,
      ...inverseTachyonsUnit(t.mt2),
      ...inverseTachyonsUnit(t.ml2),
      ...inverseTachyonsUnit(t.mr2),
      minHeight: height || 0
    },
    isBorderless: {
      borderBottom: 0
    },
    isWeighted: {
      ...t.mb4
    },
    isWeightless: {
      ...t.mb0
    },
    isFullBleed: {
      ...t.pl0,
      ...t.pr0,
      ...t.mb0,
      ...inverseTachyonsUnit(t.mt4),
      ...inverseTachyonsUnit(t.ml4),
      ...inverseTachyonsUnit(t.mr4),
    },
    isCompactFullBleed: {
      ...inverseTachyonsUnit(t.mt2),
      ...inverseTachyonsUnit(t.ml2),
      ...inverseTachyonsUnit(t.mr2),
    },
    isSquare: {
      ...t.mt0,
      ...t.ml0,
      ...t.mr0,
      ...t.br0
    },
    removeTopPadding: {
      ...t.pt0,
      ...t.pb0
    }
  })

  const {
    borderless,
    weighted,
    compact,
    fitImage,
    fullBleed,
    aspectRatio,
    inflated,
    extraStyles,
    weightless
  } = props

  const extraStyless = css(
    styles.CardHeader,
    borderless && styles.isBorderless,
    weighted && styles.isWeighted,
    compact && styles.isCompact,
    fitImage && styles.fitsImage,
    fullBleed && styles.isFullBleed,
    fullBleed && compact && styles.isCompactFullBleed,
    aspectRatio && fullBleed && borderless && styles.isSquare,
    !aspectRatio && fullBleed && styles.removeTopPadding,
    weightless && styles.isWeightless,
    inflated && styles.isInflated,
    extraStyles
  )

  return (
    <div data-test-id="CardHeader" css={extraStyless}>
      {props.children}
    </div>
  )
}

export default CardHeader
