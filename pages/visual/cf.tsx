import ReactPlayer from 'react-player'
import {Page, Card, P, Divider, Header, Medium, Layout, Avatar, ProjectImage} from '@alt/components'
import {ThemeContext, t, css, prepareStyles} from '@alt/styles'
import {Layouts} from '@alt/types'
import {ProjectCard} from '@alt/views'

const styles = prepareStyles({
  Player: {
    ...t.fill_available
  }
})

const Visual = () =>
  <Page
    title="Community Funded"
    header="/visual.png"
    compact
    theme={ThemeContext.CF}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <Layout kind={Layouts.WideRight} alignment="center">
          <Avatar alignCenter superWeighted img="/cf/logo-green.png" circle size={210} />
          <>
            <Header level={2} intense>VERSION 2.0</Header>
            <P large>
                <strong>Community Funded</strong> came to me with one need: the first version of their product that got
                them to where they were was built on old technology, and was now limiting their
                growth potential. Could I help steer them toward the right choices to make for version 2?
            </P>
              <P large>
                And could I <Medium>help them build it?</Medium>
              </P>
          </>
        </Layout>
        <Divider superWeighted topWeighted level={0} />    
        <Layout alignment="center">
            <ReactPlayer url="https://vimeo.com/419446092" width="100%" css={css(styles.Player)} />
            <P>
After meeting with their founders, and finding that I could have a strong passion for their
business, I enthusiastically agreed to help. V1 was heavily based on WordPress, something
I have a unique amount of experience building and building for; React + Next.js were my
suggestions for the front-end technologies, and three years later, we launched to live clients in the first quarter of 2020. I have worked hand-in-hand
with the CTO, Chief Creative Officer, and VP of Product to craft not just a cohesive visual
design system, but the codebase and UX patterns necessary to pull it off, in a real product,
right now
            </P>
        </Layout> 
          <Divider superWeighted topWeighted level={0} />    

          <Layout alignment="center">
            <P>
We used an iterative, design sprint-based approach that incldued customers, clients, success managers, board members, and executives. This all-inclusive approach led to the product improving by leaps and bounds in short amounts of time, with ideas we knew were already vetted with users.
            </P>
            <ProjectImage src="/cf/cf1.png" alt="" />

          </Layout> 
          <Divider superWeighted topWeighted level={0} />    
          <Layout alignment="center">
            <ProjectImage src="/cf/cf2.png" alt="" />
            <P>
I began my work with CF by asking questions, and iterating on Next.js-based prototypes complete with animation, beautfiul custom components, and an extensible architecture that worked as a bridge between quick prototyping and prodution-ready code.
            </P>
          </Layout> 
          <Divider superWeighted topWeighted level={0} />

          <Layout superWeighted alignment="center">
            <P>
Using a modified Agile methodology, with an ad-hoc mixture of scrum, dailies, plannings sessions and spikes, we delivered a beautiful experience to delighted users, who often found that the extensive training needed to onboard for the first version of the prdouct, was now simply unnecesary.
            </P>
            <ProjectImage src="/cf/cf3.png" alt="" />

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
