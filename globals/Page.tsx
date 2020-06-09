import React, {Component} from 'react'
import {ThemeProvider} from 'emotion-theming'
import Head from 'next/head'

import {PageEditor} from './PageEditor'
import {Sheet} from './Sheet'
import {
  Breakpoints, 
  UITheme, 
  ThemeState, 
  PageLayout,
  PageTemplate,
  Viewport
} from '@td/types'

import {
  css, 
  Theme,
  prepareStyles, 
  t,
  DerivedTheme,
  themify, 
} from '@td/styles'

import {EditPageButtons} from './EditPageButtons'

interface Props {
  title?: string
  name: string
  pageLayout: PageLayout
  menuDividers?: number[]
  captured?: boolean
  compact?: boolean
  uiTheme: UITheme
  invertedMenu?: boolean
  image?: any // tslint:disable-line no-any
  theme: Theme
  header?: string
  editing?: boolean
  config?: any //tslint:disable-line no-any
  children?(theme: DerivedTheme): JSX.Element
}

const getStyles = (image: any, theme: DerivedTheme) => { // tslint:disable-line no-any

  return prepareStyles({
    body: {
      backgroundImage: `url(${image.src})`,
      ...t.cover,
      ...t.bg_center,
      minHeight: '100vh'
    },
    Page: {
      ...t.pa5,
      ...t.pb0,
      ...t.mb5,
      minHeight: '100vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      transition: 'all 100ms ease-in-out',
      [Breakpoints.Small]: {
        ...t.pa1
      }
    },
    isLimited: {
      maxWidth: 960,
    },
    isFullBleed: {
      maxWidth: '100vw',
      ...t.pa0,
      ...t.ma0
    },
    isCaptured: {
      ...t.flex,
      maxWidth: 500,
      ...t.justify_center,
      ...t.items_center,
      ...t.align_center,
      margin: '0 auto',
      ...t.pa0
    },
    PageChildren: {
      ...t.flex,
      ...t.flex_column,
      zIndex: 1,
      ...t.relative,
      transformStyle: 'preserve-3d',
    },
  })
}

export class Page extends Component<Props, ThemeState> {
  constructor(props: Props) {
    super(props)

    const colors = themify(props.theme)
    this.state = { 
      editing: props.editing || false,
      colors, 
      ui: props.uiTheme
    }
  }

  setTheme = (theme: ThemeState) => {
    this.setState({
      colors: theme.colors,
      ui: theme.ui
    })
  }

  setEditing = () => { this.setState(prevState => ({editing: !prevState.editing}))}

  render() {
   
    const {
      children, 
      pageLayout,
      menuDividers,
      name,
      image, 
      title, 
      config,
    } = this.props
    const {
      colors, 
      editing
    } = this.state
    const styles = getStyles(image, colors)

    return (
      <>
        <Head>
          <style type="text/css" media="screen">{`
            body {${styles.body.styles}};
          `}</style>
          <title>{name} / {title || 'Untitled Page'}</title>
        </Head>
        <main 
          id="Page" 
          css={css(
            styles.Page, 
            pageLayout.template === PageTemplate.Captured && styles.isCaptured,
            pageLayout.template === PageTemplate.FullBleed && styles.isFullBleed,
            pageLayout.template === PageTemplate.Limited && styles.isLimited
          )}
        >
          <ThemeProvider theme={this.state}>
            <PageEditor menuDividers={menuDividers} config={config} editing={editing} />
            <EditPageButtons 
              setEditing={this.setEditing} 
              editing={editing} 
            />
            <article 
              css={css(styles.PageChildren)} 
              id="PageChildren"
            >
              {children && typeof children === 'function' ? children(colors) : children}
             
            </article>
            
          </ThemeProvider>
        </main>
      </>
    )
  }
}
