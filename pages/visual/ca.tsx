import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import {Page, Card, P, Button} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {Layouts} from '@alt/types'
import {RelatedProjectCards, ProjectHeader, Block} from '@alt/views'

const Visual = () =>
  <Page
    title="Agile Central / Catchfly"
    header="/visual.png"
    compact
    theme={ThemeContext.CA}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <ProjectHeader url="https://hippogriff.herokuapp.com" subhead="MARKETS RESEARCH" logo="/ca/logo.png">
          <P large>
            Rally Software was a company providing Jira-like Agile tools, which got purchased by CA in 2015. As part of a broader initiative to modernize CA's software offerings, Project Catchfly was spun up as a startup within the large corporation.
          </P>
        </ProjectHeader>
        <Block layout={Layouts.Equal} image="/ca/card.png">
          <P>
            Within the first two days on Project Catchfly, I had outlined the problem the team was trying to solve – something they had tried to use Lean Startup methodology to define – and had provided the first real mockup of their app they'd ever seen.
          </P>
        </Block>
        <Block layout={Layouts.Left} image="/ca/ca2.png" >
          <P>
            We quickly iterated through approaches to find the right solution. We held design sprint sessions, big-room planning sessons, and worked with a team in North Carolina building the mobile version of the app.
          </P>
        </Block>
        <Block image="/ca/ca3.png">
          <P>
            I spent a lot of time taking Material UI (a Material Design component library implemented in React), and customizing it for our needs. This was also my first introduction to TypeScript.
          </P>
        </Block>
        <Block layout={Layouts.Left} image="/ca/ca4.png">
          <P>
            When the business needed me to step out of the codebase and into Sketch in order to iterate even faster on projections 1.5 years into the future, I re-built our component system as graphical assets in Sketch.
          </P>
        </Block>
          <Block layout={Layouts.Equal} image="/ca/ca5.png" divider={false} action={<Button block alignCenter compact tertiary icon={<OpenInNewIcon size={15} />} external href="https://electrolyte.herokuapp.com">View Prototype</Button>}>
          <P compact>
            When Project Catchfly was cancelled 9 months afer I started, I quickly pivoted to providing prototyping for the Agile Central (Rally) design team. Within a week, I had a custom component library rendering a Kanban board, that the designers were taking screenshots of to send to their developers as the final design.
          </P>
        </Block>
      </Card>
      <RelatedProjectCards pid="ca" />
    </>
    }
  </Page>

export default Visual
