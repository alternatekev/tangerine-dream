import {Page, Card, P, Divider, Header, Layout, Avatar, ProjectImage} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {Layouts} from '@alt/types'
import {ProjectCard} from '@alt/views'

const Visual = () =>
  <Page
    title="Agile Central / Catchfly"
    header="/visual.png"
    compact
    theme={ThemeContext.CA}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <Layout kind={Layouts.WideRight} alignment="center">
            <Avatar alignCenter superWeighted img="/ca/logo.png" circle size={210} />
          <>
            <Header level={2} intense>MARKETS RESEARCH</Header>
            <P large>
              Rally Software was a company providing Jira-like Agile tools, which got purchased by CA in 2015. As part of a broader initiative to modernize CA's software offerings, Project Catchfly was spun up as a startup within the large corporation.
            </P>
          </>
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout kind={Layouts.Left} alignment="center">
          <ProjectImage src="/ca/card.png" alt="" />
          <P>
            Within the first two days on Project Catchfly, I had outlined the problem the team was trying to solve – something they had tried to use Lean Startup methodology to define – and had provided the first real mockup of their app they'd ever seen.
            </P>
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout kind={Layouts.Right} alignment="center">
          <P>
           We quickly iterated through approaches to find the right solution. We held design sprint sessions, big-room planning sessons, and worked with a team in North Carolina building the mobile version of the app.
            </P>
          <ProjectImage src="/ca/ca2.png" alt="" />
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout kind={Layouts.Left} alignment="center">
          <ProjectImage src="/ca/ca3.png" alt="" />
          <P>
           I spent a lot of time taking Material UI (a Material Design component library implemented in React), and customizing it for our needs. This was also my first introduction to TypeScript.
           </P>
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout kind={Layouts.Right} alignment="center">
          <P>
          When the business needed me to step out of the codebase and into Sketch in order to iterate even faster on projections 1.5 years into the future, I re-built our component system as graphical assets in Sketch.
            </P>
          <ProjectImage src="/ca/ca4.png" alt="" />
        </Layout>
          <Divider superWeighted superTopWeighted level={0} />
          <Layout superWeighted kind={Layouts.Left} alignment="center">
            <ProjectImage src="/ca/ca5.png" alt="" />
            <P>
    When Project Catchfly was cancelled 9 months afer I started, I quickly pivoted to providing prototyping for the Agile Central (Rally) design team. Within a week, I had a custom component library rendering a Kanban board, that the designers were taking screenshots of to send to their developers as the final design.
           </P>
          </Layout>
      </Card>
      <Card middleStacked level={0}>
        <Layout>
          <ProjectCard
            title="Community Funded 2.0"
            img="/cf/card.png"
            url="/visual/cf"
            description="Node.js Consulting, Design Systems, UI & UX Design"
          />
          <ProjectCard
            title="The New York Times"
            img="/nyt/card.png"
            url="/visual/nyt"
            description="Creative Direction, Dev Team Management, UX & UI Design, Data Visualization"
          />
          <ProjectCard
            title="Rule Gallery"
            img="/rl/card.png"
            url="/visual/rl"
            description="WordPress & WooCommerce Design & Build, React Components"
          />
        </Layout>
      </Card>
    </>
    }
  </Page>

export default Visual
