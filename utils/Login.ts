
export const tryLogin = async (url: string, username: string, password: string) => {

  return await fetch(url, { //tslint:disable-line no-return-await
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    })
  })
    .then(results => results.json())
}

