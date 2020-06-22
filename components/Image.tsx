import {FC} from 'react'
import {UIImage, ImageSize, BlockProps} from '@td/types'
import { css } from '@emotion/core'

export const calcSize = (kind: 'w' | 'h', size?: ImageSize) => {
  return size === undefined 
    ? undefined
    : typeof size === 'number'
      ? size
      : size[kind]
}

export const Image: FC<UIImage & BlockProps> = ({
  size,
  alt = 'TD Image',
  src,
  unicorn
}: UIImage & BlockProps) =>
  <img 
    src={src}
    alt={alt}
    css={css(unicorn)}
    width={calcSize('w', size)}
    height={calcSize('h', size)}
  />
