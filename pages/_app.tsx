import React from 'react'
import App from 'next/app'
import {CacheProvider} from '@emotion/core'
import {cache} from 'emotion'
import {VFXProvider} from 'react-vfx'

function MyApp({pageProps, Component}) {
  return (
    <CacheProvider value= { cache }>
      <VFXProvider>
        <Component {...pageProps} />
      </VFXProvider>
    </CacheProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  return {...appProps}
}

export default MyApp
