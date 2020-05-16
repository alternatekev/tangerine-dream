import React, {FC} from 'react'

import {Menu, MenuItem} from '@alt/components'
import {t,prepareStyles} from 'styles'

const styles = prepareStyles({
  TopHeaderMenu: {
    ...t.mt1
  }
})

enum MenuItems {
  Home = '/',
  Visual = '/visual',
  Audio = '/audio',
  Blog = 'https://alternatekev.me'
}

export const HeaderMenu: FC = () =>
  <Menu horizontal extraStyles={styles.TopHeaderMenu}>
    <MenuItem href={MenuItems.Home}>HOME</MenuItem>
    <MenuItem href={MenuItems.Visual}>VISUAL</MenuItem>
    <MenuItem href={MenuItems.Audio}>AUDIO</MenuItem>
    <MenuItem href={MenuItems.Blog} external>BLOG</MenuItem>
  </Menu>
