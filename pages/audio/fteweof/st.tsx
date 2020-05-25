import ReactPlayer from 'react-player'
import { Page, Card, P, Medium } from '@alt/components'
import { ThemeContext } from '@alt/styles'
import { RelatedProjectCards, ProjectHeader } from '@alt/views'
import { audio } from '@alt/data'

const st = audio.find(a => a.id === 'st')

const Colormath = () =>
  <Page
    title="For the Earth was Empty of Form: States"
    header="/audio.png"
    compact
    theme={ThemeContext.ST}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <ProjectHeader logo={st?.image} kind="audio" subhead={st?.description}>
          <P large>
            Written and recorded in 2016, <Medium>States</Medium> was a meditation on loneliness, meaningless meaning found elsewhere, and a feeling of impending doom.
          </P>
        </ProjectHeader>

        <Card divider middleStacked megaWeighted borderless inflated>
          <ReactPlayer width={860} url={st?.remoteUrl} />
         
        </Card>
      </Card>
      <RelatedProjectCards pid="st" kind="audio" />
    </>
    }
  </Page>

export default Colormath
