import {Component} from 'react'
import {SlideDown} from 'react-slidedown'
import {DropResult} from 'react-beautiful-dnd'
import {Formik} from 'formik'

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
  Dispensary,
  Pages,
} from '@td/types'
import {
  DragDropContext,
  PageTitleField
} from '@td/globals'

interface Props extends ThemeProps {
  editing?: boolean
  menuDividers?: number[]
  page: Pages
  config: any //tslint:disable-line no-any
  setEditing(): void
}

interface PageEditorState extends EditorState {
  configLocation: Viewport
  sheet?: Viewport
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
      configLocation: Viewport.Left 
    }
  }

  render() {
    const {
      editing, 
      page,
      config, 
      menuDividers,
      setEditing
    } = this.props
    const {
      configLocation, 
      sheet
    } = this.state
    const initialValues: Dispensary = config

    return(
      <div css={css(styles.SlideOuter)}>
        <div css={css(styles.SlideOuter, styles.noBorder)}>
          <Formik
            initialValues={initialValues}
            onSubmit={this.onSubmit}
          >
           {formikProps => 
              <SlideDown className="slide-down">
                {editing && 
                  <>
                    <DragDropContext
                      onDragEnd={this.onDragEnd}
                      editing={editing}
                      setEditing={setEditing}
                      page={page}
                      menuDividers={menuDividers}
                      configLocation={configLocation}
                      config={config}
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
           }
          </Formik>
        </div>
      </div>
    )
  }

  private onSubmit = (values: Dispensary) => {
    // hi
  }

  private onClick = (contentType?: string) => (_: MouseEvent | TouchEvent) => {

    switch( contentType) {
      case 'PageTitle':
        this.setState({
          sheet: Viewport.Top
        })

        return false
      default:
        this.setState({
          sheet: undefined
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
