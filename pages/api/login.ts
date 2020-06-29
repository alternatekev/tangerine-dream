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
  const userUrl = `${process.env.WP_URL}${wpUrls.user}`
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

        console.log(response.data.token)

        if (response.statusCode === 200) {
          console.log('saving...')
          req.session.set('user', response.data)
        }

        console.log(`fetching user ${response.data.displayName}`)

        const userResponse = await fetch(userUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${response.data.token}`
          },
        }).then(async user => user.json())

        req.session.set('userMeta', userResponse)
        await req.session.save()
        res.send({
          response,
          userResponse
        })
      }
      else return response
    })
    .catch(error => console.error('Error: ', error))
})
