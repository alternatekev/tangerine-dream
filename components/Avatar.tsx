import React, {Component, ReactElement, MouseEvent} from 'react'
import {css, prepareStyles, t, ExtraStyles, ThemeProps, withTheme} from '@alt/styles'

interface Props extends ThemeProps {
  img?: string,
  organization?: boolean,
  size: number,
  circle?: boolean,
  inverted?: boolean,
  badge?: ReactElement,
  autoWidth?: boolean,
  hexagon?: boolean,
  icon?: ReactElement<HTMLElement>,
  wide?: boolean,
  extraStyles?: ExtraStyles,
  weighted?: boolean,
  topWeighted?: boolean,
  superWide?: boolean
  onClick?(e: MouseEvent<HTMLElement>): void,
}

export interface AvatarProps extends Props {}

const DEFAULT_IMAGE = '/img/avatar-42px_360.png'
const DEFAULT_ORG_IMAGE = '/img/default-org.svg'

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
      organization,
      autoWidth,
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
      isInverted: {
        backgroundColor: theme.white500
      },
      isAutoWidth: {
        ...t.fill_available,
        height: 'auto',
        backgroundImage: 'none',
        ...t.flex,
        ...t.items_center,
        ...t.justify_center
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
        height: 'auto',
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
          img === DEFAULT_IMAGE && avatarStyles.isDefaultImage,
          extraStyles)
        }
        onClick={onClick}>
        {icon && !img && icon}
        {img &&
          <img
            data-test-id={`image-${img && img.lastIndexOf != null ? img.substring(img.lastIndexOf('/') + 1) : ''}` }
            alt="Profile image"
            width={autoWidth ? 'auto' : size}
            height={autoWidth ? 'auto' : size}
            src={img}
            css={css(avatarStyles.semanticImage, autoWidth && avatarStyles.autoWidthImage)}
          />
        }
        {badge && <div css={css(avatarStyles.AvatarBadge)}>{badge}</div>}
      </figure>
    )
  }
}

export const Avatar = withTheme(UnthemedAvatar)
