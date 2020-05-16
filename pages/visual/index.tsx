import {Row, Col} from 'react-grid-system'

import {Page, Card, P, Divider, Medium, Layout, Avatar} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {ProjectCard} from '@alt/views'
import {Layouts} from '@alt/types'

const Visual = () => 
<Page 
  title="Visual Work" 
  header="/visual.png" 
  theme={ThemeContext.Portfolio}
>{() =>
  <Card stacked level={2} middleStacked>
    <Layout kind={Layouts.WideRight} alignment="center">
      <Avatar img="https://alternatekev.files.wordpress.com/2015/07/4366366361_a75c4a59f3_b.jpg" circle size={210} />
      <P large>
        I was an <Medium>arty kid</Medium>. I have no idea whether this is because my genes conspired to make art a thing I could do or if I simply had enough people tell me I had artisitc ability so I internalized it as best I could, but either way my childhood included <Medium>an awful lot of drawing</Medium>. My job as an adult is to <strong>draw with code</strong>.
      </P>
    </Layout>
    <Divider weighted level={0} />

    <Row>
      <Col md={4}>
        <ProjectCard
          title="Community Funded 2.0"
          img="/cf/card.png"
          url="/visual/cf"
          description="Node.js Consulting, Design Systems, UI & UX Design"
        />
      </Col> 
      <Col md={4}>
        <ProjectCard
          title="WordPress.com"
          img="/wp/card.png"
          url="/visual/wp"
          description="UI & UX Design, Design Systems, CSS"
        />
      </Col>
      <Col md={4}>
        <ProjectCard
          title="The New York Times"
          img="/nyt/card.png"
          url="/visual/nyt"
          description="Creative Direction, Dev Team Management, UX & UI Design, Data Visualization"
        />
      </Col>
          <Col md={4}>
            <ProjectCard
              title="Agile Central / Catchfly"
              img="/ca/card.png"
              url="/visual/ca"
              description="Design System Architecture & Build, Creative Direction"
            />
          </Col>
          <Col md={4}>
            <ProjectCard
              title="Polldaddy"
              img="/pd/card.png"
              url="/"
              description="UI & UX Design, CSS, HTML5, JQuery, Public Speaking"
            />
          </Col>
          <Col md={4}>
            <ProjectCard
              title="Down Periscope"
              img="/dp/card.png"
              url="/visual/dp"
              description="Real-Time Node.js Server Architecture, React Components"
            />
          </Col>

        <Col md={4}>
          <ProjectCard
          title="Rule Gallery"
          img="/rl/card.png"
          url="/visual/rl"
          description="WordPress & WooCommerce Design & Build, React Components"
        />
      </Col>
     

       <Col md={4}>
          <ProjectCard
          title="Elmendorf/Geurts"
          img="/eg/card.png"
          url="/visual/eg"
          description="Headless WordPress, React Components, Music Composition, Branding, Collateral"
        />
      </Col>
     
     
    </Row>
  </Card>
}
</Page>

export default Visual
