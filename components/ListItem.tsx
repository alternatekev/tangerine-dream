import React, {FC, ReactChild} from 'react'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'

import {css, prepareStyles, t, ExtraStyles, withTheme, ThemeProps} from '@alt/styles'

import {Renderable} from '@alt/types'

export interface ListItemProps {
  children?: Renderable
  icon?: Renderable
  disabled?: boolean
  hideIcon?: boolean
  divider?: boolean
  intense?: boolean
  alignTop?: boolean
  centerAlignIcon?: boolean
  compact?: boolean
  utilityComponent?: ReactChild
  'data-test-id'?: string
  extraStyles?: ExtraStyles
}

interface Props extends ListItemProps, ThemeProps {}

const UnthemedListItem: FC<Props> = ({
  theme,
  extraStyles,
  disabled,
  divider,
  compact,
  intense,
  alignTop,
  centerAlignIcon,
  icon,
  hideIcon,
  children,
  utilityComponent,
  ...rest
}: Props) => {

  const styles = prepareStyles({
    ListItem: {
      ...t.flex,
      ...t.tl,
      ...t.items_center,
      ...t.mb2,
      ...t.f_body,
      lineHeight: 2,
      ':last-of-type': {
        ...t.mb0,
      }
    },
    isIntense: {
      ...t.fw6
    },
    isCompact: {
      ...t.pb2,
      ...t.mb0,
      ...t.pt2
    },
    isCompactLabel: {
      ...t.lh_copy,
      ...t.f4
    },
    ListItemText: {
      ...t.dib,
      ...t.ml1,
      flex: 100,
      color: theme.black300
    },
    isDisabled: {
      fill: theme.grey100,
      color: theme.grey100
    },
    hasDivider: {
      ...t.pb2,
      borderBottom: `1px solid ${theme.grey20}`
    },
    isAlignedTop: {
      ...t.items_start,
    },
    iconContainer: {
      paddingTop: '0.05em',
      width: 20,
      fill: theme.primary500,
      color: theme.primary500
    },
    centerAlignIcon: {
      ...t.flex,
      ...t.items_center
    },
    isCompactIcon: {
      ...t.pt0,
      lineHeight: 1
    },
    isCompactUtility: {
      lineHeight: 1
    }
  })

  return (
    <li
      data-test-id={rest['data-test-id']}
      css={css(
      styles.ListItem,
      disabled && styles.isDisabled,
      divider && styles.hasDivider,
      compact && styles.isCompact,
      intense && styles.isIntense,
      !centerAlignIcon && alignTop && styles.isAlignedTop,
      extraStyles
    )}>
      {!hideIcon && <span css={css(styles.iconContainer, centerAlignIcon && styles.centerAlignIcon,compact && styles.isCompactIcon,)}>{icon}</span>}
      <span css={css(styles.ListItemText, disabled && styles.isDisabled, compact && styles.isCompactLabel)}>{children}</span>
      {utilityComponent && <span css={css(compact && styles.isCompactUtility)}>{utilityComponent}</span>}
    </li>
)}

UnthemedListItem.defaultProps = {
   icon: <ChevronRightIcon size={30} />,
   alignTop: true
}

export const ListItem = withTheme(UnthemedListItem)
