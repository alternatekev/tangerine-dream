import {Children, FC} from 'react'

import {
  BlockProps,
  Orientation
} from '@td/types'
import {
  prepareStyles,
  t,
  css
} from '@td/styles'

interface Props extends BlockProps {
  orientation?: Orientation
  responsive?: boolean
}

export interface MenuProps extends Props {}

const getStyles = (props: Props) => {
  const {
    orientation = Orientation.Vertical, 
    weighted = 0, 
    topWeighted,
    compact
  } = props
  const margin = orientation === Orientation.Horizontal 
    ? compact
      ? t.mr2
      : t.mr3
    : t.mr0
  const display = orientation === Orientation.Horizontal
    ? t.dib
    : t.db

  return prepareStyles({
    Menu: {
      ...t[`mb${weighted}`],
      ...t[`mt${topWeighted}`],
    },
    MenuItem: {
      ...margin,
      ...display
    }
  }
)}

export const Menu: FC<Props> = ({
  children,
  ...rest
}: Props) => {
  const styles = getStyles(rest)

  return (
    <ul css={css(styles.Menu)}>
      {Children.map(children, c => 
        <li css={css(styles.MenuItem)}>
          {c}
        </li>
      )}
    </ul>
  )
}