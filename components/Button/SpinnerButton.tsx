import React, {FC} from 'react'

import {Button, ButtonProps} from './'
import {LoadingIndicator} from '@alt/components'
import {prepareStyles} from '@alt/styles'

const styles = prepareStyles({
  ButtonSpinner: {
    lineHeight: 0.5
  },
  CompactButtonSpinner: {
    lineHeight: 1
  }
})

export interface SpinnerButtonProps extends ButtonProps {
  spinning?: boolean
}

export const SpinnerButton: FC<SpinnerButtonProps> = ({
  spinning, 
  children,
  ...rest
}: SpinnerButtonProps) =>
  <Button 
    {...rest} 
    disabled={spinning}
  >
    {spinning 
      ? <LoadingIndicator 
          extraStyles={rest.compact ? styles.CompactButtonSpinner : styles.ButtonSpinner} 
          size={rest.compact ? 15 : 20}
        /> 
      : children
    }
  </Button>


