import React from 'react'
import App from 'next/app'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'

function MyApp({pageProps, Component}) {
  return (
    <CacheProvider value= { cache } >
      <Component { ...pageProps } />
    </CacheProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp
