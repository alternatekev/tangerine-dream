import {FC, useContext} from 'react'
import Head from 'next/head'
import queryString from 'query-string'

import {DispensaryContext} from '@td/types'

interface Props {
  name: string
  pageTitle: string
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
}: Props) => {
  const manifest = {
    name,
    short_name: name,
    description: pageTitle,
    display: 'browser',
    start_url: '/',
    scope: '/',
    background_color: themeColor,
    theme_color: themeColor,
    icon: logoImage
  }

  const {selfUrl} = useContext(DispensaryContext)

  const href = queryString.stringifyUrl({url: `${selfUrl}/api/manifest`, query: manifest})

  return (
    <Head>
      <link rel="manifest" href={href}  />
      <style type="text/css" media="screen">{`
        body {${styles}};
      `}</style>
      <title>{name} / {pageTitle || 'Untitled Page'}</title>
    </Head>
  )
}
