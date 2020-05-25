import ReactPlayer from 'react-player'
import {Page, Card, P} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {RelatedProjectCards, ProjectHeader} from '@alt/views'
import {audio} from '@alt/data'

const cm = audio.find(a => a.id === 'cm')

const Colormath = () =>
  <Page
    title="Colormath: Sodium Lights"
    header="/audio.png"
    compact
    theme={ThemeContext.CM}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <ProjectHeader kind="audio" url="https://colormath.bandcamp.com/releases" subhead={cm?.description}>
          <P large>
            I'd never quite scratched the itch of writing music truly splitting the difference between shoegaze and goth/industrial. Colormath is my place to do that. While I write the bulk of the music, Carly plays synth and sings.
          </P>
          <P large primary>The lyrics, however, are written by Carly's robot.</P>
        </ProjectHeader>

        <Card divider middleStacked megaWeighted borderless inflated>
            <ReactPlayer url={cm?.remoteUrl} width={860} height={500} />
          <P>
            In making this video in Adobe Premiere, we had help from my daughter Anika for the video of me and the streetlights, as well as Carly's husband Kevin for the video of her.
          </P>
        </Card>
      </Card>
      <RelatedProjectCards pid="cm" kind="audio" />
    </>
    }
  </Page>

export default Colormath
