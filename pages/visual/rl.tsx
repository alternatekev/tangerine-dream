import {Page, Card, P, Divider, Layout, ProjectImage} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {Layouts} from '@alt/types'
import {RelatedProjectCards, ProjectHeader} from '@alt/views'

const Visual = () =>
  <Page
    title="Rule Gallery"
    header="/visual.png"
    compact
    invertedMenu
    theme={ThemeContext.NYT}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <ProjectHeader subhead="WORDPRESS & REACT / WOOCOMMERCE" logo="/rl/logo.png">
          <P large>
            Rule is one of Denver's premier art galleries, representing some of the most talked-about names in both Denver and Marfa, Texas. 
          </P>
        </ProjectHeader>
        <Layout kind={Layouts.Left} alignment="center">
          <ProjectImage src="/rl/card.png" alt="" />
          <P>
           Leveraging a sleek, minimalist feel, this website was a joy to work on, letting white space breathe, and giving the artwork space to speak for itself.
          </P>
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout kind={Layouts.Right} alignment="center">
          <P>
            This site uses Advanced Custom Fields for custom post types, Timber for templating, and a statically-built React app for browsing art.
          </P>
          <ProjectImage src="/rl/rl1.png" alt="" />
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout alignment="center">
          <ProjectImage src="/rl/rl2.png" alt="" />
          <ProjectImage src="/rl/rl3.png" alt="" />
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout superWeighted kind={Layouts.Right} alignment="center">
            <P>
              Due to COVID-19 restrictions, the gallery cannot be open to the public. We quickly put together a WooCommerce site to get cash flowing to the artsists in need again.
          </P>
          <ProjectImage src="/rl/rl4.png" alt="" />
        </Layout>
      </Card>
        <RelatedProjectCards pid="rl" />
    </>
    }
  </Page>

export default Visual
