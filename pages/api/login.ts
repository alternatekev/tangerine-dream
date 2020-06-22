import fetch from 'isomorphic-fetch'
import {NextApiResponse, NextApiRequest} from 'next'
import {Session} from 'next-iron-session'

import {wpUrls} from '@td/data'
import {withSession} from '@td/utils'

interface SessionInterface {
  session: Session
}

export default withSession(async (req: NextApiRequest & SessionInterface, res: NextApiResponse) => {
  const url = `${process.env.WP_URL}${wpUrls.token}`
  console.log(`fetching ${url}`)

  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: req.body
  })
    .then(async response => response.json())
    .then(async response => {
      if (response) {
        console.log(response)
        if(response.statusCode === 200) {
          console.log('saving...')
          req.session.set('token', response.data.token)
          await req.session.save()
        }
       
        res.send(response)
      }
      else return response
    })
    .catch(error => console.error('Error: ', error))
})
