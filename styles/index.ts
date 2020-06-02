import {css, SerializedStyles} from '@emotion/core'
import {useTheme, withTheme} from 'emotion-theming'

import {prepareStyles, inverseTachyonsUnit} from './StyleUtils'
export type ExtraStyles = SerializedStyles | undefined | SerializedStyles[] | (SerializedStyles | undefined)[]
export {css, prepareStyles, inverseTachyonsUnit, useTheme, withTheme}
export * from './Theme'
export * from '@td/types/Theme'
