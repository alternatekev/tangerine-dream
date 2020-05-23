import React from 'react'
import {Context as ResponsiveContext} from 'react-responsive'
import App, {AppContext} from 'next/app'
import {CacheProvider} from '@emotion/core'
import {cache} from 'emotion'
//tslint:disable-next-line no-import-side-effect
import 'react-slidedown/lib/slidedown.css' 
//tslint:disable-next-line no-import-side-effect
import 'react-medium-image-zoom/dist/styles.css'

interface WTFProps {
  pageProps: any //tslint:disable-line no-any
}

function MyApp(props: AppContext & WTFProps) {
  const {Component, pageProps} = props

  return (
    <ResponsiveContext.Provider value={{width: 960}}>
      <CacheProvider value= { cache }>
        <Component {...pageProps} />
      </CacheProvider>
    </ResponsiveContext.Provider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return {...appProps}
}

export default MyApp
