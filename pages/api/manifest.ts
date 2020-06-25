import {
  NextApiRequest, 
  NextApiResponse
} from 'next'

import decodeQueryString from 'decode-query-string'

interface Props {
  req: NextApiRequest
  res: NextApiResponse
}

export default ({req, res}: Props) => {
  res.send(decodeQueryString(req.query))
}
