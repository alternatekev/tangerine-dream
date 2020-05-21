import React, {FC} from 'react'
import MenuIcon from 'mdi-react/MenuIcon'

import {Menu, MenuItem,Button} from '@alt/components'
import {Breakpoints} from '@alt/types'
import {t,prepareStyles, withTheme, ThemeProps, DerivedTheme, css} from 'styles'

const getStyles = (theme: DerivedTheme) => prepareStyles({
  TopHeaderMenu: {
    ...t.mt1
  },
  BigMenu: {
    [Breakpoints.Medium]: {
      ...t.db
    },
    [Breakpoints.Small]: {
      ...t.dn
    }
  },
  SmallMenu: {
    [Breakpoints.Small]: {
      ...t.db
    },
    [Breakpoints.Medium]: {
      ...t.dn
    }
  }
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
      <div css={css(styles.BigMenu)}>
        <Menu horizontal extraStyles={styles.TopHeaderMenu}>
          <MenuItem inverted={invertedMenu} href={MenuItems.Home}>HOME</MenuItem>
          <MenuItem inverted={invertedMenu} href={MenuItems.Visual}>VISUAL</MenuItem>
          <MenuItem inverted={invertedMenu} href={MenuItems.Audio}>AUDIO</MenuItem>
          <MenuItem inverted={invertedMenu} href={MenuItems.Blog} external>BLOG</MenuItem>
        </Menu>
      </div>
      <div css={css(styles.SmallMenu)}>
        <Button onClick={onClick} borderless icon={<MenuIcon />} inline iconOnly />
      </div>
    </>
  )
}

export const HeaderMenu = withTheme(UnthemedHeaderMenu)
