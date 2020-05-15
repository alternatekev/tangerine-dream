import React, {FC} from 'react'
import {css, prepareStyles, t, useTheme, DerivedTheme} from '@alt/styles'

interface DividerProps {
  weighted?: boolean,
  weightless?: boolean,
  superWeighted?: boolean,
  topWeighted?: boolean,
  superTopWeighted?: boolean,
  miniWeighted?: boolean,
  miniTopWeighted?: boolean,
  level?: number
  primary?: boolean
  secondary?: boolean
}

export const Divider: FC<DividerProps> = props => {
  const colors: DerivedTheme = useTheme()
  const styles = prepareStyles({
    Divider: {
      ...t.mb1,
      height: 2,
      ...t.bw0,
      borderTop: `1px solid`
    },
    level0: {
      borderColor: colors.grey500_50
    },
    level1: {
      borderColor: colors.grey25
    },
    level2: {
      borderColor: colors.grey50
    },
    level3: {
      borderColor: colors.grey100
    },
    level4: {
      borderColor: colors.grey200
    },
    level5: {
      borderColor: colors.grey300
    },
    level6: {
      borderColor: colors.grey400
    },
    primary: {
      borderColor: colors.primary200
    },
    secondary: {
      borderColor: colors.secondary200
    },
    isWeighted: {
      ...t.mb4
    },
    isTopWeighted: {
      ...t.mt4
    },
    isSuperWeighted: {
      ...t.mb6
    },
    isSuperTopWeighted: {
      ...t.mt6
    },
    isMiniWeighted: {
      ...t.mb3
    },
    isMiniTopWeighted: {
      ...t.mt2
    },
    isWeightless: {
      ...t.ma0
    },
  })

  return (
    <hr css={css(
      styles.Divider,
      styles[`level${props.level}`],
      props.topWeighted && styles.isTopWeighted,
      props.weighted && styles.isWeighted,
      props.superWeighted && styles.isSuperWeighted,
      props.superTopWeighted && styles.isSuperTopWeighted,
      props.miniWeighted && styles.isMiniWeighted,
      props.miniTopWeighted && styles.isMiniTopWeighted,
      props.weightless && styles.isWeightless,
      props.primary && styles.isPrimary,
      props.secondary && styles.isSecondary,
    )} />
  )
}
