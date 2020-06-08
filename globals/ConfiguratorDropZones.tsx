import {FC} from 'react'
import {Droppable, Draggable} from 'react-beautiful-dnd'

import {Viewport} from '@td/types'
import {ConfiguratorDropZone} from '@td/components'
import {Configurator} from '@td/globals'

interface Props {
  configLocation: Viewport
  config?: any //tslint:disable-line no-any
}

const configurator = (configLocation: Viewport, config: any) => ( //tslint:disable-line no-any
  <Draggable
    draggableId="configurator"
    index={0}>
    {(dragProvided, dragSnapshot) =>
      <Configurator
        config={config}
        dragging={dragSnapshot.isDragging}
        draggingViewport={dragSnapshot.draggingOver as Viewport}
        viewport={configLocation}
        {...dragProvided}
      />
    }
  </Draggable>
)

export const ConfiguratorDropZones: FC<Props> = ({
  configLocation,
  config
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
              {configLocation === vvp && configurator(configLocation, config)}
            </ConfiguratorDropZone>
          }
        </Droppable>
      )
    }))}
  </>
