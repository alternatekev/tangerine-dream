import React, {FC} from 'react'
import {prepareStyles, t, ExtraStyles} from '@alt/styles'

import {Button, ButtonProps} from './'

interface Props extends ButtonProps {
  first?: boolean
  middle?: boolean
  last?: boolean
  extraStyles?: ExtraStyles
}

const SegmentedButton: FC<Props> = (props: Props) => {
  const {
    extraStyles,
    first,
    middle,
    last,
    children
  } = props

  const styles = prepareStyles({
    isFirst: {
      ...t.br__left,
      borderRightWidth: 0
    },
    isMiddle: {
      ...t.br0,
      borderRightWidth: 0
    },
    isLast: {
      ...t.br__right
    }
  })

  return (
    <Button
      {...props}
      extraStyles={[
        extraStyles && extraStyles,
        first && styles.isFirst,
        middle && styles.isMiddle,
        last && styles.isLast
      ] as ExtraStyles}
      data-test-id={props['data-test-id']}
    >
      {children}
    </Button>
  )
}

export default SegmentedButton
