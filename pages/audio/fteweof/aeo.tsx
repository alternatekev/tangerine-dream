import ReactPlayer from 'react-player'
import { Page, Card, P } from '@alt/components'
import { ThemeContext } from '@alt/styles'
import { RelatedProjectCards, ProjectHeader } from '@alt/views'
import { audio } from '@alt/data'

const aeo = audio.find(a => a.id === 'aeo')

const Colormath = () =>
  <Page
    title="For the Earth was Empty of Form: An Earthen Ocean"
    header="/audio.png"
    compact
    theme={ThemeContext.AEO}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <ProjectHeader logo={aeo?.image} kind="audio" subhead={aeo?.description}>
          <P large>
            Written and recorded in 2012, <strong>An Earthen Ocean</strong> was my first foray into self-produced (live) music on my laptop. Drawing heavily from post-rock influences, I'm still very proud of this album's ability to be abstract yet full of form.
          </P>
        </ProjectHeader>

        <Card divider middleStacked megaWeighted borderless inflated>
          <ReactPlayer width={860} url={aeo?.remoteUrl} />

        </Card>
      </Card>
      <RelatedProjectCards pid="aeo" kind="audio" />
    </>
    }
  </Page>

export default Colormath
