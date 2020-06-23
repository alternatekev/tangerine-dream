import {defaults} from '@td/data'
import {Page} from '@td/globals'
import {AgeVerificationForm} from '@td/views'

import {Pages, User} from '@td/types'

interface Props {
  user: User
  prodUrl: string
  wpUrl: string
}

export default ({
  user,
  prodUrl,
  wpUrl
}: Props) =>
  <Page
    config={defaults}
    page={Pages.Age}
    name="Tangerine Dream"
    prodUrl={prodUrl}
    user={user}
    menuDividers={[2]}
  >
    {(_, formikProps) => 
    <>
      {console.log(prodUrl)}
      {console.log(wpUrl)}
      <AgeVerificationForm 
        {...formikProps.values.age}
      />
    </>
    }
  </Page>

import { withSession } from '@td/utils/Session'
export const getServerSideProps = withSession(async function ({ req }) {
  const user = req.session.get('user') || null
  const prodUrl = process.env.PROD_URL
  const wpUrl = process.env.WP_URL

  return {
    props: {user, prodUrl, wpUrl},
  }
})
