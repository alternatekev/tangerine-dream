import {css, SerializedStyles} from '@emotion/core'
import {useTheme, withTheme} from 'emotion-theming'
import {t} from './Tachyons'

import {prepareStyles, inverseTachyonsUnit} from './StyleUtils'
export type ExtraStyles = SerializedStyles | undefined | SerializedStyles[] | (SerializedStyles | undefined)[]
export {css, t, prepareStyles, inverseTachyonsUnit, useTheme, withTheme}
export * from './Theme'
export * from './Colors'
export * from '@td/types/UI'
export * from './Animation'