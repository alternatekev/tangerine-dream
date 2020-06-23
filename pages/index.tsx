import {defaults} from '@td/data'
import {Page} from '@td/globals'
import {AgeVerificationForm} from '@td/views'

import {Pages, User} from '@td/types'

interface Props {
  user: User
  prodUrl: string
}

export default ({
  user,
  prodUrl
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

  return {
    props: {user, prodUrl},
  }
})
