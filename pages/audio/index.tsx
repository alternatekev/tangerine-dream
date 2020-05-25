import {Row, Col} from 'react-grid-system'

import {Page, Card, P, Divider} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {AudioProjectCards} from '@alt/views'

const Audio = () => 
<Page 
  title="Audio Work" 
  header="/audio.png" 
  theme={ThemeContext.Audio}
>{() =>
  <Card stacked level={2} middleStacked>
    <P large>I've often thought that if I hadn't gone into web design and development, that I'd have loved to be a musician. Here are some of my musical projects, and feel free to check out my live band <a href="https://facebook.com/fullbleedband">Full Bleed</a> on Facebook.</P>
    
    <Divider topWeighted weighted level={0} />

    <AudioProjectCards />
  </Card>
}
  

</Page>

export default Audio
