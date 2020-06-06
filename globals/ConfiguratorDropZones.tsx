import {FC} from 'react'
import {Droppable, Draggable} from 'react-beautiful-dnd'

import {Viewport} from '@td/types'
import {ConfiguratorDropZone} from '@td/components'
import {Configurator} from '@td/globals'

interface Props {
  configLocation: Viewport
}

const configurator = (configLocation: Viewport) => (
  <Draggable
    draggableId="configurator"
    index={0}>
    {(dragProvided, dragSnapshot) =>
      <Configurator
        dragging={dragSnapshot.isDragging}
        draggingViewport={dragSnapshot.draggingOver as Viewport}
        viewport={configLocation}
        {...dragProvided}
      />
    }
  </Draggable>
)

export const ConfiguratorDropZones: FC<Props> = ({
  configLocation
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
              {configLocation === vvp && configurator(configLocation)}
            </ConfiguratorDropZone>
          }
        </Droppable>
      )
    }))}
  </>
