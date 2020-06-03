import {FC} from 'react'
import {UIImage, ImageSize} from '@td/types'

export const calcSize = (kind: 'w' | 'h', size?: ImageSize) => {
  return size === undefined 
    ? undefined
    : typeof size === 'number'
      ? size
      : size[kind]
}

export const Image: FC<UIImage> = ({
  size,
  alt = 'TD Image',
  src
}: UIImage) =>
  <img 
    src={src}
    alt={alt}
    width={calc('w', size)}
    height={calc('h', size)}
  />
