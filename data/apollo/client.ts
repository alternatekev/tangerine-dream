import {useMemo} from 'react'
import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {HttpLink} from 'apollo-link-http'
import {Dispensary} from '@td/types'
import {useSSR} from 'use-ssr'

let apolloClient: ApolloClient<Dispensary | {}>

export function createApolloClient(url: string) {
  return new ApolloClient({
    ssrMode: useSSR().isServer,
    link: new HttpLink({
      headers: {
        'Cache-Control': 'no-cache'
      },
      fetchOptions: {
        headers: {
          'Cache-Control': 'no-cache'
        }
      },
      uri: url, // Server URL (must be absolute)
      //credentials: 'cross-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache(),
    headers: {
      'Cache-Control': 'no-cache'
    }
  })
}

export function initializeApollo(initialState: Dispensary | {}, wpUrl: string) {
  const _apolloClient = apolloClient ?? createApolloClient(wpUrl)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (useSSR().isServer){return _apolloClient}
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: Dispensary, wpUrl: string) {
  return useMemo(() => initializeApollo(initialState, wpUrl), [initialState])
}
