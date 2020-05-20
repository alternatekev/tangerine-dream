import React, {FC, useState, Dispatch, SetStateAction} from 'react'
import {useRouter} from 'next/router'
import AppsIcon from 'mdi-react/AppsIcon'

import { Breakpoints } from '@alt/types'
import {id} from '@alt/data'

import {
  t, 
  prepareStyles, 
  ThemeProps, 
  withTheme, 
  DerivedTheme,
} from '@alt/styles'

import {Card, Header, Button} from '@alt/components'
import { VisualProjectCards } from '@alt/views'

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
    fontWeight: compact ? 100 : 700,
    [Breakpoints.Small]: {
      fontSize: '4rem',
      fontWeight: 100,
      lineHeight: '8.5rem',
      letterSpacing: `-0.1rem`
    }
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
  },
  ParallaxMenu: {
    zIndex: 0,
    boxShadow: `0 0 50px ${theme.background900} inset`,
    border: `1px ${theme.white500_10} solid`,
    ...t.overflow_auto,
    height: `40vh`,
    backgroundColor: theme.background500_50
  }
})

interface Props extends ThemeProps {
  title?: string
  compact?: boolean
  background?: string
}

const onClick = (open: boolean, setOpen: Dispatch<SetStateAction<boolean>>) => (_) => {
  setOpen(!open)
}

const UnthemedParallaxHeader: FC<Props> = ({
  title,
  background,
  compact,
  theme
}: Props) => {
  const styles = getStyles(theme, background, compact)
  const paths = useRouter().pathname
  const split = paths.split('/')
  const showMenu = split[1] === 'visual' && split[2]
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card
        middleStacked
        level={1}
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
          utilityComponent={showMenu 
            ? <Button 
                inverted 
                borderless 
                onClick={onClick(open, setOpen)} 
              icon={<AppsIcon />} 
              /> 
            : null
          }
        >
          {title}
        </Header>
      </Card>
      {showMenu && open &&
        <Card middleStacked level={1} extraStyles={styles.ParallaxMenu}>
        <VisualProjectCards cardLevel={1} borderless autoHeight={false} inverted pid={split[2] as id} />
        </Card>
      }
    </>
  )
}

export const ParallaxHeader = withTheme(UnthemedParallaxHeader)
