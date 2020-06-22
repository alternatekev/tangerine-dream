import {FC} from 'react'
import Head from 'next/head'

import {PageTitle} from '@td/types'

interface Props {
  name: string
  pageTitle: PageTitle
  styles: string
}

export const PageHead: FC<Props> = ({name, pageTitle, styles}: Props) =>
  <Head>
    <style type="text/css" media="screen">{`
      body {${styles}};
    `}</style>
    <title>{name} / {pageTitle.titleText || 'Untitled Page'}</title>
  </Head>
