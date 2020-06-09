import {FC} from 'react'
import {DraggableProvided} from 'react-beautiful-dnd'
import DragIcon from 'mdi-react/DragIcon'

import {
  prepareStyles, 
  shadow, 
  useTheme, 
  css,
  t,
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
      ...t[`br${theme.ui.card.borderRadius}`],
      color: theme.colors.white500,
      ...t.flex,
      ...t.items_center
    },
    isVertical: {
      flexDirection: 'column',
      ...t.align_center
    },
    isHorizontal: {
      flexDirection: 'row'
    },
    top: {
      width: 'calc(100vw - 54px)',
      height: 50,
      top: 2,
      left: 2,
      border: `1px ${theme.colors.primary500_25} solid`,
      ...t.bt0,
      ...t.br__bottom,
      borderBottomRightRadius: 0,
    },
    draggingtop: {
      width: 150,
      height: 50,
      ' ul': {
        opacity: 0
      }
    },
    bottom: {
      width: 'calc(100vw - 100px)',
      height: 50,
      bottom: 2,
      left: 2,
      border: `1px ${theme.colors.primary500_25} solid`,
      ...t.bb0,
      ...t.br__top,
      ...t.column
    },
    draggingbottom: {
      width: 150,
      height: 50,
      ' ul': {
        opacity: 0
      }
    },
    left: {
      width: 50,
      height: 'calc(100vh - 100px)',
      top: 2,
      left: 2,
      border: `1px ${theme.colors.primary500_25} solid`,
      ...t.bl0,
      ...t.br__right,
    },
    draggingleft: {
      width: 50,
      height: 150,
      ' ul': {
        opacity: 0
      }
    },
    right: {
      width: 50,
      height: 'calc(100vh - 100px)',
      right: 2,
      top: 0,
      border: `1px ${theme.colors.primary500_25} solid`,
      borderRightWidth: 0,
      ...t.br__left,
    },
    draggingright: {
      width: 50,
      height: 150,
      ' ul': {
        opacity: 0
      }
    },
    isDroppable: {
      opacity: 0.5,
      ...t.fixed,
    },
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
    ? [styles[`dragging${draggingViewport as string}`], styles.isDroppable] 
    : [styles[viewport as string]]
  const labelPlacement = {
    [Viewport.Top]: Placement.Bottom,
    [Viewport.Right]: Placement.Left,
    [Viewport.Bottom]: Placement.Top,
    [Viewport.Left]: Placement.Right
  }
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
        level={dragging ? 6 : 7}
      > 
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
                  inverted
                  size={1.5}
                  font={{
                    weight: 100
                  }}
                  fullBleed
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

