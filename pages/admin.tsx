import {defaults} from '@td/data'
import {Page} from '@td/globals'
import {AdminLoginForm} from '@td/views'
import {Pages, User} from '@td/types'

interface Props {
  user?: User
  prodUrl: string
  wpUrl: string
}

export default ({
  prodUrl,
  user,
  wpUrl
}: Props) =>
  <Page
    config={defaults}
    prodUrl={prodUrl}
    wpUrl={wpUrl}
    page={Pages.AdminLogin}
    name="Tangerine Dream"
    menuDividers={[2]}
  >
    {(_, formikProps, onLogin) => 
      <>
        {!user && 
          <AdminLoginForm
            onLogin={onLogin}
            logoImage={defaults.pages.adminLogin.logoImage}
            formikProps={formikProps}
          />
        }{user &&
          <div>Logged In</div>
        }
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
