import {defaults} from '@td/data'
import {Page} from '@td/globals'
import {AgeVerificationForm} from '@td/views'
import {Pages} from '@td/types'

export default () =>
  <Page
    config={defaults}
    page={Pages.Age}
    pageLayout={defaults.age.pageLayout}
    name={defaults.name}
    title={defaults.age.pageTitle.titleText}
    theme={defaults.colors}
    uiTheme={defaults.ui}
    image={defaults.age.backgroundImage}
    menuDividers={[2]}
  >
    {() => 
    <AgeVerificationForm 
      {...defaults.age}
    />
    }
  </Page>
