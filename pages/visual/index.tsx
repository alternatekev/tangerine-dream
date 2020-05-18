import {Page, Card, P, Divider, Medium, Layout, Avatar} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {VisualProjectCards} from '@alt/views'
import {Layouts} from '@alt/types'

const Visual = () => 
<Page 
  title="Visual Work" 
  header="/visual.png" 
  theme={ThemeContext.Portfolio}
>{() =>
  <Card stacked level={2} middleStacked>
    <Layout kind={Layouts.WideRight} alignment="center">
      <Avatar img="https://alternatekev.files.wordpress.com/2015/07/4366366361_a75c4a59f3_b.jpg" circle size={210} />
      <div>
        <P large>
          I was an <Medium>arty kid</Medium>. I have no idea whether this is because I was genetically predisposed to it or if I simply had enough people tell me I was good at it, but either way my childhood included <Medium>an awful lot of drawing</Medium>.
        </P>
        <P large> It's no coincidence my job as an adult is to <strong>paint interfaces with code</strong>.</P>
      </div>
    </Layout>
    <Divider weighted level={0} />
    <VisualProjectCards />
  </Card>
}
</Page>

export default Visual
