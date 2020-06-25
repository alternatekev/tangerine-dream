import {defaults} from '@td/data'
import {Page} from '@td/globals'
import {AgeVerificationForm} from '@td/views'

import {Pages, User} from '@td/types'

interface Props {
  user: User
  userMeta: any
  prodUrl: string
  wpUrl: string
}

export default ({
  user,
  prodUrl,
  wpUrl,
  userMeta
}: Props) =>
  <Page
    config={defaults}
    page={Pages.Age}
    name="Tangerine Dream"
    prodUrl={prodUrl}
    wpUrl={wpUrl}
    user={user}
    userMeta={userMeta}
    menuDividers={[2]}
  >
    {(_, formikProps) => 
    <>
      <AgeVerificationForm 
        {...formikProps.values.age}
      />
    </>
    }
  </Page>

import {withSession} from '@td/utils/Session'
export const getServerSideProps = withSession(async function ({req}) {
  const user = req.session.get('user') || null
  const userMeta = req.session.get('userMeta') || null
  console.log(userMeta)
  const prodUrl = process.env.PROD_URL
  const wpUrl = process.env.WP_URL

  return {
    props: {user, userMeta, prodUrl, wpUrl},
  }
})
