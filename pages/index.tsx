import {defaults} from '@td/data'
import {Page} from '@td/globals'
import {AgeVerificationForm} from '@td/views'

export default () =>
  <Page
    kind={defaults.age.kind}
    name={defaults.name}
    title={defaults.age.title}
    theme={defaults.colors}
    uiTheme={defaults.ui}
    image={defaults.age.backgroundImage}
  >
    {() => 
    <AgeVerificationForm 
      {...defaults.age}
    />
    }
  </Page>
