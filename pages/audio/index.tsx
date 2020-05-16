import {Row, Col} from 'react-grid-system'

import {Page, Card, P, Divider, Medium} from '@alt/components'
import {ThemeContext, t, css, prepareStyles} from '@alt/styles'
import {ProjectCard} from '@alt/views'

const styles = prepareStyles({
  BG: {
    filter: `opacity(0.75) contrast(120%) blur(0.5px)`,
    mixBlendMode: 'color-burn'
  }
})

const Audio = () => 
<Page 
  title="Audio Work" 
  header="/audio.png" 
  theme={ThemeContext.Audio}
>{() =>
  <Card stacked level={2} middleStacked>
    <P large>I've often thought that if I hadn't gone into web design and development, that I'd have loved to be a musician. Here are some of my musical projects, and feel free to checkout my live band Full Bleed on Facebook.</P>
    
    <Divider topWeighted weighted level={0} />

    <Row>
      <Col md={6}>
        <ProjectCard
          title="Sodium Lights"
          subtitle="Colormath"
          img="/cm/card.png"
          url="/audio/cm"
        />
        <ProjectCard
          title="States"
          subtitle="For the Earth Was Empty of Form"
          img="/fteweof/states.png"
          url="/audio/st"
        />
        <ProjectCard
          title="December"
          subtitle="For the Earth Was Empty of Form"
          img="/fteweof/december.png"
          url="/audio/dec"
        />
      </Col>
      <Col md={6}>
        <ProjectCard
          title="From The Middle Out"
          subtitle="A Documentary Company"
          img="/adc/card.png"
          url="/"
        />
        <ProjectCard
          title="Morocco"
          subtitle="For the Earth Was Empty of Form"
          img="/fteweof/morocco.png"
          url="/audio/mc"
        />
        <ProjectCard
          title="An Earthen Ocean"
          subtitle="For the Earth Was Empty of Form"
          img="/fteweof/anearthenocean.png"
          url="/audio/aeo"
        />
      </Col>
    </Row>
  </Card>
}
  

</Page>

export default Audio
