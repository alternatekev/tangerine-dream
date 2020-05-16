import React, {FC} from 'react'

import {Menu, MenuItem} from '@alt/components'
import { Alignment } from '@alt/types'

export enum MenuItems {
  Home = '/',
  Visual = '/visual',
  Audio = '/audio',
  Blog = 'https://alternatekev.me'
}

export const FooterMenu: FC = () =>
  <Menu horizontal>
    <MenuItem href={MenuItems.Home}>CONTACT</MenuItem>
    <MenuItem href={MenuItems.Visual}>INSTAGRAM</MenuItem>
    <MenuItem href={MenuItems.Audio}>SOUNDCLOUD</MenuItem>
    <MenuItem href={MenuItems.Blog} external>BANDCAMP</MenuItem>
  </Menu>
