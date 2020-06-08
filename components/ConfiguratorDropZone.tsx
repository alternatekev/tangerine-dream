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
  const offset = 50
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
      right: offset * 2,
      bottom: undefined,
      left: offset,
      width: `calc(100vw - 150px)`,
      height: offset
    },
    right: {
      top: offset,
      right: 0,
      bottom: offset,
      left: undefined,
      width: offset,
      height: fullHeight
    },
    bottom: {
      top: undefined,
      right: offset,
      bottom: 0,
      left: offset,
      width: fullWidth,
      height: offset
    },
    left: {
      top: offset,
      right: undefined,
      bottom: offset,
      left: 0,
      width: offset,
      height: fullHeight
    }
  }

  return prepareStyles({
    ConfiguratorDropZone: {
      ...t.absolute,
      ...transition,
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
