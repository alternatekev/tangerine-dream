import {FC, useRef} from 'react'
import {css, keyframes} from '@emotion/core'

import {
  BlockProps,
  Viewport
} from '@td/types'
import {
  prepareStyles,
  t,
  shadow,
  useTheme,
  ThemeState
} from '@td/styles'
import {
  Card
} from '@td/components'

const getStyles = (theme: ThemeState) => prepareStyles({
  SheetBackdrop: {
    ...t.aspect_ratio__object,
    opacity: 0.5
  },
  SheetCard: {
    width: 500,
    margin: '2px auto',
    ...t.br2,
    ...t.br__bottom,
    borderTop: 0,
    ...shadow(theme)[3],
  }
})

const slide = keyframes`
  from {
    transform: translate3d(0,-500px,0);
  }
  to {
    transform: translate3d(0,0,0)
  }
`

interface Props extends BlockProps {
  viewport: Viewport 
  open?: boolean
  onClose(e: MouseEvent | TouchEvent): void
}

export const Sheet: FC<Props> = ({
  children,
  level,
  viewport,
  onClose,
  open
}: Props) => {
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme)
  const ref = useRef(null)

  return (

      <Card
        unicorn={styles.SheetBackdrop}
        fadeIn
        level={7}
        fullBleed
        borderless
        onClick={onClose}
      >
      <div css={css`
        animation: ${slide} 100ms ease-in-out normal;
      `}>
        <Card 
          ref={ref}
          unicorn={styles.SheetCard} 
          level={2}
        >
          {children}
        </Card>
      </div>
    </Card>
  )
}
 
