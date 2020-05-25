import ReactPlayer from 'react-player'
import {Page, Card, P} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {RelatedProjectCards, ProjectHeader} from '@alt/views'
import {audio} from '@alt/data'

const mc = audio.find(a => a.id === 'mc')

const Colormath = () =>
  <Page
    title="For the Earth was Empty of Form: Morocco"
    header="/audio.png"
    compact
    theme={ThemeContext.MC}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <ProjectHeader logo={mc?.image} kind="audio" subhead={mc?.description}>
          <P large>
            Written and recorded in 2014, <strong>Morocco</strong> was inspired by a trip to Morocco in 2012.
          </P>
        </ProjectHeader>

        <Card divider middleStacked megaWeighted borderless inflated>
          <ReactPlayer width={860} url={mc?.remoteUrl} />

        </Card>
      </Card>
      <RelatedProjectCards pid="mc" kind="audio" />
    </>
    }
  </Page>

export default Colormath
