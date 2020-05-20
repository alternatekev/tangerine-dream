import React, {Component} from 'react'
import {ThemeProvider} from 'emotion-theming'
import Head from 'next/head'

import {MediaQueryRenderer} from '@alt/components'
import {BreakpointProps, Breakpoints} from '@alt/types'

import {
  css, 
  t, 
  prepareStyles, 
  ThemeContext, 
  DerivedTheme, 
  deriveThemes, 
  seedThemes
} from '@alt/styles'
import {
  PageFooter,
  PageHeader, 
  ParallaxHeader
} from '@alt/views'

interface Props {
  title?: string
  compact?: boolean
  invertedMenu?: boolean
  image?: any // tslint:disable-line no-any
  theme?: ThemeContext
  header?: string
  children?(theme: DerivedTheme): JSX.Element
}

interface State {
  currentTheme: DerivedTheme,
}

const getStyles = (image: any, themeContext: DerivedTheme) => { // tslint:disable-line no-any

  return prepareStyles({
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

const allDerivedThemes = deriveThemes(seedThemes)

export class Page extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const currentTheme = allDerivedThemes[props.theme || ThemeContext.Home]

    this.state = {currentTheme}
  }

  setTheme = (theme: DerivedTheme) => {
    this.setState({currentTheme: theme})
  }

  render() {
   
    const {
      children, 
      image, 
      compact,
      invertedMenu,
      title, 
      header
    } = this.props
    const {currentTheme} = this.state
    const styles = getStyles(image, currentTheme)

    return (
      <>
        <Head>
          <style type="text/css" media="screen">{`
            body {
              background-image: linear-gradient(${currentTheme.background500}, ${currentTheme.background200});
              background-color: ${currentTheme.background500};
              min-height: 100vh;
              text-align: center;
            }
          `}
          </style>
          <title>Alternate.org // {title}</title>
        </Head>
        <main id="Page" css={css(styles.Page)}>
          <ThemeProvider theme={currentTheme}>
            <PageHeader invertedMenu={invertedMenu} />
            <ParallaxHeader compact={compact} background={header} title={title} />
            <article css={css(styles.PageChildren)} id="PageChildren">
              {children && typeof children === 'function' ? children(currentTheme) : children}
            </article>
            <MediaQueryRenderer breakpoints={BreakpointProps.NotSmall}>
              <PageFooter />
            </MediaQueryRenderer>
          </ThemeProvider>
        </main>
      </>
    )
  }
}
