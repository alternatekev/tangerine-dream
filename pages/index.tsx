import {defaults} from '@td/data'
import {Page} from '@td/globals'


export default () =>
  <Page
    theme={defaults.colors}
    uiTheme={defaults.ui}
    image={defaults.age.backgroundImage}
  >
    {() => 
    <p>hi</p>
    }
  </Page>
