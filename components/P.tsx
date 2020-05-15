import React, {FC, ReactChild, ComponentClass, ReactElement} from 'react'
import {css, prepareStyles, t, ExtraStyles, useTheme, CustomColor, DerivedTheme} from '@alt/styles'

interface ParagraphProps {
  alignCenter?: boolean
  alignRight?: boolean
  color?: CustomColor
  children?: ReactChild | ReactChild[] | ReactElement<any> | ReactElement<any>[] // tslint:disable-line no-any
  compact?: boolean
  extraStyles?: ExtraStyles
  fullBleed?: boolean
  large?: boolean
  preformatted?: boolean
  code?: boolean
  primary?: boolean
  secondary?: boolean
  superCompact?: boolean
  inverted?: boolean
  superWeighted?: boolean
  weightless?: boolean
  'data-test-id'?: string | number
}

export const P: FC<ParagraphProps> = (props: ParagraphProps) => {
  const theme: DerivedTheme = useTheme()

  const styles = prepareStyles({
    Paragraph: {
      color: props.primary ? theme.primary500 : props.secondary ? theme.secondary500 : props.inverted ? theme.white500 : props.color ? props.color : theme.black500,
      ...t.lh_copy,
      ...t.f3,
      ...t.mt2,
      ...t.mb3,
      ...t.fw3,
      ...t.tl,
      ...t.f_body
    },
    isCode: {
      ...t.code
    },
    isFullBleed: {
      ...t.mb0,
      ...t.mt0
    },
    isCompact: {
      ...t.f4
    },
    isSuperCompact: {
      ...t.f5
    },
    isAlignedRight: {
      ...t.tr
    },
    isAlignedCenter: {
      ...t.tc
    },
    isLarge: {
      ...t.f2,
      ...t.mt3,
      ...t.mb4,
      ...t.lh_title
    },
    isSuperWeighted: {
      ...t.mb4
    },
    isLargeSuperWeighted: {
      ...t.mb4,
      ...t.mt4
    },
    isLargefullBleed: {
      ...t.mt0,
      ...t.mb0
    },
    isWeightless: {
      ...t.mb0
    },
    isPreformatted: {
      ...t.pre,
      whiteSpace: 'pre-wrap'
    }
  })

  const {
    alignCenter,
    alignRight,
    children,
    compact,
    extraStyles,
    fullBleed,
    large,
    preformatted,
    superCompact,
    code,
    superWeighted,
    weightless,
  } = props

  const Tag = (preformatted || code) 
  ? `pre` as unknown as ComponentClass<JSX.IntrinsicElements['pre']>
  : `p` as unknown as ComponentClass<JSX.IntrinsicElements['pre']>

  return (
    <Tag
      data-test-id={props['data-test-id']}
      css={css(
        styles.Paragraph,
        large && styles.isLarge,
        compact && styles.isCompact,
        superCompact && styles.isSuperCompact,
        large && superWeighted && styles.isLargeSuperWeighted,
        fullBleed && styles.isFullBleed,
        superWeighted && styles.isSuperWeighted,
        large && fullBleed && styles.isLargefullBleed,
        alignRight && styles.isAlignedRight,
        alignCenter && styles.isAlignedCenter,
        weightless && styles.isWeightless,
        preformatted && styles.isPreformatted,
        extraStyles
      )}
    >
      {children}
    </Tag>
  )
}

export const LargeP: FC<Omit<ParagraphProps, 'theme'>> = (props: Omit<ParagraphProps, 'theme'>) => <P large {...props} />
