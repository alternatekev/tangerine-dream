import {FC} from 'react'
import {DroppableProvided} from 'react-beautiful-dnd'

import {
  t, 
  css, 
  prepareStyles, 
  withTheme, 
  ThemeProps, 
  ThemeState, 
  transition
} from '@td/styles'
import {
  Renderable, 
  Viewport, 
  menuOffset,
  ViewportDimensions
} from '@td/types'

interface Props extends ThemeProps {
  viewport: Viewport
  provided: DroppableProvided
  open?: boolean
  children?: Renderable
  draggingOver?: boolean
}

const getStyles = ({colors}: ThemeState, viewport: Viewport) => {
  const vp = viewport as string
  const fullWidth = 'calc(100vw - 100px)'
  const fullHeight = 'calc(100vh - 100px)'
  const gradientDirection = viewport === Viewport.Top 
    ? '0deg'
    : viewport === Viewport.Bottom
      ? '-180deg'
      : viewport === Viewport.Left
        ? '-90deg'
        : '90deg'
        
  const dimensions: ViewportDimensions = {
    top: {
      top: 0,
      right: menuOffset * 2,
      bottom: undefined,
      left: menuOffset,
      width: `calc(100vw - 50px)`,
      height: menuOffset,
    },
    right: {
      top: menuOffset,
      right: 0,
      bottom: menuOffset,
      left: undefined,
      width: menuOffset,
      height: fullHeight,
    },
    bottom: {
      top: undefined,
      right: menuOffset,
      bottom: 0,
      left: menuOffset,
      width: fullWidth,
      height: menuOffset,
    },
    left: {
      top: menuOffset,
      right: undefined,
      bottom: menuOffset,
      left: 0,
      width: menuOffset,
      height: fullHeight,
    }
  }

  return prepareStyles({
    ConfiguratorDropZone: {
      ...t.absolute,
      ...transition,
      zIndex: 800,
      //@ts-ignore
      ...dimensions[vp],
      backgroundColor: colors.white500_0,
    },
    isOpen: {
      //@ts-ignore
      width: dimensions[vp].width ? Number(dimensions[vp].width) + 100 : undefined,
      //@ts-ignore
      height: dimensions[vp].height ? Number(dimensions[vp].height) + 100 : undefined,
    },
    isBeingDraggedOver: {
      backgroundImage: `linear-gradient(${gradientDirection}, ${colors.button500_25}, ${colors.button500_10})`,
    }
  })
}

const UnthemedConfiguratorDropZone: FC<Props> = ({
  viewport,
  theme,
  children,
  provided,
  draggingOver,
  open
}: Props) => {
  const styles = getStyles(theme, viewport)

  return (
    <div 
      ref={provided.innerRef}
      {...provided.droppableProps}
      css={css(
        styles.ConfiguratorDropZone, 
        draggingOver && styles.isBeingDraggedOver,
        open && styles.isOpen
      )} 
    >
      {children}
    </div>
  )
}
  

export const ConfiguratorDropZone = withTheme(UnthemedConfiguratorDropZone)
