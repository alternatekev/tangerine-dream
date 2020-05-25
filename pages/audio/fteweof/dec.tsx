import ReactPlayer from 'react-player'
import {Page, Card, P} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {RelatedProjectCards, ProjectHeader} from '@alt/views'
import {audio} from '@alt/data'

const dec = audio.find(a => a.id === 'dec')

const Colormath = () =>
  <Page
    title="For the Earth was Empty of Form: December"
    header="/audio.png"
    compact
    theme={ThemeContext.DEC}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <ProjectHeader logo={dec?.image} kind="audio" subhead={dec?.description}>
          <P large>
            Written and recorded in 2014, <strong>December</strong> was inspired by a trio of consecutive Decembers.
          </P>
        </ProjectHeader>

        <Card divider middleStacked megaWeighted borderless inflated>
          <ReactPlayer width={860} url={dec?.remoteUrl} />

        </Card>
      </Card>
      <RelatedProjectCards pid="dec" kind="audio" />
    </>
    }
  </Page>

export default Colormath
