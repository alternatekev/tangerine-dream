import {Row, Col} from 'react-grid-system'

import {Page, Card, P, Divider} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {ProjectCard} from '@alt/views'

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
          autoHeight={false}
          external
          title="Sodium Lights"
          subtitle="Colormath"
          img="/cm/card.png"
          url="https://vimeo.com/user107065772"
          description="Goth-inspired shoegaze, with Carly Stambaugh"
        />
        <ProjectCard
          autoHeight={false}
          external
          title="States"
          subtitle="For the Earth Was Empty of Form"
          img="/fteweof/states.png"
          url="https://soundcloud.com/alternatekev/sets/states"
          description="Noisy/ambient post-rock, solo project"
        />
        <ProjectCard
          autoHeight={false}
          external
          title="December"
          subtitle="For the Earth Was Empty of Form"
          img="/fteweof/december.png"
          url="https://soundcloud.com/alternatekev/sets/december"
          description="Electronic post-rock, solo project"
        />
      </Col>
      <Col md={6}>
        <ProjectCard
          autoHeight={false}
          external
          title="From The Middle Out"
          subtitle="A Documentary Company"
          img="/adc/card.png"
          url="https://adocumentarycompany.com/left-of-cinema"
          description="Soundtrack for short documentary"
        />
        <ProjectCard
          autoHeight={false}
          external
          title="Morocco"
          subtitle="For the Earth Was Empty of Form"
          img="/fteweof/morocco.png"
          url="https://soundcloud.com/alternatekev/sets/morocco "
          description="Post-rock, solo project"
        />
        <ProjectCard
          autoHeight={false}
          external
          title="An Earthen Ocean"
          subtitle="For the Earth Was Empty of Form"
          img="/fteweof/anearthenocean.png"
          url="https://soundcloud.com/alternatekev/sets/an-earthen-ocean"
          description="Post-rock, solo project"
        />
      </Col>
    </Row>
  </Card>
}
  

</Page>

export default Audio
