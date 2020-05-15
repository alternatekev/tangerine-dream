import {ButtonProps} from './props'
import {ThemeProps} from '@alt/styles'
import {getButtonStyles} from './styles'

export function mapPropsToButtonStyles(props: ButtonProps & ThemeProps) { //tslint:disable cyclomatic-complexity
  const {
    afterIcon,
    block,
    borderless,
    children,
    compact,
    iconOnly,
    completed,
    confirm,
    decline,
    dimmed,
    direction,
    disabled,
    extraStyles,
    icon,
    inButtonBar,
    inline,
    intense,
    inverted,
    large,
    miniTopWeighted,
    miniWeighted,
    primary,
    secondary,
    segmented,
    selected,
    highlighted,
    superTopWeighted,
    superWeighted,
    utility,
    tertiary,
    topWeighted,
    unread,
    draggable,
    weighted,
  } = props

  const styles = getButtonStyles(props.theme)

  return [
    styles.Button,
    icon && styles.hasIcon,
    unread && styles.isUnread,
    completed && styles.isCompleted,
    draggable && styles.isDraggable,

    large && styles.isLarge,
    block && styles.isBlock,
    compact && styles.isCompact,

    primary && styles.isPrimary,
    secondary && styles.isSecondary,
    tertiary && styles.isTertiary,
    confirm && !secondary && !tertiary && styles.isConfirmPrimary,
    decline && !secondary && !tertiary && styles.isDeclinePrimary,
    confirm && secondary && styles.isConfirmSecondary,
    decline && secondary && styles.isDeclineSecondary,
    confirm && tertiary && styles.isConfirmTertiary,
    decline && tertiary && styles.isDeclineTertiary,

    weighted && styles.isWeighted,
    superWeighted && styles.isSuperWeighted,
    topWeighted && styles.isTopWeighted,
    superTopWeighted && styles.isTopSuperWeighted,

    ((!children && icon) || iconOnly) && styles.isIconOnly,
    ((!children && icon) || iconOnly) && compact && styles.isIconOnlyCompact,
    afterIcon && styles.hasAfterIcon,

    inline && styles.isInline,
    intense && styles.isIntense,
    direction === 'back' && styles.isBack,

    selected && primary && styles.isPrimarySelected,
    selected && secondary && styles.isSecondarySelected,
    selected && tertiary && styles.isTertiarySelected,
    (primary && direction === 'back') && styles.isPrimaryBack,

    inverted && styles.isInverted,
    borderless && styles.isBorderless,
    borderless && primary && styles.isPrimaryBorderless,
    (borderless && inverted) && styles.isBorderlessAndInverted,
    inButtonBar && styles.isInButtonBar,
    miniWeighted && styles.isMiniWeighted,
    miniTopWeighted && styles.isMiniTopWeighted,
    disabled && styles.isDisabled,
    disabled && borderless && styles.isBorderlessDisabled,
    dimmed && styles.isDimmed,
    segmented && styles.isSegmented,
    utility && styles.isUtility,
    highlighted && styles.isHighlighted,
    extraStyles
  ]
}

export function mapPropsToLabelStyles(props: ButtonProps & ThemeProps) {
  const {
    alignCenter,
    borderless,
    collapsed,
    compact,
    icon,
    inline,
    intense,
    labelStyles,
    required,
    tertiary,
    capitalize,
    uppercase,
    wrap,
  } = props

  const styles = getButtonStyles(props.theme)

  return ([
    styles.label,
    uppercase && styles.isUppercase,
    capitalize && styles.isCapitalized,
    icon && compact && styles.hasCompactIcon,
    icon && !compact && styles.hasIcon,
    collapsed && styles.isCollapsed,
    compact && styles.isCompactLabel,
    compact && tertiary && borderless && styles.isCompactBorderlessTertiaryLabel,
    alignCenter && styles.isAlignedCenterLabel,
    icon && alignCenter && styles.isAlignedCenterHasIcon,
    inline && styles.isInlineLabel,
    intense && styles.isIntense,
    wrap && styles.isWrapped,
    required && styles.isRequired,
    labelStyles
  ])
}

export function mapPropsToIconStyles(props: ButtonProps & ThemeProps) {
  const styles = getButtonStyles(props.theme)
  const {
    icon,
    afterIcon,
    largeIcon,
    alignCenter
  } = props

  return ([
    (icon || afterIcon) && styles.iconAlignment,
    ((icon || afterIcon) && largeIcon) && styles.largeIconAlignment,
    alignCenter && styles.isAlignedCenter
  ])
}

export function mapPropsToAfterIconStyles(props: ButtonProps & ThemeProps) {
  const {
    inline,
    compact,
    afterIconStyle
  } = props
  const styles = getButtonStyles(props.theme)

  return ([
    styles.afterIcon,
    inline && styles.afterIconInline,
    compact && styles.afterIconCompact,
    afterIconStyle
  ])
}
