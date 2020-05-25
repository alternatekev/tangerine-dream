import {NextPage} from 'next'

import {
  Page,
  Card,
} from '@alt/components'
import {DerivedTheme} from '@alt/styles'
import {HomeTemplate} from '@alt/templates'

const Home: NextPage = () => 
<Page 
  title="Hello :)" 
  header="/home.png"
>
  {(theme: DerivedTheme) => 
  <Card stacked middleStacked level={2}>
    <HomeTemplate />
  </Card>
}
</Page>

export default Home
