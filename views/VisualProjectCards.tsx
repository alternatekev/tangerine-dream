import {FC} from 'react'
import {Row, Col} from 'react-grid-system'
import {ProjectCard} from '@alt/views'

export const VisualProjectCards: FC = () =>
  <Row nogutter>
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
        url="/visual/pd"
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
