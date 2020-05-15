import React, {SFC, ReactNode, RefObject} from 'react'
import {css, ExtraStyles} from '@alt/styles'

export interface CardElementProps {
  children: ReactNode,
  extraStyles?: ExtraStyles,
  'data-test-id'?: string | number,
  href?: string,
  ref?: RefObject<any> //tslint:disable-line no-any
  style?: object,
  onClick?(e?: React.SyntheticEvent): void,
  onMouseEnter?(e?: React.SyntheticEvent): void,
  onMouseLeave?(e?: React.SyntheticEvent): void,
}

const CardElement: SFC<CardElementProps> = (props) => (
  <div
    css={css(props.extraStyles)}
    data-test-id={props['data-test-id']}
    onClick={props.onClick}
    ref={props.ref}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
    role={props.href ? props.href : undefined}
    style={props.style}
  >
    {props.children}
  </div>
)

export default CardElement
