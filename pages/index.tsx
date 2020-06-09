import {defaults} from '@td/data'
import {Page} from '@td/globals'
import {AgeVerificationForm} from '@td/views'

export default () =>
  <Page
    config={defaults.age}
    pageLayout={defaults.age.pageLayout}
    name={defaults.name}
    title={defaults.age.pageTitle}
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
