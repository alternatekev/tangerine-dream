import React, {Component} from 'react'
import {ThemeProvider} from 'emotion-theming'
import Head from 'next/head'

import {Breakpoints} from '@td/types'

import {
  css, 
  Theme,
  prepareStyles, 
  calculateColorSteps,
  t,
  DerivedTheme,
  themify, 
} from '@td/styles'

interface Props {
  title?: string
  compact?: boolean
  invertedMenu?: boolean
  image?: any // tslint:disable-line no-any
  theme: Theme
  header?: string
  children?(theme: DerivedTheme): JSX.Element
}

interface State {
  currentTheme: DerivedTheme,
}

const getStyles = (image: any, themeContext: DerivedTheme) => { // tslint:disable-line no-any

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

    const currentTheme = themify(props.theme)
    console.log(currentTheme)

    this.state = {currentTheme}
  }

  setTheme = (theme: DerivedTheme) => {
    this.setState({currentTheme: theme})
  }

  render() {
   
    const {
      children, 
      image, 
      title, 
    } = this.props
    const {currentTheme} = this.state
    const styles = getStyles(image, currentTheme)

    return (
      <>
        <Head>
          <style type="text/css" media="screen">{`
            body {${styles.body.styles}};
          `}</style>
          <title>Alternate.org // {title}</title>
        </Head>
        <main id="Page" css={css(styles.Page)}>
          <ThemeProvider theme={currentTheme}>
            <article css={css(styles.PageChildren)} id="PageChildren">
              {children && typeof children === 'function' ? children(currentTheme) : children}
            </article>
          </ThemeProvider>
        </main>
      </>
    )
  }
}
