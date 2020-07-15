import {FC, ComponentType, useState, Dispatch, SetStateAction} from 'react'
import {FormikProps} from 'formik'
import {
  DragDropContext as BDNDragDropContext, 
  DropResult,
} from 'react-beautiful-dnd'

import {
  EditPageButtons, 
  ConfiguratorDropZones
} from '@td/globals'
import {
  Pages, 
  Viewport, 
  ThemeState,
  getFieldMapping,
  Dispensary,
  User,
} from '@td/types'
import {
  css, 
  prepareStyles, 
  transition, 
  useTheme
} from '@td/styles'
import {ConfiguratorPopover} from './ConfiguratorPopover'
import {formatConfiguratorLabel} from '@td/utils'


const getStyles = (theme: ThemeState, saving?: boolean, touched?: boolean) => {
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
    }
  })
}

interface Props {
  editing?: boolean
  menuDividers?: number[]
  formikProps: FormikProps<Dispensary>
  page: Pages
  user?: User
  configLocation: Viewport
  popover?: string
  popoverId?: string
  config: any // tslint:disable-line no-any 
  saving?: boolean
  touched?: boolean
  onDragEnd(e: DropResult): void
  onClose(): void
  onClick(contentType?: string | undefined): (event?: MouseEvent | TouchEvent) => void
  setEditing(): void
}

const onDragStart = (
  popoverId: string, setDragging: Dispatch<SetStateAction<string>>
) => () => {
  setDragging(popoverId)
}
const handleDragEnd = (
  setDragging: Dispatch<SetStateAction<string>>, 
  onClick: (e?: MouseEvent | TouchEvent) => void,
  onDragEnd: (e: DropResult) => void, 
  popoverId: string
) => (e: DropResult) => { 
  onDragEnd(e)
  onClick()
  setDragging('') 
}

export const DragDropContext: FC<Props> = ({
  onDragEnd,
  onClick,
  setEditing,
  formikProps,
  config,
  page,
  popoverId,
  saving,
  touched,
  editing,
  popover,
  configLocation,
  onClose,
  menuDividers
}: Props) => {
  const theme: ThemeState = useTheme()
  const [dragging, setDragging] = useState('')
  const styles = getStyles(theme, saving, touched)
  const fieldMap = getFieldMapping(popover)
  const UIComponent: ComponentType<any> | undefined = fieldMap?.component // tslint:disable-line no-any 

  return (
    <BDNDragDropContext
      onDragEnd={handleDragEnd(setDragging, onClick(popoverId), onDragEnd, popoverId as string)}
      onDragStart={onDragStart(popoverId as string, setDragging)}
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
          popover={popover}
          popoverId={popoverId}
          configLocation={configLocation}
          onClick={onClick}
          config={config}
        />
        {popover && UIComponent && 
          <ConfiguratorPopover
            level={dragging ? 1 : 2}
            dragging={dragging !== ''}
            onClose={onClose}
            viewport={configLocation}
          >
            <UIComponent 
              title={popoverId && formatConfiguratorLabel(popoverId)}
              formikProps={formikProps} 
            />
          </ConfiguratorPopover>
        }
      </div>
    </BDNDragDropContext>
  )
}
