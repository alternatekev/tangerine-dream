import {Page, Card, P, Divider, Header, Layout, Avatar, ProjectImage} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {Layouts} from '@alt/types'
import {ProjectCard} from '@alt/views'

const Visual = () =>
  <Page
    title="Down Periscope"
    header="/visual.png"
    compact
    invertedMenu
    theme={ThemeContext.DP}
  >{() =>
    <>
    <Card level={2} middleStacked>
      <Layout kind={Layouts.WideRight} alignment="center">
            <Avatar alignCenter superWeighted img="https://www.houstonperiscope.com/static/img/partners/eg.svg" circle size={210} />
        <>
          <Header level={2} intense>DONALD LIPSKI & ELMENDORF/GEURTS</Header>
          <P large>
                Donald Lipski had designed and contracted to have built a very cool art project in Houston, Texas, that allows visitors to <a href="https://houstonperiscope.com">the Buffalo Bayou Park to peer down into the century-old cistern located underneath</a>. Website users would also be able to control the periscope itself.
          </P>
          <P large>The problem was it didn't work. That's where <a href="https://elmendorfgeurts.com">Elmendorf/Geurts</a> and I came in.</P>
        </>
      </Layout>
      <Divider superWeighted superTopWeighted level={0} />
      <Layout kind={Layouts.Left} alignment="center">
        <ProjectImage src="/dp/card.png" alt="" />
        <P>
          While Ryan tore down the hardware and rebuilt it from scratch, including a completely custom web server, I got to work on the client side.
          </P>
      </Layout>
      <Divider superWeighted superTopWeighted level={0} />
      <Layout superWeighted kind={Layouts.Right} alignment="center">
        <P>
While this screenshot doesn't do the application justice (the applcation is down due to COVID-19 restrictions), you can see that we built a way to control a camera in 360-degree space as well as zoom in/zoom out. We even added a light switch. The Node server solution I built uses WebSockets to manage permission between multiple conccurrent web users, as well as on-site.
          </P>
        <ProjectImage src="/dp/dp1.png" alt="" />
      </Layout>
     
    </Card>
      <Card middleStacked level={0}>
        <Layout>
            <ProjectCard
              title="Elmendorf/Geurts"
              img="/eg/card.png"
              url="/visual/eg"
              description="Headless WordPress, React Components, Music Composition, Branding, Collateral"
            />
            <ProjectCard
              title="Rule Gallery"
              img="/rl/card.png"
              url="/visual/rl"
              description="WordPress & WooCommerce Design & Build, React Components"
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
