import StackGrid from 'react-stack-grid'
import {Page, Card} from '@alt/components'
import {ThemeContext} from '@alt/styles'

const Visual = () => <Page title="Visual Work" theme={ThemeContext.Portfolio} >
  <Card stacked level={2}>
      <StackGrid columnWidth="33.3333%" enableSSR duration={0} gutterWidth={10}>
        <img key={0} src="/2016/05/4092541881_13bf26fa37_o-768x771.png" width={300} />
        <img key={1} src="/2016/05/9546865361_309c624bf2_o-768x563.png" width={300} />
        <img key={2} src="/2016/05/Screen-Shot-2015-08-25-at-1.48.03-PM-768x536.png" width={300} />
        <img key={3} src="/2016/05/8ms5y9m2Eu-3000x3000-e1464967699648-768x353.png" width={300} />
        <img key={4} src="/2016/05/Stats-768x498.png" width={300} />
        <img key={5} src="/2016/05/ZwH45GqLbs-3000x3000-768x419.png" width={300} />
        <img key={6} src="/2016/05/Two-Step-Auth-768x273.png" width={300} />
        <img key={7} src="/2016/05/Screen-Shot-2015-08-23-at-9.27.01-AM-768x307.png" width={300} />
      </StackGrid>
  </Card>

</Page>

export default Visual
