import {FC} from 'react'

import {UIImage, Shapes, Renderable, ImageSize, BlockProps, Level} from '@td/types'
import {t, prepareStyles, css} from '@td/styles'
import {Image, ConditionalWrap, calcSize} from './'

const getStyles = (size?: ImageSize, weighted?: Level) => {

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
    },
    isWeighted: {
      ...t[`mb${weighted}`]
    }
  }
)}

export interface LogoProps extends UIImage, BlockProps {
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
  weighted,
  ...rest
}: LogoProps) =>
  <ConditionalWrap
    condition={!!shape}
    wrap={wrapWithShape(shape, rest.size)}
  >
    <Image 
      {...rest}
      unicorn={weighted ? getStyles(undefined, weighted).isWeighted : undefined}
    />
  </ConditionalWrap>
