import React from 'react'
import {Context as ResponsiveContext} from 'react-responsive'
import {AppContext} from 'next/app'
import {CacheProvider} from '@emotion/core'
import {cache} from 'emotion'
//tslint:disable-next-line no-import-side-effect
import {resetServerContext} from 'react-beautiful-dnd'
import {ApolloProvider} from '@apollo/react-hooks'
import {useApollo} from '@td/data'
import {DispensaryContext} from '@td/types'
import {NextPageContext} from 'next'

interface Props {
  pageProps: any //tslint:disable-line no-any
}

function Dispensary(props: AppContext & Props) {
  const {Component, pageProps} = props
  const apolloClient = useApollo(pageProps.initialApolloState, pageProps.wpUrl)
  const dContext = {
    wpUrl: pageProps.wpUrl,
    selfUrl: pageProps.prodUrl
  }
  resetServerContext()

  return (
    <ApolloProvider client={apolloClient}>
      <ResponsiveContext.Provider value={{width: 960}}>
        <DispensaryContext.Provider value={dContext}>
          <CacheProvider value= {cache}>
            <Component {...pageProps} />
          </CacheProvider>
        </DispensaryContext.Provider>
      </ResponsiveContext.Provider>
    </ApolloProvider>
  )
}

Dispensary.getInitialProps = (dctx: NextPageContext) => {
  return {
    pageProps: {
      wpUrl: process.env.WP_URL,
      prodUrl: process.env.PROD_URL
    }
  }
}

export default Dispensary
