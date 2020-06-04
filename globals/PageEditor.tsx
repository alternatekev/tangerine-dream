import {Component} from 'react'

import {withTheme, ThemeProps, css, t, prepareStyles, transition} from '@td/styles'
import {EditorState, Viewport} from '@td/types'
import {Configurator} from './Configurator'
import {ConfiguratorDropZone} from '@td/components'

interface Props extends ThemeProps {}

class UnthemedPageEditor extends Component<Props, EditorState> {
  constructor(props: Props) {
    super(props)

    this.state = {
      saved: true,
      saving: false,
      touched: false
    }
  }

  render() {
    const styles = this.getStyles()

    return(
      <div css={css(styles.PageEditor)}>
        <Configurator />
        <ConfiguratorDropZone viewport={Viewport.Top} />
        <ConfiguratorDropZone viewport={Viewport.Right} />
        <ConfiguratorDropZone viewport={Viewport.Bottom} />
        <ConfiguratorDropZone viewport={Viewport.Left} />
      </div>
    )
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
        ...t.aspect_ratio__object,
        ...transition,
        outline: `5px solid ${borderColors[kind]}`,
        outlineOffset: -5
      }
    })
  }
}

export const PageEditor = withTheme(UnthemedPageEditor)
