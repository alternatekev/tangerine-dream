import React, {FC} from 'react'

import {
  t, 
  prepareStyles, 
  ThemeProps, 
  withTheme, 
  DerivedTheme,
} from '@alt/styles'

import {Card, Header} from '@alt/components'

const getStyles = (theme: DerivedTheme, background?: string, compact?: boolean) => prepareStyles({
  Background: {
    ...t.cover,
    ...t.bg_center,
    backgroundBlendMode: 'luminosity',
    backgroundImage: background ? `url("${background}")` : undefined,
    backgroundColor: theme.background500_50
  },
  ContentTitle: {
    fontSize: compact ? '6.5rem' : '15rem',
    letterSpacing: compact ? '-0.125rem' : `-0.5rem`,
    fontWeight: compact ? 100 : 700
  },
  Gradient: {
    background: `-webkit-linear-gradient(0deg, ${compact ? theme.white500 : theme.background200},rgba(255,255,255,0.1))`,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
  BGOverlay: {
    ...t.aspect_ratio__object,
    backgroundColor: theme.background500,
    zIndex: 100
  }
})

interface Props extends ThemeProps {
  title?: string
  compact?: boolean
  background?: string
}

const UnthemedParallaxHeader: FC<Props> = ({
  title,
  background,
  compact,
  theme
}: Props) => {
  const styles = getStyles(theme, background, compact)

  return (
    <Card
      middleStacked
      stacked
      level={0}
      secondary
      inflated
      extraStyles={styles.Background}
    >
      <Header
        level={0}
        extraStyles={styles.ContentTitle}
        labelStyles={styles.Gradient}
        intense
        primary
      >
        {title}
      </Header>

    </Card>
  )
}

  export const ParallaxHeader = withTheme(UnthemedParallaxHeader)
