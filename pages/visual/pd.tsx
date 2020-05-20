import {Page, Card, P, Divider, Header, Medium, Layout, Avatar, ProjectImage} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {Layouts} from '@alt/types'
import {RelatedProjectCards} from '@alt/views'

const Visual = () =>
  <Page
    title="Polldaddy / Automattic"
    header="/visual.png"
    compact
    invertedMenu
    theme={ThemeContext.PD}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <Layout kind={Layouts.WideRight} alignment="center">
            <Avatar alignCenter superWeighted img="/pd/logo.png" circle size={210} />
          <>
            <Header level={2} intense>SURVEYS & POLLS</Header>
            <P large>
              <Medium>Community Funded</Medium> came to me with one need: the first version of their product that got
                them to where they were was built on old technology, and was now limiting their
                growth potential. Could I help steer them toward the right choices to make for version 2?
            </P>
            <P large>
              And could I <strong>help them build it?</strong>
            </P>
          </>
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout kind={Layouts.Left} alignment="center">
          <ProjectImage src="/wp/Component-Map.png" alt="" />
          <P>
            <Medium>Community Funde</Medium>d came to me with one need: the first version of their product that got
                them to where they were was built on old technology, and was now limiting their
                growth potential. Could I help steer them toward the right choices to make for version 2?
            </P>
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout kind={Layouts.Right} alignment="center">
          <P>
            <Medium>Community Funde</Medium>d came to me with one need: the first version of their product that got
                them to where they were was built on old technology, and was now limiting their
                growth potential. Could I help steer them toward the right choices to make for version 2?
            </P>
          <ProjectImage src="/wp/Component-Map.png" alt="" />
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout kind={Layouts.Left} alignment="center">
          <ProjectImage src="/wp/Component-Map.png" alt="" />
          <P>
            <Medium>Community Funde</Medium>d came to me with one need: the first version of their product that got
                them to where they were was built on old technology, and was now limiting their
                growth potential. Could I help steer them toward the right choices to make for version 2?
            </P>
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout superWeighted kind={Layouts.Right} alignment="center">
          <P>
            <Medium>Community Funde</Medium>d came to me with one need: the first version of their product that got
                them to where they were was built on old technology, and was now limiting their
                growth potential. Could I help steer them toward the right choices to make for version 2?
            </P>
          <ProjectImage src="/wp/Component-Map.png" alt="" />
        </Layout>
      </Card>
        <RelatedProjectCards pid="eg" />
    </>
    }
  </Page>

export default Visual
