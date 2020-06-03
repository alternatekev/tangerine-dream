import React, {Component} from 'react'
import {ThemeProvider} from 'emotion-theming'
import Head from 'next/head'

import {Breakpoints, UITheme} from '@td/types'

import {
  css, 
  Theme,
  prepareStyles, 
  t,
  DerivedTheme,
  themify, 
} from '@td/styles'

interface Props {
  title?: string
  compact?: boolean
  uiTheme: UITheme
  invertedMenu?: boolean
  image?: any // tslint:disable-line no-any
  theme: Theme
  header?: string
  children?(theme: DerivedTheme): JSX.Element
}

interface State {
  colors: DerivedTheme,
  ui: UITheme
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
      maxWidth: 960,
      marginLeft: 'auto',
      marginRight: 'auto',
      transition: 'all 100ms ease-in-out',
      [Breakpoints.Small]: {
        ...t.pa1
      }
    },
    PageChildren: {
      ...t.flex,
      ...t.flex_column,
      zIndex: 1,
      ...t.relative,
    },
  })
}

export class Page extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const colors = themify(props.theme)
    this.state = { 
      colors, 
      ui: props.uiTheme
    }
  }

  setTheme = (theme: DerivedTheme) => {
    this.setState({colors: theme})
  }

  render() {
   
    const {
      children, 
      image, 
      title, 
    } = this.props
    const {colors} = this.state
    const styles = getStyles(image, colors)

    return (
      <>
        <Head>
          <style type="text/css" media="screen">{`
            body {${styles.body.styles}};
          `}</style>
          <title>{title}</title>
        </Head>
        <main id="Page" css={css(styles.Page)}>
          <ThemeProvider theme={this.state}>
            <article css={css(styles.PageChildren)} id="PageChildren">
              {children && typeof children === 'function' ? children(colors) : children}
            </article>
          </ThemeProvider>
        </main>
      </>
    )
  }
}
