import React, {SFC, ReactNode} from 'react'

import {css, prepareStyles, t} from '@alt/styles'

export interface ScrollableCardContentProps {
  children: ReactNode,
}

const ScrollableCardContent: SFC<ScrollableCardContentProps> = (props) => {
  const styles = prepareStyles({
    ScrollableCardContent: {
      ...t.overflow_auto
    }
  })

  return (
    <div css={css(styles.ScrollableCardContent)}>
      {props.children}
    </div>
  )
}

export default ScrollableCardContent
