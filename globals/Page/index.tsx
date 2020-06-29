import React, {Component} from 'react'
import {ThemeProvider} from 'emotion-theming'
import {
  Formik, 
  FormikProps
} from 'formik'
import fetch from 'isomorphic-fetch'

import {PageEditor} from '../PageEditor'
import {
  ThemeState, 
  PageTemplate,
  PageProps,
  AuthorizedDispensary,
  PageContext,
  Alignment,
  VerticalAlignment,
} from '@td/types'
import {PageHead} from './PageHead'
import {
  css, 
  themify, 
} from '@td/styles'
import {Login} from '@td/utils'

import {getStyles} from './styles'

import {EditPageButtons} from '../EditPageButtons'

interface PageState extends ThemeState {
  token?: string
}

export class Page extends Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props)

    const colors = themify(props.config.colors)
    this.state = { 
      editing: props.editing || false,
      colors, 
      ui: props.config.ui
    }
  }

  render() {
   
    const {
      children, 
      menuDividers,
      page,
      user,
      userMeta,
      prodUrl,
      wpUrl,
      config,
    } = this.props
    const {
      colors, 
      editing,
    } = this.state
    const initialValues: AuthorizedDispensary = {
      ...config,
      prodUrl,
      wpUrl
    }

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
          } = values.pages[page]

          const styles = getStyles(backgroundImage, colors)

          return (
            <>
              <PageHead 
                name={name}
                logoImage={config.ui.logo.src}
                pageTitle={pageTitle.titleText}
                prodUrl={prodUrl}
                themeColor={colors.primary500}
                styles={styles.body.styles}
              />
              <PageContext.Provider value={page}>
                <ThemeProvider theme={this.state}>
                  <>
                    <PageEditor
                      menuDividers={menuDividers}
                      formikProps={formikProps}
                      user={user}
                      userMeta={userMeta}
                      page={page}
                      config={formikProps.values}
                      editing={editing}
                      setEditing={this.setEditing(formikProps)}
                    />
                    {!editing && user &&
                      <EditPageButtons
                        setEditing={this.setEditing(formikProps)}
                        editing={editing}
                      />
                    }
                    <main
                      id="Page"
                      css={css(
                        styles.Page,
                        pageLayout.template === PageTemplate.Captured && styles.isCaptured,
                        pageLayout.template === PageTemplate.FullBleed && styles.isFullBleed,
                        pageLayout.template === PageTemplate.Limited && styles.isLimited,
                        pageLayout.verticalAlign === VerticalAlignment.Middle && styles.isVerticallyCentered,
                        pageLayout.verticalAlign === VerticalAlignment.Bottom && styles.isVerticallyBottom,
                        pageLayout.align === Alignment.Center && styles.isHorizontallyCentered,
                        pageLayout.align === Alignment.Right && styles.isHorizontallyRight
                      )}
                    >
                      <article
                        css={css(styles.PageChildren)}
                        id="PageChildren"
                      >
                        {children && typeof children === 'function' 
                          ? children(colors, formikProps, Login.onLogin) 
                          : children
                        }
                      </article>
                    </main>
                  </>
                </ThemeProvider>
              </PageContext.Provider>
            </>
          )}
        }
      </Formik>
    )
  }

  private setEditing = (formikProps: FormikProps<AuthorizedDispensary>) => () => { 
    this.setState(prevState => ({ 
      editing: !prevState.editing 
    })) 
    formikProps.resetForm()
  }

  private onSubmit = async (values: AuthorizedDispensary) => {
    this.setState({
      editing: false,
      ui: values.ui,
      colors: themify(values.colors)
    })

    await fetch('/api/savePageEdits/age', {
      method: 'POST',
      body: JSON.stringify(values)
    })
  }
}
