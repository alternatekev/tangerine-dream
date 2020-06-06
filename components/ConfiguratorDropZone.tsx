import {FC} from 'react'
import {DroppableProvided} from 'react-beautiful-dnd'

import {t, css, prepareStyles, withTheme, ThemeProps, ThemeState, transition} from '@td/styles'
import {Renderable} from '@td/types'

import {Viewport} from '@td/types'

interface Props extends ThemeProps {
  viewport: Viewport
  provided: DroppableProvided
  open?: boolean
  children?: Renderable
  draggingOver?: boolean
}

const getStyles = ({colors}: ThemeState, viewport: Viewport) => {

  return prepareStyles({
    ConfiguratorDropZone: {
      ...t.absolute,
      ...transition,
      backgroundColor: colors.white500_0,
      top: viewport !== Viewport.Bottom ? 0 : undefined,
      left: viewport !== Viewport.Right ? 0 : undefined,
      right: viewport !== Viewport.Left ? 0 : undefined,
      bottom: viewport !== Viewport.Top ? 0 : undefined,
      width: viewport === Viewport.Top || viewport === Viewport.Bottom ? '100vw' : 50,
      height: viewport === Viewport.Left || viewport === Viewport.Right ? `100vh` : 50,
    },
    isOpen: {
      width: viewport === Viewport.Top || viewport === Viewport.Bottom ? '100vw' : 150,
      height: viewport === Viewport.Top || viewport === Viewport.Bottom ? 150 : '100vh',
    },
    isBeingDraggedOver: {
      backgroundColor: colors.button500_25,
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
