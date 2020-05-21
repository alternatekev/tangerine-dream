import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import {Page, Card, P, ProjectImage, Button} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {Layouts} from '@alt/types'
import {RelatedProjectCards, ProjectHeader, Block} from '@alt/views'

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
        <ProjectHeader url="https://rulegallery.com" subhead="WORDPRESS & REACT / WOOCOMMERCE" logo="/rl/logo.png">
          <P large>
            Rule is one of Denver's premier art galleries, representing some of the most talked-about names in both Denver and Marfa, Texas. 
          </P>
        </ProjectHeader>
        <Card borderless middleStacked inflated>
          <ProjectImage src="/rl/card.png" alt="" />
          <P>
            Leveraging a sleek, minimalist feel, this website was a joy to work on, letting white space breathe, and giving the artwork space to speak for itself.
          </P>
        </Card>
        <Block image="/rl/rl1.png" layout={Layouts.Right}>
          <P>
            This site uses Advanced Custom Fields for custom post types, Timber for templating, and a statically-built React app for browsing art.
          </P>
        </Block>
        <Block layout={Layouts.Equal} image="/rl/rl2.png" >
          <ProjectImage src="/rl/rl3.png" alt="" />
        </Block>
        <Block layout={Layouts.Equal} image="/rl/rl4.png" action={<Button icon={<OpenInNewIcon size={15} />} block compact tertiary alignCenter external href="https://shop.rulegallery.com">View the Shop</Button>}>
          <P>
            Due to COVID-19 restrictions, the gallery cannot be open to the public. We quickly put together a WooCommerce site to get cash flowing to the artsists in need again.
          </P>
        </Block>
      </Card>
      <RelatedProjectCards pid="rl" />
    </>
    }
  </Page>

export default Visual
