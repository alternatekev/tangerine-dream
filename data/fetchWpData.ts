import fetch from 'isomorphic-fetch'

export default async (wpUrl: string, method: 'GET' | 'POST') => {

  return fetch(wpUrl,
    {
      headers: {
        method,
        'mode': 'cors',
        'Content-Type': 'application/json',
      }
    }
    )
    .then(res => res.json())
    .catch(e => console.log(e))
}
