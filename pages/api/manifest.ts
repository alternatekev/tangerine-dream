import {
  NextApiRequest, 
  NextApiResponse, 
} from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  const icons = [{
    src: req.query.icon,
    sizes: '512x512 256x256 128x128 96x96 72x72 48x48 20x20 16x16' 
  }]
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    ...req.query,
    icons
  }))
}
