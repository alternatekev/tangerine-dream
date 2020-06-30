import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'
import fetch from 'isomorphic-fetch'

import { wpUrls } from '@td/data'
import { withSession } from '@td/utils'
import {Pages} from '@td/types'

interface SessionInterface {
  session: Session
}

export default withSession(async (req: NextApiRequest & SessionInterface, res: NextApiResponse) => {
  const id = req.query.pageId as Pages
  const user = req.session.get('user')
  const json = JSON.parse(req.body)
  //const dataConvertedToUrl = wpApiBody(id, json.pages[id])
  const title = `?title=${json.pages[id].pageTitle.titleText}`
  const url = `${process.env.WP_URL}${wpUrls[id]}${title}`

  console.log(`fetching ${url}`)

  const wp = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
  }).then(response => response.json())
  console.log(wp)
  res.send(wp)
})
