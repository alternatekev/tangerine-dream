import {FC} from 'react'

import {prepareStyles, t, css} from '@td/styles'

const styles = prepareStyles({
  Capitalized: {
    ...t.ttc
  }
})

export const Capitalize: FC = (props) => <span css={css(styles.Capitalized)}>{props.children}</span>
