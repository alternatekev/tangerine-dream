import React, {PureComponent, MouseEvent, RefObject, createRef} from 'react'
import Link from 'next/link'

import {withTheme, css, prepareStyles, ThemeProps} from '@alt/styles'
import {getButtonStyles} from './styles'
import {ButtonProps} from './props'
import {
  mapPropsToButtonStyles, 
  mapPropsToLabelStyles, 
  mapPropsToIconStyles, 
  mapPropsToAfterIconStyles
} from './utils'

export * from './props'
type Props = ButtonProps

export class Button extends PureComponent<Props & ThemeProps, {}, RefObject<HTMLButtonElement>> {
  static defaultProps: Pick<Props, 'type'> = {type: 'button'}
  private ButtonRef: RefObject<HTMLButtonElement> = createRef()

  render() {
    const {external, hashLink, href, as, target, download} = this.props
    const styles = prepareStyles({
      resetLineHeight: {
        lineHeight: 0.8
      }
    })

    if (external && href) {
      return (
        <a href={href} target={target} download={download} tabIndex={-1}>
          {this.renderButton()}
        </a>
      )
    } else if (href && !hashLink) {
      return (
        <Link
          as={as}
          href={href}
        >
          <a css={css(styles.resetLineHeight)}>{this.renderButton()}</a>
        </Link>
      )
    } else {
      return this.renderButton()
    }
  }

  private handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (this.props.type !== 'submit' && !this.props.disabled && this.props.onClick) {
      this.props.onClick(e, this.props)
    }
  }
 

  // tslint:disable-next-line max-func-body-length cyclomatic-complexity - style gen is complex
  private renderButton = () => {
    const {
      afterIcon,
      children,
      compact,
      iconOnly,
      disabled,
      icon,
      large,
      onMouseDown,
      tabIndex,
      size,
      id,
      theme,
      type,
      value,
    } = this.props

    const style = size ? {width: size} : {}

    const styles = getButtonStyles(theme)

    return (
        <button
          tabIndex={tabIndex ? tabIndex : 0}
          id={id}
          data-value={value}
          onMouseOver={this.onHover()}
          onMouseOut={this.onHover(true)}
          disabled={disabled}
          type={type}
          ref={this.ButtonRef}
          css={css(mapPropsToButtonStyles(this.props))}
          onClick={this.handleClick}
          onMouseDown={onMouseDown}
          style={style}
        >
          <span css={css(mapPropsToIconStyles(this.props))}>

            {icon &&
              <span css={css(
                styles.ButtonIcon,
                large && styles.isLargeIcon,
                compact && styles.isCompactIcon,
                (!children || iconOnly) && styles.isIconOnlyIcon
              )}
              >
                {icon}
              </span>}
            {(children || afterIcon) && !iconOnly &&
                <span id={id} css={css(mapPropsToLabelStyles(this.props))
                }>{children}</span>
            }
            {afterIcon &&
              <span css={css(mapPropsToAfterIconStyles(this.props))}>
                {afterIcon}
              </span>
            }
          </span>
        </button>
    )
  }

  private onHover = (mouseOut: boolean = false) => (e: MouseEvent<HTMLButtonElement>) => {
    const {onHover} = this.props
    if (onHover) {
      onHover(e, mouseOut)
    }
  }
}

export default withTheme(Button)
