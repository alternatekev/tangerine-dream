import {FC} from 'react'
import {
  css, 
  prepareStyles, 
  t,
  ThemeProps, 
  withTheme, 
  DerivedTheme
} from '@alt/styles'
import {
  Card,
  Header,
  P,
  imageStyles
} from '@alt/components'

interface Props extends ThemeProps{
  title: string
  subtitle?: string
  img: string
  external?: boolean
  primary?: boolean
  inverted?: boolean
  disabled?: boolean
  level?: 0 | 1 | 2 | 3 | 4 | 5
  borderless?: boolean
  autoHeight?: boolean
  description?: string
  url: string
  flat?: boolean
}

const getStyles = (img: string, theme: DerivedTheme) => prepareStyles({
  ImageContainer: {
    width: 'unset',
    background: `url("${img}")`,
    ...t.no_repeat,
    ...t.cover,
    ...t.bg_center,
    ...t.w_100,
    paddingTop: '56.25%',
    height: 0,

    boxShadow: `0 0 0 ${theme.background100}, 0 0 0 ${theme.background100}, 0 0 0 ${theme.background100}`,
    transition: 'all 100ms ease-in-out',
    ':hover': {
      boxShadow: `0 0 5px ${theme.background500_50}, 0 0px 10px ${theme.white500}, 0 0 25px ${theme.background500_25}`
    }
  },
})

const UnthemedProjectCard: FC<Props> = ({
  title,
  theme,
  disabled,
  img,
  level,
  inverted,
  primary,
  borderless,
  external,
  flat = true,
  description,
  autoHeight = true,
  subtitle,
  url
}: Props) => {
  const styles = getStyles(img, theme)

  return (
    <Card
      level={level || 0}
      weighted
      borderless={borderless}
      external={external}
      autoHeight={autoHeight}
      flat={flat}
      href={!disabled ? url : undefined}
    >
      <Header 
        primary={primary}
        level={1} 
        inverted={disabled || inverted}
      >
        {title}
      </Header>
      {subtitle && 
        <Header level={2}>{subtitle}</Header>
      }
      <div css={css(imageStyles(theme).ProjectImage, styles.ImageContainer)} />
      {description && 
        <P 
          compact 
          weightless 
          inverted={inverted}
        >
          {description}
        </P>
      }
    </Card>
  )
}

export const ProjectCard = withTheme(UnthemedProjectCard)
