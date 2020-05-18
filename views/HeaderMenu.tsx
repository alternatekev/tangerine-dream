import React, {FC} from 'react'
import MenuIcon from 'mdi-react/MenuIcon'

import {Menu, MenuItem, MediaQueryRenderer, Button} from '@alt/components'
import {BreakpointProps} from '@alt/types'
import {t,prepareStyles, withTheme, ThemeProps, DerivedTheme} from 'styles'

const getStyles = (theme: DerivedTheme) => prepareStyles({
  TopHeaderMenu: {
    ...t.mt1
  },
})

export enum MenuItems {
  Home = '/',
  Visual = '/visual',
  Audio = '/audio',
  Blog = 'https://alternatekev.me'
}

interface Props extends ThemeProps {
  invertedMenu?: boolean
  onClick(): any //tslint:disable-line no-any
}

const UnthemedHeaderMenu: FC<Props> = ({
  invertedMenu, 
  theme,
  onClick
}: Props) => {
  const styles = getStyles(theme)

  return (
    <>
      <MediaQueryRenderer breakpoints={BreakpointProps.Medium}>
        <Menu horizontal extraStyles={styles.TopHeaderMenu}>
          <MenuItem inverted={invertedMenu} href={MenuItems.Home}>HOME</MenuItem>
          <MenuItem inverted={invertedMenu} href={MenuItems.Visual}>VISUAL</MenuItem>
          <MenuItem inverted={invertedMenu} href={MenuItems.Audio}>AUDIO</MenuItem>
          <MenuItem inverted={invertedMenu} href={MenuItems.Blog} external>BLOG</MenuItem>
        </Menu>
      </MediaQueryRenderer>
      <MediaQueryRenderer breakpoints={BreakpointProps.Small}>
        <Button onClick={onClick} borderless icon={<MenuIcon />} iconOnly />
      </MediaQueryRenderer>
    </>
  )
}

export const HeaderMenu = withTheme(UnthemedHeaderMenu)