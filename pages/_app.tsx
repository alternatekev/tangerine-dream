import React from 'react'
import App, {AppContext} from 'next/app'
import {CacheProvider} from '@emotion/core'
import {cache} from 'emotion'
//tslint:disable-next-line no-import-side-effect
import 'react-slidedown/lib/slidedown.css' 

interface WTFProps {
  pageProps: any //tslint:disable-line no-any
}

function MyApp(props: AppContext & WTFProps) {
  const {Component, pageProps} = props

  return (
    <CacheProvider value= { cache }>
        <Component {...pageProps} />
    </CacheProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return {...appProps}
}

export default MyApp
