import {Alignment, Placement} from './'

export interface UIImage {
  alt?: string
  src: string
  size?: ImageSize
  align?: Alignment
  placement?: Placement
}

export type ImageSize = number | Size

export interface Size {
  w?: number
  h?: number
}
