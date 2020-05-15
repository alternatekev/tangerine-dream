import React, {FC} from 'react'
import MediaQuery from 'react-responsive'

import {Renderable} from '@alt/types'

interface BreakpointProp {
  minWidth?: number
  maxWidth?: number
}

interface MQMProps {
  breakpoints: BreakpointProp
  children: Renderable
}

export const MediaQueryRenderer: FC<MQMProps> = ({children, breakpoints}: MQMProps) => process.env.NODE_ENV === 'test' ?
  <>{children}</> : <MediaQuery
  {...breakpoints} values={undefined}
>{children}</MediaQuery>
