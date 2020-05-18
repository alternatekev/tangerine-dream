import React, {FC} from 'react'

import {Menu, MenuItem} from '@alt/components'

export const FooterMenu: FC = () =>
  <Menu horizontal>
    <MenuItem external href="https://instagram.com/alternatekev">INSTAGRAM</MenuItem>
    <MenuItem external href="https://soundcloud.com/alternatekev">SOUNDCLOUD</MenuItem>
    <MenuItem external href="https://bandcamp.com/alternatekev">BANDCAMP</MenuItem>
  </Menu>
