export interface Dimensions {
  top?: number | string
  right?: number | string
  bottom?: number | string
  left?: number | string
  width?: number | string | string[]
  height?: number | string | string[]
}

export interface ViewportDimensions {
  'top': Dimensions
  'right': Dimensions
  'bottom': Dimensions
  'left': Dimensions
}
