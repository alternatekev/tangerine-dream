import {
  NextApiRequest, 
  NextApiResponse
} from 'next'

interface Props {
  req: NextApiRequest
  res: NextApiResponse
}

export default ({req, res}: Props) => {
  res.send(req.query)
}
