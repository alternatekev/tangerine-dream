import {defaults} from '@td/data'
import {Page} from '@td/globals'
import {AgeVerificationForm} from '@td/views'
import {Pages, User} from '@td/types'
import {withSession} from '@td/utils'

interface Props {
  user: User
}

export default ({
  user
}: Props) =>
  <Page
    config={defaults}
    page={Pages.Age}
    name="Tangerine Dream"
    user={user}
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

export const getServerSideProps = withSession(async function ({req}) {
  const user = req.session.get('user') || null

  return {
    props: {user},
  }
})
