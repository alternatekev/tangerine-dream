import {
  prepareStyles, 
  t, 
  getAccessibleTextColor, 
  inverseTachyonsUnit,
  DerivedTheme
} from '@alt/styles'

export const getButtonStyles = (theme: DerivedTheme) => {
  return prepareStyles({
    Button: {
      ...t.pa2,
      ...t.pl3,
      ...t.pr3,
      ...t.dib,
      ...t.tl,
      ...t.bg_transparent,
      ...t.b__solid,
      ...t.ma0,
      ...t.f_body,
      ...t.ba,
      ...t.br3,
      ...t.outline_0,
      ...t.f3,
      ...t.relative,
      ...t.pointer,
      background: theme.white500,
      fontWeight: `inherit`,
      color: theme.black500,
      fill: `inherit`,
      borderColor: theme.grey200,
      transition: `background-color 100ms ease-in-out`,
      ...t.lh_copy,
      ':focus': {
        outline: `1px ${theme.button200} solid`,
        boxShadow: `0 0 10px ${theme.button500}`,
      }
    },
    hasDivider: {
      ...t.br,
      borderRightColor: theme.grey25
    },
    isHighlighted: {
      color: theme.button800,
    },
    isDraggable: {
      ':hover': {
        cursor: 'grab'
      },
      ':active': {
        cursor: 'grabbing'
      }
    },
    isWrapped: {
      whiteSpace: 'normal',
      ...t.tl
    },
    isCapitalized: {
      ...t.ttc
    },
    isInButtonBar: {
      ...t.relative,
      ...t.dib,
      ...t.mr2
    },
    isBack: {
      maxHeight: 35,
      ':before': {
        background: 'transparent',
        border: `1px solid`,
        borderColor: theme.grey100,
        ...t.db,
        width: 25,
        height: 25,
        content: '" "',
        ...t.absolute,
        left: -10,
        top: 5,
        transform: 'rotate(225deg)'
      }
    },
    isPrimary: {
      backgroundColor: theme.button500,
      borderColor: theme.button500,
      color: getAccessibleTextColor(theme.button500),
      ':hover': {
        backgroundColor: theme.button700,
        borderColor: theme.button700,
        color: getAccessibleTextColor(theme.button700),
      }
    },
    isPrimarySelected: {
      backgroundColor: theme.button500,
      color: getAccessibleTextColor(theme.button500),
      ':hover': {
        backgroundColor: theme.button500,
        color: getAccessibleTextColor(theme.button500),
      }
    },
    isPrimaryBack: {
      ':before': {
        backgroundColor: theme.button200,
        color: getAccessibleTextColor(theme.button200),
        ...t.dn,
        width: '100%',
        height: '100%'
      }
    },
    isSecondary: {
      backgroundColor: theme.button25,
      borderColor: theme.button200,
      color: getAccessibleTextColor(theme.button25),
      ':hover': {
        backgroundColor: theme.button50,
        color: getAccessibleTextColor(theme.button50),
      }
    },
    isSecondarySelected: {
      backgroundColor: theme.button500,
      color: getAccessibleTextColor(theme.button500),
      ':hover': {
        backgroundColor: theme.button50,
        color: getAccessibleTextColor(theme.button50),
      }
    },
    isTertiary: {
      backgroundColor: 'transparent',
      borderColor: theme.button200,
      ':hover': {
        backgroundColor: theme.button10,
        color: getAccessibleTextColor(theme.button10),
      }
    },
    isTertiarySelected: {
      backgroundColor: theme.button500,
      color: getAccessibleTextColor(theme.button500),
      ':hover': {
        backgroundColor: theme.button500,
        color: getAccessibleTextColor(theme.button500),
      }
    },
   isIntense: {
      ...t.fw6,
    },
    isAlignedCenter: {
      ...t.flex,
      ...t.items_center,
      ...t.tc,
      ...t.justify_center
    },
    isAlignedCenterLabel: {
      ...t.tc
    },
    isCompact: {
      ...t.pa1,
      ...t.pr2,
      ...t.pl2,
      ...t.f4
    },
    isMiniWeighted: {
      ...t.mb1
    },
    isMiniTopWeighted: {
      ...t.mt1
    },
    isWeighted: {
      ...t.mb3
    },
    isTopWeighted: {
      ...t.mt3
    },
    isTopSuperWeighted: {
      ...t.mt5
    },
    isSuperWeighted: {
      ...t.mb5
    },
    isCompactLabel: {
      ...t.pl0
    },
    isBlock: {
      ...t.db,
      ...t.tl,
      width: `100%`
    },
    isUppercase: {
      ...t.ttu
    },
    isBorderless: {
      ...t.br0,
      ...t.b__transparent,
      ...t.bg_transparent,
      color: theme.link700,
      ':hover': {
        ...t.bg_transparent
      }
    },
    isDimmed: {
      opacity: 0.5,
    },
    isDisabled: {
      color: theme.grey600,
      background: theme.white500,
      borderColor: theme.grey20,
      ':hover': {
        color: theme.grey600,
        backgroundColor: theme.white500,
        borderColor: theme.grey20,
        cursor: 'not-allowed',
      }
    },
    isInverted: {
      color: theme.white500,
      fill: theme.white500,
    },
    isLarge: {
      ...t.pa3,
      ...t.f2
    },
    isCollapsed: {
      width: 0
    },
    ButtonIcon: {
      ...t.flex,
      ...t.content_center,
      ...t.items_center,
      ...t.mr1
    },
    isCompactIcon: {
      minWidth: 16,
      ...t.mr1
    },
    isLargeIcon: {
      ...t.mr2
    },
    iconAlignment: {
      ...t.flex,
      ...t.items_center
    },
    largeIconAlignment: {
      ...t.flex_column
    },
    isUtility: {
      ...t.pr0,
      ...t.mr0
    },
    afterIcon: {
      ...t.ml1,
      ...t.mr1,
      ...t.fr,
      ...t.relative,
      ...inverseTachyonsUnit(t.mb1),
      fill: theme.button50
    },
    afterIconInline: {
      ...t.mr0
    },
    hasAfterIcon: {
      ...t.pr2
    },
    label: {
      flex: 10,
      ...t.outline_0,
      flexShrink: 0,
      ...t.fw3,
      whiteSpace: 'nowrap',
      ...t.tl,
    },
    hasIcon: {
      ...t.dib
    },
    hasCompactIcon: {
      ...t.dib
    },
    afterIconCompact: {
      ...t.pr0,
      ...t.ml0,
      ...t.mr0
    },
    isIconOnly: {
      ...t.pr2,
      ...t.pl2
    },
    isIconOnlyCompact: {
      ...t.pr1,
      ...t.pl1
    },
    isCompactBorderlessTertiaryLabel: {
      color: theme.link700
    },
    isInline: {
      ...t.pa0,
      ...t.pl0,
      ...t.pr0
    },
    isInlineLabel: {
      ...t.pl0
    },
    isAlignedCenterHasIcon: {
      marginLeft: -20
    },
    isBorderlessDisabled: {
      borderColor: 'transparent',
      ':hover': {
        borderColor: 'transparent',
        cursor: 'default',
      }
    },
    isBorderlessAndInverted: {
      ...t.bn,
      color: theme.white500
    },
    isPrimaryBorderless: {
      color: theme.button700,
    },
    isSegmented: {
      ...t.ma0,
      ...t.br0,
      ...t.br_0,
      ':first-of-type': {
        ...t.br3,
        ...t.br__left
      },
      ':last-of-type': {
        ...t.br3,
        ...t.br,
        ...t.br__right
      }
    },
    isIconOnlyIcon: {
      ...t.mr0
    }
  })
}
