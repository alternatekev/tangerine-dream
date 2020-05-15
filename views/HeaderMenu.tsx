import React, {FC} from 'react'

import {Menu, MenuItem} from '@alt/components'

export enum MenuItems {
  Home = '/',
  Visual = '/visual',
  Audio = '/audio',
  Blog = 'https://alternatekev.me'
}

export const HeaderMenu: FC = () =>
  <Menu horizontal>
    <MenuItem href={MenuItems.Home} inverted>HOME</MenuItem>
    <MenuItem href={MenuItems.Visual} inverted>VISUAL</MenuItem>
    <MenuItem href={MenuItems.Audio} inverted>AUDIO</MenuItem>
    <MenuItem href={MenuItems.Blog} external inverted>BLOG</MenuItem>
  </Menu>
