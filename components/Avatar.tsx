import React, {Component, ReactElement, MouseEvent} from 'react'
import {SerializedStyles} from '@emotion/core'

import {css, prepareStyles, t, ExtraStyles, ThemeProps, withTheme,} from '@alt/styles'
import {Breakpoints, Renderable} from '@alt/types'
import {ConditionalWrap} from '@alt/components'

interface Props extends ThemeProps {
  img?: string,
  organization?: boolean,
  size: number,
  circle?: boolean,
  inverted?: boolean,
  badge?: ReactElement,
  alignCenter?: boolean
  autoWidth?: boolean,
  hexagon?: boolean,
  icon?: ReactElement<HTMLElement>,
  wide?: boolean,
  extraStyles?: ExtraStyles,
  weighted?: boolean,
  superWeighted?: boolean
  topWeighted?: boolean,
  superWide?: boolean
  onClick?(e: MouseEvent<HTMLElement>): void,
}

interface Styles {[key: string]: SerializedStyles}

export interface AvatarProps extends Props {}

const DEFAULT_IMAGE = '/img/avatar-42px_360.png'
const DEFAULT_ORG_IMAGE = '/img/default-org.svg'

const wrapWithCenter = (styles: Styles) => (children: Renderable) =>
  <div css={css(styles.isAlignedCenter)}>{children}</div>

class UnthemedAvatar extends Component<Props> {

  static defaultProps = {
    size: 25,
    img: DEFAULT_IMAGE
  }
  state = {
    width: 0
  }

  getWidth = () => {
    const {size, wide, superWide} = this.props

    return wide
      ? size * 1.5
      : superWide
        ? size * 2.4
        : size
  }

  render () {
    const {
      theme,
      size,
      alignCenter,
      organization,
      autoWidth,
      superWeighted,
      inverted,
      badge,
      circle,
      hexagon,
      extraStyles,
      onClick,
      icon,
      topWeighted,
      weighted
    } = this.props

    let {img} = this.props

    if (organization) {
      img = DEFAULT_ORG_IMAGE
    }

    const avatarStyles = prepareStyles({
      Avatar: {
        ...t.br3,
        ...t.pa0,
        ...t.ma0,
        ...t.dib,
        ...t.overflow_hidden,
        backgroundColor: theme.white500,
        border: `1px ${theme.primary25} solid`,
        width: this.getWidth(),
        height: size,
        minWidth: this.getWidth(),
        minHeight: size,
        backgroundImage: img ? `url(${img})` : undefined,
        ...t.cover,
        ...t.bg_center
      },
      isAlignedCenter: {
        ...t.flex,
        ...t.items_center,
        ...t.justify_center
      },
      isInverted: {
        backgroundColor: theme.white500
      },
      isAutoWidth: {
        ...t.w_100,
        height: 0,
        ...t.flex,
        ...t.items_center,
        ...t.justify_center,
        paddingTop: '75%',
        [Breakpoints.Medium]: {
          paddingTop: '55%',
        }

      },
      isSuperWeighted: {
        ...t.mb5
      },
      isCircle: {
        ...t.br_100
      },
      isHexagon: {
        backgroundColor: theme.primary10,
        borderColor: 'transparent',
        clipPath: `polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)`
      },
      isIcon: {
        ...t.justify_center,
        ...t.items_center,
        color: theme.primary100
      },
      autoWidthImage: {
        ...t.fill_available,
        ...t.w_100,
        maxHeight: '100%',
        marginTop: '-100%',
      },
      semanticImage: {
        ...t.dn
      },
      isWeighted: {
        ...t.mb3
      },
      isTopWeighted: {
        ...t.mt3
      },
      isDefaultImage: {
        backgroundBlendMode: 'luminosity'
      },
      AvatarBadge: {
        ...t.absolute,
        top: -5,
        right: -5,
        border: `2px solid ${theme.white500}`,
        ...t.overflow_hidden,
        width: size / 3,
        height: size / 3,
        ...t.br_pill,
        img: {
          width: 'auto',
          height: '100%'
        }
      }

    })

    return (
      <ConditionalWrap condition={!!alignCenter} wrap={wrapWithCenter(avatarStyles)}>
        <figure
          role={onClick && 'button'}
          css={css(
            avatarStyles.Avatar,
            !img && avatarStyles.isIcon,
            circle && avatarStyles.isCircle,
            autoWidth && avatarStyles.isAutoWidth,
            hexagon && avatarStyles.isHexagon,
            inverted && avatarStyles.isInverted,
            weighted && avatarStyles.isWeighted,
            topWeighted && avatarStyles.isTopWeighted,
            superWeighted && avatarStyles.isSuperWeighted,
            img === DEFAULT_IMAGE && avatarStyles.isDefaultImage,
            extraStyles)
          }
          onClick={onClick}>
          {icon && !img && icon}
          {img &&
            <img
              data-test-id={`image-${img && img.lastIndexOf != null ? img.substring(img.lastIndexOf('/') + 1) : ''}`}
              alt="Profile image"
              width={autoWidth ? 'auto' : size}
              height={autoWidth ? 'auto' : size}
              src={img}
              css={css(avatarStyles.semanticImage, autoWidth && avatarStyles.autoWidthImage)}
            />
          }
          {badge && <div css={css(avatarStyles.AvatarBadge)}>{badge}</div>}
        </figure>
      </ConditionalWrap>
    )
  }
}

export const Avatar = withTheme(UnthemedAvatar)
