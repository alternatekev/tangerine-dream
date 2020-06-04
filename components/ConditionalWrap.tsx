import React, {Fragment, ReactNode} from 'react'

interface WrapProps {
  condition: boolean,
  wrap(children: ReactNode): ReactNode
}

export const ConditionalWrap: React.SFC<WrapProps> = ({condition, wrap, children}) => (
  <Fragment>
    {condition ? wrap(children) : children}
  </Fragment>
)

export default ConditionalWrap
