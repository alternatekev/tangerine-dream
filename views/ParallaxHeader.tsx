import React, {FC} from 'react'

import {
  t, 
  prepareStyles, 
  ThemeProps, 
  withTheme, 
  DerivedTheme,
} from '@alt/styles'

import {Card, Header} from '@alt/components'

const getStyles = (theme: DerivedTheme, background?: string) => prepareStyles({
  Background: {
    backgroundBlendMode: 'luminosity',
    backgroundImage: background ? `url("${background}")` : undefined,
    backgroundColor: theme.background500_50
  },
  ContentTitle: {
    fontSize: '15rem',
    letterSpacing: `-0.5rem`,
  },
  Gradient: {
    background: `-webkit-linear-gradient(${theme.background200},rgba(255,255,255,0.1))`,
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
  const styles = getStyles(theme, background)

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
        {!compact && title}
      </Header>

    </Card>
  )
}

  export const ParallaxHeader = withTheme(UnthemedParallaxHeader)
