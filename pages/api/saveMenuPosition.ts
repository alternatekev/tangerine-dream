import fetch from 'isomorphic-fetch'
import {NextApiResponse, NextApiRequest
} from 'next'
import {Session
} from 'next-iron-session'

import {wpUrls
} from '@td/data'
import {withSession
} from '@td/utils'

interface SessionInterface {
  session: Session
}

export default withSession(async (req: NextApiRequest & SessionInterface, res: NextApiResponse) => {
  const user = req.session.get('user')
  const menuPositionUrl = `${process.env.WP_URL}${wpUrls.saveMenuPosition}/${user.id}?fields[menu_position]=${req.body.fields.menu_position}`
  const userUrl = `${process.env.WP_URL}${wpUrls.user}`
  console.log(`fetching ${menuPositionUrl}`)
  
  return fetch(menuPositionUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  })
    .then(async response => response.json())
    .then(async response => {
      if (response) {

        if (response.statusCode === 200) {
          console.log('saved.')
          req.session.set('user', response.data)
        }

        console.log(`fetching user ${user.displayName}`)

        const userResponse = await fetch(userUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          },
        }).then(async userMeta => userMeta.json())

        console.log(userResponse)
        req.session.unset('userMeta')
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
