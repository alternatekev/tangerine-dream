import {FC} from 'react'

import {
  BlockProps,
  Viewport
} from '@td/types'
import {
  prepareStyles
} from '@td/styles'
import {
  Card
} from '@td/components'

const styles = prepareStyles({
  SheetBackdrop: {

  },
  SheetCard: {

  }
})

interface Props extends BlockProps {
  viewport: Viewport 
  open?: boolean
}

export const Sheet: FC<Props> = ({
  children,
  viewport,
  open
}: Props) => 
  <>
    <Card 
      unicorn={styles.SheetBackdrop}
      fullBleed
      borderless

    >
      <Card unicorn={styles.SheetCard}>
        {children}
      </Card>
    </Card>
  </>