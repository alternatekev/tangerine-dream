import {FC} from 'react'
import {DragDropContext as BDNDragDropContext, DropResult} from 'react-beautiful-dnd'

import {
  EditPageButtons, 
  ConfiguratorDropZones
} from '@td/globals'
import { Pages, Viewport, ThemeState } from '@td/types'
import {css, prepareStyles, transition, useTheme} from '@td/styles'

const getStyles = (theme: ThemeState, saving: boolean, touched: boolean) => {
  const kind = saving ? 'saving' : touched ? 'touched' : 'saved'

  const borderColors = {
    saved: theme.colors.primary500,
    saving: theme.colors.warning500,
    touched: theme.colors.secondary500
  }

  return prepareStyles({
    PageEditor: {
      ...transition,
      outlineOffset: -2.5,
      width: '100vw',
      height: '100vh',
    },
    isDisplayed: {
      outline: `5px solid ${borderColors[kind]}`,
    },
  })
}

interface Props {
  editing?: boolean
  menuDividers?: number[]
  page: Pages
  configLocation: Viewport
  config: any
  saving?: boolean
  touched?: boolean
  onDragEnd(e: DropResult): void
  onClick(contentType?: string | undefined): (event: MouseEvent | TouchEvent) => void
  setEditing(): void
}

export const DragDropContext: FC<Props> = ({
  onDragEnd,
  onClick,
  setEditing,
  config,
  page,
  saving,
  touched,
  editing,
  configLocation,
  menuDividers
}: Props) => {
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme, saving, touched)

  return (
    <BDNDragDropContext
      onDragEnd={onDragEnd}
    >
      <div
        css={css(
          styles.PageEditor,
          editing && styles.isDisplayed
        )}
      >
        <EditPageButtons
          editing={editing}
          setEditing={setEditing}
        />
        <ConfiguratorDropZones
          menuDividers={menuDividers}
          page={page}
          configLocation={configLocation}
          onClick={onClick}
          config={config}
        />
      </div>
    </BDNDragDropContext>

  )
}