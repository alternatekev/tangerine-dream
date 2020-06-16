import React, {Component} from 'react'
import {ThemeProvider} from 'emotion-theming'
import Head from 'next/head'
import {Formik, FormikProps} from 'formik'

import {PageEditor} from './PageEditor'
import {
  Breakpoints, 
  ThemeState, 
  PageTemplate,
  Pages,
  Dispensary,
  PageContext
} from '@td/types'

import {
  css, 
  prepareStyles, 
  t,
  DerivedTheme,
  themify, 
} from '@td/styles'

import {EditPageButtons} from './EditPageButtons'

interface Props {
  page: Pages
  name: string
  menuDividers?: number[]
  captured?: boolean
  compact?: boolean
  invertedMenu?: boolean
  header?: string
  editing?: boolean
  config: Dispensary //tslint:disable-line no-any
  children?(theme: DerivedTheme, formikProps: FormikProps<Dispensary>): JSX.Element
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

    const colors = themify(props.config.colors)
    this.state = { 
      editing: props.editing || false,
      colors, 
      ui: props.config.ui
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
      menuDividers,
      page,
      config,
    } = this.props
    const {
      colors, 
      editing
    } = this.state
    const initialValues: Dispensary = config

    const name = config.name
 
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.onSubmit}
      >
        {formikProps => {
          const {values} = formikProps
          const {
            pageTitle,
            backgroundImage,
            pageLayout,
          } = values[page]

          const styles = getStyles(backgroundImage, colors)
          console.log(pageTitle)

          return (
            <>
              <Head>
                <style type="text/css" media="screen">{`
                body {${styles.body.styles}};
              `}</style>
                <title>{name} / {pageTitle.titleText || 'Untitled Page'}</title>
              </Head>

                <PageContext.Provider value={page}>
                  <ThemeProvider theme={this.state}>
                    <>
                      <PageEditor
                        menuDividers={menuDividers}
                        formikProps={formikProps}
                        page={page}
                        config={config}
                        editing={editing}
                        setEditing={this.setEditing}
                      />
                      {!editing &&
                        <EditPageButtons
                          setEditing={this.setEditing}
                          editing={editing}
                        />
                      }
                      <main
                        id="Page"
                        css={css(
                          styles.Page,
                          pageLayout.template === PageTemplate.Captured && styles.isCaptured,
                          pageLayout.template === PageTemplate.FullBleed && styles.isFullBleed,
                          pageLayout.template === PageTemplate.Limited && styles.isLimited
                        )}
                      >
                        <article
                          css={css(styles.PageChildren)}
                          id="PageChildren"
                        >
                          {children && typeof children === 'function' ? children(colors, formikProps) : children}
                        </article>
                      </main>
                    </>
                  </ThemeProvider>
                </PageContext.Provider>
            </>
          )
        }
          
        }
      </Formik>
    )
  }

  private onSubmit = (values: Dispensary) => {
    // hi
  }
}
