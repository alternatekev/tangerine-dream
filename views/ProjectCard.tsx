import {FC} from 'react'
import {css, prepareStyles, t,inverseTachyonsUnit} from '@alt/styles'

interface Props {
  title: string
  subtitle?: string
  img: string
  description?: string
  url: string
}

const getStyles = (img: string) => prepareStyles({
  ImageContainer: {
    ...t.overflow_hidden,
    background: `url("${img}")`,
    ...t.cover,
    ...t.w_100,
    paddingTop: '56.25%',
    height: 0,
    ...inverseTachyonsUnit(t.ml1),
    ...inverseTachyonsUnit(t.mr1),
    ...t.mb2
  },
})

import {
  Card,
  Header,
  P
} from '@alt/components'

export const ProjectCard: FC<Props> = ({
  title,
  img,
  description,
  subtitle,
  url
}: Props) => {
  const styles = getStyles(img)

  return (
    <Card
      level={0}
      weighted
      compact
      flat
      href={url}
    >
      <Header level={1} primary>{title}</Header>
      {subtitle && <Header level={2}>{subtitle}</Header>}
      <div css={css(styles.ImageContainer)}>
        <img
          src={img}
          alt={title}
          css={css(styles.Image)}
        />
      </div>
      {description && <P compact weightless>{description}</P>}
    </Card>
  )
}
  