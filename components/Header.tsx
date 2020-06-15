/** @jsx jsx */
import {FC} from 'react'
import {jsx} from '@emotion/core'

import {BlockProps, ThemeState, UIMode} from '@td/types'
import {css, prepareStyles, t, useTheme} from '@td/styles'

interface Props extends BlockProps {

}

const getStyles = (theme: ThemeState) => {
  const {colors} = theme

  return prepareStyles({
    Header: {
      color: theme.ui.mode === UIMode.Dark ? colors.primary100 : colors.primary900,
      ...t.pb2,
      borderBottom: `1px ${colors.secondary500} solid`,
      ...t.mb2,
      fontFamily: theme.ui.typography.header.font,
      fontWeight: theme.ui.typography.header.weight
    },
    h1: {
      ...t.f_subheadline
    },
    h2: {
      ...t.f2
    },
    h3: {
      ...t.f1
    },
    h4: {
      ...t.f2
    },
    h5: {
      ...t.f3
    },
    h6: {
      ...t.f4
    },
  })
}

export const Header: FC<Props> = ({
  level = 1,
  children
}: Props) => {
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme)

  return jsx(`h${level}`,
    {
      css: css(styles.Header, styles[`h${level}`])
    }, children)

}
