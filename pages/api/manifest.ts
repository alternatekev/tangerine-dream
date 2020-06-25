import {
  NextApiRequest, 
  NextApiResponse, 
} from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.send(req.query ? `${req.query}` : 'empty manifest!')
}
