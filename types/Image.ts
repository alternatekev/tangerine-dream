export interface UIImage {
  alt?: string
  src: string
  size?: ImageSize
}

export type ImageSize = number | Size

export interface Size {
  w: number
  h: number
}
