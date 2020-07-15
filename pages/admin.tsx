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
    page={Pages.AdminLogin}
    name="Tangerine Dream"
    menuDividers={[2]}
  >
    {(_, formikProps) => 
      <>
        {!user && 
          <AdminLoginForm
            logoImage={defaults.pages.adminLogin.logoImage}
            formikProps={formikProps}
          />
        }{user &&
          <div>Logged In</div>
        }
      </>
    }
  </Page>
