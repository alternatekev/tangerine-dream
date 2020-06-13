import {FC, useRef} from 'react'
import {css, keyframes} from '@emotion/core'
import useOnClickOutside from 'use-onclickoutside'

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
    zIndex: 1000
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

export const preventDefault = (e: MouseEvent | TouchEvent) => {e.preventDefault()}

export const Sheet: FC<Props> = ({
  children,
  level = 5,
  viewport,
  onClose,
  open
}: Props) => {
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme)
  const ref = useRef(null)
  useOnClickOutside(ref, onClose)

  return (
    <>
       <Card
        unicorn={styles.SheetBackdrop}
        fadeIn
        level={7}
        fullBleed
        borderless
      >
      <div css={css`
        animation: ${slide} 100ms ease-in-out normal;
      `}>
        <Card 
          outerRef={ref}
          onClick={preventDefault}
          unicorn={styles.SheetCard} 
          level={level}
        >
          {children}
        </Card>
      </div>
    </Card>
    </>
  )
}
 
