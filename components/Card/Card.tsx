import React, {Component, ReactNode, SyntheticEvent, RefObject} from 'react'
import Link from 'next/link'

import CardElement from './CardElement'
import ConditionalWrap from '../ConditionalWrap'

import {css, prepareStyles, t, ExtraStyles, withTheme, DerivedTheme} from '@alt/styles'
import {Alignment, VerticalAlignment} from '@alt/types'

export interface Props {
  key?: string | number,
  theme: DerivedTheme
  'data-test-id'?: string | number,
  autoWidth?: boolean,
  autoHeight?: boolean,
  popoverFriendly?: boolean,
  block?: boolean,
  divider?: boolean,
  topDivider?: boolean,
  image?: string,
  customBackgroundGradient?: string[]
  middleStacked?: boolean
  topStacked?: boolean,
  bottomStacked?: boolean
  rightDivider?: boolean,
  borderless?: boolean,
  disabled?: boolean,
  children?: ReactNode,
  extraStyles?: ExtraStyles,
  arrow?: boolean,
  arrowSide?: Alignment.Left | Alignment.Right | VerticalAlignment.Top,
  clickable?: boolean,
  compact?: boolean,
  customBackgroundColor?: string
  customColor?: string
  flat?: boolean,
  fullBleed?: boolean,
  ref?: RefObject<any> // tslint:disable-line no-any
  href?: string,
  external?: boolean,
  target?: string,
  inflated?: boolean,
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7,
  hoverLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7,
  narrow?: boolean,
  overflow?: boolean,
  secondary?: boolean,
  size?: number,
  height?: number | string,
  stacked?: boolean,
  sticky?: boolean,
  style?: object,
  superInflated?: boolean,
  superWeighted?: boolean,
  megaWeighted?: boolean,
  megaTopWeighted?: boolean,
  topWeighted?: boolean,
  superTopWeighted?: boolean,
  miniTopWeighted?: boolean,
  weighted?: boolean,
  miniWeighted?: boolean,
  alignCenter?: boolean,
  alignRight?: boolean,
  zIndex?: number,
  onClick?(e?: React.SyntheticEvent): void,
  onMouseEnter?(e?: React.SyntheticEvent): void,
  onMouseLeave?(e?: React.SyntheticEvent): void,
}

export function getCardStyles(props: Props) {
  const {theme, size, height, customBackgroundColor, customBackgroundGradient, customColor, zIndex} = props

  return prepareStyles({
    Card: {
      transformStyle: 'preserve-3d',
      ...t.pa4,
      ...t.relative,
      ...t.overflow_hidden,
      color: theme.black500,
      borderStyle: `solid`,
      borderWidth: '2px',
      ...t.br4,
      ...t.tl,
      backgroundClip: 'border-box',
      width: size ? size : 'auto',
      height: height ? height : 'auto',
      zIndex: zIndex ? zIndex : 0,
    },
    isAlignedCenter: {
      ...t.tc,
    },
    isAlignedRight: {
      ...t.tr
    },
    isMiddleStacked: {
      ...t.br0,
      ':last-of-type': {
        ...t.br0
      }
    },
    isTopStacked: {
      ':first-of-type': {
        ...t.br__top
      }
    },
    isBottomStacked: {
      ...t.br__bottom,
      ':last-of-type': {
        ...t.br__bottom
      }
    },
    isWeighted: {
      ...t.mb3
    },
    isAutoWidth: {
      ...t.fill_available
    },
    isDisabled: {
      opacity: 0.5,
      pointerEvents: 'none'
    },
    isAutoHeight: {
      height: 'calc(100% - 2.5em)', // i wish this was not necessary, alas.
    },
    isTopWeighted: {
      ...t.mt3
    },
    isSuperTopWeighted: {
      ...t.mt5
    },
    isMegaTopWeighted: {
      marginTop: '5.05rem'
    },
    isMiniTopWeighted: {
      ...t.mt2
    },
    isSuperWeighted: {
      ...t.mb4
    },
    isMegaWeighted: {
      ...t.mb6
    },
    isMiniWeighted: {
      ...t.mb2
    },
    isBorderless: {
      borderWidth: 0,
      boxShadow: 'none',
      background: 'transparent'
    },
    isBlock: {
      ...t.db
    },
    isFullBleed: {
      ...t.pa0
    },
    hasDivider: {
      borderBottomWidth: 1,
      ...t.pb4,
      ...t.bb
    },
    hasRightDivider: {
      borderRightWidth: 1,
      ...t.pr4,
      ...t.br
    },
    hasCustomBackgroundGradient: {
      background: customBackgroundGradient ? `linear-gradient(to bottom, ${customBackgroundGradient[0]}, ${customBackgroundGradient[1]})` : undefined
    },
    hasCustomColor: {
      color: customColor,
    },
    level0: {
      borderColor: theme.background500,
      backgroundColor: theme.white500_50,
      boxShadow: `0 0 30px ${theme.background600}`
    },
    level1: {
      borderColor: theme.background500,
      backgroundColor: theme.white500_75,
      boxShadow: `0 0 30px ${theme.background800}`
    },
    level2: {
      borderColor: theme.background500,
      boxShadow: `0 0 45px ${theme.background800}`,
      backgroundColor: theme.white500
    },
    level3: {
      backgroundColor: theme.primary5,
      boxShadow: `0 0 50px ${theme.background1000}`,
      borderColor: theme.primary50
    },
    level3Secondary: {
      backgroundColor: theme.secondary5,
      borderColor: theme.secondary50
    },
    level4: {
      backgroundColor: theme.white500,
      boxShadow: `0 0 50px ${theme.background1000}`,
      borderColor: theme.primary500
    },
    level4Secondary: {
      boxShadow: `0 0 50px ${theme.secondary500}`,
      borderColor: theme.primary500
    },
    level5: {
      backgroundColor: theme.grey5,
      borderColor: theme.grey50,
      boxShadow: `0 0 100px ${theme.background1000}`,
    },
    level6: {
      backgroundColor: theme.black10,
      borderColor: theme.black100,
      boxShadow: `0 0 150px ${theme.background1000}`
    },
    level7: {
      backgroundColor: theme.black500_75,
      borderColor: theme.black100,
      boxShadow: `0 0 500px ${theme.background1000}`
    },
    isCompact: {
      ...t.mb0,
      ...t.pa2
    },
    isInflated: {
      ...t.pa5
    },
    hasTopDivider: {
      borderTopWidth: 1,
      ...t.pt4,
      ...t.bt
    },
    isSuperInflated: {
      paddingLeft: 200,
      paddingRight: 200
    },
    hasCustomBackgroundColor: {
      backgroundColor: customBackgroundColor,
    },
    hasCustomBackgroundImage: {
      ...t.cover,
      backgroundBlendMode: 'luminosity',
      backgroundImage: `url(${props.image})`,
    },
    isNarrow: {
      ...t.pr6,
      ...t.pl6
    },
    isStacked: {
      borderTopWidth: 0,
      ...t.br0,
      ':first-of-type': {
        ...t.br4,
        ...t.br__top,
        borderTopWidth: 1
      },
      ':last-of-type': {
        borderBottomWidth: 1,
        ...t.br4,
        ...t.br__bottom
      }
    },
    isClickable: {
      ...t.pointer,
    },
    hasOverflow: {
      ...t.overflow_auto
    },
    isPopoverFriendly: {
      overflow: 'initial'
    },
    isFlat: {
      boxShadow: 'none',
      borderWidth: 0
    },
    isSticky: {
      ...t.br0,
      ...t.bt_0,
      ...t.br_0,
      ...t.bl_0
    },
    hasLeftArrow: {
      ...t.ml4,
      ...t.relative,
      ...t.overflow_visible,
      ':before': {
        ...t.block,
        ...t.absolute,
        top: 'calc(50% - 7.5px)',
        left: -9,
        width: 15,
        transform: 'rotate(45deg)',
        height:15,
        content: '" "',
        borderTopWidth: 0,
        borderRightWidth: 0
      }
    },
    hasRightArrow: {
      ...t.mr4,
      ...t.relative,
      ...t.overflow_visible,
      ':before': {
        ...t.block,
        ...t.absolute,
        top: 'calc(50% - 7.5px)',
        right: -9,
        width: 15,
        transform: 'rotate(225deg)',
        height:15,
        content: '" "',
        borderTopWidth: 0,
        borderRightWidth: 0
      }
    },
    hasTopArrow: {
      ...t.mt4,
      ...t.relative,
      ...t.overflow_visible,
      ':before': {
        ...t.block,
        ...t.absolute,
        top: -9,
        left: `calc(50% - 7.5px)`,
        width: 15,
        transform: 'rotate(135deg)',
        height:15,
        content: '" "',
        borderTopWidth: 0,
        borderRightWidth: 0
      }
    },
    hasArrowLevel1: {
      ':before': {
        borderLeft: `1px ${theme.grey25} solid`,
        borderBottom: `1px ${theme.grey25} solid`,
        background: theme.white500
      }
    },
    hasArrowLevel2: {
      ':before': {
        borderBottom: `1px ${theme.grey50} solid`,
        borderLeft: `1px ${theme.grey50} solid`,
        background: theme.white500
      }
    },
    hasArrowLevel3: {
      ':before': {
        borderBottom: `1px ${theme.primary50} solid`,
        borderLeft: `1px ${theme.primary50} solid`,
        background: theme.primary5
      }
    },
    hasArrowLevel4: {
      ':before': {
        backgroundColor: theme.white500,
        borderBottom: `1px ${theme.primary500} solid`,
        borderLeft: `1px ${theme.primary500} solid`,
      }
    },
    squaredEdges: {
      ...t.br0
    },
    hasOnClickHandler: {
      ...t.pointer
    }
  })
}

export interface State {
  hovering: boolean
}

export class Card extends Component<Props, State> {
  static defaultProps = {
    level: 1,
  }

  state: State = {
    hovering: false
  }

  render () { // tslint:disable-line cyclomatic-complexity
    const {
      level,
      disabled,
      block,
      borderless,
      clickable,
      compact,
      customBackgroundColor,
      megaWeighted,
      flat,
      miniWeighted,
      megaTopWeighted,
      fullBleed,
      inflated,
      narrow,
      arrowSide,
      overflow,
      secondary,
      customBackgroundGradient,
      stacked,
      superWeighted,
      topWeighted,
      miniTopWeighted,
      weighted,
      autoWidth,
      rightDivider,
      autoHeight,
      alignCenter,
      divider,
      topDivider,
      extraStyles,
      superTopWeighted,
      children,
      popoverFriendly,
      sticky,
      'data-test-id': dataTestId,
      href,
      onClick,
      onMouseEnter,
      middleStacked,
      topStacked,
      bottomStacked,
      image,
      onMouseLeave,
      alignRight,
      style,
      hoverLevel,
      arrow,
      customColor,
      ref,
      superInflated
    } = this.props

    const {hovering} = this.state

    const styles = getCardStyles(this.props)

    const extraStyless = css(
      styles.Card,
      !hovering && styles[`level${level}`],
      hovering && hoverLevel && styles[`level${hoverLevel}`],
      block && styles.isBlock,
      borderless && styles.isBorderless,
      clickable && styles.isClickable,
      compact && styles.isCompact,
      customBackgroundColor && styles.hasCustomBackgroundColor,
      image && styles.hasCustomBackgroundImage,
      customBackgroundGradient && styles.hasCustomBackgroundGradient,
      customColor && styles.hasCustomColor,
      fullBleed && styles.isFullBleed,
      inflated && styles.isInflated,
      narrow && styles.isNarrow,
      overflow && styles.hasOverflow,
      secondary && styles[`level${level}Secondary`],
      popoverFriendly && styles.isPopoverFriendly,
      superWeighted && styles.isSuperWeighted,
      megaWeighted && styles.isMegaWeighted,
      megaTopWeighted && styles.isMegaTopWeighted,
      topWeighted && styles.isTopWeighted,
      miniTopWeighted && styles.isMiniTopWeighted,
      miniWeighted && styles.isMiniWeighted,
      weighted && styles.isWeighted,
      autoWidth && styles.isAutoWidth,
      autoHeight && styles.isAutoHeight,
      alignCenter && styles.isAlignedCenter,
      alignRight && styles.isAlignedRight,
      flat && styles.isFlat,
      sticky && styles.isSticky,
      disabled && styles.isDisabled,
      stacked && styles.isStacked,
      middleStacked && styles.isMiddleStacked,
      topStacked && styles.isTopStacked,
      bottomStacked && styles.isBottomStacked,
      arrow && arrowSide === Alignment.Left && styles.hasLeftArrow,
      arrow && arrowSide === Alignment.Right && styles.hasRightArrow,
      arrow && arrowSide === VerticalAlignment.Top && styles.hasTopArrow,
      arrow && level === 1 && styles.hasArrowLevel1,
      arrow && level === 2 && styles.hasArrowLevel2,
      arrow && level === 3 && styles.hasArrowLevel3,
      arrow && level === 4 && styles.hasArrowLevel4,
      superInflated && styles.isSuperInflated,
      superTopWeighted && styles.isSuperTopWeighted,
      borderless && flat && fullBleed && styles.squaredEdges,
      divider && styles.hasDivider,
      rightDivider && styles.hasRightDivider,
      topDivider && styles.hasTopDivider,
      !!onClick && styles.hasOnClickHandler,
      extraStyles,
    )

    return (
      <ConditionalWrap
        condition={!!href}
        wrap={this.renderLink}
      >
        <CardElement
          extraStyles={extraStyless}
          data-test-id={dataTestId}
          onClick={onClick}
          ref={ref}
          href={href}
          onMouseEnter={hoverLevel ? this.onMouseEnter : onMouseEnter}
          onMouseLeave={hoverLevel ? this.onMouseLeave : onMouseLeave}
          style={style}
        >
          {children}
        </CardElement>
      </ConditionalWrap>
    )
  }

  private renderLink = (children: ReactNode) => {
    const {external, href, target} = this.props

    if (external && href) {
      return (<a href={href} target={target}>{children}</a>)
    } else {
      return (<Link href={href || ''}><a>{children}</a></Link>)
    }
  }

  private onMouseEnter = (e: SyntheticEvent) => {
    this.setState({hovering: true})
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e)
    }
  }

  private onMouseLeave = (e: SyntheticEvent) => {
    this.setState({hovering: false})
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(e)
    }
  }
}

export default withTheme(Card)
