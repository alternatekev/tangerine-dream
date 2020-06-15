import {FC, useRef} from 'react'
import useOnClickOutside from 'use-onclickoutside'

import {Card} from '@td/components'
import {Viewport, Renderable, menuOffset, Level} from '@td/types'
import {prepareStyles, t} from '@td/styles'

interface Props {
  viewport: Viewport
  children?: Renderable
  level?: Level
  dragging?: boolean
  onClose(): void
}

const getStyles = (viewport: Viewport) => {
  const offset = menuOffset + 10
  const location = {
    [Viewport.Top]: {
      top: offset,
      left: menuOffset
    },
    [Viewport.Right]: {
      top: menuOffset,
      right: offset
    },
    [Viewport.Bottom]: {
      bottom: offset,
      left: menuOffset
    },
    [Viewport.Left]: {
      top: menuOffset,
      left: offset
    },
  }

  return prepareStyles({
    ConfiguratorPopover: {
      ...t.fixed,
      ...location[viewport]
    },
    isDragging: {
      opacity: 0.5
    }
  })
}

export const ConfiguratorPopover: FC<Props> = ({
  viewport,
  onClose,
  dragging,
  children,
  level
}: Props) => {

  const styles = getStyles(viewport)
  const ref = useRef(null)
  useOnClickOutside(ref, onClose)

  return (
    <Card
      level={level}
      fadeIn
      outerRef={dragging ? undefined : ref}
      unicorn={[styles.ConfiguratorPopover, dragging ? styles.isDragging : undefined]}
    >
      {children}
    </Card>
  )
}
 
