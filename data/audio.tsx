import ReactPlayer from 'react-player'

import {AudioItem} from '@alt/types'
import {PageProps} from '@alt/templates'
import {Medium, P, Card, Button} from '@alt/components'
import {ThemeContext} from '@alt/styles'

export const meta: Omit<PageProps, 'children'> = {
  header: (
    <P large>I've often thought that if I hadn't gone into web design and development, that I'd have loved to be a musician. Here are some of my musical projects, and feel free to check out my live band <a href="https://facebook.com/fullbleedband">Full Bleed</a> on Facebook.</P>
  ),
  theme: ThemeContext.Audio,
  title: 'Audio Work',
  headerImage: '/audio.png',
  kind: 'audio'
}

export const audio: AudioItem[] = [
  {
    title: 'Sodium Lights',
    subhead: 'Colormath',
    remoteUrl: 'https://colormath.bandcamp.com/releases',
    image: '/cm/card.png',
    url: '/audio/cm',
    columns: 6,
    id: 'cm',
    description: 'Goth-inspired shoegaze, with Carly Stambaugh',
    theme: ThemeContext.CM,
    header: (
      <>
        <P large>
          I'd never quite scratched the itch of writing music truly splitting the difference between shoegaze and goth/industrial. Colormath is my place to do that. While I write the bulk of the music, Carly plays synth and sings.
          </P>
        <P large primary>The lyrics, however, are written by Carly's robot.</P>
      </>
    ),
    body: (
      <Card divider middleStacked megaWeighted borderless inflated>
        <ReactPlayer url="https://vimeo.com/382257201" width={860} height={500} />
        <P>
          In making this video in Adobe Premiere, we had help from my daughter Anika for the video of me and the streetlights, as well as Carly's husband Kevin for the video of her.
        </P>
      </Card>
    ),
    logo: '/cm/cover.png'
  },
  {
    title: 'From The Middle Out',
    subhead: 'A Documentary Company',
    remoteUrl: 'https://vimeo.com/335533585',
    image: '/adc/card.png',
    url: '/audio/adc',
    theme: ThemeContext.ADC,
    columns: 6,
    id: 'adc',
    description: 'Soundtrack for short documentary by Joshua LaBure',
    header: (
      <P large>
        Long a fan of <Button inline borderless external large href="https://adocumentarycompany.com/films" target="_new">Joshua Labure's</Button> work, I reached out to him to see if he needed any music soon. Turns out, he did. I gave him nine minutes of original music, more than enough for this lovely doc.
      </P>
    ),
    body: (
      <Card divider middleStacked megaWeighted borderless inflated>
        <Button borderless external href="https://vimeo.com/335533585"><ReactPlayer url="https://vimeo.com/335533585" width={860} height={500} /></Button>
      </Card>
    ),
  },
  {
    title: 'States',
    theme: ThemeContext.ST,
    subhead: 'For the Earth was Empty of Form',
    remoteUrl: 'https://soundcloud.com/alternatekev/sets/states',
    image: '/fteweof/states.png',
    url: '/audio/st',
    columns: 3,
    id: 'st',
    description: 'Noisy/ambient post-rock, solo project',
    header: (
      <P large>
        Written and recorded in 2016, <Medium>States</Medium> was a meditation on loneliness, meaningless meaning found elsewhere, and a feeling of impending doom.
      </P>
    ),
    body: (
      <Card divider middleStacked megaWeighted borderless inflated>
        <ReactPlayer width={860} url="https://soundcloud.com/alternatekev/sets/states" />
      </Card>
    ),
  },
  {
    title: 'December',
    theme: ThemeContext.DEC,
    subhead: 'For the Earth was Empty of Form',
    remoteUrl: 'https://soundcloud.com/alternatekev/sets/december',
    image: '/fteweof/december.png',
    url: '/audio/dec',
    columns: 3,
    id: 'dec',
    description: 'Electronic post-rock, solo project',
    header: (
      <P large>
        Written and recorded in 2014, <strong>December</strong> was inspired by a trio of consecutive Decembers.
      </P>
    ),
    body: (
      <Card divider middleStacked megaWeighted borderless inflated>
        <ReactPlayer width={860} url="https://soundcloud.com/alternatekev/sets/december" />
      </Card>
    ),
  },
  {
    title: 'Morocco',
    theme: ThemeContext.MC,
    subhead: 'For the Earth was Empty of Form',
    remoteUrl: 'https://soundcloud.com/alternatekev/sets/morocco',
    image: '/fteweof/morocco.png',
    url: '/audio/mc',
    columns: 3,
    id: 'mc',
    description: 'Post-rock, solo project',
    header: (
      <P large>
        Written and recorded in 2014, <strong>Morocco</strong> was inspired by a trip to Morocco in 2012.
      </P>
    ),
    body: (
      <Card divider middleStacked megaWeighted borderless inflated>
        <ReactPlayer width={860} url={'https://soundcloud.com/alternatekev/sets/morocco'} />

      </Card>
    ),
  },
  {
    title: 'An Earthen Ocean',
    theme: ThemeContext.AEO,
    subhead: 'For the Earth was Empty of Form',
    remoteUrl: 'https://soundcloud.com/alternatekev/sets/an-earthen-ocean',
    image: '/fteweof/anearthenocean.png',
    url: '/audio/aeo',
    columns: 3,
    id: 'aeo',
    description: 'Post-rock, solo project',
    header: (
      <P large>
        Written and recorded in 2012, <strong>An Earthen Ocean</strong> was my first foray into self-produced (live) music on my laptop. Drawing heavily from post-rock influences, I'm still very proud of this album's ability to be abstract yet full of form.
      </P>
    ),
    body: (
      <Card divider middleStacked megaWeighted borderless inflated>
        <ReactPlayer width={860} url="https://soundcloud.com/alternatekev/sets/an-earthen-ocean" />
      </Card>
    ),
  },
]
