import React, {ReactNode, PureComponent, MouseEvent, RefObject, createRef} from 'react'

import {css, prepareStyles, t, ExtraStyles, ThemeProps, withTheme, CustomColor} from '@alt/styles'

import {Button, UtilityBar, ButtonProps} from '@alt/components'
import {Renderable } from '@alt/types'

export interface MenuItemProps extends ThemeProps {
  as?: string
  disabled?: boolean
  external?: boolean
  beforeSelected?: boolean
  buttonStyles?: ExtraStyles
  extraStyles?: ExtraStyles
  highlighted?: boolean
  borderless?: boolean
  collapsed?: boolean
  hashLink?: boolean
  suffix?: Renderable
  compact?: boolean
  selectedBackgroundColor?: CustomColor
  selectedLinkColor?: CustomColor
  horizontal?: boolean
  children?: Renderable
  linkColor?: CustomColor
  divider?: boolean
  id?: string
  href?: string
  icon?: ReactNode
  afterIcon?: Renderable
  iconSet?: {
    default: ReactNode
    selected: ReactNode
  },
  inline?: boolean
  level?: 0|1|2|3|4|5|6
  selected?: boolean
  selectedStyles?: ExtraStyles
  labelStyles?: ExtraStyles
  tertiary?: boolean
  onHover?(e: MouseEvent<HTMLButtonElement>, props: MenuItemProps): void
  onClick?(e: React.SyntheticEvent<MouseEvent>, props: MenuItemProps): void
}

class UnthemedMenuItem extends PureComponent<MenuItemProps & ButtonProps> {
  static defaultProps: Pick<MenuItemProps, 'level'> = {
    level: 0
  }
  MenuItemRef: RefObject<HTMLButtonElement>

  constructor(props: MenuItemProps & ButtonProps) {
    super(props)
    this.MenuItemRef = createRef()
  }

  renderIcon = () => {
    const {iconSet, selected, icon} = this.props

    return iconSet && selected ? iconSet.selected : iconSet ? iconSet.default : icon
  }

  renderAfterIcon = () => {
    const {afterIcon, suffix} = this.props

    return suffix && afterIcon 
    ? <UtilityBar noAlignment>
        {suffix}
        {afterIcon}
      </UtilityBar>
    : suffix 
      ? suffix
      : afterIcon 
        ? afterIcon
          : null
  }

  onClick = e => {
    if (this.props.onClick) this.props.onClick(e, this.props)
  }

  render() { // tslint:disable-line max-func-body-length cyclomatic-complexity
    const {theme, selectedBackgroundColor, linkColor, selectedLinkColor} = this.props

    const styles = prepareStyles({
      MenuItem: {
        ...t.f3,
        ...t.nested_list_reset,
        ...t.lh_title,
        color: theme.grey800,
        ':hover': {
          color: theme.grey1000
        },
        ':last-of-type': {
          borderBottomWidth: 0
        }
      },
      isSelected: {
        backgroundColor: selectedBackgroundColor || undefined,
        fill: theme.grey800,
        color: theme.grey800,
        ':hover': {
          cursor: 'default',
          backgroundColor: selectedBackgroundColor || undefined
        }
      },
      isDisabled: {
        pointerEvents: 'none',
        opacity: 0.5
      },
      isSelectedText: {
        color: selectedLinkColor,
      },
      isDivider: {
        borderBottomWidth: 1,
        borderBottomColor: theme.grey30,
        borderBottomStyle: 'solid',
      },
      MenuHeader: {
        ...t.flex,
        ...t.items_center,
        ...t.lh_title,
        ...t.pl3,
        ...t.pr3,
        color: theme.white500,
        height: 87,
        backgroundColor: theme.grey1000
      },
      hasDrop: {
        ...t.pointer
      },
      MenuSubHeader: {
        ...t.flex,
        ...t.items_center,
        ...t.lh_title,
        ...t.pl3,
        ...t.pr3,
        borderTopWidth: 1,
        borderTopColor: theme.white500_25,
        borderTopStyle: `solid`,
        height: 87,
        color: theme.grey1000,
        backgroundColor: theme.grey1000
      },
      MenuHeaderDrop: {
        color: theme.white500,
        width: 40
      },
      isDropped: {
        ...t.relative,
        transform: `rotate( -180deg )`,
        transformOrigin: 32
      },
      level_0: {

      },
      level_1: {
        ...t.pl4
      },
      level_2: {
        ...t.pl6
      },
      level_3: {
        ...t.pl6
      },
      level_4: {
        ...t.pl4
      },
      MenuItemButton: {
        ...t.br0,
        ':hover': {
          backgroundColor: theme.button50,
          color: theme.black500
        }
      },
      isHorizontalButtonLabel: {
        color: linkColor ? linkColor : theme.button500
      },
      isHorizontal: {
        ...t.dib,
        ...t.br0,
        ':hover': {
          backgroundColor: 'transparent'
        },
        ':first-of-type': {
          ...t.ml0
        },
        ' button': {
          textDecoration: 'none',
        }
      },
      isSelectedHorizontalButton: {
        borderColor: 'transparent',
        backgroundColor: selectedBackgroundColor ? selectedBackgroundColor : theme.primary500,
        color: selectedLinkColor,
      },
      isSelectedHorizontalButtonLabel: {
        color: selectedLinkColor
      }
    })

    const {
      as,
      buttonStyles,
      children,
      extraStyles,
      collapsed,
      compact,
      horizontal,
      divider,
      disabled,
      highlighted,
      href,
      inline,
      id,
      level,
      hashLink,
      selected,
      onHover,
      selectedStyles,
      labelStyles,
      tertiary,
      borderless,
      external,
      ...rest
    } = this.props

    const extraMenuStyles = css(
      styles.MenuItem,
      divider && styles.isDivider,
      selected && styles.isSelected,
      horizontal && styles.isHorizontal,
      (selected && selectedStyles) && selectedStyles,
      level && styles[`level_${level}`],
      disabled && styles.isDisabled,
      extraStyles,
    )

    return (
      <li css={extraMenuStyles}>
        <Button
          as={as}
          id={id}
          highlighted={highlighted}
          hashLink={hashLink}
          block
          onHover={onHover}
          borderless={(horizontal && !selected) || !horizontal || borderless}
          selected={selected}
          extraStyles={[
            !horizontal ? styles.MenuItemButton : undefined,
            horizontal ? styles.isHorizontalButton : undefined,
            horizontal && selected ? styles.isSelectedHorizontalButton : undefined,
            buttonStyles,
            selected && styles.isSelected,
          ] as ExtraStyles}
          labelStyles={[
            horizontal && selected ? styles.isSelectedHorizontalButtonLabel : undefined,
            selected && styles.isSelectedText,
            labelStyles
          ] as ExtraStyles}
          collapsed={collapsed}
          compact={compact}
          href={href}
          afterIcon={this.renderAfterIcon()}
          icon={this.renderIcon()}
          inline={inline}
          intense={selected}
          onClick={this.onClick}
          tertiary={tertiary}
          external={external}
          {...rest}
        >
          {children}
        </Button>
      </li>
    )
  }
}

export const MenuItem = withTheme(UnthemedMenuItem)
