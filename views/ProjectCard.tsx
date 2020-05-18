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
  autoHeight?: boolean
  description?: string
  url: string
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
  img,
  external,
  description,
  autoHeight = true,
  subtitle,
  url
}: Props) => {
  const styles = getStyles(img)

  return (
    <Card
      level={0}
      weighted
      external={external}
      autoHeight={autoHeight}
      flat
      href={url}
    >
      <Header level={1} primary>{title}</Header>
      {subtitle && <Header level={2}>{subtitle}</Header>}
      <div css={css(imageStyles(theme).ProjectImage, styles.ImageContainer)}/>
      {description && <P compact weightless>{description}</P>}
    </Card>
  )
}

export const ProjectCard = withTheme(UnthemedProjectCard)
