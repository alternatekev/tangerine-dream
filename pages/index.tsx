import {defaults} from '@td/data'
import {Page} from '@td/globals'
import {AgeVerificationForm} from '@td/views'
import {Pages} from '@td/types'

export default () =>
  <Page
    config={defaults}
    page={Pages.Age}
    name="Tangerine Dream"
    menuDividers={[2]}
  >
    {(_, formikProps) => 
    <AgeVerificationForm 
      {...formikProps.values.age}
    />
    }
  </Page>
