import {FC, useState, Dispatch, SetStateAction} from 'react'
import {useTheme} from 'emotion-theming'
import {SlideDown} from 'react-slidedown'

import {DerivedTheme, prepareStyles, t, css,} from '@alt/styles'
import {Header, Card, Menu, MenuItem, MediaQueryRenderer} from '@alt/components'
import {HeaderMenu, MenuItems} from '@alt/views'
import {BreakpointProps, Breakpoints} from '@alt/types'

interface Props {
  invertedMenu?: boolean
}

const onClick = (open: boolean, setOpen: Dispatch<SetStateAction<boolean>>) => () => {
  setOpen(!open)
}

export const PageHeader: FC<Props> = ({invertedMenu}: Props) => {  
    const theme: DerivedTheme = useTheme()
    const styles = prepareStyles({
      PageTitle: {
        ...t.fw2,
        color: theme.secondary500_75,
        ...t.ml5,
        [Breakpoints.Small]: {
          ...t.ml0,
          ...t.db
        }
      },
      MenuCard: {
        boxShadow: `0 0 50px ${theme.background975} inset`,
        border: `1px ${theme.white500_10} solid`,
      }
    })
    const [open, setOpen] = useState(false)
    const headerChildren = (
      <Header
        intense
        inverted
        weightedLabel
        utilityComponent={<HeaderMenu onClick={onClick(open, setOpen)} invertedMenu={invertedMenu} />}
      >
        KEVIN CONBOY
        <span css={css(styles.PageTitle)}>ALTERNATE.ORG</span>
      </Header>
    )

    return(
      <header>
        <MediaQueryRenderer breakpoints={BreakpointProps.Medium}>
          <Card
            customBackgroundColor={theme.background200}
            topStacked
            popoverFriendly
            level={1}
            inflated
          >
            {headerChildren}
          </Card>
        </MediaQueryRenderer>
        <MediaQueryRenderer breakpoints={BreakpointProps.Small}>
          <Card
            customBackgroundColor={theme.background200}
            topStacked
            popoverFriendly
            level={1}
          >
            {headerChildren}
          </Card>
        </MediaQueryRenderer>
       
        <SlideDown className="slide-down">
          {open && 
            <Card flat extraStyles={styles.MenuCard} fullBleed autoWidth middleStacked customBackgroundColor={theme.background800}>
              <Menu extraStyles={styles.TopHeaderMenu}>
                <MenuItem inverted href={MenuItems.Home}>HOME</MenuItem>
                <MenuItem inverted href={MenuItems.Visual}>VISUAL</MenuItem>
                <MenuItem inverted href={MenuItems.Audio}>AUDIO</MenuItem>
                <MenuItem inverted href={MenuItems.Blog} external>BLOG</MenuItem>
              </Menu>
            </Card>}
        </SlideDown>
      </header>
    )
  }
