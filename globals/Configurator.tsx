import {FC} from 'react'
import {DraggableProvided} from 'react-beautiful-dnd'

import {
  prepareStyles, 
  shadow, 
  useTheme, 
  t
} from '@td/styles'
import {
  Card, 
  Button,
  Menu,
  Capitalize
} from '@td/components'
import {
  ThemeState, 
  Viewport,
  lookUpField,
  getType,
  Orientation,
  Placement,
} from '@td/types'
import {formatConfiguratorLabel} from '@td/utils'

const getStyles = (theme: ThemeState, dragging?: boolean) => {
  const dropShadow = dragging ? shadow(theme)[4] : shadow(theme)[0]

  return (prepareStyles({
    Configurator: {
      ...dropShadow,
      ...t.relative,
      color: theme.colors.white500
    },
    top: {
      width: 'calc(100vw - 150px)',
      height: 50,
      top: 2,
      left: 2,
      border: `1px ${theme.colors.primary500_25} solid`,
      ...t.bt0
    },
    bottom: {
      width: 'calc(100vw - 100px)',
      height: 50,
      bottom: 2,
      left: 2,
      border: `1px ${theme.colors.primary500_25} solid`,
      ...t.bb0
    },
    left: {
      width: 50,
      height: 'calc(100vh - 100px)',
      top: 2,
      left: 2,
      border: `1px ${theme.colors.primary500_25} solid`,
      ...t.bl0
    },
    right: {
      width: 50,
      height: 'calc(100vh - 100px)',
      right: 2,
      top: 0,
      border: `1px ${theme.colors.primary500_25} solid`,
      ...t.br0
    },
    isDroppable: {
      opacity: 0.5,
      ...t.fixed,
    },
  }))
}

interface Props extends DraggableProvided {
  dragging?: boolean
  viewport: Viewport
  draggingViewport?: Viewport
  menuDividers?: number[]
  config?: any // tslint:disable-line no-any
}

export const Configurator: FC<Props> = ({
  innerRef,
  dragging,
  menuDividers,
  viewport,
  draggingViewport,
  draggableProps,
  dragHandleProps,
  config
}: Props) => {
  const styles = getStyles(useTheme(), dragging)
  const viewportStyles = draggingViewport 
    ? [styles[draggingViewport as string], styles.isDroppable] 
    : [styles[viewport as string]]
  const labelPlacement = {
    [Viewport.Top]: Placement.Bottom,
    [Viewport.Right]: Placement.Left,
    [Viewport.Bottom]: Placement.Top,
    [Viewport.Left]: Placement.Right
  }

  return (
    <div
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
    >
      <Card
        unicorn={[styles.Configurator, ...viewportStyles]}
        width={150}
        borderless
        level={dragging ? 6 : 7}
      > 
        <Menu 
          dividers={menuDividers}
          itemSpacing={3}
          orientation={viewport === Viewport.Bottom || viewport === Viewport.Top ? Orientation.Horizontal : undefined}>
          {Object.keys(config).map((c, i) => {
            const type = getType(config[c])
            const Icon = lookUpField(type)?.icon
            
            return Icon 
              ? <Button 
                  key={`${type}_${i}`}
                  hoverLabel={labelPlacement[viewport]}
                  fullBleed
                  inverted
                  size={1.5}
                  font={{
                    weight: 100
                  }}
                  compact
                  icon={
                    <Icon
                      size={25}
                    />
                  }
                  level={0}
                >
                  <Capitalize>
                    {formatConfiguratorLabel(c)}
                  </Capitalize>
                </Button>
              : null
            })
          }
        </Menu>
      </Card>
    </div>
  )
}

