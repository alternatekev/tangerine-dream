import {FC} from 'react'
import {DraggableProvided} from 'react-beautiful-dnd'

import { 
  useTheme, 
} from '@td/styles'
import {
  Card, 
} from '@td/components'
import {
  Viewport,
} from '@td/types'
import {getStyles} from './styles'
import {DragHandle} from './DragHandle'
import {ConfiguratorMenu} from './ConfiguratorMenu'

interface Props extends DraggableProvided {
  dragging?: boolean
  viewport: Viewport
  popover?: string
  draggingViewport?: Viewport
  popoverId?: string
  menuDividers?: number[]
  config?: any // tslint:disable-line no-any
  onClick(contentType?: string): (event: MouseEvent | TouchEvent) => void
}

export const Configurator: FC<Props> = ({
  innerRef,
  dragging,
  menuDividers,
  viewport,
  draggingViewport,
  draggableProps,
  dragHandleProps,
  popover,
  onClick,
  popoverId,
  config
}: Props) => {
  const styles = getStyles(useTheme(), dragging)
  const viewportStyles = draggingViewport 
    ? [styles[`dragging${draggingViewport as string}`], styles.isDroppable] 
    : [styles[viewport as string]]

  const menuOrientation = (viewport === Viewport.Top || viewport === Viewport.Bottom) ? styles.isHorizontal : styles.isVertical

  return (
    <div
      ref={innerRef}
      {...draggableProps}
    >
      <Card
        unicorn={[styles.Configurator, ...viewportStyles, menuOrientation]}
        width={150}
        borderless
        level={dragging ? 1 : 2}
      > 
        <DragHandle 
          dragHandleProps={dragHandleProps}
          viewport={viewport}
        />
        <ConfiguratorMenu 
          popover={popover}
          popoverId={popoverId}
          viewport={viewport}
          config={config}
          onClick={onClick}
          menuDividers={menuDividers}
        />
      </Card>
    </div>
  )
}

