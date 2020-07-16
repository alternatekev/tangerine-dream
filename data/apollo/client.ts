import {useMemo} from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import {Dispensary} from '@td/types'
import {useSSR} from 'use-ssr'

let apolloClient: ApolloClient<Dispensary | {}>

export function createApolloClient(url: string) {
  return new ApolloClient({
    ssrMode: useSSR().isServer,
    uri: url,
    cache: new InMemoryCache(),
    headers: {
      'cache-control': 'no-cache'
    }
  })
}

export function initializeApollo(initialState: Dispensary | {}, wpUrl: string) {
  const _apolloClient = apolloClient ?? createApolloClient(wpUrl)
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  if (useSSR().isServer){return _apolloClient}
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: Dispensary | {}, wpUrl: string) {
  return useMemo(() => initializeApollo(initialState, wpUrl), [initialState])
}
