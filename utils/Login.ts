import {FormikProps} from 'formik'
import {AuthorizedDispensary} from '@td/types'
import Router from 'next/router'

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

export const onLogin = (formikProps: FormikProps<AuthorizedDispensary>) => async (_: MouseEvent | TouchEvent) => {
  const {username, password} = formikProps.values
  const url = `/api/login`
  const auth = await tryLogin(url, username, password)
  
  if(auth.statusCode !== 200) {
    formikProps.setErrors({
      username: 'Bad username or password.'
    })
  } else {
    await Router.push('/')
  }
}
