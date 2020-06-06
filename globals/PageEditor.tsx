import {Component} from 'react'
import { SlideDown } from 'react-slidedown'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'

import {
  withTheme, 
  ThemeProps, 
  css, 
  t, 
  prepareStyles, 
  transition
} from '@td/styles'
import {EditorState, Viewport} from '@td/types'
import {ConfiguratorDropZones} from '@td/globals'

interface Props extends ThemeProps {
  editing?: boolean
}

interface PageEditorState extends EditorState {
  configLocation: Viewport
}

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
    const {editing,} = this.props
    const {configLocation} = this.state
    const styles = this.getStyles()
    

    return(
      <div css={css(styles.SlideOuter)}>
        <div css={css(styles.SlideOuter, styles.noBorder)}>
          <SlideDown className="slide-down">
            {editing && 
              <DragDropContext 
                onDragEnd={this.onDragEnd}
              >
                <div 
                  css={css(
                    styles.PageEditor, 
                    editing && styles.isDisplayed
                  )}
                >
                  <ConfiguratorDropZones 
                    configLocation={configLocation}
                  />
                </div>
              </DragDropContext>
          }
          </SlideDown>
          </div>
      </div>
    )
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
        zIndex: 10000,
        pointerEvents: 'none'
      },
      isDisplayed: {
        outline: `5px solid ${borderColors[kind]}`,
      },
      noBorder: {
        outline: 0,
        zIndex: 1,
        pointerEvents: 'auto'
      }
    })
  }
}

export const PageEditor = withTheme(UnthemedPageEditor)
