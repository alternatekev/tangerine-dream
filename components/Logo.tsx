import {FC} from 'react'

import {UIImage, Shapes, Renderable, ImageSize} from '@td/types'
import {t, prepareStyles, css} from '@td/styles'
import {Image, ConditionalWrap, calcSize} from './'

const getStyles = (size?: ImageSize) => {

  return prepareStyles({
    ShapedLogo: {
      width: calcSize('w', size),
      height: calcSize('h', size)
    },
    isCircle: {
      ...t.br__pill
    },
    isRoundRect: {
      ...t.br
    }
  }
)}

export interface LogoProps extends UIImage {
  shape?: Shapes
}

const wrapWithShape = (shape?: Shapes, size?: ImageSize) => (children: Renderable) => {
  const styles = getStyles(size)

  return (
  <figure css={css([
    styles.ShapedLogo,
    shape === Shapes.Circle && styles.isCircle,
    shape === Shapes.RoundRect && styles.isRoundRect
  ])}>
    {children}
  </figure>
)}

export const Logo: FC<LogoProps> = ({
  shape, 
  ...rest
}: LogoProps) =>
  <ConditionalWrap
    condition={!!shape}
    wrap={wrapWithShape(shape, rest.size)}
  >
    <Image 
      {...rest}
    />
  </ConditionalWrap>
