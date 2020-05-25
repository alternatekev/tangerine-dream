import React, {FC, useState, Dispatch, SetStateAction} from 'react'
import {useRouter} from 'next/router'
import AppsIcon from 'mdi-react/AppsIcon'
import {SlideDown} from 'react-slidedown'

import {Breakpoints, BreakpointProps} from '@alt/types'
import {id} from '@alt/data'

import {
  t, 
  prepareStyles, 
  ThemeProps, 
  withTheme, 
  DerivedTheme,
} from '@alt/styles'

import {Card, Header, Button, MediaQueryRenderer} from '@alt/components'
import {VisualProjectCards, AudioProjectCards} from '@alt/views'

const getStyles = (theme: DerivedTheme, background?: string, compact?: boolean, open?: boolean) => prepareStyles({
  Background: {
    ...t.cover,
    backgroundPosition: 'bottom left',
    backgroundBlendMode: 'luminosity',
    transition: 'all 100ms ease-in-out',
    backgroundImage: background ? `url("${background}")` : undefined,
    opacity: open ? 0.5 : 1,
    backgroundColor: theme.background500_50,
    ...t.relative,
    zIndex: 1000
  },

  ContentTitle: {
    fontSize: compact ? '6.5rem' : '15rem',
    letterSpacing: compact ? '-0.125rem' : `-0.5rem`,
    fontWeight: compact ? 100 : 700,
    [Breakpoints.Small]: {
      fontSize: '4rem',
      fontWeight: 100,
      lineHeight: '4.5rem',
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
    backgroundImage: background ? `url("${background}")` : undefined,
    border: `1px ${theme.white500_10} solid`,
    ...t.overflow_auto,
    height: `40vh`,
    backgroundColor: theme.background500_50,
    backgroundPosition: 'top right',
    backgroundBlendMode: 'luminosity',
    transition: 'all 100ms ease-in-out',

  },
  Slider: {
    transitionDuration: '100ms',
    transitionTimingFunction: 'ease-in-out'
  }
})

interface Props extends ThemeProps {
  title?: string
  compact?: boolean
  background?: string
}

const onClick = (open: boolean, setOpen: Dispatch<SetStateAction<boolean>>) => () => {
  setOpen(!open)
}

const UnthemedParallaxHeader: FC<Props> = ({
  title,
  background,
  
  compact,
  theme
}: Props) => {
  const paths = useRouter().pathname
  const split = paths.split('/')
  const showVisualMenu = split[1] === 'visual' && split[2]
  const showAudioMenu = split[1] === 'audio' && split[2]
  const [open, setOpen] = useState(false)
  const styles = getStyles(theme, background, compact, open)

  const headerChildren = (
    <Header
      level={0}
      extraStyles={styles.ContentTitle}
      labelStyles={styles.Gradient}
      intense
      primary
      utilityComponent={showVisualMenu || showAudioMenu
        ? <Button
          inverted={!open}
          borderless
          onClick={onClick(open, setOpen)}
          icon={<AppsIcon />}
        />
        : null
      }
    >
      {title}
    </Header>
  )

  return (
    <>
      <MediaQueryRenderer breakpoints={BreakpointProps.NotSmall}>
        <Card
          middleStacked
          level={1}
          secondary
          inflated
          extraStyles={styles.Background}
        >
          {headerChildren}
        </Card>
      </MediaQueryRenderer>
      <MediaQueryRenderer breakpoints={BreakpointProps.Small}>
        <Card
          middleStacked
          level={1}
          secondary
          extraStyles={styles.Background}
        >
          {headerChildren}
        </Card>
      </MediaQueryRenderer>
      <SlideDown className="slide-down">
        {showVisualMenu && open &&
          <Card 
            middleStacked level={1} 
            extraStyles={styles.ParallaxMenu}
          >
            <VisualProjectCards 
              cardLevel={1} 
              borderless 
              autoHeight={false} 
              inverted 
              pid={split[2] as id} 
            />
          </Card>
        }
        {showAudioMenu && open &&
          <Card
            middleStacked level={1}
            extraStyles={styles.ParallaxMenu}
          >
            <AudioProjectCards
              useColumns={false}
              cardLevel={1}
              borderless
              inverted
              pid={split[2] as id}
            />
          </Card>
        }
      </SlideDown>
    </>
  )
}

export const ParallaxHeader = withTheme(UnthemedParallaxHeader)
