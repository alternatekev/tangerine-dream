import React, {Component, ReactNode, ReactElement, RefObject} from 'react'
import CheckIcon from 'mdi-react/CheckIcon'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import {either, isNil, isEmpty, reject} from 'ramda'

import {prepareStyles, t, css, ExtraStyles} from '@alt/styles'
import {UtilityBar, ConditionalWrap, MediaQueryRenderer} from '@alt/components'
import {Alignment, BreakpointProps} from '@alt/types'

const styles = prepareStyles({
  Menu: {
    ...t.list,
    ...t.pa0,
    ...t.ma0,
    outline: 0,
  },
  isHorizontal: {
    ...t.flex
  },
  isAlignedLeft: {
    ...t.items_start
  },
  isAlignedCenter: {
    ...t.items_center
  },
  isAlignedRight: {
    ...t.fr
  },
  isInline: {
    ...t.inline_flex
  },
  isOverflow: {
    overflow: 'auto',
    maxHeight: '50vh'
  },
  isResponsive: {
    width: 400,
    ...t.flex_column
  },
  isStuck: {
    ...t.justify_start
  },
  StickyCard: {
    ...t.pb2
  },
  StickyUtilityComponent: {
    ...t.absolute,
    top: 5,
    right: '0.5em',
    ...t.list,
  }
})

export interface MenuProps {
  collapsed?: boolean
  align?: Alignment
  extraStyles?: ExtraStyles
  horizontal?: boolean
  useChevronIcon?: boolean
  inline?: boolean
  overflowInDropdown?: boolean
  autoFocus?: boolean
  responsive?: boolean
  selectedIndex?: number
  compact?: boolean
  selectedItem?: string
  showSelectedIcon?: boolean
  sticky?: boolean
  stickyUtilityComponent?: ReactNode
  utilityComponent?: ReactNode
}

interface MenuState {
  stuck: boolean
}

export class Menu extends Component<MenuProps, MenuState> {
  state: MenuState = {
    stuck: false
  }

  MenuContainer: RefObject<HTMLUListElement> = React.createRef()

  componentDidMount() {
    const {autoFocus} = this.props
    if (autoFocus && this.MenuContainer && this.MenuContainer.current) {
      this.MenuContainer.current.focus()
    }
  }

  render() {
    const {
      horizontal,
      responsive,
      stickyUtilityComponent,
      utilityComponent,
    } = this.props

    const isResponsive = !!(horizontal && responsive)

    return (
      <div>
        <ConditionalWrap
          condition={isResponsive}
          wrap={this.wrapWithResponsive}
        >
          <ul css={css(this.listStyles())} ref={this.MenuContainer} tabIndex={0}>
            {this.renderChildrenWithSelected()}
            {(stickyUtilityComponent || utilityComponent) && (
              <li css={css(styles.StickyUtilityComponent)}>
                <UtilityBar>
                  {this.renderUtilityComponent()}
                </UtilityBar>
              </li>
            )}
          </ul>
        </ConditionalWrap>
      </div>
    )
  }

  private renderUtilityComponent = () => {
    const {children, stickyUtilityComponent, utilityComponent} = this.props
    const {stuck} = this.state

    if (!children) {
      return null
    }

    if (stuck && stickyUtilityComponent) {
      return stickyUtilityComponent
    }

    if (utilityComponent) {
      return utilityComponent
    }

    return null
  }

  private getSelected = (typedChild: ReactElement, index: number) => {
    const {selectedIndex, selectedItem} = this.props

    return (
      (selectedItem && selectedItem === typedChild.props.name) ||
      (selectedIndex && selectedIndex === index + 1)
    )
  }

  private renderChildrenWithSelected = (renderSmall?: boolean) => {
    const {children, collapsed, horizontal, showSelectedIcon, useChevronIcon, compact} = this.props

    return React.Children.map(children, (child, index) => {
      if (child && !(typeof child === 'string' || typeof child === 'number')) {
        const typedChild = child as ReactElement
        const typeChildName = typedChild?.props.name || `${index}`

        return React.cloneElement(typedChild, {
          collapsed,
          index,
          compact: compact,
          horizontal: !!(!renderSmall && horizontal),
          afterIcon: 
            (showSelectedIcon && this.getSelected(typedChild, index)) 
            ? useChevronIcon 
              ? <ChevronRightIcon size={compact ? 15 : 20} /> 
              : <CheckIcon size={compact ? 15 : 20} /> 
            : typedChild.props.afterIcon
          ,
          key: `key_${typeChildName}`,
          selected: this.getSelected(typedChild, index),
          value: typedChild.props.children,
          ...typedChild.props,
        })
      } else {

      if (!child || typeof child === 'number' || typeof child === 'string') {
        return child
      }

      const typedChild = child as ReactElement
      const typeChildName = typedChild.props.name || `${index}`

      // Handles cases where we pass HTML tags (like <li>) into the menu
      if (typeof typedChild.type !== 'function') {
        return typedChild
      }

      return React.cloneElement(typedChild, {
        collapsed,
        index,
        compact: compact,
        horizontal,
        afterIcon:
          showSelectedIcon && this.getSelected(typedChild, index) ? (
            useChevronIcon ? <ChevronRightIcon size={compact ? 15 : 20} /> : <CheckIcon size={compact ? 15 : 20} />
          ) : (
            undefined
          ),
        key: `key_${typeChildName}`,
        selected: this.getSelected(typedChild, index) || typedChild.props.selected,
        compacted: compact || typedChild.props.compact,
        value: typedChild.props.children
      })}
    })
  }

  private wrapWithResponsive = () => {
    const {inline} = this.props
    
    return (
      <>
        <MediaQueryRenderer breakpoints={BreakpointProps.NotSmall}>
          <ul css={css(this.listStyles(), inline && styles.isInline)}>
            {this.renderChildrenWithSelected(false)}
          </ul>
        </MediaQueryRenderer>
      </>
    )
  }

  private listStyles = () => {
    const {
      extraStyles, 
      horizontal, 
      inline, 
      overflowInDropdown, 
      responsive, 
      align = Alignment.Left
    } = this.props

    const {stuck} = this.state

    const propsToStyles = [
      styles.Menu,
      // Order is important; leave `extraStyles` second.
      extraStyles,
      !!horizontal && styles.isHorizontal,
      !!inline && styles.isInline,
      !!responsive && styles.isResponsive,
      !!overflowInDropdown && styles.isOverflow,
      !!stuck && styles.isStuck,
      horizontal && align === Alignment.Left && styles.isAlignedLeft,
      horizontal && align === Alignment.Right && styles.isAlignedRight,
      horizontal && align === Alignment.Center && styles.isAlignedCenter,
    ]

    return reject(either(isEmpty, isNil), propsToStyles)
  }
}
