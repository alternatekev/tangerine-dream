import React, {SFC, ReactNode} from 'react'

import {css, prepareStyles, t} from '@alt/styles'

export interface CardTextProps {
  alignCenter: boolean,
  children: ReactNode,
}

const CardText: SFC<CardTextProps> = (props) => {
  const styles = prepareStyles({
    CardText: {
      ...t.mt4,
      ...t.mb4
    },
    isAlignedCenter: {
      ...t.tc
    }
  })

  const extraStyless = css(
    styles.CardText,
    props.alignCenter && styles.isAlignedCenter
  )

  return (
    <p css={extraStyless}>
      {props.children}
    </p>
  )
}

export default CardText
