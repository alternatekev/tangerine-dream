import {FC} from 'react'

import {prepareStyles, t, shadow, useTheme} from '@td/styles'
import {Card} from '@td/components'
import {ThemeState} from '@td/types'

const styles = (theme: ThemeState) => prepareStyles({
  Configurator: {
    ...shadow(theme)[1],
    ...t.absolute,
    top: 100,
    right: 100
  }
})

export const Configurator: FC = () =>
  <Card 
    unicorn={styles(useTheme()).Configurator} 
    width={150} 
    level={7} 
    height={600} 
  > &nbsp;
  </Card>
