export interface Dimensions {
  top?: number
  right?: number
  bottom?: number
  left?: number
  width?: number | string | string[]
  height?: number | string | string[]
}

export interface ViewportDimensions {
  'top': Dimensions
  'right': Dimensions
  'bottom': Dimensions
  'left': Dimensions
}
