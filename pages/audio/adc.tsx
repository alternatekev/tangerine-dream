import ReactPlayer from 'react-player'
import { Page, Card, P, Button } from '@alt/components'
import { ThemeContext } from '@alt/styles'
import { RelatedProjectCards, ProjectHeader } from '@alt/views'
import { audio } from '@alt/data'

const cm = audio.find(a => a.id === 'adc')

const Colormath = () =>
  <Page
    title="A Documentary Company: From The Middle Out"
    header="/audio.png"
    compact
    theme={ThemeContext.ADC}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <ProjectHeader url="https://vimeo.com/335533585" subhead={cm?.description}>
          <P large>
              Long a fan of <Button inline borderless href="https://adocumentarycompany.com/films" target="_new">Joshua Labure's</Button> work, I reached out to him to see if he needed any music soon. Turns out, he did. I gave him nine minutes of original music, more than enough for this lovely doc.
          </P>
        </ProjectHeader>

        <Card divider middleStacked megaWeighted borderless inflated>
          <ReactPlayer url={cm?.remoteUrl} width={860} height={500} />
        </Card>
      </Card>
      <RelatedProjectCards pid="ca" kind="audio" />
    </>
    }
  </Page>

export default Colormath
