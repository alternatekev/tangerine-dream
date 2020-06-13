import {Component} from 'react'
import {SlideDown} from 'react-slidedown'
import {DragDropContext, DropResult} from 'react-beautiful-dnd'

import {
  withTheme, 
  ThemeProps, 
  css, 
  t, 
  prepareStyles, 
  transition
} from '@td/styles'
import {
  EditorState, 
  Viewport,
  FieldOption
} from '@td/types'
import {
  ConfiguratorDropZones,
  Sheet,
  EditPageButtons
} from '@td/globals'
import {
  TextField
} from '@td/components'

interface Props extends ThemeProps {
  editing?: boolean
  menuDividers?: number[]
  config: any //tslint:disable-line no-any
  setEditing(): void
}

interface PageEditorState extends EditorState {
  configLocation: Viewport
  sheet?: Viewport
}

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
      config, 
      menuDividers,
      setEditing
    } = this.props
    const {
      configLocation, 
      sheet
    } = this.state
    const styles = this.getStyles()
    

    return(
      <div css={css(styles.SlideOuter)}>
        <div css={css(styles.SlideOuter, styles.noBorder)}>
          <SlideDown className="slide-down">
            {editing && 
            <>
              <DragDropContext 
                onDragEnd={this.onDragEnd}
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
                    configLocation={configLocation}
                    onClick={this.onClick}
                    config={config}
                  />
                </div>
              </DragDropContext>
              {sheet &&
                <Sheet
                  level={6}
                  onClose={this.onClick()}
                  viewport={Viewport.Top}
                >
                  <TextField 
                    label="Page Title"
                    name="pageTitle" 
                    block
                    autoFocus
                    setFieldValue={this.setFieldValue} 
                  />
                </Sheet>
               }
            </>
          } 
          </SlideDown>
        </div>
      </div>
    )
  }

  private onClick = (contentType?: string) => (_: MouseEvent | TouchEvent) => {
    if(contentType === 'PageTitle') {
      this.setState({
        sheet: Viewport.Top
      })
    } else {
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

  private getStyles = () => {
    const {theme} = this.props
    const {saving, touched} = this.state
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
      SlideOuter: {
        ...t.fixed,
        width: '100vw',
        height: '100vh',
        zIndex: 800,
        pointerEvents: 'none'
      },
      isDisplayed: {
        outline: `5px solid ${borderColors[kind]}`,
      },
      noBorder: {
        outline: 0,
        zIndex: 1,
        pointerEvents: 'auto',
        height: 'auto'
      }
    })
  }
}

export const PageEditor = withTheme(UnthemedPageEditor)
