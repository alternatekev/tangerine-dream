import {FC} from 'react'

import {
  Menu,
  Button,
  Capitalize
} from '@td/components'
import {formatConfiguratorLabel} from '@td/utils'
import {
  Alignment,
  getType,
  Viewport,
  Orientation,
  getFieldMapping
} from '@td/types'
import {labelPlacement} from './'

interface Props {
  menuDividers?: number[]
  popover?: string
  popoverId?: string
  viewport: Viewport
  config?: any // tslint:disable-line no-any
  onClick(contentType?: string, contentId?: string): (event: MouseEvent | TouchEvent) => void
}

export const ConfiguratorMenu: FC<Props> = ({
  menuDividers,
  viewport,
  popover,
  popoverId,
  config,
  onClick
}: Props) =>
  <Menu
    dividers={menuDividers}
    itemSpacing={3}
    orientation={viewport === Viewport.Bottom || viewport === Viewport.Top ? Orientation.Horizontal : undefined}>
    {Object.keys(config).map((c, i) => {
      const type = getType(config[c])
      const Icon = getFieldMapping(type)?.icon

      console.log(`${c} / ${popoverId}`)

      return Icon
        ? <Button
            key={`${type}_${i}`}
            selected={c === popoverId}
            hoverLabel={labelPlacement[viewport]}
            alignment={Alignment.Center}
            onClick={onClick(type, c)}
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
        }
      )
    }
  </Menu>
