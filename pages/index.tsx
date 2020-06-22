import {defaults} from '@td/data'
import {Page} from '@td/globals'
import {AgeVerificationForm} from '@td/views'
import {Pages} from '@td/types'
import {withSession} from '@td/utils'

interface Props {
  token?: string
}

export default ({
  token
}: Props) =>
  <Page
    config={defaults}
    page={Pages.Age}
    name="Tangerine Dream"
    token={token}
    menuDividers={[2]}
  >
    {(_, formikProps) => 
    <>
      {console.log(token)}
      <AgeVerificationForm 
        {...formikProps.values.age}
      />
    </>
    }
  </Page>

export const getServerSideProps = withSession(async function ({req}) {
  const token = req.session.get('token') || null

  return {
    props: {token},
  }
})
