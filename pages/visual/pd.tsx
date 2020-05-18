import {Page, Card, P, Divider, Header, Medium, Layout, Avatar, ProjectImage} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {Layouts} from '@alt/types'
import {ProjectCard} from '@alt/views'

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
          <Avatar img="/pd/logo.png" circle size={210} />
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
        <Layout kind={Layouts.Right} alignment="center">
          <P>
            <Medium>Community Funde</Medium>d came to me with one need: the first version of their product that got
                them to where they were was built on old technology, and was now limiting their
                growth potential. Could I help steer them toward the right choices to make for version 2?
            </P>
          <ProjectImage src="/wp/Component-Map.png" alt="" />
        </Layout>
      </Card>
        <Card middleStacked level={0}>
          <Layout>
            <ProjectCard
              title="WordPress.com"
              img="/wp/card.png"
              url="/visual/wp"
              description="UI & UX Design, Design Systems, CSS"
            />
            <ProjectCard
              title="The New York Times"
              img="/nyt/card.png"
              url="/visual/nyt"
              description="Creative Direction, Dev Team Management, UX & UI Design, Data Visualization"
            />
            <ProjectCard
              title="Community Funded 2.0"
              img="/cf/card.png"
              url="/visual/cf"
              description="Node.js Consulting, Design Systems, UI & UX Design"
            />
          </Layout>
        </Card>
    </>
    }
  </Page>

export default Visual
