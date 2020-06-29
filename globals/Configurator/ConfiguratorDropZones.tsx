import {FC} from 'react'
import {Droppable, Draggable} from 'react-beautiful-dnd'

import {Viewport, Pages} from '@td/types'
import {ConfiguratorDropZone} from '@td/components'
import {Configurator} from '@td/globals'

interface Props {
  configLocation: Viewport
  page: Pages
  popoverId?: string
  popover?: string
  menuDividers?: number[]
  config?: any //tslint:disable-line no-any
  onClick(contentType?: string): (event: MouseEvent | TouchEvent) => void
}

const configurator = (
  configLocation: Viewport, 
  config: any, // tslint:disable-line no-any 
  onClick: (contentType?: string) => (event: MouseEvent | TouchEvent) => void, 
  menuDividers?: number[],
  popover?: string,
  popoverId?: string
  ) => ( //tslint:disable-line no-any
  <Draggable
    draggableId="configurator"
    index={0}>
    {(dragProvided, dragSnapshot) =>
      <Configurator
        popover={popover}
        popoverId={popoverId}
        config={config}
        menuDividers={menuDividers}
        dragging={dragSnapshot.isDragging}
        draggingViewport={dragSnapshot.draggingOver as Viewport}
        viewport={configLocation}
        onClick={onClick}
        {...dragProvided}
      />
    }
  </Draggable>
)

export const ConfiguratorDropZones: FC<Props> = ({
  configLocation,
  config,
  onClick,
  popoverId,
  page,
  popover,
  menuDividers
}: Props) => 
  <>
    {Object.keys(Viewport).map((vp => {
      // @ts-ignore
      const vvp = Viewport[vp]

      return (
        <Droppable
          droppableId={vvp}
          key={vvp}
        >
          {(provided, snapshot) =>
            <ConfiguratorDropZone
              open={snapshot.isDraggingOver}
              provided={provided}
              draggingOver={snapshot.isDraggingOver}
              viewport={vvp}
            >
              {configLocation === vvp && configurator(configLocation, config.pages[page], onClick, menuDividers, popover, popoverId)}
            </ConfiguratorDropZone>
          }
        </Droppable>
      )
    }))}
  </>
