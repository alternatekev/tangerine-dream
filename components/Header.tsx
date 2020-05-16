// tslint:disable max-func-body-length cyclomatic-complexity
import React, {
  FC,
  ReactNode,
  CSSProperties,
  ComponentClass
} from 'react'
import {
  css,
  prepareStyles,
  t,
  CustomColor,
  DerivedTheme,
  ExtraStyles,
  useTheme
} from '@alt/styles'
import {SerializedStyles} from '@emotion/core'

import {ConditionalWrap} from './'
import {UtilityBar} from './UtilityBar'
import {Renderable} from '@alt/types'

interface Props {
  actionable?: boolean
  alignCenter?: boolean
  alignLeft?: boolean
  backComponent?: ReactNode
  decline?: boolean
  clickableText?: boolean
  capitalize?: boolean
  light?: boolean
  compact?: boolean
  confirm?: boolean
  customBackgroundColor?: CustomColor
  customColor?: CustomColor
  dataTestId?: string
  divider?: boolean
  dulled?: boolean
  extraStyles?: ExtraStyles
  labelStyles?: ExtraStyles
  forwardComponent?: ReactNode
  icon?: JSX.Element
  id?: string
  intense?: boolean
  inverted?: boolean
  level?: 0 | 1 | 2 | 3 | 4 | 5
  miniTopWeighted?: boolean
  miniWeighted?: boolean
  multiline?: boolean
  alignRight?: boolean
  overflowEllipsis?: boolean
  padBottom?: boolean
  paddingLevel?: number
  padTop?: boolean
  primary?: boolean
  secondary?: boolean
  selectedClassName?: CSSProperties
  superTopWeighted?: boolean
  superWeighted?: boolean
  topWeighted?: boolean
  utilityComponent?: JSX.Element | null
  warning?: boolean
  weighted?: boolean
  weightedLabel?: boolean
  children?: Renderable
}

const wrapHeader = (iconStyle: SerializedStyles) => (children: React.ReactNode) => (
  <div css={iconStyle}>{children}</div>
)

export const Header: FC<Props> = ({
  actionable,
  alignCenter,
  alignLeft,
  backComponent,
  children,
  clickableText,
  compact,
  confirm,
  customBackgroundColor,
  customColor,
  dataTestId,
  divider,
  decline,
  dulled,
  capitalize,
  extraStyles,
  forwardComponent,
  id,
  icon,
  light,
  intense,
  alignRight,
  inverted,
  level = 1,
  miniTopWeighted,
  miniWeighted,
  multiline,
  overflowEllipsis,
  padBottom,
  paddingLevel,
  padTop,
  primary,
  secondary,
  selectedClassName,
  labelStyles,
  superTopWeighted,
  superWeighted,
  topWeighted,
  utilityComponent,
  warning,
  weighted,
  weightedLabel,
}: Props) => { 

    const theme: DerivedTheme = useTheme()

    const styles = prepareStyles({
      /** core styles */
      Header: {
        ...t.f_head,
        ...t.f3,
        ...t.relative,
        ...t.pb1,
        ...t.ma0,
        ...t.flex,
        ...t.content_center,
        ...t.items_center,
        ...t.lh_title,
        ...t.fill_available,
        ...t.fw3,
        letterSpacing: `-0.05rem`,
        color: customColor || theme.black500,
        backgroundColor: customBackgroundColor || 'transparent',
        transformStyle: 'preserve-3d',
      },
      textWrap: {
        flex: 150,
        ...t.tl,
        pointerEvents: 'none',
        ...t.justify_start
      },
      isClickable: {
        pointerEvents: 'all'
      },

      /** typographical styles */
      isIntense: {
        ...t.fw7
      },
      isLight: {
        ...t.fw1
      },
      isSecondary: {
        color: theme.secondary500
      },
      isPrimary: {
        color: theme.primary50
      },
      isInverted: {
        color: theme.white500
      },
      isAlignedCenter: {
        ...t.tc,
        ...t.justify_center,
        ...t.relative,
        width: ['webkit-fill-availabke', 'moz-available']
      },
      isAlignedRight: {
        ...t.tr,
      },
      isDulled: {
        opacity: 0.5
      },
      isMultiline: {
        ...t.lh_copy
      },

      /** label options */
      isWeightedLabel: {
        flex: 500,
      },
      isActionableLabel: {
        ...t.tc,
        ...t.justify_center,
        ...t.absolute,
        ...t.w_100
      },
      isCapitalized: {
        ...t.ttc
      },

      /** dividers */
      hasDivider: {
        ...t.pb2,
        borderBottomColor: theme.secondary500_50,
        borderBottomStyle: `solid`,
        borderBottomWidth: 1
      },
      hasCompactDivider: {
        ...t.pb1,
        ...t.mb2
      },
      hasWeightedDivider: {
        ...t.pb3,
        ...t.mb4
      },

      /** box sizing */
      isCompact: {
        ...t.pa0,
        ...t.ma0
      },
      isCompactWeighted: {
        ...t.pb2
      },
      isWeighted: {
        ...t.mb4
      },
      isMiniWeighted: {
        ...t.mb2
      },
      isSuperWeighted: {
        ...t.mb6
      },
      isTopWeighted: {
        ...t.mt4
      },
      isMiniTopWeighted: {
        ...t.mt2
      },
      isTopSuperWeighted: {
        ...t.mt6
      },

      /** h1 - h6 sizing */
      level0: {
        ...t.f1,
        ...t.normal,
        ...t.pt0,
      },
      level1: {
        ...t.f2,
        ...t.normal
      },
      level2: {
        ...t.f3,
        ...t.pb1,
        ...t.fw3
      },
      level3: {
        ...t.f4,
        ...t.fw3
      },
      level4: {
        ...t.pt0,
        ...t.f4,
        ...t.normal
      },
      level5: {
        ...t.f5,
        ...t.normal,
        ...t.ttu,
      },

      /** padding levels */
      paddingLevel0: {
        ...t.pl0,
        ...t.pr0,
        ...t.lh_solid
      },
      paddingLevel1: {
        ...t.pl1,
        ...t.pr1,
      },
      paddingLevel2: {
        ...t.pl2,
        ...t.pr2,
      },
      paddingLevel3: {
        ...t.pl3,
        ...t.pr3,
      },
      paddingLevel4: {
        ...t.pl4,
        ...t.pr4,
      },
      paddingLevelTop0: {
        ...t.pt0
      },
      paddingLevelTop1: {
        ...t.pt1
      },
      paddingLevelTop2: {
        ...t.pt2
      },
      paddingLevelTop3: {
        ...t.pt3
      },
      paddingLevelTop4: {
        ...t.pt4
      },
      paddingLevelBottom0: {
        ...t.pb0
      },
      paddingLevelBottom1: {
        ...t.pb1
      },
      paddingLevelBottom2: {
        ...t.pb2
      },
      paddingLevelBottom3: {
        ...t.pb3
      },
      paddingLevelBottom4: {
        ...t.pb4
      },

      /** icons */
      hasIconContainer: {
        ...t.flex,
        ...t.items_center,
        flex: 150
      },
      headerIcon: {
        ...t.mr1,
        ...t.inline_flex,
        ...t.items_center
      },

      /** meta components */
      backComponent: {
        ...t.tl,
        ...t.mr2,
      },
      forwardComponent: {
        ...t.tr,
        ...t.ml2,
        ...t.items_center,
        ...t.flex,
        ...t.justify_end,
        ...t.fill_available
      },
      isAlignedCenterForwardComponent: {
        flex:100,

      },
       isAlignedCenterBackComponent: {
        flex:100,
        ...t.justify_end
      },
      isOverflowEllipsis: {
        ...t.mr2
      },
      isCollapsed: {
        ...t.dn
      }
    })

    let headerLevel = level !== undefined && level + 1
    if (level !== undefined && level > 5) {
      headerLevel = 6
    }

    const Heading = `h${headerLevel}` as unknown as ComponentClass<JSX.IntrinsicElements['h1']>

    // icon container style that we need to get into conditionalwrap
    const iconStyle = css(styles.hasIconContainer)

    return (
      <Heading
      data-test-id={dataTestId ? dataTestId : 'header'}
        css={
          css(
            styles.Header,
            styles[ `level${level}` ],
            miniWeighted && styles.isMiniWeighted,
            superWeighted && styles.isSuperWeighted,
            topWeighted && styles.isTopWeighted,
            miniTopWeighted && styles.isMiniTopWeighted,
            superTopWeighted && styles.isTopSuperWeighted,
            inverted && styles.isInverted,
            intense && styles.isIntense,
            secondary && styles.isSecondary,
            primary && styles.isPrimary,
            styles[`paddingLevel${paddingLevel}`],
            padTop && styles[`paddingLevelTop${paddingLevel}`],
            padBottom && styles[`paddingLevelBottom${paddingLevel}`],
            divider && styles.hasDivider,
            divider && weighted && styles.hasWeightedDivider,
            compact && styles.isCompact,
            compact && divider && styles.hasCompactDivider,
            compact && weighted && styles.isCompactWeighted,
            multiline && styles.isMultiline,
            confirm && styles.isConfirmation,
            decline && styles.isDeclined,
            warning && styles.isWarning,
            capitalize && styles.isCapitalized,
            weighted && styles.isWeighted,
            light && styles.isLight,
            dulled && styles.isDulled,
            extraStyles as SerializedStyles,
            selectedClassName as SerializedStyles,
          )}
      >
        {backComponent && <div css={css([styles.backComponent, alignCenter && styles.isAlignedCenterBackComponent])}>{ backComponent }</div>}

        <ConditionalWrap
          condition={!!icon}
          wrap={wrapHeader(iconStyle)}
        >
            {icon && !alignCenter && <span css={css(styles.headerIcon)}>{icon}</span>}

            <div
              data-test-id={dataTestId ? dataTestId : 'header-children'}
              id={id}
              css={css(
                styles.textWrap,
                alignCenter && styles.isAlignedCenter,
                alignRight && styles.isAlignedRight,
                weightedLabel && styles.isWeightedLabel,
                actionable && !alignLeft && styles.isActionableLabel,
                clickableText && styles.isClickable,
                overflowEllipsis && styles.isOverflowEllipsis,
                labelStyles
              )}>
              {icon && alignCenter && <span css={css(styles.headerIcon)}>{icon}</span>}
              {children}
            </div>

        </ConditionalWrap>

        {forwardComponent && <div css={css(styles.forwardComponent, alignCenter && styles.isAlignedCenterForwardComponent)}>{forwardComponent}</div>}
        {utilityComponent && <UtilityBar>{utilityComponent}</UtilityBar>}

      </Heading>
    )
  }

export const H1 = (props: Props) => <Header level={0} {...props} />
export const H2 = (props: Props) => <Header level={1} {...props} />
export const H3 = (props: Props) => <Header level={2} intense {...props} />
export const H4 = (props: Props) => <Header level={3} intense {...props} />
export const H5 = (props: Props) => <Header level={4} intense {...props} />
export const H6 = (props: Props) => <Header level={5} intense {...props} />
