import {Children, FC} from 'react'
import {useTheme} from 'emotion-theming'

import {
  BlockProps,
  Orientation,
  ThemeState,
  Level
} from '@td/types'
import {
  prepareStyles,
  t,
  css
} from '@td/styles'

interface Props extends BlockProps {
  orientation?: Orientation
  responsive?: boolean
  itemSpacing?: Level
  dividers?: number[]
}

export interface MenuProps extends Props {}

const getStyles = (props: Props, theme: ThemeState) => {
  const {
    orientation = Orientation.Vertical, 
    weighted = 0, 
    topWeighted,
    itemSpacing = 0,
    compact
  } = props
  const margin = orientation === Orientation.Horizontal 
    ? compact
      ? t.mr0
      : t.mr1
    : t.mr0
  const display = orientation === Orientation.Horizontal
    ? t.dib
    : t.db
  const divider = orientation === Orientation.Horizontal ? {borderRight: `1px ${theme.colors.grey500} solid`} : {borderBottom: `1px ${theme.colors.grey500} solid`}
  const modifier = orientation === Orientation.Horizontal ? {
    ...t[`pr${itemSpacing + 2}`],
    ...t[`mr${itemSpacing + 1}`]
  } : { 
    ...t[`pb${itemSpacing + 3}`],
    ...t[`mb${itemSpacing + 2}`],
    ...t.mr0,
    ...t.pr0
  }

  const spacing = orientation === Orientation.Horizontal ? {...t[`pr${itemSpacing}`], ...t[`pl${itemSpacing}`],} : {...t[`pt${itemSpacing}`], ...t[`pb${itemSpacing}`],}

  return prepareStyles({
    Menu: {
      ...t[`mb${weighted}`],
      ...t[`mt${topWeighted}`],
    },
    MenuItem: {
      ...margin,
      ...display,
      ...spacing,
    },
    hasDivider: {
      ...divider,
      ...modifier
    }
  }
)}

const hasDivider = (dividers: number[], i: number) => {
  return dividers.find(d => d === i)
}

export const Menu: FC<Props> = ({
  children,
  dividers,
  ...rest
}: Props) => {
  const theme: ThemeState = useTheme()
  const styles = getStyles(rest, theme)

  return (
    <ul css={css(styles.Menu)}>
      {Children.map(children, (c, i) => 
        <li css={css(styles.MenuItem, dividers && hasDivider(dividers, i) && styles.hasDivider)}>
          {c}
        </li>
      )}
    </ul>
  )
}
