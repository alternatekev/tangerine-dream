import {Viewport, Placement} from '@td/types'

export * from './Configurator'
export * from './ConfiguratorDropZones'
export * from './ConfiguratorMenu'
export const labelPlacement = {
  [Viewport.Top]: Placement.Bottom,
  [Viewport.Right]: Placement.Left,
  [Viewport.Bottom]: Placement.Top,
  [Viewport.Left]: Placement.Right
}
