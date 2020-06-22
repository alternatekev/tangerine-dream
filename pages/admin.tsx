import {defaults} from '@td/data'
import {Page} from '@td/globals'
import {AdminLoginForm} from '@td/views'
import {Pages} from '@td/types'

export default () =>
  <Page
    config={defaults}
    page={Pages.AdminLogin}
    name="Tangerine Dream"
    menuDividers={[2]}
  >
    {(_, formikProps, onLogin) => 
      <AdminLoginForm 
        onLogin={onLogin}
        logoImage={defaults.adminLogin.logoImage}
        formikProps={formikProps}
      />
    }
  </Page>
