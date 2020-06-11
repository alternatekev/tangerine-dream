import {FC} from 'react'
import {DraggableProvidedDragHandleProps} from 'react-beautiful-dnd'
import DragIcon from 'mdi-react/DragIcon'

import {Viewport} from '@td/types'
import {
  t,
  prepareStyles,
  css,
} from '@td/styles'
import {Button} from '@td/components'
import {labelPlacement} from './'

const styles = prepareStyles({
  DragHandleVertical: {
    ...t.mt1,
    opacity: 0.5,
    cursor: 'grab'
  },
  DragHandleHorizontal: {
    ...t.ml1,
    opacity: 0.5,
    transform: 'rotate(90deg)',
    cursor: 'grab'
  }
})

interface Props {
  dragHandleProps?: DraggableProvidedDragHandleProps
  viewport: Viewport
}

export const DragHandle: FC<Props> = ({
  dragHandleProps,
  viewport,
}: Props) =>
  <div
    {...dragHandleProps}
    css={css(
      (viewport === Viewport.Top || viewport === Viewport.Bottom)
        ? styles.DragHandleVertical
        : styles.DragHandleHorizontal
    )}
  >
    <Button
      hoverLabel={labelPlacement[viewport]}
      inverted
      draggable
      fullBleed
      compact
      level={0}
      unicorn={viewport === Viewport.Bottom || viewport === Viewport.Top ? styles.DragHandleHorizontal : styles.DragHandleVertical}
      icon={
        <DragIcon />
      }
    >
      Drag to reposition
    </Button>
  </div>
