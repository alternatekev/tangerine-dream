import {FC} from 'react'
import {css, prepareStyles, t,ThemeProps, withTheme} from '@alt/styles'
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
  inverted?: boolean
  disabled?: boolean
  level?: 0 | 1 | 2 | 3 | 4 | 5
  borderless?: boolean
  autoHeight?: boolean
  description?: string
  url: string
  flat?: boolean
}

const getStyles = (img: string) => prepareStyles({
  ImageContainer: {
    width: 'unset',
    background: `url("${img}")`,
    ...t.no_repeat,
    ...t.cover,
    ...t.bg_center,
    ...t.w_100,
    paddingTop: '56.25%',
    height: 0,
    ...t.mb2
  },
})

const UnthemedProjectCard: FC<Props> = ({
  title,
  theme,
  disabled,
  img,
  level,
  inverted,
  borderless,
  external,
  flat = true,
  description,
  autoHeight = true,
  subtitle,
  url
}: Props) => {
  const styles = getStyles(img)

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
      <Header level={1} inverted={disabled || inverted}>{title}</Header>
      {subtitle && <Header level={2}>{subtitle}</Header>}
      <div css={css(imageStyles(theme).ProjectImage, styles.ImageContainer)}/>
      {description && <P compact weightless inverted={inverted}>{description}</P>}
    </Card>
  )
}

export const ProjectCard = withTheme(UnthemedProjectCard)
