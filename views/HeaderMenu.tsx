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

interface Props {
  invertedMenu?: boolean
}

export const HeaderMenu: FC<Props> = ({invertedMenu}: Props) =>
  <Menu horizontal extraStyles={styles.TopHeaderMenu}>
    <MenuItem inverted={invertedMenu} href={MenuItems.Home}>HOME</MenuItem>
    <MenuItem inverted={invertedMenu} href={MenuItems.Visual}>VISUAL</MenuItem>
    <MenuItem inverted={invertedMenu} href={MenuItems.Audio}>AUDIO</MenuItem>
    <MenuItem inverted={invertedMenu} href={MenuItems.Blog} external>BLOG</MenuItem>
  </Menu>
