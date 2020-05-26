import {P, Card} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {Layouts} from '@alt/types'
import { ProjectImage} from '@alt/components/ProjectImage'

export default {
  title: 'Agile Central / Catchfly',
  remoteUrl: 'https://hippogriff.herokuapp.com',
  subhead: 'REACT, TYPESCRIPT, CREATIVE DIRECTION, UI / UX DESIGN',
  logo: '/ca/logo.png',
  image: '/ca/card.png',
  url: '/visual/ca',
  id: 'ca',
  description: 'Design System Architecture & Build, Creative Direction',
  header: (
    <P large>
      Rally Software was a company providing Jira-like Agile tools, which got purchased by CA in 2015. As part of a broader initiative to modernize CA's software offerings, Project Catchfly was spun up as a startup within the large corporation.
    </P>
  ),
  theme: ThemeContext.CA,
  body: {
    special: (
      <Card divider middleStacked megaWeighted borderless inflated>
        <ProjectImage alt="" src="/ca/card.png" />
        <P>
          Within the first two days on Project Catchfly, I had outlined the problem the team was trying to solve – something they had tried to use Lean Startup methodology to define – and had provided the first real mockup of their app they'd ever seen.
            </P>
      </Card>
    ),
    blocks: [
      {
        layout: Layouts.Left,
        image: '/ca/ca2.png',
        children: (
          <P>
            We quickly iterated through approaches to find the right solution. We held design sprint sessions, big-room planning sessons, and worked with a team in North Carolina building the mobile version of the app.
          </P>
        )
      },
      {
        image: '/ca/ca3.png',
        children: (
          <P>
            I spent a lot of time taking Material UI (a Material Design component library implemented in React), and customizing it for our needs. This was also my first introduction to TypeScript.
          </P>
        )
      },
      {
        layout: Layouts.Left,
        image: '/nyt/ca4.png',
        children: (
          <P>
            When the business needed me to step out of the codebase and into Sketch in order to iterate even faster on projections 1.5 years into the future, I re-built our component system as graphical assets in Sketch.
          </P>
        )
      },
      {
        layout: Layouts.Equal,
        image: '/nyt/ca5.png',
        children: (
          <P compact>
            When Project Catchfly was cancelled 9 months afer I started, I quickly pivoted to providing prototyping for the Agile Central (Rally) design team. Within a week, I had a custom component library rendering a Kanban board, that the designers were taking screenshots of to send to their developers as the final design.
          </P>
        )
      },
    ]
  }
}