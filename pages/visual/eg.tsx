import Link from 'next/link'
import { Page, Card, P, Divider, Header, Medium, Layout, Avatar, ProjectImage } from '@alt/components'
import { ThemeContext } from '@alt/styles'
import { Layouts } from '@alt/types'
import { ProjectCard } from '@alt/views'

const Visual = () =>
  <Page
    title="Elmendorf / Geurts"
    header="/visual.png"
    compact
    invertedMenu
    theme={ThemeContext.EG}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <Layout kind={Layouts.WideRight} alignment="center">
          <Avatar img="https://www.houstonperiscope.com/static/img/partners/eg.svg" circle size={210} />
          <>
            <Header level={2} intense>WORDPRESS & REACT / MUSIC COMPOSITION & CONSULTING</Header>
            <P large>
                Ryan Elmendorf and Nick Geurts are local artists and engineers, who specialize in metalworking and large-scale interactive artowrk. Think Burning Man, because that's their bread and butter.
          </P>
          </>
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout kind={Layouts.Left} alignment="center">
          <ProjectImage src="/eg/card.png" alt="" />
          <P>
              While never having attending the Burn myself, I often find myself involved in their projects, from music composition for the openings of their own art pieces (Levitt Pavilion & Civic Center Park, Denver), or designing their logo and building out their web presence.
          </P>
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout kind={Layouts.Right} alignment="center">
          <P>
            Their site features a Next.js-powered front-end, with a WordPress/ACF-powered backend, using the WordPress JSON API to communicate.
          </P>
          <ProjectImage src="/eg/eg1.png" alt="" />
        </Layout>
        <Divider superWeighted superTopWeighted level={0} />
        <Layout kind={Layouts.Left} alignment="center">
          <ProjectImage src="/eg/eg2.png" alt="" />
          <P>
           I've also worked on other work with them, including sound samples for Talking Parking Meters in Denver, Colorado as well as full React and Node developement for <Link href="/visual/dp"><a>the Down Periscope project in Houston, Texas.</a></Link>
           </P>
        </Layout>
       
      </Card>
      <Card middleStacked level={0}>
        <Layout>
            <ProjectCard
              title="Rule Gallery"
              img="/rl/card.png"
              url="/visual/rl"
              description="WordPress & WooCommerce Design & Build, React Components"
            />
            <ProjectCard
              title="Down Periscope"
              img="/dp/card.png"
              url="/visual/dp"
              description="Real-Time Node.js Server Architecture, React Components"
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
