import {defaults} from '@td/data'
import {Page} from '@td/globals'

export default () =>
  <Page
    theme={defaults.colors}
    image={defaults.age.backgroundImage}
  >
    {() => 
      <p>hi</p>
    }
  </Page>
