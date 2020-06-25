import {FC} from 'react'
import Head from 'next/head'
import queryString from 'query-string'

import {PageTitle} from '@td/types'

interface Props {
  name: string
  pageTitle: PageTitle
  prodUrl: string
  styles: string
  logoImage: string
  themeColor: string
}

export const PageHead: FC<Props> = ({
  name, 
  pageTitle, 
  styles, 
  themeColor,
  logoImage,
  prodUrl
}: Props) => {
  const manifest = {
  name,
  short_name: name,
  description: pageTitle.titleText,
  display: 'browser',
  start_url: '/',
  scope: '/',
  background_color: themeColor,
  theme_color: themeColor,
  icons: queryString.stringify([{
    src: logoImage,
    sizes: '512x512',
    type: 'image/png'
  }])
}

  return (
    <Head>
      <link rel="manifest" href={queryString.stringifyUrl({url: '/api/manifest/', query: manifest})}  />
      <style type="text/css" media="screen">{`
        body {${styles}};
      `}</style>
      <title>{name} / {pageTitle.titleText || 'Untitled Page'}</title>
    </Head>
  )
}