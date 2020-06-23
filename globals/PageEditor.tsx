import {Component} from 'react'
import {SlideDown} from 'react-slidedown'
import {DropResult} from 'react-beautiful-dnd'

import {
  withTheme, 
  ThemeProps, 
  css, 
  t, 
  prepareStyles, 
} from '@td/styles'
import {
  EditorState, 
  Viewport,
  FieldOption,
  Pages,
  FormProps,
  AuthorizedDispensary,
  User,
} from '@td/types'
import {
  DragDropContext,
  PageTitleField
} from '@td/globals'

interface Props extends ThemeProps, FormProps {
  editing?: boolean
  menuDividers?: number[]
  page: Pages
  config: AuthorizedDispensary
  user?: User
  setEditing(): void
}

interface PageEditorState extends EditorState {
  configLocation: Viewport
  popover?: string
  sheet?: Viewport
  popoverId?: string
}

const styles = prepareStyles({
  SlideOuter: {
    ...t.fixed,
    width: '100vw',
    height: '100vh',
    zIndex: 800,
    pointerEvents: 'none'
  },
  noBorder: {
    outline: 0,
    zIndex: 1,
    pointerEvents: 'auto',
    height: 'auto'
  }
})

class UnthemedPageEditor extends Component<Props, PageEditorState> {
  constructor(props: Props) {
    super(props)

    this.state = {
      saved: true,
      saving: false,
      touched: false,
      configLocation: Viewport.Right 
    }
  }

  render() {
    const {
      editing, 
      page,
      config, 
      user,
      formikProps,
      menuDividers,
      setEditing
    } = this.props
    const {
      configLocation, 
      sheet,
      popover,
      popoverId
    } = this.state

    return(
      <div css={css(styles.SlideOuter)}>
        <div css={css(styles.SlideOuter, styles.noBorder)}>
          <SlideDown className="slide-down">
            {editing && 
              <>
                <DragDropContext
                  onDragEnd={this.onDragEnd}
                  formikProps={formikProps}
                  editing={editing}
                  setEditing={setEditing}
                  page={page}
                  onClose={this.onClose}
                  menuDividers={menuDividers}
                  configLocation={configLocation}
                  user={user}
                  config={config}
                  popover={popover}
                  popoverId={popoverId}
                  onClick={this.onClick}
                />
                {sheet &&
                  <PageTitleField 
                    formikProps={formikProps}
                    setFieldValue={this.setFieldValue}
                    onClick={this.onClick}
                    page={page}
                  />
                }
              </>
            }
          </SlideDown>
        </div>
      </div>
    )
  }

  private onClose = () => {
    this.setState({
      sheet: undefined,
      popover: undefined,
      popoverId: undefined
    })
  }

  private onClick = (contentType?: string, contentId?: string) => (_?: MouseEvent | TouchEvent) => {
    switch (contentType) {
      case 'PageTitle':
        this.setState({
          sheet: Viewport.Top,
          popover: undefined,
          popoverId: 'pageTitle'
        })

        return false
      default:
        this.setState({
          sheet: undefined,
          popover: contentType,
          popoverId: contentId
        })
    }
  }

  private setFieldValue = (field: string, value: FieldOption | string) => () => {
    // do stuff
  }

  private onDragEnd = (e: DropResult) => {
    if (e.destination?.droppableId) {
      this.setState({
        configLocation: e.destination.droppableId as Viewport
      })
    }
  }
}

export const PageEditor = withTheme(UnthemedPageEditor)
