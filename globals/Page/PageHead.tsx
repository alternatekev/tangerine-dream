import {FC} from 'react'
import Head from 'next/head'
import queryString from 'query-string'

interface Props {
  name: string
  pageTitle: string
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
    description: pageTitle,
    display: 'browser',
    start_url: '/',
    scope: '/',
    background_color: themeColor,
    theme_color: themeColor,
    icon: logoImage
  }
  const href = queryString.stringifyUrl({url: `${prodUrl}/api/manifest`, query: manifest})

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