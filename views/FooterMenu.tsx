import React, {FC} from 'react'
import InstagramIcon from 'mdi-react/InstagramIcon'
import SoundcloudIcon from 'mdi-react/SoundcloudIcon'
import BandcampIcon from 'mdi-react/BandcampIcon'

import {Menu, MenuItem} from '@alt/components'

interface Props {
  small?: boolean
}

export const FooterMenu: FC<Props> = ({small}: Props) =>
  <Menu horizontal>
    <MenuItem external icon={<InstagramIcon size={30} />} href="https://instagram.com/alternatekev">{!small && 'INSTAGRAM'}</MenuItem>
    <MenuItem external icon={<SoundcloudIcon size={30} />} href="https://soundcloud.com/alternatekev">{!small && 'SOUNDCLOUD'}</MenuItem>
    <MenuItem external icon={<BandcampIcon size={30} />} href="https://bandcamp.com/alternatekev">{!small && 'BANDCAMP'}</MenuItem>
  </Menu>
