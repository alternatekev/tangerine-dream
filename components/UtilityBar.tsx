
import React, {Component, ReactNode, Fragment} from 'react'
import {prepareStyles, css, t, ExtraStyles} from '@alt/styles'

export const styles = prepareStyles({
  UtilityBar: {
    ...t.tr,
    ...t.flex,
    ...t.justify_end,
    ...t.w_100,
    flex: 100,
    ...t.w_100,
    ...t.content_end,
    ...t.items_center,
    maxHeight: 50
  },
  isAlignedCenter: {
    ...t.tc,
    ...t.justify_center
  },
  isAlignedLeft: {
    ...t.tl,
    ...t.justify_start
  },
  isWeighted: {
    ...t.mb2
  },
  isFirstAlignedLeft: {
    ...t.ml0
  },
  isFirstAlignedRight: {
    ...t.ml2,
    ...t.justify_end
  },
  isFirstAlignedBlock: {
    ...t.ml0
  },
  isMiddle: {
    ...t.ml2
  },
  isLast: {
    ...t.ml2
  },
  hasNoAlignment: {
    ...t.items_start
  }
})

interface Props {
  compact?: boolean,
  children?: ReactNode,
  alignCenter?: boolean,
  weighted?: boolean,
  alignLeft?: boolean,
  block?: boolean,
  extraStyles?: ExtraStyles
  noAlignment?: boolean
}

export class UtilityBar extends Component<Props> {
  renderChildrenWithClassNames = () => {
    if (
      Array.isArray(this.props.children) &&
      this.props.children.length > 1 &&
      !this.props.compact
    ) {
      const childSize = this.props.children.length

      return this.props.children.map((child: ReactNode, index) => {
        let extraStyles = index === childSize - 1 ? [styles.isLast] :[styles.isMiddle]
        if (index === 0 && this.props.alignLeft) {
          extraStyles = [styles.isFirstAlignedLeft]
        }
        if (index === 0 && !this.props.alignLeft && !this.props.alignCenter && !this.props.block) {
          extraStyles = [styles.isFirstAlignedRight]
        }
        if (index === 0 && this.props.block) {
          extraStyles = [styles.isFirstAlignedBlock]
        }

        return React.cloneElement(
          // ReactNode can't just be ported over to ReactElement in TS has to be checked first
          React.isValidElement(child) ? child : (<Fragment />),
          {key: index, block: this.props.block, alignCenter: this.props.block, extraStyles: extraStyles}
        )
      })
    } else {
      return this.props.children
    }
  }
  render () {
    const realChildrenLength = React.Children.toArray(this.props.children).length
    const {
      alignCenter,
      weighted,
      alignLeft,
      noAlignment,
      extraStyles,
      children,
    } = this.props

    if ( realChildrenLength > 1 ) {

      return (
        <div css={css(
          styles.UtilityBar,
          alignCenter && styles.isAlignedCenter,
          weighted && styles.isWeighted,
          alignLeft && styles.isAlignedLeft,
          noAlignment && styles.hasNoAlignment,
          extraStyles
        )}>
          {children && this.renderChildrenWithClassNames()}
        </div>
      )
    } else if (realChildrenLength === 1) {

      return <>{children}</>
    } else {

      return null
    }
  }
}
