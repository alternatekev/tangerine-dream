import React, {Component, ReactNode} from 'react'
import {ThemeProvider} from 'emotion-theming'
import Head from 'next/head'

import {css, t, prepareStyles, ThemeContext, DerivedTheme, deriveThemes, seedThemes} from '@alt/styles'
import {PageHeader, ParallaxHeader} from '@alt/views'

interface Props {
  title?: string
  children?: ReactNode
  image?: any
  theme?: ThemeContext
}

interface State {
  currentTheme: DerivedTheme,
}

const getStyles = (image: any, themeContext: DerivedTheme) => {

  return prepareStyles({
    Page: {
      ...t.pa5,
      ...t.pb0,
      ...t.mb5,
      maxWidth: 960,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    PageChildren: {
      ...t.flex,
      ...t.flex_column,
      zIndex: 1,
      ...t.relative,
    }
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
   
    const {children, image, title} = this.props
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
        </Head>
        <main id="Page" css={css(styles.Page)}>
          <ThemeProvider theme={currentTheme}>
            <PageHeader />
            <ParallaxHeader title={title} />
            <article css={css(styles.PageChildren)} id="PageChildren">
              {children}
            </article>
          </ThemeProvider>
        </main>
      </>
    )
  }
}
