import {FC} from 'react'
import {DraggableProvided} from 'react-beautiful-dnd'

import {
  prepareStyles, 
  shadow, 
  useTheme, 
  t
} from '@td/styles'
import {Card} from '@td/components'
import {
  ThemeState, 
  Viewport
} from '@td/types'

const getStyles = (theme: ThemeState, dragging?: boolean) => {
  const dropShadow = dragging ? shadow(theme)[4] : shadow(theme)[0]

  return (prepareStyles({
    Configurator: {
      ...dropShadow,
      ...t.relative
    },
    top: {
      width: 'calc(100vw - 150px)',
      height: 50,
      top: 2,
      left: 2,
      borderBottom: `1px ${theme.colors.primary500_25} solid`
    },
    bottom: {
      width: 'calc(100vw - 100px)',
      height: 50,
      bottom: 2,
      left: 2,
      borderTop: `1px ${theme.colors.primary500_25} solid`
    },
    left: {
      width: 50,
      height: 'calc(100vh - 100px)',
      top: 2,
      left: 2,
      borderRight: `1px ${theme.colors.primary500_25} solid`
    },
    right: {
      width: 50,
      height: 'calc(100vh - 100px)',
      right: 2,
      top: 0,
      borderLeft: `1px ${theme.colors.primary500_25} solid`
    },
    isDroppable: {
      opacity: 0.5,
      ...t.absolute,
    },
  }))
}

interface Props extends DraggableProvided {
  dragging?: boolean
  viewport: Viewport
  draggingViewport?: Viewport
}

export const Configurator: FC<Props> = ({
  innerRef,
  dragging,
  viewport,
  draggingViewport,
  draggableProps,
  dragHandleProps
}: Props) => {
  const styles = getStyles(useTheme(), dragging)
  const viewportStyles = draggingViewport 
    ? [styles[draggingViewport as string], styles.isDroppable] 
    : [styles[viewport as string]]

  return (
    <div
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
    >
      {console.log(viewport)}
      <Card
        unicorn={[styles.Configurator, ...viewportStyles]}
        width={150}
        borderless
        level={dragging ? 6 : 7}
      > &nbsp;
      </Card>
    </div>
  )
}

