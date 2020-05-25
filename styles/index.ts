import {css, SerializedStyles} from '@emotion/core'
import {useTheme, withTheme} from 'emotion-theming'

import {t} from './Tachyons'
import {prepareStyles, inverseTachyonsUnit} from './StyleUtils'
export const styles = prepareStyles({
  Player: {
    ...t.fill_available
  }
})
export type ExtraStyles = SerializedStyles | undefined | SerializedStyles[] | (SerializedStyles | undefined)[]
export {css, t, prepareStyles, inverseTachyonsUnit, useTheme, withTheme}
export * from './Theme'
export * from '@alt/types/Theme'
