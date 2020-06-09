import {FC} from 'react'

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
    ...t.br__bottom,
    borderTop: 0,
    ...shadow(theme)[3]
  }
})

interface Props extends BlockProps {
  viewport: Viewport 
  open?: boolean
}

export const Sheet: FC<Props> = ({
  children,
  level,
  viewport,
  open
}: Props) => {
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme)

  return (
    <>
      <Card
        unicorn={styles.SheetBackdrop}
        level={7}
        fullBleed
        borderless
      >
        <Card unicorn={styles.SheetCard} level={5}>
          {children}
        </Card>
      </Card>
    </>
  )
}
 
